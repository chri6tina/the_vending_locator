const fs = require('fs');
const path = require('path');

// Read all city page directories
const cityPagesDir = path.join(__dirname, '..', 'src', 'app', '_city-pages', 'vending-leads');
const cities = fs.readdirSync(cityPagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

console.log(`Found ${cities.length} city directories`);

// Parse city and state from slug
function parseCityState(slug) {
  // Common state slugs (longest first to match correctly)
  const states = [
    'washington-dc', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 
    'north-dakota', 'rhode-island', 'south-carolina', 'south-dakota', 'west-virginia',
    'california', 'florida', 'georgia', 'illinois', 'indiana', 'kentucky', 'maryland',
    'michigan', 'missouri', 'montana', 'nebraska', 'nevada', 'oregon', 'pennsylvania',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'wisconsin',
    'wyoming', 'alabama', 'alaska', 'arizona', 'arkansas', 'colorado', 'connecticut',
    'delaware', 'hawaii', 'idaho', 'iowa', 'kansas', 'louisiana', 'maine', 'massachusetts',
    'minnesota', 'mississippi', 'oklahoma'
  ];
  
  // Try to match longest state slug first
  for (const state of states.sort((a, b) => b.length - a.length)) {
    if (slug.endsWith(`-${state}`)) {
      const citySlug = slug.slice(0, slug.length - state.length - 1);
      const cityName = citySlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      const stateName = state.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return { city: cityName, state: stateName, slug };
    }
  }
  
  // Fallback: assume last part is state
  const parts = slug.split('-');
  const stateSlug = parts[parts.length - 1];
  const citySlug = parts.slice(0, -1).join('-');
  const cityName = citySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  const stateName = stateSlug.charAt(0).toUpperCase() + stateSlug.slice(1);
  
  return { city: cityName, state: stateName, slug };
}

// Generate the cities object
const citiesObject = {};
for (const slug of cities) {
  const { city, state } = parseCityState(slug);
  citiesObject[slug] = {
    city,
    state,
    slug
  };
}

// Generate the file content
const fileContent = `// Auto-generated city mapping for vending-leads routes
export const vendingLeadsCities = ${JSON.stringify(citiesObject, null, 2)} as const;

export function getCityInfo(slug: string) {
  return vendingLeadsCities[slug as keyof typeof vendingLeadsCities];
}

export function getAllVendingLeadsSlugs() {
  return Object.keys(vendingLeadsCities);
}
`;

// Write the file
const outputPath = path.join(__dirname, '..', 'src', 'data', 'vending-leads-cities.ts');
fs.writeFileSync(outputPath, fileContent, 'utf8');

console.log(`✅ Regenerated vending-leads-cities.ts with ${cities.length} cities`);
console.log(`📝 File written to: ${outputPath}`);
