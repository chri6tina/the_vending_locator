const fs = require('fs');

// Read the final list
const finalList = JSON.parse(fs.readFileSync('final_100_cities.json', 'utf8'));
const additional = [
  { name: 'Worcester', slug: 'worcester-massachusetts', state: 'Massachusetts' },
  { name: 'Springfield', slug: 'springfield-massachusetts', state: 'Massachusetts' },
  { name: 'Lowell', slug: 'lowell-massachusetts', state: 'Massachusetts' },
  { name: 'New Bedford', slug: 'new-bedford-massachusetts', state: 'Massachusetts' },
  { name: 'Quincy', slug: 'quincy-massachusetts', state: 'Massachusetts' },
  { name: 'Lynn', slug: 'lynn-massachusetts', state: 'Massachusetts' },
  { name: 'Newton', slug: 'newton-massachusetts', state: 'Massachusetts' },
  { name: 'Lawrence', slug: 'lawrence-massachusetts', state: 'Massachusetts' },
  { name: 'Fall River', slug: 'fall-river-massachusetts', state: 'Massachusetts' }
];

const allCities = [...finalList.cities, ...additional];

// Group by state
const byState = {};
allCities.forEach(city => {
  if (!byState[city.state]) {
    byState[city.state] = [];
  }
  byState[city.state].push(city);
});

// Read states.ts
let statesContent = fs.readFileSync('./src/data/states.ts', 'utf8');

// Function to add cities to a state
function addCitiesToState(stateName, cities) {
  // Find the state block
  const stateRegex = new RegExp(`(name: '${stateName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s+slug: '[^']+',\\s+cities: \\[)([^\\]]+)(\\])`, 's');
  const match = statesContent.match(stateRegex);
  
  if (!match) {
    console.log(`⚠️  Could not find state: ${stateName}`);
    return false;
  }
  
  // Get existing cities
  const existingCities = match[2];
  const cityLines = existingCities.split(',').map(c => c.trim()).filter(c => c);
  
  // Add new cities
  cities.forEach(city => {
    const cityEntry = `      { name: '${city.name}', slug: '${city.slug}' }`;
    // Check if already exists
    if (!cityLines.some(line => line.includes(`'${city.slug}'`))) {
      cityLines.push(cityEntry);
    }
  });
  
  // Sort alphabetically by city name
  cityLines.sort((a, b) => {
    const nameA = a.match(/name: '([^']+)'/)?.[1] || '';
    const nameB = b.match(/name: '([^']+)'/)?.[1] || '';
    return nameA.localeCompare(nameB);
  });
  
  // Reconstruct
  const newCitiesBlock = cityLines.join(',\n');
  const replacement = match[1] + '\n' + newCitiesBlock + '\n    ' + match[3];
  statesContent = statesContent.replace(stateRegex, replacement);
  
  return true;
}

// Add cities for each state
Object.keys(byState).sort().forEach(state => {
  const cities = byState[state];
  console.log(`Adding ${cities.length} cities to ${state}...`);
  if (addCitiesToState(state, cities)) {
    console.log(`✅ Added ${cities.length} cities to ${state}`);
  }
});

// Write back
fs.writeFileSync('./src/data/states.ts', statesContent);
console.log(`\n✅ Updated states.ts with all ${allCities.length} cities`);



