const fs = require('fs');

// Read the report
const report = JSON.parse(fs.readFileSync('100_missing_cities_report.json', 'utf8'));
let cities = report.missingCities;

// Remove duplicates
const seen = new Set();
cities = cities.filter(city => {
  if (seen.has(city.slug)) return false;
  seen.add(city.slug);
  return true;
});

// Add 8 more cities to reach 100
const additionalCities = [
  { name: 'Worcester', slug: 'worcester-massachusetts', state: 'Massachusetts', pop: '206K+' },
  { name: 'Springfield', slug: 'springfield-massachusetts', state: 'Massachusetts', pop: '155K+' },
  { name: 'Lowell', slug: 'lowell-massachusetts', state: 'Massachusetts', pop: '115K+' },
  { name: 'New Bedford', slug: 'new-bedford-massachusetts', state: 'Massachusetts', pop: '95K+' },
  { name: 'Quincy', slug: 'quincy-massachusetts', state: 'Massachusetts', pop: '94K+' },
  { name: 'Lynn', slug: 'lynn-massachusetts', state: 'Massachusetts', pop: '94K+' },
  { name: 'Newton', slug: 'newton-massachusetts', state: 'Massachusetts', pop: '88K+' },
  { name: 'Lawrence', slug: 'lawrence-massachusetts', state: 'Massachusetts', pop: '80K+' }
];

// Check which additional cities are missing
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');
const existingCitySlugs = new Set();
const citySlugMatches = statesFile.matchAll(/slug:\s*'([^']+)'/g);
for (const match of citySlugMatches) {
  const slug = match[1];
  if (slug.includes('-') && slug.split('-').length >= 2) {
    existingCitySlugs.add(slug);
  }
}

const additionalMissing = additionalCities.filter(c => !existingCitySlugs.has(c.slug));
const finalCities = [...cities, ...additionalMissing].slice(0, 100);

console.log(`Total cities to create: ${finalCities.length}\n`);

// Group by state
const byState = {};
finalCities.forEach(city => {
  if (!byState[city.state]) {
    byState[city.state] = [];
  }
  byState[city.state].push(city);
});

Object.keys(byState).sort().forEach(state => {
  console.log(`${state} (${byState[state].length}):`);
  byState[state].forEach(city => {
    console.log(`  ${city.slug}`);
  });
});

// Generate command
const slugs = finalCities.map(c => c.slug).join(' ');
console.log(`\n\nCommand to create all ${finalCities.length} cities:\n`);
console.log(`node scripts/create_specific_city_pages.js ${slugs}`);

// Save final list
fs.writeFileSync('100_cities_final_list.json', JSON.stringify({ cities: finalCities, byState }, null, 2));

