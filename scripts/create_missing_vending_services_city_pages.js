const fs = require('fs');
const path = require('path');

// Read states data to get all cities
const statesDataPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesDataPath, 'utf8');

// Extract all cities from states.ts
const cityPattern = /{ name: '([^']+)', slug: '([^']+)' }/g;
let match;
const allCities = [];

while ((match = cityPattern.exec(statesContent)) !== null) {
  const cityName = match[1];
  const citySlug = match[2];
  
  // Extract state from slug (everything after the last hyphen)
  const slugParts = citySlug.split('-');
  let stateSlug = slugParts[slugParts.length - 1];
  
  // Handle special cases like washington-dc, new-york, etc.
  if (slugParts.length > 2) {
    // Check if it ends with a multi-word state
    const lastTwo = slugParts.slice(-2).join('-');
    const multiWordStates = ['new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'rhode-island', 'south-carolina', 'south-dakota', 'washington-dc', 'west-virginia'];
    
    if (multiWordStates.includes(lastTwo)) {
      stateSlug = lastTwo;
    }
  }
  
  allCities.push({ name: cityName, slug: citySlug, stateSlug: stateSlug });
}

// Find cities that don't have vending-services pages yet
const missingCities = allCities.filter(city => {
  const cityDir = path.join(__dirname, '../src/app/vending-services', city.slug);
  return !fs.existsSync(cityDir);
});

console.log(`Found ${missingCities.length} cities without vending-services pages`);

// Read the Boca Raton template
const bocaRatonPagePath = path.join(__dirname, '../src/app/vending-services/boca-raton-florida/page.tsx');
const bocaRatonPageClientPath = path.join(__dirname, '../src/app/vending-services/boca-raton-florida/pageClient.tsx');

const pageTemplate = fs.readFileSync(bocaRatonPagePath, 'utf8');
const pageClientTemplate = fs.readFileSync(bocaRatonPageClientPath, 'utf8');

// Function to generate component name from city name
function generateComponentName(cityName, stateName) {
  const cleanCityName = cityName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '');
  const cleanStateName = stateName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '');
  return cleanCityName + cleanStateName + 'VendingServicesPage';
}

// Function to generate function name from slug
function generateFunctionName(citySlug) {
  const pascalCase = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  return pascalCase + 'ServicesPage';
}

// Function to get state full name from slug
function getStateFullName(stateSlug) {
  const stateMap = {
    'alabama': 'Alabama', 'alaska': 'Alaska', 'arizona': 'Arizona', 'arkansas': 'Arkansas',
    'california': 'California', 'colorado': 'Colorado', 'connecticut': 'Connecticut',
    'delaware': 'Delaware', 'florida': 'Florida', 'georgia': 'Georgia', 'hawaii': 'Hawaii',
    'idaho': 'Idaho', 'illinois': 'Illinois', 'indiana': 'Indiana', 'iowa': 'Iowa',
    'kansas': 'Kansas', 'kentucky': 'Kentucky', 'louisiana': 'Louisiana', 'maine': 'Maine',
    'maryland': 'Maryland', 'massachusetts': 'Massachusetts', 'michigan': 'Michigan',
    'minnesota': 'Minnesota', 'mississippi': 'Mississippi', 'missouri': 'Missouri',
    'montana': 'Montana', 'nebraska': 'Nebraska', 'nevada': 'Nevada',
    'new-hampshire': 'New Hampshire', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico',
    'new-york': 'New York', 'north-carolina': 'North Carolina', 'north-dakota': 'North Dakota',
    'ohio': 'Ohio', 'oklahoma': 'Oklahoma', 'oregon': 'Oregon', 'pennsylvania': 'Pennsylvania',
    'rhode-island': 'Rhode Island', 'south-carolina': 'South Carolina', 'south-dakota': 'South Dakota',
    'tennessee': 'Tennessee', 'texas': 'Texas', 'utah': 'Utah', 'vermont': 'Vermont',
    'virginia': 'Virginia', 'washington': 'Washington', 'washington-dc': 'Washington DC',
    'west-virginia': 'West Virginia', 'wisconsin': 'Wisconsin', 'wyoming': 'Wyoming'
  };
  
  return stateMap[stateSlug] || stateSlug;
}

// Create each missing city page
let createdCount = 0;

missingCities.forEach(city => {
  const cityDir = path.join(__dirname, '../src/app/vending-services', city.slug);
  const stateFullName = getStateFullName(city.stateSlug);
  
  // Create directory
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
  }

  // Generate page.tsx
  let pageContent = pageTemplate;
  // Replace function name FIRST
  pageContent = pageContent.replace(/BocaRatonFloridaServicesPage/g, generateFunctionName(city.slug));
  // Replace specific strings
  pageContent = pageContent.replace(/Boca Raton, FL/g, `${city.name}, ${stateFullName.substring(0, 2).toUpperCase()}`);
  pageContent = pageContent.replace(/Boca Raton, Florida/g, `${city.name}, ${stateFullName}`);
  pageContent = pageContent.replace(/Boca Raton/g, city.name);
  pageContent = pageContent.replace(/boca-raton-florida/g, city.slug);
  pageContent = pageContent.replace(/ Florida /g, ` ${stateFullName} `);
  pageContent = pageContent.replace(/\"Florida\"/g, `"${stateFullName}"`);

  // Write page.tsx
  fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent);

  // Generate pageClient.tsx
  let pageClientContent = pageClientTemplate;
  // Replace component name FIRST
  pageClientContent = pageClientContent.replace(/BocaRatonFloridaVendingServicesPage/g, generateComponentName(city.name, stateFullName));
  // Replace city and state display names
  pageClientContent = pageClientContent.replace(/const cityDisplayName = 'Boca Raton';/g, `const cityDisplayName = '${city.name}';`);
  pageClientContent = pageClientContent.replace(/const stateDisplayName = 'Florida'/g, `const stateDisplayName = '${stateFullName}'`);
  // Replace breadcrumb state link
  pageClientContent = pageClientContent.replace(/\/vending-services\/florida/g, `/vending-services/${city.stateSlug}`);
  // Replace other city references
  pageClientContent = pageClientContent.replace(/Boca Raton/g, city.name);
  // Replace Florida with state name (but preserve cityDisplayName and stateDisplayName variables)
  pageClientContent = pageClientContent.replace(/Florida/g, stateFullName);

  // Write pageClient.tsx
  fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent);

  createdCount++;
  
  if (createdCount % 10 === 0) {
    console.log(`Created ${createdCount}/${missingCities.length} pages...`);
  }
});

console.log(`\n✅ Successfully created ${createdCount} vending-services city pages!`);
console.log(`\nNext steps:`);
console.log(`1. Verify pages: Check a few random pages for correctness`);
console.log(`2. Test locally: npm run dev`);
console.log(`3. Commit: git add -A && git commit -m "Add ${createdCount} new vending-services city pages"`);
console.log(`4. Push: git push origin main`);
console.log(`5. Delete this script: rm scripts/create_missing_vending_services_city_pages.js`);

