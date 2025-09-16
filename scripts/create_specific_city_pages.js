const fs = require('fs');
const path = require('path');
const { buildPage } = require('./build_complete_pages');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function writeCanonicalHead(citySlug) {
  const dir = path.join('src', 'app', 'vending-leads', citySlug);
  const headPath = path.join(dir, 'head.tsx');
  const canonical = `https://www.thevendinglocator.com/vending-leads/${citySlug}`;
  const content = `export default function Head() {
  return (
    <>
      <link rel="canonical" href="${canonical}" />
    </>
  )
}
`;
  fs.writeFileSync(headPath, content, 'utf8');
}

function main() {
  const cities = process.argv.slice(2);
  if (cities.length === 0) {
    console.error('Usage: node scripts/create_specific_city_pages.js <city-slug> [more-slugs...]');
    process.exit(1);
  }

  const root = path.join('src', 'app', 'vending-leads');
  ensureDir(root);

  const results = [];
  for (const city of cities) {
    try {
      const dir = path.join(root, city);
      ensureDir(dir);
      const pageFile = path.join(dir, 'page.tsx');
      if (!fs.existsSync(pageFile)) {
        fs.writeFileSync(pageFile, '', 'utf8');
      }
      const res = buildPage(pageFile);
      writeCanonicalHead(city);
      results.push({ city, updated: !!(res && res.updated) });
      console.log(`Created/updated: ${city} -> ${res && res.updated ? 'OK' : 'SKIPPED'}`);
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
