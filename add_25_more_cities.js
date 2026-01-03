const fs = require('fs');
const path = require('path');

// 25 more cities to reach 100
const additional25 = [
  { name: 'Grand Rapids', state: 'Michigan', slug: 'grand-rapids-michigan' },
  { name: 'Kalamazoo', state: 'Michigan', slug: 'kalamazoo-michigan' },
  { name: 'Lansing', state: 'Michigan', slug: 'lansing-michigan' },
  { name: 'Livonia', state: 'Michigan', slug: 'livonia-michigan' },
  { name: 'Macomb', state: 'Michigan', slug: 'macomb-michigan' },
  { name: 'Madison Heights', state: 'Michigan', slug: 'madison-heights-michigan' },
  { name: 'Marquette', state: 'Michigan', slug: 'marquette-michigan' },
  { name: 'Midland', state: 'Michigan', slug: 'midland-michigan' },
  { name: 'Muskegon', state: 'Michigan', slug: 'muskegon-michigan' },
  { name: 'Novi', state: 'Michigan', slug: 'novi-michigan' },
  { name: 'Oak Park', state: 'Michigan', slug: 'oak-park-michigan' },
  { name: 'Portage', state: 'Michigan', slug: 'portage-michigan' },
  { name: 'Rochester Hills', state: 'Michigan', slug: 'rochester-hills-michigan' },
  { name: 'Royal Oak', state: 'Michigan', slug: 'royal-oak-michigan' },
  { name: 'Saginaw', state: 'Michigan', slug: 'saginaw-michigan' },
  { name: 'Southfield', state: 'Michigan', slug: 'southfield-michigan' },
  { name: 'St. Clair Shores', state: 'Michigan', slug: 'st-clair-shores-michigan' },
  { name: 'Sterling Heights', state: 'Michigan', slug: 'sterling-heights-michigan' },
  { name: 'Taylor', state: 'Michigan', slug: 'taylor-michigan' },
  { name: 'Troy', state: 'Michigan', slug: 'troy-michigan' },
  { name: 'Warren', state: 'Michigan', slug: 'warren-michigan' },
  { name: 'Waterford', state: 'Michigan', slug: 'waterford-michigan' },
  { name: 'Westland', state: 'Michigan', slug: 'westland-michigan' },
  { name: 'Wyoming', state: 'Michigan', slug: 'wyoming-michigan' },
  { name: 'Ypsilanti', state: 'Michigan', slug: 'ypsilanti-michigan' },
];

// Check existing
const existingPages = new Set();
function findExistingPages(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findExistingPages(fullPath);
      } else if (file === 'pageClient.tsx') {
        const match = fullPath.match(/vending-leads[\/\\]([^\/\\]+)/);
        if (match) {
          existingPages.add(match[1]);
        }
      }
    }
  } catch (error) {}
}

findExistingPages('src/app/vending-leads');

const citiesToCreate = additional25.filter(city => !existingPages.has(city.slug));
console.log(`Creating ${citiesToCreate.length} additional pages...`);

// Use the same generation logic from create_all_100_city_pages.js
// (I'll import it or copy the logic)
const { execSync } = require('child_process');

// Save to temp file and use the main script
fs.writeFileSync('temp_25_cities.json', JSON.stringify(citiesToCreate, null, 2));

// Read the main script and modify it to use these cities
const mainScript = fs.readFileSync('create_all_100_city_pages.js', 'utf8');
const modifiedScript = mainScript.replace(
  /const finalCities = allCities\.filter\(city => !existingPages\.has\(city\.slug\)\);/,
  `const tempCities = JSON.parse(fs.readFileSync('temp_25_cities.json', 'utf8'));\n    const finalCities = tempCities.filter(city => !existingPages.has(city.slug));`
);

fs.writeFileSync('create_25_more.js', modifiedScript);
execSync('node create_25_more.js', { stdio: 'inherit' });

// Cleanup
fs.unlinkSync('temp_25_cities.json');
fs.unlinkSync('create_25_more.js');

console.log('Done!');

