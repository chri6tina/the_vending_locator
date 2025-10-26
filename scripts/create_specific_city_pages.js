const { createAuburnStyleCityPage } = require('./generate_auburn_style_city_page');
const fs = require('fs');

function main() {
  const cities = process.argv.slice(2);
  if (cities.length === 0) {
    console.error('Usage: node scripts/create_specific_city_pages.js <city-slug> [more-slugs...]');
    process.exit(1);
  }

  const results = [];
  for (const city of cities) {
    try {
      createAuburnStyleCityPage(city);
      results.push({ city, updated: true });
      console.log(`Created: ${city} -> OK`);
    } catch (e) {
      console.error(`Error creating ${city}:`, e.message);
      results.push({ city, updated: false, error: e.message });
    }
  }

  // Append unique entries to NEW_CITY_PAGES.txt without overwriting existing content
  const lines = results.map(r => `src/app/vending-leads/${r.city}/page.tsx`);
  const existing = fs.existsSync('NEW_CITY_PAGES.txt') ? fs.readFileSync('NEW_CITY_PAGES.txt','utf8').split(/\r?\n/).filter(Boolean) : [];
  const merged = Array.from(new Set([...existing, ...lines]));
  fs.writeFileSync('NEW_CITY_PAGES.txt', merged.join('\n') + '\n', 'utf8');
}

if (require.main === module) {
  main();
}
