const fs = require('fs');
const path = require('path');

// Read states.ts to get all cities
const statesPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesPath, 'utf8');

// Extract cities from states.ts using regex
const stateRegex = /name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],\s*cities:\s*\[([\s\S]*?)\]/g;
const cityRegex = /\{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]\s*\}/g;

const allCities = [];
let stateMatch;

// Parse states and cities
while ((stateMatch = stateRegex.exec(statesContent)) !== null) {
  const stateName = stateMatch[1];
  const stateSlug = stateMatch[2];
  const citiesContent = stateMatch[3];
  
  let cityMatch;
  while ((cityMatch = cityRegex.exec(citiesContent)) !== null) {
    const cityName = cityMatch[1];
    const citySlug = cityMatch[2];
    
    allCities.push({
      name: cityName,
      slug: citySlug,
      state: stateName,
      stateSlug: stateSlug
    });
  }
}

console.log(`Found ${allCities.length} cities in states.ts`);

// Check which cities already have pages
const pagesDir = path.join(__dirname, '../src/app/_city-pages/vending-services');
const existingPages = new Set();

if (fs.existsSync(pagesDir)) {
  const dirs = fs.readdirSync(pagesDir, { withFileTypes: true });
  dirs.forEach(dirent => {
    if (dirent.isDirectory()) {
      existingPages.add(dirent.name);
    }
  });
}

console.log(`Found ${existingPages.size} existing vending-services pages`);

// Find missing cities
const missingCities = allCities.filter(city => !existingPages.has(city.slug));

console.log(`\nFound ${missingCities.length} missing cities`);

if (missingCities.length === 0) {
  console.log('All cities already have pages!');
  process.exit(0);
}

// Read template files
const templatePageClientPath = path.join(__dirname, '../src/app/_city-pages/vending-services/miami-florida/pageClient.tsx');
const templatePagePath = path.join(__dirname, '../src/app/_city-pages/vending-services/miami-florida/page.tsx');

if (!fs.existsSync(templatePageClientPath) || !fs.existsSync(templatePagePath)) {
  console.error('Template files not found!');
  process.exit(1);
}

const templatePageClient = fs.readFileSync(templatePageClientPath, 'utf8');
const templatePage = fs.readFileSync(templatePagePath, 'utf8');

// Helper function to get state abbreviation
function getStateAbbrev(stateName) {
  const abbrevs = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
    'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
    'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
    'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO',
    'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
    'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
    'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
    'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
    'Virginia': 'VA', 'Washington': 'WA', 'Washington DC': 'DC', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY'
  };
  return abbrevs[stateName] || stateName.substring(0, 2).toUpperCase();
}

// Helper function to generate component name
function getComponentName(cityName, stateName) {
  const cityPart = cityName.replace(/[^a-zA-Z0-9]/g, '');
  const statePart = stateName.replace(/[^a-zA-Z0-9]/g, '');
  return `${cityPart}${statePart}VendingServicesPage`;
}

// Helper function to escape apostrophes
function escapeApostrophes(text) {
  return text.replace(/'/g, "\\'");
}

// Helper function to generate city-specific feature
function getCityFeature(cityName, stateName) {
  // Generic features based on city size/type
  const features = [
    'local businesses and corporate offices',
    'businesses and professional services',
    'corporate offices and commercial facilities',
    'local businesses and commercial properties',
    'businesses and office complexes',
    'corporate centers and commercial spaces',
    'local businesses and retail centers',
    'businesses and industrial facilities'
  ];
  
  // Use city name hash to pick a feature consistently
  const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return features[hash % features.length];
}

// Create pages for missing cities
let created = 0;
let skipped = 0;

for (const city of missingCities) {
  try {
    const cityDir = path.join(pagesDir, city.slug);
    
    // Skip if directory already exists
    if (fs.existsSync(cityDir)) {
      console.log(`⚠ Skipping ${city.slug} - directory already exists`);
      skipped++;
      continue;
    }
    
    // Create directory
    fs.mkdirSync(cityDir, { recursive: true });
    
    // Generate component name
    const componentName = getComponentName(city.name, city.state);
    const stateAbbrev = getStateAbbrev(city.state);
    const cityFeature = getCityFeature(city.name, city.state);
    
    // Generate pageClient.tsx
    // First replace component name - match any component name pattern
    let pageClientContent = templatePageClient.replace(
      /export default function \w+VendingServicesPage\(\)/g,
      `export default function ${componentName}()`
    );
    
    // Then replace city and state references
    pageClientContent = pageClientContent
      .replace(/const cityDisplayName = '[^']+';/g, `const cityDisplayName = '${escapeApostrophes(city.name)}';`)
      .replace(/const stateDisplayName = '[^']+'/g, `const stateDisplayName = '${escapeApostrophes(city.state)}'`)
      .replace(/Miami, Florida/g, `${city.name}, ${city.state}`)
      .replace(/Miami/g, city.name)
      .replace(/Florida/g, city.state)
      .replace(/FL/g, stateAbbrev)
      .replace(/\/vending-services\/florida/g, `/vending-services/${city.stateSlug}`)
      .replace(/international business and finance/g, cityFeature)
      .replace(/'s international business and finance/g, `'s ${cityFeature}`);
    
    // Generate page.tsx
    const pageComponentName = componentName.replace('VendingServicesPage', 'ServicesPage');
    let pageContent = templatePage
      .replace(/MiamiServicesPage/g, pageComponentName)
      .replace(/Miami, FL/g, `${city.name}, ${stateAbbrev}`)
      .replace(/Miami, Florida/g, `${city.name}, ${city.state}`)
      .replace(/miami-florida/g, city.slug)
      .replace(/Miami/g, city.name)
      .replace(/Florida/g, city.state);
    
    // Write files
    fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent);
    fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent);
    
    created++;
    if (created % 10 === 0) {
      console.log(`✓ Created ${created} pages...`);
    }
  } catch (error) {
    console.error(`✗ Error creating page for ${city.slug}:`, error.message);
  }
}

console.log(`\n✅ Created ${created} vending-services pages`);
if (skipped > 0) {
  console.log(`⚠ Skipped ${skipped} pages (already exist)`);
}

// Update vending-services-cities.ts
console.log('\nUpdating vending-services-cities.ts...');
const citiesDataPath = path.join(__dirname, '../src/data/vending-services-cities.ts');
let citiesDataContent = fs.readFileSync(citiesDataPath, 'utf8');

// Extract existing cities
const existingCitiesMatch = citiesDataContent.match(/export const vendingServicesCities = \{([\s\S]*?)\} as const;/);
const existingCitiesSet = new Set();

if (existingCitiesMatch) {
  const existingCitiesContent = existingCitiesMatch[1];
  const citySlugRegex = /"([^"]+)":\s*\{/g;
  let match;
  while ((match = citySlugRegex.exec(existingCitiesContent)) !== null) {
    existingCitiesSet.add(match[1]);
  }
}

// Add new cities to the data file
const newCities = missingCities.filter(city => !existingCitiesSet.has(city.slug));
if (newCities.length > 0) {
  let newCitiesEntries = '';
  for (const city of newCities) {
    if (!existingCitiesSet.has(city.slug)) {
      newCitiesEntries += `  "${city.slug}": {\n`;
      newCitiesEntries += `    "city": "${city.name}",\n`;
      newCitiesEntries += `    "state": "${city.state}",\n`;
      newCitiesEntries += `    "slug": "${city.slug}"\n`;
      newCitiesEntries += `  },\n`;
    }
  }
  
  // Insert before the closing brace
  citiesDataContent = citiesDataContent.replace(
    /(\} as const;)/,
    newCitiesEntries + '$1'
  );
  
  fs.writeFileSync(citiesDataPath, citiesDataContent);
  console.log(`✅ Added ${newCities.length} cities to vending-services-cities.ts`);
} else {
  console.log('ℹ No new cities to add to vending-services-cities.ts');
}

console.log('\n✨ Done!');
