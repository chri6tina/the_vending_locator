const { execSync } = require('child_process');
const path = require('path');

// Define cities to create pages for
// Add cities in the format: { slug: 'city-state', name: 'City', state: 'State' }
const citiesToCreate = [
  // Florida cities
  { slug: 'miami-florida', name: 'Miami', state: 'Florida' },
  { slug: 'tampa-florida', name: 'Tampa', state: 'Florida' },
  { slug: 'orlando-florida', name: 'Orlando', state: 'Florida' },
  { slug: 'tallahassee-florida', name: 'Tallahassee', state: 'Florida' },
  { slug: 'st-petersburg-florida', name: 'St. Petersburg', state: 'Florida' },
  
  // Texas cities
  { slug: 'houston-texas', name: 'Houston', state: 'Texas' },
  { slug: 'dallas-texas', name: 'Dallas', state: 'Texas' },
  { slug: 'austin-texas', name: 'Austin', state: 'Texas' },
  { slug: 'san-antonio-texas', name: 'San Antonio', state: 'Texas' },
  
  // California cities
  { slug: 'los-angeles-california', name: 'Los Angeles', state: 'California' },
  { slug: 'san-francisco-california', name: 'San Francisco', state: 'California' },
  { slug: 'san-diego-california', name: 'San Diego', state: 'California' },
  { slug: 'sacramento-california', name: 'Sacramento', state: 'California' },
  
  // Other major cities
  { slug: 'new-york-new-york', name: 'New York', state: 'New York' },
  { slug: 'chicago-illinois', name: 'Chicago', state: 'Illinois' },
  { slug: 'philadelphia-pennsylvania', name: 'Philadelphia', state: 'Pennsylvania' },
  { slug: 'phoenix-arizona', name: 'Phoenix', state: 'Arizona' }
];

console.log(`🚀 Starting batch creation of ${citiesToCreate.length} "How to Start" city pages...\n`);

let successCount = 0;
let errorCount = 0;

citiesToCreate.forEach((city, index) => {
  console.log(`\n[${index + 1}/${citiesToCreate.length}] Creating ${city.name}, ${city.state}...`);
  
  try {
    const scriptPath = path.join(__dirname, 'create_how_to_start_city_pages.js');
    execSync(`node "${scriptPath}" ${city.slug} "${city.name}" "${city.state}"`, {
      stdio: 'inherit'
    });
    successCount++;
  } catch (error) {
    console.error(`❌ Error creating ${city.name}, ${city.state}:`, error.message);
    errorCount++;
  }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`✨ Batch creation complete!`);
console.log(`✅ Successfully created: ${successCount} pages`);
if (errorCount > 0) {
  console.log(`❌ Errors: ${errorCount} pages`);
}
console.log(`${'='.repeat(50)}\n`);

console.log('Next steps:');
console.log('1. Review the generated pages in src/app/how-to-start-a-vending-machine-business/');
console.log('2. Customize city-specific data if needed');
console.log('3. Test the pages locally');
console.log('4. Update sitemap.xml with the new URLs');
console.log('5. Commit and deploy!\n');



