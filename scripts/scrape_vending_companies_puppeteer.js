const fs = require('fs');
const path = require('path');

/**
 * Puppeteer-based Vending Companies Scraper
 * 
 * Uses headless browser to bypass bot detection and collect real company data
 */

let puppeteer = null;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  console.log('⚠️  Puppeteer not installed. Install with: npm install puppeteer');
}

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
 * Scrape Google Maps using Puppeteer
 */
async function scrapeGoogleMaps(browser, city, state, stateAbbr) {
  const page = await browser.newPage();
  
  // Set realistic viewport and user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  const query = `vending machine companies ${city} ${stateAbbr}`;
  const url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
  
  try {
    console.log(`   🌐 Loading Google Maps: ${query}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for results to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Extract company data
    const companies = await page.evaluate(() => {
      const results = [];
      
      // Google Maps result selectors (may need adjustment based on current structure)
      const resultElements = document.querySelectorAll('[data-value="Directions"], [role="article"]');
      
      resultElements.forEach((element, index) => {
        if (index >= 10) return; // Limit to 10 results
        
        try {
          // Extract business name
          const nameEl = element.querySelector('h3, [data-value="Directions"]')?.closest('div')?.querySelector('div[role="button"]');
          const name = nameEl?.textContent?.trim();
          
          // Extract address
          const addressEl = element.querySelector('[data-item-id="address"]');
          const address = addressEl?.textContent?.trim();
          
          // Extract phone
          const phoneEl = element.querySelector('[data-item-id^="phone"], [data-item-id="phone:tel"]');
          const phone = phoneEl?.textContent?.trim();
          
          // Extract website
          const websiteEl = element.querySelector('[data-item-id="authority"]');
          const website = websiteEl?.getAttribute('href') || websiteEl?.textContent?.trim();
          
          // Extract rating
          const ratingEl = element.querySelector('[aria-label*="star"]');
          const ratingText = ratingEl?.getAttribute('aria-label');
          const rating = ratingText ? parseFloat(ratingText.match(/(\d+\.?\d*)/)?.[1]) : null;
          
          // Extract review count
          const reviewEl = element.querySelector('span:contains("review")');
          const reviewText = reviewEl?.textContent;
          const reviewCount = reviewText ? parseInt(reviewText.match(/(\d+)/)?.[1]) : null;
          
          if (name && name.length > 3) {
            results.push({
              name: name,
              address: address || '',
              phone: phone || '',
              website: website || '',
              rating: rating,
              reviewCount: reviewCount,
              source: 'Google Maps'
            });
          }
        } catch (error) {
          // Skip this element if extraction fails
        }
      });
      
      return results;
    });
    
    await page.close();
    return companies;
    
  } catch (error) {
    await page.close();
    console.error(`   ❌ Google Maps scrape failed: ${error.message}`);
    return [];
  }
}

/**
 * Scrape Yellow Pages using Puppeteer
 */
async function scrapeYellowPages(browser, city, stateAbbr) {
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  
  const url = `https://www.yellowpages.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}/vending-machine-companies`;
  
  try {
    console.log(`   📞 Loading Yellow Pages...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const companies = await page.evaluate(() => {
      const results = [];
      const businessCards = document.querySelectorAll('.business-name, .result');
      
      businessCards.forEach((card, index) => {
        if (index >= 10) return;
        
        try {
          const nameEl = card.querySelector('.business-name a, h2 a');
          const name = nameEl?.textContent?.trim();
          
          const phoneEl = card.querySelector('.phones');
          const phone = phoneEl?.textContent?.trim();
          
          const addressEl = card.querySelector('.adr, .street-address');
          const address = addressEl?.textContent?.trim();
          
          const websiteEl = card.querySelector('.track-visit-website, .website');
          const website = websiteEl?.getAttribute('href') || '';
          
          if (name && name.toLowerCase().includes('vending')) {
            results.push({
              name: name,
              address: address || '',
              phone: phone || '',
              website: website || '',
              source: 'Yellow Pages'
            });
          }
        } catch (error) {
          // Skip
        }
      });
      
      return results;
    });
    
    await page.close();
    return companies;
    
  } catch (error) {
    await page.close();
    console.error(`   ❌ Yellow Pages scrape failed: ${error.message}`);
    return [];
  }
}

/**
 * Enrich and structure company data
 */
function enrichCompany(company, city, state, stateAbbr) {
  const name = company.name.trim();
  const nameLower = name.toLowerCase();
  
  // Infer services
  const services = [];
  if (nameLower.includes('snack') || nameLower.includes('food')) services.push('Snack Machines');
  if (nameLower.includes('beverage') || nameLower.includes('drink')) services.push('Beverage Machines');
  if (nameLower.includes('coffee')) services.push('Coffee Service');
  if (nameLower.includes('office') || nameLower.includes('break')) services.push('Break Room Solutions');
  if (services.length === 0) {
    services.push('Snack Machines', 'Beverage Machines', 'Vending Services');
  }
  
  // Infer machine types
  const machineTypes = [];
  if (services.includes('Snack Machines')) machineTypes.push('Snack Vending Machines');
  if (services.includes('Beverage Machines')) machineTypes.push('Beverage Vending Machines');
  if (services.includes('Coffee Service')) machineTypes.push('Coffee Machines');
  if (machineTypes.length === 0) {
    machineTypes.push('Snack Vending Machines', 'Beverage Vending Machines');
  }
  
  // Service area
  const serviceArea = [city];
  if (city === 'Austin') serviceArea.push('Round Rock', 'Cedar Park', 'Pflugerville');
  if (city === 'Houston') serviceArea.push('Sugar Land', 'The Woodlands', 'Pearland');
  if (city === 'Dallas') serviceArea.push('Fort Worth', 'Plano', 'Irving');
  if (city === 'Los Angeles') serviceArea.push('Beverly Hills', 'Santa Monica', 'Pasadena');
  if (city === 'San Francisco') serviceArea.push('Oakland', 'San Jose', 'Berkeley');
  if (city === 'Chicago') serviceArea.push('Naperville', 'Aurora', 'Evanston');
  if (city === 'New York') serviceArea.push('Brooklyn', 'Queens', 'Bronx');
  if (city === 'Miami') serviceArea.push('Fort Lauderdale', 'West Palm Beach', 'Hollywood');
  
  return {
    name: name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 50) + `-${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}`,
    city: city,
    state: state,
    stateAbbr: stateAbbr,
    address: company.address || '',
    phone: company.phone || '',
    website: company.website || '',
    email: '',
    description: `${name} provides professional vending services in ${city}, ${stateAbbr}.`,
    services: services,
    serviceArea: serviceArea,
    machineTypes: machineTypes,
    verified: false,
    verifiedDate: '',
    verifiedBy: '',
    source: company.source || 'Unknown',
    rating: company.rating || null,
    reviewCount: company.reviewCount || null,
    yearsInBusiness: null,
    specialties: [],
    revenueShare: '',
    minimumCommitment: '',
    notes: `Found via ${company.source}. Needs manual verification.`
  };
}

/**
 * Main collection function
 */
async function collectWithPuppeteer(cities = null, outputPath = null) {
  if (!puppeteer) {
    console.error('❌ Puppeteer is required for this script.');
    console.log('   Install with: npm install puppeteer');
    process.exit(1);
  }
  
  const targetCities = cities || MAJOR_CITIES.slice(0, 5);
  const outputFile = outputPath || path.join(__dirname, '..', 'data', 'vending_companies_scraped.json');
  
  console.log('🚀 Starting Puppeteer-based vending companies collection...\n');
  console.log(`📋 Target cities: ${targetCities.length}`);
  console.log(`💾 Output: ${outputFile}\n`);
  
  // Launch browser
  console.log('🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const allCompanies = [];
  const seenNames = new Set();
  
  try {
    for (let i = 0; i < targetCities.length; i++) {
      const { city, state, stateAbbr } = targetCities[i];
      console.log(`\n[${i + 1}/${targetCities.length}] ${city}, ${stateAbbr}`);
      
      // Search Google Maps
      try {
        const googleCompanies = await scrapeGoogleMaps(browser, city, state, stateAbbr);
        console.log(`   ✅ Found ${googleCompanies.length} companies on Google Maps`);
        
        googleCompanies.forEach(company => {
          const nameKey = company.name.toLowerCase();
          if (!seenNames.has(nameKey)) {
            const enriched = enrichCompany(company, city, state, stateAbbr);
            allCompanies.push(enriched);
            seenNames.add(nameKey);
          }
        });
      } catch (error) {
        console.log(`   ⚠️  Google Maps failed: ${error.message}`);
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Search Yellow Pages
      try {
        const ypCompanies = await scrapeYellowPages(browser, city, stateAbbr);
        console.log(`   ✅ Found ${ypCompanies.length} companies on Yellow Pages`);
        
        ypCompanies.forEach(company => {
          const nameKey = company.name.toLowerCase();
          if (!seenNames.has(nameKey)) {
            const enriched = enrichCompany(company, city, state, stateAbbr);
            allCompanies.push(enriched);
            seenNames.add(nameKey);
          }
        });
      } catch (error) {
        console.log(`   ⚠️  Yellow Pages failed: ${error.message}`);
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Progress
      if ((i + 1) % 3 === 0) {
        console.log(`\n📊 Progress: ${i + 1}/${targetCities.length} cities, ${allCompanies.length} total companies\n`);
      }
    }
  } finally {
    await browser.close();
  }
  
  // Save results
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputFile, JSON.stringify(allCompanies, null, 2), 'utf8');
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Collection Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Total companies found: ${allCompanies.length}`);
  console.log(`📁 Saved to: ${outputFile}`);
  console.log(`\n⚠️  IMPORTANT: All companies need manual verification!`);
  console.log(`   - Review each company`);
  console.log(`   - Verify contact information`);
  console.log(`   - Confirm services`);
  console.log(`   - Update verified status`);
  console.log(`\n🎉 Collection complete!`);
  
  return allCompanies;
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const cityCount = parseInt(args[0]) || 3;
  
  if (!puppeteer) {
    console.log('❌ Puppeteer not installed.');
    console.log('   Install with: npm install puppeteer');
    console.log('\n💡 Alternative: Use the HTML research page:');
    console.log('   node scripts/find_real_vending_companies.js generate');
    process.exit(1);
  }
  
  console.log('📋 Puppeteer Vending Companies Scraper\n');
  console.log(`Starting collection for top ${cityCount} cities...\n`);
  console.log('⚠️  This will take several minutes. Please be patient.\n');
  
  collectWithPuppeteer(MAJOR_CITIES.slice(0, cityCount));
}

module.exports = { collectWithPuppeteer, scrapeGoogleMaps, scrapeYellowPages };
