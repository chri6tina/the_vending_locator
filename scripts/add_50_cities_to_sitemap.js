const fs = require('fs');

// Read the 50 cities from the report
const report = JSON.parse(fs.readFileSync('50_more_cities_expanded_report.json', 'utf8'));
const cities = report.missingCities.slice(0, 50);

// Generate sitemap entries
const sitemapEntries = cities.map(city => {
  return `    { url: 'https://www.thevendinglocator.com/vending-leads/${city.slug}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },`;
});

console.log('// Add these entries to sitemap.ts:\n');
console.log(sitemapEntries.join('\n'));

// Also group by state for easier insertion
const byState = {};
cities.forEach(city => {
  if (!byState[city.state]) {
    byState[city.state] = [];
  }
  byState[city.state].push(city);
});

console.log('\n\n// Grouped by state:\n');
Object.keys(byState).sort().forEach(state => {
  console.log(`\n// ${state} (${byState[state].length} cities):`);
  byState[state].forEach(city => {
    console.log(`    { url: 'https://www.thevendinglocator.com/vending-leads/${city.slug}', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },`);
  });
});

