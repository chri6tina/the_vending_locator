const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Google Maps Scraper for Vending Companies
 * 
 * This script uses a more direct approach to find companies:
 * 1. Constructs Google Maps search URLs
 * 2. Uses Puppeteer/Playwright for browser automation (if available)
 * 3. Extracts company data from search results
 * 4. Validates and structures the data
 * 
 * Alternative: Use this to generate search URLs that can be manually reviewed
 */

// Major cities
const MAJOR_CITIES = [
  { city: 'Austin', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Houston', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Dallas', state: 'Texas', stateAbbr: 'TX' },
  { city: 'San Antonio', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ' },
  { city: 'Los Angeles', state: 'California', stateAbbr: 'CA' },
  { city: 'San Diego', state: 'California', stateAbbr: 'CA' },
  { city: 'San Francisco', state: 'California', stateAbbr: 'CA' },
  { city: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'New York', state: 'New York', stateAbbr: 'NY' },
  { city: 'Miami', state: 'Florida', stateAbbr: 'FL' },
  { city: 'Orlando', state: 'Florida', stateAbbr: 'FL' },
  { city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL' },
  { city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA' },
  { city: 'Seattle', state: 'Washington', stateAbbr: 'WA' },
  { city: 'Denver', state: 'Colorado', stateAbbr: 'CO' },
  { city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA' },
  { city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA' },
  { city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV' },
  { city: 'Portland', state: 'Oregon', stateAbbr: 'OR' }
];

/**
 * Generate Google Maps search URLs for manual review
 */
function generateSearchUrls(cities) {
  const urls = [];
  
  cities.forEach(({ city, state, stateAbbr }) => {
    const queries = [
      `vending machine companies ${city} ${stateAbbr}`,
      `vending services ${city} ${stateAbbr}`,
      `office vending ${city} ${stateAbbr}`,
      `break room vending ${city} ${stateAbbr}`
    ];
    
    queries.forEach(query => {
      const encodedQuery = encodeURIComponent(query);
      const url = `https://www.google.com/maps/search/${encodedQuery}`;
      urls.push({
        city,
        state,
        stateAbbr,
        query,
        url
      });
    });
  });
  
  return urls;
}

/**
 * Generate a research HTML file with clickable links
 */
function generateResearchPage(cities) {
  const urls = generateSearchUrls(cities);
  
  let html = `<!DOCTYPE html>
<html>
<head>
  <title>Vending Companies Research Links</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
    .city-section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .city-header { font-size: 24px; font-weight: bold; color: #1a73e8; margin-bottom: 15px; }
    .query-link { display: block; padding: 10px; margin: 5px 0; background: #f8f9fa; border-left: 4px solid #1a73e8; text-decoration: none; color: #333; border-radius: 4px; }
    .query-link:hover { background: #e8f0fe; }
    .query-text { font-weight: bold; color: #1a73e8; }
  </style>
</head>
<body>
  <h1>🔍 Vending Companies Research Links</h1>
  <p>Click the links below to search Google Maps for vending companies in each city.</p>
  <p><strong>Instructions:</strong> Open each link, review the results, and collect company information.</p>
  
`;
  
  // Group by city
  const citiesMap = new Map();
  urls.forEach(item => {
    if (!citiesMap.has(item.city)) {
      citiesMap.set(item.city, []);
    }
    citiesMap.get(item.city).push(item);
  });
  
  citiesMap.forEach((items, city) => {
    const { state, stateAbbr } = items[0];
    html += `  <div class="city-section">
    <div class="city-header">${city}, ${stateAbbr}</div>
`;
    
    items.forEach(item => {
      html += `    <a href="${item.url}" target="_blank" class="query-link">
      <span class="query-text">${item.query}</span>
      <br><small>${item.url}</small>
    </a>
`;
    });
    
    html += `  </div>
`;
  });
  
  html += `</body>
</html>`;
  
  return html;
}

/**
 * Use Puppeteer to scrape Google Maps (if available)
 */
async function scrapeWithPuppeteer(searchUrl) {
  try {
    // Check if puppeteer is available
    const puppeteer = require('puppeteer');
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(searchUrl, { waitUntil: 'networkidle2' });
    
    // Extract company data from Google Maps
    const companies = await page.evaluate(() => {
      const results = [];
      const elements = document.querySelectorAll('[data-value="Directions"]');
      
      elements.forEach(el => {
        const nameEl = el.closest('[data-value]')?.querySelector('[data-value="Directions"]')?.parentElement;
        if (nameEl) {
          const name = nameEl.textContent?.trim();
          // Extract more data here
          if (name) {
            results.push({ name });
          }
        }
      });
      
      return results;
    });
    
    await browser.close();
    return companies;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('   ⚠️  Puppeteer not installed. Install with: npm install puppeteer');
    }
    return [];
  }
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'urls') {
    // Generate search URLs
    const html = generateResearchPage(MAJOR_CITIES);
    const outputPath = path.join(__dirname, '..', 'vending_companies_research_links.html');
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`✅ Research page generated: ${outputPath}`);
    console.log(`\n📋 Open this HTML file in your browser to access all search links.`);
    
  } else if (command === 'scrape') {
    // Attempt to scrape (requires Puppeteer)
    const city = args[1] || 'Austin';
    const state = args[2] || 'Texas';
    const stateAbbr = args[3] || 'TX';
    
    const query = `vending machine companies ${city} ${stateAbbr}`;
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    
    console.log(`🔍 Scraping: ${searchUrl}`);
    scrapeWithPuppeteer(searchUrl).then(companies => {
      console.log(`✅ Found ${companies.length} companies`);
      console.log(JSON.stringify(companies, null, 2));
    });
    
  } else {
    console.log('📋 Google Maps Scraper for Vending Companies\n');
    console.log('Usage:');
    console.log('  node scripts/scrape_google_maps_companies.js urls');
    console.log('    - Generate HTML page with Google Maps search links\n');
    console.log('  node scripts/scrape_google_maps_companies.js scrape [city] [state] [stateAbbr]');
    console.log('    - Scrape Google Maps (requires Puppeteer)\n');
    console.log('\n💡 Recommended approach:');
    console.log('   1. Run "urls" to generate research page');
    console.log('   2. Open HTML file and click links');
    console.log('   3. Manually collect company data from Google Maps');
    console.log('   4. Or install Puppeteer for automated scraping');
  }
}

if (require.main === module) {
  main();
}

module.exports = { generateSearchUrls, generateResearchPage, scrapeWithPuppeteer };
