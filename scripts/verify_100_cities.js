const fs = require('fs');
const path = require('path');

// Read the final list
const finalList = JSON.parse(fs.readFileSync('final_100_cities.json', 'utf8'));
const citiesToCheck = finalList.cities;

// Read states.ts
const statesContent = fs.readFileSync('./src/data/states.ts', 'utf8');

// Check each city
let inStates = 0;
let notInStates = [];
let hasPage = 0;
let missingPage = [];

citiesToCheck.forEach(city => {
  // Check if in states.ts
  const slugPattern = new RegExp(`slug: '${city.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`);
  if (statesContent.match(slugPattern)) {
    inStates++;
  } else {
    notInStates.push(city);
  }
  
  // Check if page exists
  const pageDir = path.join('src', 'app', 'vending-leads', city.slug);
  const pageClientPath = path.join(pageDir, 'pageClient.tsx');
  const pagePath = path.join(pageDir, 'page.tsx');
  
  if (fs.existsSync(pageClientPath) && fs.existsSync(pagePath)) {
    hasPage++;
  } else {
    missingPage.push(city);
  }
});

console.log('\n=== VERIFICATION REPORT ===\n');
console.log(`Total cities to check: ${citiesToCheck.length}`);
console.log(`\n✅ In states.ts: ${inStates}`);
console.log(`❌ NOT in states.ts: ${notInStates.length}`);
if (notInStates.length > 0) {
  console.log('\nMissing from states.ts:');
  notInStates.forEach(c => console.log(`  - ${c.name}, ${c.state} (${c.slug})`));
}

console.log(`\n✅ Has page files: ${hasPage}`);
console.log(`❌ Missing page files: ${missingPage.length}`);
if (missingPage.length > 0) {
  console.log('\nMissing page files:');
  missingPage.forEach(c => console.log(`  - ${c.name}, ${c.state} (${c.slug})`));
}

console.log('\n=== SUMMARY ===');
console.log(`Cities in states.ts: ${inStates}/${citiesToCheck.length}`);
console.log(`Cities with pages: ${hasPage}/${citiesToCheck.length}`);
console.log(`Overall completion: ${((inStates + hasPage) / (citiesToCheck.length * 2) * 100).toFixed(1)}%`);

