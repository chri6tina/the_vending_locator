const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

/**
 * Automated Vending Companies Data Collector
 * 
 * This script automatically finds and extracts real vending company data
 * Uses multiple free sources and web scraping techniques
 */

const axios = require('axios');
let cheerio = null;
try {
  cheerio = require('cheerio');
} catch (e) {
  console.log('⚠️  Cheerio not installed. Installing...');
  // Will need manual install: npm install cheerio
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
 * Extract companies from HTML using regex patterns (fallback if cheerio not available)
 */
function extractCompaniesFromHTML(html, source) {
  const companies = [];
  
  // Common patterns for business listings
  // This is a simplified extractor - would be more robust with cheerio
  
  // Try to find business names (common patterns)
  const namePatterns = [
    /<h3[^>]*>([^<]+(?:vending|Vending)[^<]*)<\/h3>/gi,
    /class="[^"]*business[^"]*name[^"]*"[^>]*>([^<]+)<\/[^>]*>/gi,
    /data-name="([^"]+)"/gi
  ];
  
  const names = new Set();
  namePatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      const name = match[1].trim();
      if (name.length > 3 && name.length < 100) {
        names.add(name);
      }
    }
  });
  
  names.forEach(name => {
    if (name.toLowerCase().includes('vending') || 
        name.toLowerCase().includes('snack') ||
        name.toLowerCase().includes('beverage')) {
      companies.push({
        name: name.trim(),
        source: source,
        verified: false
      });
    }
  });
  
  return companies;
}

/**
 * Search Yellow Pages (free, no API key needed)
 */
async function searchYellowPages(city, stateAbbr) {
  try {
    const url = `https://www.yellowpages.com/${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}/vending-machine-companies`;
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    });
    
    const companies = [];
    
    if (cheerio) {
      const $ = cheerio.load(response.data);
      
      $('.business-name').each((i, elem) => {
        const name = $(elem).text().trim();
        const link = $(elem).find('a').attr('href');
        
        if (name && name.toLowerCase().includes('vending')) {
          companies.push({
            name: name,
            source: 'Yellow Pages',
            url: link ? `https://www.yellowpages.com${link}` : null,
            verified: false
          });
        }
      });
    } else {
      // Fallback to regex extraction
      const extracted = extractCompaniesFromHTML(response.data, 'Yellow Pages');
      companies.push(...extracted);
    }
    
    return companies;
  } catch (error) {
    console.error(`   ❌ Yellow Pages search failed: ${error.message}`);
    return [];
  }
}

/**
 * Search Yelp (public search, no API key)
 */
async function searchYelp(city, state) {
  try {
    const query = `vending machine companies ${city} ${state}`;
    const url = `https://www.yelp.com/search?find_desc=vending+machine+companies&find_loc=${encodeURIComponent(city + ', ' + state)}`;
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    });
    
    const companies = [];
    
    if (cheerio) {
      const $ = cheerio.load(response.data);
      
      $('[data-testid="serp-ia-card"]').each((i, elem) => {
        const name = $(elem).find('h3').text().trim();
        const rating = $(elem).find('[aria-label*="star"]').attr('aria-label');
        const reviewCount = $(elem).find('span:contains("review")').text();
        
        if (name) {
          companies.push({
            name: name,
            source: 'Yelp',
            rating: rating ? parseFloat(rating.match(/(\d+\.?\d*)/)?.[1]) : null,
            reviewCount: reviewCount ? parseInt(reviewCount.match(/(\d+)/)?.[1]) : null,
            verified: false
          });
        }
      });
    } else {
      const extracted = extractCompaniesFromHTML(response.data, 'Yelp');
      companies.push(...extracted);
    }
    
    return companies;
  } catch (error) {
    console.error(`   ❌ Yelp search failed: ${error.message}`);
    return [];
  }
}

/**
 * Use DuckDuckGo Instant Answer API (free, no key)
 */
async function searchDuckDuckGo(city, state) {
  try {
    const query = `vending machine companies ${city} ${state}`;
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
    
    const response = await axios.get(url, { timeout: 5000 });
    
    // DuckDuckGo returns related topics which might include companies
    const companies = [];
    
    if (response.data.RelatedTopics) {
      response.data.RelatedTopics.forEach(topic => {
        if (topic.Text && topic.Text.toLowerCase().includes('vending')) {
          companies.push({
            name: topic.Text.split(' - ')[0].trim(),
            source: 'DuckDuckGo',
            verified: false
          });
        }
      });
    }
    
    return companies;
  } catch (error) {
    return [];
  }
}

/**
 * Enrich company data with inferred information
 */
function enrichCompany(company, city, state, stateAbbr) {
  const name = company.name;
  const nameLower = name.toLowerCase();
  
  // Infer services from company name
  const services = [];
  if (nameLower.includes('snack') || nameLower.includes('food')) {
    services.push('Snack Machines');
  }
  if (nameLower.includes('beverage') || nameLower.includes('drink') || nameLower.includes('soda')) {
    services.push('Beverage Machines');
  }
  if (nameLower.includes('coffee')) {
    services.push('Coffee Service');
  }
  if (nameLower.includes('office') || nameLower.includes('break')) {
    services.push('Break Room Solutions');
  }
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
  
  // Generate service area
  const serviceArea = [city];
  if (city === 'Austin') serviceArea.push('Round Rock', 'Cedar Park');
  if (city === 'Houston') serviceArea.push('Sugar Land', 'The Woodlands');
  if (city === 'Dallas') serviceArea.push('Fort Worth', 'Plano');
  
  return {
    name: name.trim(),
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 50) + `-${city.toLowerCase().replace(/\s+/g, '-')}-${stateAbbr.toLowerCase()}`,
    city: city,
    state: state,
    stateAbbr: stateAbbr,
    address: company.address || '',
    phone: company.phone || '',
    website: company.url || company.website || '',
    email: company.email || '',
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
 * Search all sources for a city
 */
async function searchAllSources(city, state, stateAbbr) {
  console.log(`\n🔍 Searching for companies in ${city}, ${stateAbbr}...`);
  
  const allCompanies = [];
  const seenNames = new Set();
  
  // Search Yellow Pages
  try {
    console.log(`   📞 Searching Yellow Pages...`);
    const ypCompanies = await searchYellowPages(city, stateAbbr);
    console.log(`   ✅ Found ${ypCompanies.length} companies on Yellow Pages`);
    
    ypCompanies.forEach(company => {
      if (!seenNames.has(company.name.toLowerCase())) {
        const enriched = enrichCompany(company, city, state, stateAbbr);
        allCompanies.push(enriched);
        seenNames.add(company.name.toLowerCase());
      }
    });
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.log(`   ⚠️  Yellow Pages search failed: ${error.message}`);
  }
  
  // Search Yelp
  try {
    console.log(`   ⭐ Searching Yelp...`);
    const yelpCompanies = await searchYelp(city, state);
    console.log(`   ✅ Found ${yelpCompanies.length} companies on Yelp`);
    
    yelpCompanies.forEach(company => {
      if (!seenNames.has(company.name.toLowerCase())) {
        const enriched = enrichCompany(company, city, state, stateAbbr);
        allCompanies.push(enriched);
        seenNames.add(company.name.toLowerCase());
      }
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.log(`   ⚠️  Yelp search failed: ${error.message}`);
  }
  
  // Search DuckDuckGo
  try {
    const ddgCompanies = await searchDuckDuckGo(city, state);
    if (ddgCompanies.length > 0) {
      ddgCompanies.forEach(company => {
        if (!seenNames.has(company.name.toLowerCase())) {
          const enriched = enrichCompany(company, city, state, stateAbbr);
          allCompanies.push(enriched);
          seenNames.add(company.name.toLowerCase());
        }
      });
    }
  } catch (error) {
    // Silent fail for DuckDuckGo
  }
  
  return allCompanies;
}

/**
 * Main collection function
 */
async function collectCompanies(cities = null, outputPath = null) {
  const targetCities = cities || MAJOR_CITIES.slice(0, 5); // Start with 5 cities
  const outputFile = outputPath || path.join(__dirname, '..', 'data', 'vending_companies_auto_collected.json');
  
  console.log('🚀 Starting automated vending companies collection...\n');
  console.log(`📋 Target cities: ${targetCities.length}`);
  console.log(`💾 Output: ${outputFile}\n`);
  
  if (!cheerio) {
    console.log('⚠️  WARNING: Cheerio not installed. HTML parsing will be limited.');
    console.log('   Install with: npm install cheerio');
    console.log('   Continuing with basic extraction...\n');
  }
  
  const allCompanies = [];
  
  for (let i = 0; i < targetCities.length; i++) {
    const { city, state, stateAbbr } = targetCities[i];
    console.log(`[${i + 1}/${targetCities.length}] ${city}, ${stateAbbr}`);
    
    try {
      const companies = await searchAllSources(city, state, stateAbbr);
      
      if (companies.length > 0) {
        console.log(`   ✅ Collected ${companies.length} companies for ${city}`);
        allCompanies.push(...companies);
      } else {
        console.log(`   ⚠️  No companies found`);
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
    }
    
    // Progress update
    if ((i + 1) % 3 === 0) {
      console.log(`\n📊 Progress: ${i + 1}/${targetCities.length} cities, ${allCompanies.length} total companies\n`);
    }
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
  console.log(`\n🎉 Automated collection complete!`);
  
  return allCompanies;
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const cityCount = parseInt(args[0]) || 5;
  
  console.log('📋 Automated Vending Companies Collector\n');
  console.log(`Starting collection for top ${cityCount} cities...\n`);
  
  collectCompanies(MAJOR_CITIES.slice(0, cityCount));
}

module.exports = { collectCompanies, searchAllSources, enrichCompany };
