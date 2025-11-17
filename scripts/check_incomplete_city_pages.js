const fs = require('fs');
const path = require('path');

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

// Check which cities are missing pageClient.tsx files
const vendingLeadsDir = './src/app/vending-leads';
const incompleteCities = [];
const missingPageClient = [];
const missingPage = [];

allCitySlugs.forEach(citySlug => {
  const cityDir = path.join(vendingLeadsDir, citySlug);
  const pageClientPath = path.join(cityDir, 'pageClient.tsx');
  const pagePath = path.join(cityDir, 'page.tsx');
  
  const hasPageClient = fs.existsSync(pageClientPath);
  const hasPage = fs.existsSync(pagePath);
  const hasDir = fs.existsSync(cityDir);
  
  if (!hasDir) {
    incompleteCities.push({ slug: citySlug, issue: 'Missing directory' });
  } else if (!hasPageClient && !hasPage) {
    incompleteCities.push({ slug: citySlug, issue: 'Missing both page.tsx and pageClient.tsx' });
    missingPageClient.push(citySlug);
    missingPage.push(citySlug);
  } else if (!hasPageClient) {
    incompleteCities.push({ slug: citySlug, issue: 'Missing pageClient.tsx' });
    missingPageClient.push(citySlug);
  } else if (!hasPage) {
    incompleteCities.push({ slug: citySlug, issue: 'Missing page.tsx' });
    missingPage.push(citySlug);
  }
});

console.log(`\nIncomplete city pages (${incompleteCities.length}):`);
if (incompleteCities.length === 0) {
  console.log('✅ All city pages are complete!');
} else {
  incompleteCities.forEach(city => {
    console.log(`  - ${city.slug}: ${city.issue}`);
  });
}

// Group by state
const incompleteByState = {};
incompleteCities.forEach(city => {
  const parts = city.slug.split('-');
  const stateSlug = parts[parts.length - 1];
  if (!incompleteByState[stateSlug]) {
    incompleteByState[stateSlug] = [];
  }
  incompleteByState[stateSlug].push(city);
});

if (Object.keys(incompleteByState).length > 0) {
  console.log('\nIncomplete cities by state:');
  Object.keys(incompleteByState).sort().forEach(state => {
    console.log(`\n${state.toUpperCase()} (${incompleteByState[state].length} incomplete):`);
    incompleteByState[state].forEach(city => {
      console.log(`  - ${city.slug}: ${city.issue}`);
    });
  });
}

// Save results
const results = {
  totalCities: allCitySlugs.length,
  incompleteCount: incompleteCities.length,
  incompleteCities: incompleteCities,
  incompleteByState: incompleteByState,
  missingPageClientOnly: missingPageClient.filter(slug => !missingPage.includes(slug)),
  missingPageOnly: missingPage.filter(slug => !missingPageClient.includes(slug)),
  missingBoth: missingPageClient.filter(slug => missingPage.includes(slug))
};

fs.writeFileSync('incomplete_cities_report.json', JSON.stringify(results, null, 2));
console.log('\n📄 Detailed report saved to incomplete_cities_report.json');

