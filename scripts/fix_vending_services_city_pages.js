const fs = require('fs');
const path = require('path');

// Read states data
const statesDataPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesDataPath, 'utf8');

// Extract all cities
const cityPattern = /{ name: '([^']+)', slug: '([^']+)' }/g;
let match;
const allCities = [];

while ((match = cityPattern.exec(statesContent)) !== null) {
  const cityName = match[1];
  const citySlug = match[2];
  
  const slugParts = citySlug.split('-');
  let stateSlug = slugParts[slugParts.length - 1];
  
  const lastTwo = slugParts.slice(-2).join('-');
  const multiWordStates = ['new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'rhode-island', 'south-carolina', 'south-dakota', 'washington-dc', 'west-virginia'];
  
  if (multiWordStates.includes(lastTwo)) {
    stateSlug = lastTwo;
  }
  
  allCities.push({ name: cityName, slug: citySlug, stateSlug: stateSlug });
}

// State abbreviations map
const stateAbbrevMap = {
  'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR',
  'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT',
  'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI',
  'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA',
  'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME',
  'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI',
  'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO',
  'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV',
  'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM',
  'new-york': 'NY', 'north-carolina': 'NC', 'north-dakota': 'ND',
  'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA',
  'rhode-island': 'RI', 'south-carolina': 'SC', 'south-dakota': 'SD',
  'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT',
  'virginia': 'VA', 'washington': 'WA', 'washington-dc': 'DC',
  'west-virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY'
};

function generateFunctionName(citySlug) {
  const pascalCase = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  return pascalCase + 'ServicesPage';
}

let fixedCount = 0;

// Fix each city's page.tsx
allCities.forEach(city => {
  const pagePath = path.join(__dirname, '../src/app/vending-services', city.slug, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    return;
  }
  
  let pageContent = fs.readFileSync(pagePath, 'utf8');
  
  // Check if it has the wrong function name
  if (pageContent.includes('BocaRatonFloridaServicesPage') || pageContent.includes('BocaRatonServicesPage')) {
    const stateAbbrev = stateAbbrevMap[city.stateSlug] || 'FL';
    const correctFunctionName = generateFunctionName(city.slug);
    
    // Fix function name
    pageContent = pageContent.replace(/export default function BocaRatonFloridaServicesPage/g, 
      `export default function ${correctFunctionName}`);
    pageContent = pageContent.replace(/export default function BocaRatonServicesPage/g,
      `export default function ${correctFunctionName}`);
    
    // Fix state abbreviation in titles
    pageContent = pageContent.replace(/, FL - Get Free Installation/g, 
      `, ${stateAbbrev} - Get Free Installation`);
    pageContent = pageContent.replace(/ FL,/g, ` ${stateAbbrev},`);
    
    fs.writeFileSync(pagePath, pageContent);
    fixedCount++;
    
    if (fixedCount % 20 === 0) {
      console.log(`Fixed ${fixedCount} pages...`);
    }
  }
});

console.log(`\n✅ Fixed ${fixedCount} vending-services city pages!`);

