const fs = require('fs');
const path = require('path');

// Read states.ts to extract all cities
const statesFile = fs.readFileSync('src/data/states.ts', 'utf8');

// Extract cities from states.ts using regex
const cityMatches = statesFile.matchAll(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'\s*\}/g);
const allCitiesInStates = [];
for (const match of cityMatches) {
  allCitiesInStates.push({
    name: match[1],
    slug: match[2]
  });
}

// Get existing city directories
const vendingLeadsDir = 'src/app/_city-pages/vending-leads';
const existingDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const existingSlugs = new Set(existingDirs);

// Find cities in states.ts that don't have pages
const missing = allCitiesInStates.filter(c => !existingSlugs.has(c.slug));

console.log('='.repeat(70));
console.log('CITIES IN states.ts WITHOUT PAGES');
console.log('='.repeat(70));
console.log(`Total cities in states.ts: ${allCitiesInStates.length}`);
console.log(`Cities with pages: ${allCitiesInStates.length - missing.length}`);
console.log(`Cities needing pages: ${missing.length}`);
console.log('='.repeat(70));

if (missing.length > 0) {
  // Group by state
  const byState = {};
  missing.forEach(city => {
    // Extract state from slug (last part after last dash)
    const parts = city.slug.split('-');
    const stateSlug = parts.slice(-2).join('-'); // Last two parts are usually state
    const stateName = city.slug.split('-').slice(-2).join(' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Better approach: find state from states.ts
    const stateMatch = statesFile.match(new RegExp(`name:\\s*'([^']+)',\\s*slug:\\s*'${stateSlug}'`));
    const state = stateMatch ? stateMatch[1] : stateName;
    
    if (!byState[state]) {
      byState[state] = [];
    }
    byState[state].push(city);
  });

  console.log('\nMissing cities by state:');
  Object.keys(byState).sort().forEach(state => {
    console.log(`\n${state}: ${byState[state].length} cities`);
    byState[state].slice(0, 5).forEach(c => console.log(`  - ${c.name} (${c.slug})`));
    if (byState[state].length > 5) {
      console.log(`  ... and ${byState[state].length - 5} more`);
    }
  });

  // Save to file
  fs.writeFileSync('cities_needing_pages.json', JSON.stringify(missing, null, 2));
  console.log(`\n✅ Saved ${missing.length} cities to cities_needing_pages.json`);
  
  // Show first 20
  console.log('\nFirst 20 cities needing pages:');
  missing.slice(0, 20).forEach((c, i) => {
    console.log(`  ${i + 1}. ${c.name} (${c.slug})`);
  });
} else {
  console.log('\n✅ All cities in states.ts already have pages!');
  console.log('You may need to add NEW cities to states.ts first.');
}
