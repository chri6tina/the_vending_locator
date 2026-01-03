const fs = require('fs');
const path = require('path');

// Read states.ts
const statesContent = fs.readFileSync(
  path.join(__dirname, '..', 'src', 'data', 'states.ts'),
  'utf8'
);

// Extract all cities
const citySlugRegex = /slug: '([^']+)'/g;
const allCitySlugs = [];
let match;
while ((match = citySlugRegex.exec(statesContent)) !== null) {
  const slug = match[1];
  if (slug.includes('-')) {
    allCitySlugs.push(slug);
  }
}

// Get existing directories
const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
const existing = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name.includes('-'));

// Filter out state directories
const stateDirs = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 
  'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana',
  'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma',
  'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee',
  'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming'];

const existingCities = existing.filter(dir => !stateDirs.includes(dir.toLowerCase()));

const missing = allCitySlugs.filter(slug => !existingCities.includes(slug));

console.log(`Total cities in states.ts: ${allCitySlugs.length}`);
console.log(`Existing city pages: ${existingCities.length}`);
console.log(`Missing cities: ${missing.length}`);
console.log(`\nFirst 20 missing cities:`);
missing.slice(0, 20).forEach(slug => console.log(`  - ${slug}`));


