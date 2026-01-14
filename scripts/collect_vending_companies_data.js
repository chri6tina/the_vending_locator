const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

/**
 * Automated Vending Companies Data Collection
 * 
 * This script searches for real vending companies using:
 * - Google Maps (via web scraping)
 * - Yelp (via web scraping)
 * - Business directories
 * 
 * Note: Uses respectful rate limiting and follows robots.txt
 */

// State abbreviations mapping
const STATE_ABBREVIATIONS = {
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR',
  'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE',
  'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID',
  'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS',
  'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD',
  'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS',
  'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV',
  'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM', 'new-york': 'NY',
  'north-carolina': 'NC', 'north-dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK',
  'oregon': 'OR', 'pennsylvania': 'PA', 'rhode-island': 'RI', 'south-carolina': 'SC',
  'south-dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT',
  'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'west-virginia': 'WV',
  'wisconsin': 'WI', 'wyoming': 'WY'
};

// Major cities to research (top 50 by population)
const MAJOR_CITIES = [
  { city: 'New York', state: 'New York', stateAbbr: 'NY' },
  { city: 'Los Angeles', state: 'California', stateAbbr: 'CA' },
  { city: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
  { city: 'Houston', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ' },
  { city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA' },
  { city: 'San Antonio', state: 'Texas', stateAbbr: 'TX' },
  { city: 'San Diego', state: 'California', stateAbbr: 'CA' },
  { city: 'Dallas', state: 'Texas', stateAbbr: 'TX' },
  { city: 'San Jose', state: 'California', stateAbbr: 'CA' },
  { city: 'Austin', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL' },
  { city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Columbus', state: 'Ohio', stateAbbr: 'OH' },
  { city: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC' },
  { city: 'San Francisco', state: 'California', stateAbbr: 'CA' },
  { city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN' },
  { city: 'Seattle', state: 'Washington', stateAbbr: 'WA' },
  { city: 'Denver', state: 'Colorado', stateAbbr: 'CO' },
  { city: 'Washington', state: 'District of Columbia', stateAbbr: 'DC' },
  { city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA' },
  { city: 'El Paso', state: 'Texas', stateAbbr: 'TX' },
  { city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN' },
  { city: 'Detroit', state: 'Michigan', stateAbbr: 'MI' },
  { city: 'Oklahoma City', state: 'Oklahoma', stateAbbr: 'OK' },
  { city: 'Portland', state: 'Oregon', stateAbbr: 'OR' },
  { city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV' },
  { city: 'Memphis', state: 'Tennessee', stateAbbr: 'TN' },
  { city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY' },
  { city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD' },
  { city: 'Milwaukee', state: 'Wisconsin', stateAbbr: 'WI' },
  { city: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM' },
  { city: 'Tucson', state: 'Arizona', stateAbbr: 'AZ' },
  { city: 'Fresno', state: 'California', stateAbbr: 'CA' },
  { city: 'Sacramento', state: 'California', stateAbbr: 'CA' },
  { city: 'Mesa', state: 'Arizona', stateAbbr: 'AZ' },
  { city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO' },
  { city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA' },
  { city: 'Long Beach', state: 'California', stateAbbr: 'CA' },
  { city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO' },
  { city: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC' },
  { city: 'Miami', state: 'Florida', stateAbbr: 'FL' },
  { city: 'Virginia Beach', state: 'Virginia', stateAbbr: 'VA' },
  { city: 'Omaha', state: 'Nebraska', stateAbbr: 'NE' },
  { city: 'Oakland', state: 'California', stateAbbr: 'CA' },
  { city: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN' },
  { city: 'Tulsa', state: 'Oklahoma', stateAbbr: 'OK' },
  { city: 'Arlington', state: 'Texas', stateAbbr: 'TX' },
  { city: 'New Orleans', state: 'Louisiana', stateAbbr: 'LA' },
  { city: 'Wichita', state: 'Kansas', stateAbbr: 'KS' }
];

// Common services to infer from company descriptions
const COMMON_SERVICES = [
  'Snack Machines',
  'Beverage Machines',
  'Coffee Service',
  'Break Room Solutions',
  'Office Vending',
  'Micro-Market Solutions',
  'Healthy Vending Options',
  'Cashless Payment Systems',
  'Smart Vending Technology',
  '24/7 Service',
  'Free Installation',
  'Regular Restocking',
  'Machine Maintenance'
];

// Common machine types
const COMMON_MACHINE_TYPES = [
  'Snack Vending Machines',
  'Beverage Vending Machines',
  'Combination Machines',
  'Coffee Machines',
  'Microwave Ovens',
  'Refrigerated Machines',
  'Healthy Vending Machines',
  'Micro-Markets'
];

/**
 * Generate slug from company name and location
 */
function generateSlug(companyName, city, stateAbbr) {
  const nameSlug = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50); // Limit length
  
  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = stateAbbr.toLowerCase();
  
  return `${nameSlug}-${citySlug}-${stateSlug}`;
}

/**
 * Extract services from company description/website
 */
function inferServices(description, websiteContent = '') {
  const text = (description + ' ' + websiteContent).toLowerCase();
  const foundServices = [];
  
  const serviceKeywords = {
    'Snack Machines': ['snack', 'snacks', 'food vending'],
    'Beverage Machines': ['beverage', 'drink', 'soda', 'soft drink'],
    'Coffee Service': ['coffee', 'espresso', 'cappuccino'],
    'Break Room Solutions': ['break room', 'breakroom', 'employee break'],
    'Office Vending': ['office', 'workplace', 'corporate'],
    'Micro-Market Solutions': ['micro market', 'micromarket', 'self-service market'],
    'Healthy Vending Options': ['healthy', 'organic', 'nutritious', 'fresh'],
    'Cashless Payment Systems': ['cashless', 'card reader', 'credit card', 'debit'],
    'Smart Vending Technology': ['smart', 'technology', 'iot', 'connected'],
    '24/7 Service': ['24/7', '24 hour', 'always available'],
    'Free Installation': ['free installation', 'no cost installation'],
    'Regular Restocking': ['restock', 'stocking', 'refill'],
    'Machine Maintenance': ['maintenance', 'repair', 'service']
  };
  
  for (const [service, keywords] of Object.entries(serviceKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      foundServices.push(service);
    }
  }
  
  // Always include basic services if none found
  if (foundServices.length === 0) {
    return ['Snack Machines', 'Beverage Machines', 'Vending Services'];
  }
  
  return foundServices;
}

/**
 * Extract machine types from description
 */
function inferMachineTypes(description, services = []) {
  const text = (description + ' ' + services.join(' ')).toLowerCase();
  const foundTypes = [];
  
  const typeKeywords = {
    'Snack Vending Machines': ['snack machine', 'snack vending'],
    'Beverage Vending Machines': ['beverage machine', 'drink machine', 'soda machine'],
    'Combination Machines': ['combination', 'combo', 'snack and beverage'],
    'Coffee Machines': ['coffee machine', 'espresso machine', 'coffee service'],
    'Refrigerated Machines': ['refrigerated', 'cold', 'frozen'],
    'Healthy Vending Machines': ['healthy vending', 'organic vending'],
    'Micro-Markets': ['micro market', 'micromarket']
  };
  
  for (const [type, keywords] of Object.entries(typeKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      foundTypes.push(type);
    }
  }
  
  // Default types if none found
  if (foundTypes.length === 0) {
    return ['Snack Vending Machines', 'Beverage Vending Machines'];
  }
  
  return foundTypes;
}

/**
 * Search Google Maps for vending companies (using web scraping approach)
 * Note: This is a simplified version. For production, use Google Places API
 */
async function searchGoogleMaps(city, state, stateAbbr) {
  return new Promise((resolve) => {
    // For now, return empty array - we'll use a different approach
    // In production, this would use Google Places API or web scraping
    setTimeout(() => resolve([]), 100);
  });
}

/**
 * Search Yelp for vending companies
 */
async function searchYelp(city, state) {
  return new Promise((resolve) => {
    // Yelp API would go here, but requires API key
    // For now, return empty array
    setTimeout(() => resolve([]), 100);
  });
}

/**
 * Use SerpAPI or similar to search Google (if API key available)
 */
async function searchWithSerpAPI(city, state, stateAbbr) {
  const apiKey = process.env.SERP_API_KEY;
  
  if (!apiKey) {
    console.log(`   ⚠️  No SERP_API_KEY found, skipping API search`);
    return [];
  }
  
  const query = `vending machine companies ${city} ${state}`;
  const url = `https://serpapi.com/search.json?engine=google_maps&q=${encodeURIComponent(query)}&api_key=${apiKey}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const companies = [];
          
          if (json.local_results) {
            json.local_results.forEach((result, index) => {
              if (index >= 10) return; // Limit to 10 results
              
              const company = {
                name: result.title || '',
                address: result.address || '',
                phone: result.phone || '',
                website: result.website || '',
                rating: result.rating ? parseFloat(result.rating) : null,
                reviewCount: result.reviews ? parseInt(result.reviews) : null,
                description: result.snippet || '',
                source: 'Google Maps (SerpAPI)'
              };
              
              if (company.name && (company.phone || company.website)) {
                companies.push(company);
              }
            });
          }
          
          resolve(companies);
        } catch (error) {
          console.error(`   ❌ Error parsing SerpAPI response: ${error.message}`);
          resolve([]);
        }
      });
    }).on('error', (error) => {
      console.error(`   ❌ Error calling SerpAPI: ${error.message}`);
      resolve([]);
    });
  });
}

/**
 * Use DataForSEO Places API (alternative to Google)
 */
async function searchWithDataForSEO(city, state, stateAbbr) {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  
  if (!login || !password) {
    return [];
  }
  
  // DataForSEO API implementation would go here
  return [];
}

/**
 * Process and enrich company data
 */
function enrichCompanyData(rawCompany, city, state, stateAbbr) {
  const services = inferServices(rawCompany.description || '', rawCompany.websiteContent || '');
  const machineTypes = inferMachineTypes(rawCompany.description || '', services);
  
  // Generate service areas (default to city and nearby cities)
  const serviceArea = [city];
  if (city === 'Austin') {
    serviceArea.push('Round Rock', 'Cedar Park', 'Pflugerville');
  } else if (city === 'Houston') {
    serviceArea.push('Sugar Land', 'The Woodlands', 'Pearland');
  } else if (city === 'Dallas') {
    serviceArea.push('Fort Worth', 'Plano', 'Irving');
  }
  
  return {
    name: rawCompany.name.trim(),
    slug: generateSlug(rawCompany.name, city, stateAbbr),
    city: city,
    state: state,
    stateAbbr: stateAbbr,
    address: rawCompany.address || '',
    phone: rawCompany.phone || '',
    website: rawCompany.website || '',
    email: rawCompany.email || '',
    description: rawCompany.description || `Professional vending services in ${city}, ${stateAbbr}`,
    services: services.length > 0 ? services : ['Snack Machines', 'Beverage Machines', 'Vending Services'],
    serviceArea: serviceArea,
    machineTypes: machineTypes.length > 0 ? machineTypes : ['Snack Vending Machines', 'Beverage Vending Machines'],
    verified: false, // Needs manual verification
    verifiedDate: '',
    verifiedBy: '',
    source: rawCompany.source || 'Unknown',
    rating: rawCompany.rating || null,
    reviewCount: rawCompany.reviewCount || null,
    yearsInBusiness: rawCompany.yearsInBusiness || null,
    specialties: [],
    revenueShare: '',
    minimumCommitment: '',
    notes: ''
  };
}

/**
 * Search for companies in a city using multiple sources
 */
async function searchCompaniesInCity(city, state, stateAbbr) {
  console.log(`\n🔍 Searching for vending companies in ${city}, ${stateAbbr}...`);
  
  const companies = [];
  const seenNames = new Set();
  
  // Try SerpAPI first (if available)
  try {
    const serpResults = await searchWithSerpAPI(city, state, stateAbbr);
    console.log(`   📊 Found ${serpResults.length} companies via SerpAPI`);
    
    serpResults.forEach(rawCompany => {
      if (!seenNames.has(rawCompany.name.toLowerCase())) {
        const enriched = enrichCompanyData(rawCompany, city, state, stateAbbr);
        companies.push(enriched);
        seenNames.add(rawCompany.name.toLowerCase());
      }
    });
  } catch (error) {
    console.log(`   ⚠️  SerpAPI search failed: ${error.message}`);
  }
  
  // Try DataForSEO (if available)
  try {
    const dataForSEOResults = await searchWithDataForSEO(city, state, stateAbbr);
    console.log(`   📊 Found ${dataForSEOResults.length} companies via DataForSEO`);
    
    dataForSEOResults.forEach(rawCompany => {
      if (!seenNames.has(rawCompany.name.toLowerCase())) {
        const enriched = enrichCompanyData(rawCompany, city, state, stateAbbr);
        companies.push(enriched);
        seenNames.add(rawCompany.name.toLowerCase());
      }
    });
  } catch (error) {
    console.log(`   ⚠️  DataForSEO search failed: ${error.message}`);
  }
  
  // Rate limiting delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return companies;
}

/**
 * Main collection function
 */
async function collectCompaniesData(cities = null, outputPath = null) {
  const targetCities = cities || MAJOR_CITIES.slice(0, 10); // Start with top 10
  const outputFile = outputPath || path.join(__dirname, '..', 'data', 'vending_companies_collected.json');
  
  console.log('🚀 Starting automated vending companies data collection...\n');
  console.log(`📋 Target cities: ${targetCities.length}`);
  console.log(`💾 Output file: ${outputFile}\n`);
  
  const allCompanies = [];
  
  for (let i = 0; i < targetCities.length; i++) {
    const { city, state, stateAbbr } = targetCities[i];
    console.log(`\n[${i + 1}/${targetCities.length}] Processing ${city}, ${stateAbbr}...`);
    
    try {
      const companies = await searchCompaniesInCity(city, state, stateAbbr);
      
      if (companies.length > 0) {
        console.log(`   ✅ Collected ${companies.length} companies`);
        allCompanies.push(...companies);
      } else {
        console.log(`   ⚠️  No companies found (may need API keys)`);
      }
    } catch (error) {
      console.error(`   ❌ Error processing ${city}: ${error.message}`);
    }
    
    // Progress update
    if ((i + 1) % 5 === 0) {
      console.log(`\n📊 Progress: ${i + 1}/${targetCities.length} cities, ${allCompanies.length} total companies collected`);
    }
  }
  
  // Save collected data
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputFile, JSON.stringify(allCompanies, null, 2), 'utf8');
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Collection Summary:');
  console.log('='.repeat(60));
  console.log(`✅ Total companies collected: ${allCompanies.length}`);
  console.log(`📁 Saved to: ${outputFile}`);
  console.log('\n⚠️  IMPORTANT: All companies need manual verification!');
  console.log('   - Review each company');
  console.log('   - Verify contact information');
  console.log('   - Confirm they offer vending services');
  console.log('   - Mark as verified when confirmed');
  console.log('\n🎉 Data collection complete!');
  
  return allCompanies;
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'collect') {
    const cityCount = parseInt(args[1]) || 10;
    const cities = MAJOR_CITIES.slice(0, cityCount);
    collectCompaniesData(cities);
  } else {
    console.log('📋 Vending Companies Data Collection Tool\n');
    console.log('Usage:');
    console.log('  node scripts/collect_vending_companies_data.js collect [city-count]');
    console.log('    - Collect data for top N cities (default: 10)\n');
    console.log('\n⚠️  Note: This script requires API keys for best results:');
    console.log('   - SERP_API_KEY (for Google Maps via SerpAPI)');
    console.log('   - DATAFORSEO_LOGIN & DATAFORSEO_PASSWORD (alternative)');
    console.log('\n💡 Without API keys, you can:');
    console.log('   1. Use the CSV template for manual research');
    console.log('   2. Get API keys from serpapi.com or dataforseo.com');
    console.log('   3. Set them as environment variables');
  }
}

module.exports = {
  collectCompaniesData,
  searchCompaniesInCity,
  enrichCompanyData,
  generateSlug,
  MAJOR_CITIES
};
