const fs = require('fs');
const path = require('path');

// Read states.ts to get all cities
const statesPath = path.join(__dirname, '../src/data/states.ts');
const statesContent = fs.readFileSync(statesPath, 'utf8');

// Extract cities from states.ts
const stateRegex = /name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],\s*cities:\s*\[([\s\S]*?)\]/g;
const cityRegex = /\{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]\s*\}/g;

const allCities = [];
let stateMatch;

while ((stateMatch = stateRegex.exec(statesContent)) !== null) {
  const stateName = stateMatch[1];
  const citiesContent = stateMatch[3];
  
  let cityMatch;
  while ((cityMatch = cityRegex.exec(citiesContent)) !== null) {
    const cityName = cityMatch[1];
    const citySlug = cityMatch[2];
    
    allCities.push({
      name: cityName,
      slug: citySlug,
      state: stateName
    });
  }
}

// Helper function to generate component name
function getComponentName(cityName, stateName) {
  const cityPart = cityName.replace(/[^a-zA-Z0-9]/g, '');
  const statePart = stateName.replace(/[^a-zA-Z0-9]/g, '');
  return `${cityPart}${statePart}VendingServicesPage`;
}

// Fix component names
const pagesDir = path.join(__dirname, '../src/app/_city-pages/vending-services');
let fixed = 0;
let errors = 0;

for (const city of allCities) {
  const cityDir = path.join(pagesDir, city.slug);
  const pageClientPath = path.join(cityDir, 'pageClient.tsx');
  
  if (!fs.existsSync(pageClientPath)) {
    continue;
  }
  
  try {
    let content = fs.readFileSync(pageClientPath, 'utf8');
    const correctComponentName = getComponentName(city.name, city.state);
    
    // Check if component name needs fixing
    const currentMatch = content.match(/export default function (\w+)\(\)/);
    if (currentMatch && currentMatch[1] !== correctComponentName) {
      // Replace the component name
      content = content.replace(
        /export default function \w+\(\)/g,
        `export default function ${correctComponentName}()`
      );
      
      fs.writeFileSync(pageClientPath, content);
      fixed++;
      
      if (fixed % 100 === 0) {
        console.log(`Fixed ${fixed} component names...`);
      }
    }
  } catch (error) {
    errors++;
    console.error(`Error fixing ${city.slug}:`, error.message);
  }
}

console.log(`\n✅ Fixed ${fixed} component names`);
if (errors > 0) {
  console.log(`⚠ ${errors} errors encountered`);
}
