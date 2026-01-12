const fs = require('fs');
const path = require('path');

// Read cities to create
const citiesToCreate = JSON.parse(fs.readFileSync('500_cities_to_create.json', 'utf8'));

// Get existing city directories
const vendingLeadsDir = 'src/app/_city-pages/vending-leads';
const existingDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const existingSlugs = new Set(existingDirs);

// Find missing cities
const missing = citiesToCreate.filter(c => !existingSlugs.has(c.slug));
const existing = citiesToCreate.filter(c => existingSlugs.has(c.slug));

console.log('='.repeat(60));
console.log('CITY CREATION ANALYSIS');
console.log('='.repeat(60));
console.log(`Total cities in 500_cities_to_create.json: ${citiesToCreate.length}`);
console.log(`Already exist: ${existing.length}`);
console.log(`Need to create: ${missing.length}`);
console.log('='.repeat(60));

if (missing.length > 0) {
  console.log('\nFirst 20 missing cities:');
  missing.slice(0, 20).forEach((c, i) => {
    console.log(`  ${i + 1}. ${c.name}, ${c.state} (${c.slug})`);
  });
  
  if (missing.length > 20) {
    console.log(`  ... and ${missing.length - 20} more`);
  }
  
  // Save missing cities to file
  fs.writeFileSync('missing_cities_to_create.json', JSON.stringify(missing, null, 2));
  console.log(`\n✅ Saved ${missing.length} missing cities to missing_cities_to_create.json`);
} else {
  console.log('\n✅ All cities from the list already exist!');
}

// Group by state
const byState = {};
missing.forEach(city => {
  if (!byState[city.state]) {
    byState[city.state] = [];
  }
  byState[city.state].push(city);
});

console.log('\nMissing cities by state:');
Object.keys(byState).sort().forEach(state => {
  console.log(`  ${state}: ${byState[state].length} cities`);
});
