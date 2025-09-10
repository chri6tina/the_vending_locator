const fs = require('fs');
const path = require('path');

// Read and parse the states data from TypeScript file
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');
const statesMatch = statesFile.match(/const states: State\[\] = \[([\s\S]*?)\]/);
const statesArrayStr = statesMatch[1];

// Parse the states data manually
const states = [];
const stateMatches = statesArrayStr.match(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*cities:\s*\[([\s\S]*?)\]\s*\}/g);

stateMatches.forEach(stateMatch => {
  const nameMatch = stateMatch.match(/name:\s*'([^']+)'/);
  const slugMatch = stateMatch.match(/slug:\s*'([^']+)'/);
  const citiesMatch = stateMatch.match(/cities:\s*\[([\s\S]*?)\]/);
  
  if (nameMatch && slugMatch && citiesMatch) {
    const stateName = nameMatch[1];
    const stateSlug = slugMatch[1];
    const citiesStr = citiesMatch[1];
    
    const cities = [];
    const cityMatches = citiesStr.match(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)'\s*\}/g);
    
    if (cityMatches) {
      cityMatches.forEach(cityMatch => {
        const cityNameMatch = cityMatch.match(/name:\s*'([^']+)'/);
        const citySlugMatch = cityMatch.match(/slug:\s*'([^']+)'/);
        
        if (cityNameMatch && citySlugMatch) {
          cities.push({
            name: cityNameMatch[1],
            slug: citySlugMatch[1]
          });
        }
      });
    }
    
    states.push({
      name: stateName,
      slug: stateSlug,
      cities: cities
    });
  }
});

// Get existing city directories
const vendingLeadsDir = './src/app/vending-leads';
const existingDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

console.log(`Found ${existingDirs.length} existing city directories`);

// Extract all city slugs from states data
const allCitySlugs = [];
states.forEach(state => {
  state.cities.forEach(city => {
    allCitySlugs.push(city.slug);
  });
});

console.log(`Found ${allCitySlugs.length} cities in states data`);

// Find missing cities
const missingCities = allCitySlugs.filter(citySlug => !existingDirs.includes(citySlug));

console.log(`\nMissing cities (${missingCities.length}):`);
missingCities.forEach(city => console.log(`- ${city}`));

// Find extra directories (not in states data)
const extraDirs = existingDirs.filter(dir => !allCitySlugs.includes(dir) && !dir.includes('-') && dir !== 'page.tsx' && dir !== 'pageClient.tsx');

console.log(`\nExtra directories (${extraDirs.length}):`);
extraDirs.forEach(dir => console.log(`- ${dir}`));

// Group missing cities by state
const missingByState = {};
missingCities.forEach(citySlug => {
  const stateSlug = citySlug.split('-').slice(-1)[0];
  if (!missingByState[stateSlug]) {
    missingByState[stateSlug] = [];
  }
  missingByState[stateSlug].push(citySlug);
});

console.log('\nMissing cities by state:');
Object.keys(missingByState).sort().forEach(state => {
  console.log(`\n${state.toUpperCase()}:`);
  missingByState[state].forEach(city => console.log(`  - ${city}`));
});

// High priority cities (major metropolitan areas)
const highPriorityCities = [
  'anchorage-alaska',
  'hartford-connecticut',
  'stamford-connecticut',
  'waterbury-connecticut',
  'norwalk-connecticut',
  'dover-delaware',
  'fort-smith-arkansas',
  'fayetteville-arkansas',
  'springdale-arkansas',
  'jonesboro-arkansas',
  'north-little-rock-arkansas',
  'conway-arkansas',
  'rogers-arkansas',
  'bentonville-arkansas',
  'pine-bluff-arkansas',
  'santa-fe-new-mexico',
  'las-cruces-new-mexico',
  'salem-oregon',
  'eugene-oregon',
  'warwick-rhode-island',
  'cranston-rhode-island',
  'billings-montana',
  'missoula-montana',
  'great-falls-montana',
  'bozeman-montana',
  'butte-montana',
  'helena-montana',
  'lincoln-nebraska',
  'bellevue-nebraska',
  'reno-nevada',
  'north-las-vegas-nevada',
  'sparks-nevada',
  'carson-city-nevada',
  'bangor-maine',
  'augusta-maine',
  'gulfport-mississippi',
  'hattiesburg-mississippi',
  'biloxi-mississippi',
  'overland-park-kansas',
  'kansas-city-kansas',
  'topeka-kansas',
  'olathe-kansas',
  'portland-maine',
  'jackson-mississippi'
];

const highPriorityMissing = highPriorityCities.filter(city => missingCities.includes(city));

console.log(`\nHigh Priority Missing Cities (${highPriorityMissing.length}):`);
highPriorityMissing.forEach(city => console.log(`- ${city}`));

// Write results to file
const results = {
  totalExisting: existingDirs.length,
  totalInStatesData: allCitySlugs.length,
  missingCities: missingCities,
  missingByState: missingByState,
  highPriorityMissing: highPriorityMissing,
  extraDirs: extraDirs
};

fs.writeFileSync('missing_cities_analysis.json', JSON.stringify(results, null, 2));
console.log('\nAnalysis saved to missing_cities_analysis.json');
