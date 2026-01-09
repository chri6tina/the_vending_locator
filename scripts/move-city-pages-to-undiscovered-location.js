const fs = require('fs');
const path = require('path');

// Move city directories to _city-pages (underscore prefix makes Next.js ignore them during route discovery)
// This preserves all files while preventing Next.js from discovering thousands of routes during build

function moveCityDirectories(sourceDir, targetDir, routeType) {
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  Source directory not found: ${sourceDir}`);
    return { moved: 0, skipped: 0, errors: 0 };
  }

  const results = { moved: 0, skipped: 0, errors: 0 };
  const items = fs.readdirSync(sourceDir, { withFileTypes: true });

  // States to skip (keep these in place)
  const states = ['california', 'texas', 'florida', 'alabama', 'alaska', 'arizona', 'arkansas', 'colorado', 'connecticut', 'delaware', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming', 'washington-dc'];
  
  // Special directories to skip
  const skipDirs = ['layout.tsx', 'page.tsx', 'pageClient.tsx', '[slug]', '_city-pages'];

  for (const item of items) {
    if (!item.isDirectory()) continue;
    if (skipDirs.includes(item.name)) continue;
    if (item.name.startsWith('_')) continue;
    if (states.includes(item.name.toLowerCase())) {
      console.log(`⏭️  Skipping state page: ${item.name}`);
      results.skipped++;
      continue;
    }

    const sourcePath = path.join(sourceDir, item.name);
    const targetPath = path.join(targetDir, item.name);

    try {
      // Check if target already exists
      if (fs.existsSync(targetPath)) {
        console.log(`⚠️  Target already exists, skipping: ${item.name}`);
        results.skipped++;
        continue;
      }

      // Move the directory
      fs.renameSync(sourcePath, targetPath);
      results.moved++;
      
      if (results.moved % 50 === 0) {
        console.log(`✅ Moved ${results.moved} directories...`);
      }
    } catch (error) {
      console.error(`❌ Error moving ${item.name}:`, error.message);
      results.errors++;
    }
  }

  return results;
}

// Main execution
console.log('🚀 Moving city directories to _city-pages to prevent route discovery...\n');

// Create target directories
const cityPagesDir = path.join(__dirname, '..', 'src', 'app', '_city-pages');
const taxServicesSource = path.join(__dirname, '..', 'src', 'app', 'tax-services');
const vendingLeadsSource = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
const vendingServicesSource = path.join(__dirname, '..', 'src', 'app', 'vending-services');
const howToStartSource = path.join(__dirname, '..', 'src', 'app', 'how-to-start-a-vending-machine-business');
const vendingMachinesForSaleSource = path.join(__dirname, '..', 'src', 'app');

const taxServicesTarget = path.join(cityPagesDir, 'tax-services');
const vendingLeadsTarget = path.join(cityPagesDir, 'vending-leads');
const vendingServicesTarget = path.join(cityPagesDir, 'vending-services');
const howToStartTarget = path.join(cityPagesDir, 'how-to-start-a-vending-machine-business');
const vendingMachinesForSaleTarget = path.join(cityPagesDir, 'vending-machines-for-sale-in');

[cityPagesDir, taxServicesTarget, vendingLeadsTarget, vendingServicesTarget, howToStartTarget, vendingMachinesForSaleTarget].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Move directories
console.log('📦 Moving tax-services city directories...');
const taxResults = moveCityDirectories(taxServicesSource, taxServicesTarget, 'tax-services');

console.log('\n📦 Moving vending-leads city directories...');
const vendingLeadsResults = moveCityDirectories(vendingLeadsSource, vendingLeadsTarget, 'vending-leads');

console.log('\n📦 Moving vending-services city directories...');
const vendingServicesResults = moveCityDirectories(vendingServicesSource, vendingServicesTarget, 'vending-services');

console.log('\n📦 Moving how-to-start-a-vending-machine-business city directories...');
const howToStartResults = moveCityDirectories(howToStartSource, howToStartTarget, 'how-to-start');

console.log('\n📦 Moving vending-machines-for-sale-in-* directories...');
// Handle vending-machines-for-sale-in-* directories (they're at the root of src/app)
const vendingMachinesForSaleDirs = fs.readdirSync(vendingMachinesForSaleSource, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('vending-machines-for-sale-in-'))
  .map(dirent => dirent.name);

let vendingMachinesForSaleMoved = 0;
let vendingMachinesForSaleSkipped = 0;
let vendingMachinesForSaleErrors = 0;

for (const dirName of vendingMachinesForSaleDirs) {
  const sourcePath = path.join(vendingMachinesForSaleSource, dirName);
  const targetPath = path.join(vendingMachinesForSaleTarget, dirName);
  
  try {
    if (fs.existsSync(targetPath)) {
      console.log(`⚠️  Target already exists, skipping: ${dirName}`);
      vendingMachinesForSaleSkipped++;
      continue;
    }
    
    fs.renameSync(sourcePath, targetPath);
    vendingMachinesForSaleMoved++;
    
    if (vendingMachinesForSaleMoved % 50 === 0) {
      console.log(`✅ Moved ${vendingMachinesForSaleMoved} directories...`);
    }
  } catch (error) {
    console.error(`❌ Error moving ${dirName}:`, error.message);
    vendingMachinesForSaleErrors++;
  }
}

const vendingMachinesForSaleResults = {
  moved: vendingMachinesForSaleMoved,
  skipped: vendingMachinesForSaleSkipped,
  errors: vendingMachinesForSaleErrors
};

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 MOVE SUMMARY');
console.log('='.repeat(60));
console.log(`Tax Services: ${taxResults.moved} moved, ${taxResults.skipped} skipped, ${taxResults.errors} errors`);
console.log(`Vending Leads: ${vendingLeadsResults.moved} moved, ${vendingLeadsResults.skipped} skipped, ${vendingLeadsResults.errors} errors`);
console.log(`Vending Services: ${vendingServicesResults.moved} moved, ${vendingServicesResults.skipped} skipped, ${vendingServicesResults.errors} errors`);
console.log(`How-to-Start: ${howToStartResults.moved} moved, ${howToStartResults.skipped} skipped, ${howToStartResults.errors} errors`);
console.log(`Vending Machines For Sale: ${vendingMachinesForSaleResults.moved} moved, ${vendingMachinesForSaleResults.skipped} skipped, ${vendingMachinesForSaleResults.errors} errors`);
console.log(`📈 Total Moved: ${taxResults.moved + vendingLeadsResults.moved + vendingServicesResults.moved + howToStartResults.moved + vendingMachinesForSaleResults.moved}`);
console.log('\n✅ All city directories moved to _city-pages (Next.js will ignore them during build)');

