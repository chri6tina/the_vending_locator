// Script to generate cityInfo entries for "how to start a vending machine business" pages
// This generates city-specific enrichment data following the existing pattern

const fs = require('fs');
const path = require('path');

// Read the states data
const statesPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesPath, 'utf8');

// Extract city slugs from states.ts
const citySlugMatches = statesContent.matchAll(/{ name: '[^']+', slug: '([^']+)' }/g);
const allCitySlugs = Array.from(citySlugMatches).map(m => m[1]);

// Read existing cityInfo entries
const pagePath = path.join(__dirname, '../src/app/how-to-start-a-vending-machine-business/[slug]/page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

// Extract existing city slugs from cityInfo
const existingMatches = pageContent.matchAll(/^  '([a-z-]+)': \{/gm);
const existingCitySlugs = new Set(Array.from(existingMatches).map(m => m[1]));

// Find cities that need entries
const missingCities = allCitySlugs.filter(slug => !existingCitySlugs.has(slug));

console.log(`Total cities in states.ts: ${allCitySlugs.length}`);
console.log(`Cities with cityInfo entries: ${existingCitySlugs.size}`);
console.log(`Cities needing entries: ${missingCities.length}`);
console.log(`\nFirst 100 cities to add:\n`);
missingCities.slice(0, 100).forEach((slug, idx) => {
  console.log(`${idx + 1}. ${slug}`);
});

// Export for use in generation
module.exports = { missingCities: missingCities.slice(0, 100), allCitySlugs, existingCitySlugs };

