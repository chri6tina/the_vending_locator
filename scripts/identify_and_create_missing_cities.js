const fs = require('fs');
const path = require('path');
const { createAuburnStyleCityPage } = require('./generate_auburn_style_city_page');

// Read states.ts file
const statesFile = fs.readFileSync('./src/data/states.ts', 'utf8');

// Extract all city slugs from states.ts
const citySlugMatches = statesFile.matchAll(/slug:\s*'([^']+)'/g);
const allCitySlugs = [];
for (const match of citySlugMatches) {
  const slug = match[1];
  // Only include city-state slugs (not state-only slugs)
  if (slug.includes('-') && slug.split('-').length >= 2) {
    allCitySlugs.push(slug);
  }
}

console.log(`Found ${allCitySlugs.length} cities in states.ts`);

// Get existing city directories
const vendingLeadsDir = './src/app/vending-leads';
const existingDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name.includes('-')) // Only city-state directories
  .sort();

console.log(`Found ${existingDirs.length} existing city directories`);

// Find missing cities
const missingCities = allCitySlugs.filter(citySlug => !existingDirs.includes(citySlug));

console.log(`\nMissing cities (${missingCities.length}):`);
missingCities.forEach(city => console.log(`  - ${city}`));

// Group missing cities by state
const missingByState = {};
missingCities.forEach(citySlug => {
  const parts = citySlug.split('-');
  const stateSlug = parts[parts.length - 1];
  if (!missingByState[stateSlug]) {
    missingByState[stateSlug] = [];
  }
  missingByState[stateSlug].push(citySlug);
});

console.log('\nMissing cities by state:');
Object.keys(missingByState).sort().forEach(state => {
  console.log(`\n${state.toUpperCase()} (${missingByState[state].length} missing):`);
  missingByState[state].forEach(city => console.log(`  - ${city}`));
});

// Ask user if they want to create all missing cities
if (process.argv.includes('--create-all')) {
  console.log(`\n\nCreating ${missingCities.length} missing city pages...\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  missingCities.forEach((citySlug, index) => {
    try {
      createAuburnStyleCityPage(citySlug);
      successCount++;
      console.log(`[${index + 1}/${missingCities.length}] ✅ Created: ${citySlug}`);
    } catch (error) {
      errorCount++;
      console.error(`[${index + 1}/${missingCities.length}] ❌ Error creating ${citySlug}:`, error.message);
    }
  });
  
  console.log(`\n\n✅ Created ${successCount} city pages`);
  if (errorCount > 0) {
    console.log(`❌ ${errorCount} errors occurred`);
  }
} else if (process.argv.includes('--create-state')) {
  const stateIndex = process.argv.indexOf('--create-state');
  const stateSlug = process.argv[stateIndex + 1];
  
  if (!stateSlug || !missingByState[stateSlug]) {
    console.error(`\nError: State "${stateSlug}" not found or has no missing cities.`);
    console.log(`Available states with missing cities: ${Object.keys(missingByState).join(', ')}`);
    process.exit(1);
  }
  
  const citiesToCreate = missingByState[stateSlug];
  console.log(`\n\nCreating ${citiesToCreate.length} missing city pages for ${stateSlug}...\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  citiesToCreate.forEach((citySlug, index) => {
    try {
      createAuburnStyleCityPage(citySlug);
      successCount++;
      console.log(`[${index + 1}/${citiesToCreate.length}] ✅ Created: ${citySlug}`);
    } catch (error) {
      errorCount++;
      console.error(`[${index + 1}/${citiesToCreate.length}] ❌ Error creating ${citySlug}:`, error.message);
    }
  });
  
  console.log(`\n\n✅ Created ${successCount} city pages for ${stateSlug}`);
  if (errorCount > 0) {
    console.log(`❌ ${errorCount} errors occurred`);
  }
} else {
  console.log('\n\nTo create all missing cities, run:');
  console.log('  node scripts/identify_and_create_missing_cities.js --create-all');
  console.log('\nTo create cities for a specific state, run:');
  console.log('  node scripts/identify_and_create_missing_cities.js --create-state <state-slug>');
  console.log(`\nExample: node scripts/identify_and_create_missing_cities.js --create-state maryland`);
}

// Save results to file
const results = {
  totalInStatesData: allCitySlugs.length,
  totalExisting: existingDirs.length,
  totalMissing: missingCities.length,
  missingCities: missingCities,
  missingByState: missingByState
};

fs.writeFileSync('missing_cities_report.json', JSON.stringify(results, null, 2));
console.log('\n📄 Detailed report saved to missing_cities_report.json');

