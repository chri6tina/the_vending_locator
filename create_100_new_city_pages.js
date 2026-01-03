const fs = require('fs');
const path = require('path');

// Read states data and parse it
const content = fs.readFileSync('src/data/states.ts', 'utf8');
const lines = content.split('\n');
const cities = [];
let currentState = null;
let currentStateSlug = null;
let inCitiesArray = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Detect state start
  if (line.includes("name: '") && !line.includes('slug:') && i + 1 < lines.length) {
    const stateNameMatch = line.match(/name: '([^']+)',/);
    const nextLine = lines[i + 1].trim();
    const stateSlugMatch = nextLine.match(/slug: '([^']+)',/);
    
    if (stateNameMatch && stateSlugMatch) {
      currentState = stateNameMatch[1];
      currentStateSlug = stateSlugMatch[1];
      inCitiesArray = false;
    }
  }
  
  // Detect cities array start
  if (line === 'cities: [' && currentState) {
    inCitiesArray = true;
  }
  
  // Parse cities
  if (inCitiesArray && currentState) {
    const cityMatch = line.match(/\{ name: '([^']+)', slug: '([^']+)' \}/);
    if (cityMatch) {
      cities.push({
        name: cityMatch[1],
        slug: cityMatch[2],
        state: currentState,
        stateSlug: currentStateSlug
      });
    }
    
    // Detect end of cities array
    if (line === ']' || line === '],') {
      inCitiesArray = false;
    }
  }
}

console.log(`Parsed ${cities.length} cities from states.ts`);

// Find existing pages
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
  } catch (error) {
    // Skip if directory doesn't exist
  }
}

findExistingPages('src/app/vending-leads');
console.log(`Found ${existingPages.size} existing pages`);

// Find missing cities
const missingCities = cities.filter(city => !existingPages.has(city.slug));
console.log(`Found ${missingCities.length} cities without pages`);

// Select 100 cities to create
const citiesToCreate = missingCities.slice(0, 100);
console.log(`\nWill create pages for ${citiesToCreate.length} cities:`);
citiesToCreate.slice(0, 10).forEach((city, idx) => {
  console.log(`  ${idx + 1}. ${city.name}, ${city.state} (${city.slug})`);
});
if (citiesToCreate.length > 10) {
  console.log(`  ... and ${citiesToCreate.length - 10} more`);
}

// Save list for reference
fs.writeFileSync('cities_to_create.json', JSON.stringify(citiesToCreate, null, 2));
console.log('\nCity list saved to cities_to_create.json');
