const fs = require('fs');
const path = require('path');

// Function to fix over-fixed city names (e.g., "City's City's City's")
function fixOverFixedCityNames(content, cityName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Fix 1: Remove duplicate city names in "City's City's diverse and growing City business economy"
  const duplicatePattern1 = new RegExp(`(${cityName}'s\\s+){2,}`, 'gi');
  if (duplicatePattern1.test(fixedContent)) {
    fixedContent = fixedContent.replace(duplicatePattern1, `${cityName}'s `);
    fixesApplied++;
  }

  // Fix 2: Remove duplicate city names in "City's diverse and growing City business economy"
  const duplicatePattern2 = new RegExp(`${cityName}'s\\s+diverse\\s+and\\s+growing\\s+${cityName}\\s+business\\s+economy`, 'gi');
  if (duplicatePattern2.test(fixedContent)) {
    fixedContent = fixedContent.replace(duplicatePattern2, `${cityName}'s diverse and growing business economy`);
    fixesApplied++;
  }

  // Fix 3: Remove duplicate city names in "verified City businesses with detailed contact information and City placement opportunities"
  const duplicatePattern3 = new RegExp(`verified\\s+${cityName}\\s+businesses\\s+with\\s+detailed\\s+contact\\s+information\\s+and\\s+${cityName}\\s+placement\\s+opportunities`, 'gi');
  if (duplicatePattern3.test(fixedContent)) {
    fixedContent = fixedContent.replace(duplicatePattern3, `verified ${cityName} businesses with detailed contact information and placement opportunities`);
    fixesApplied++;
  }

  // Fix 4: Remove duplicate city names in "City's City's business landscape"
  const duplicatePattern4 = new RegExp(`(${cityName}'s\\s+){2,}business\\s+landscape`, 'gi');
  if (duplicatePattern4.test(fixedContent)) {
    fixedContent = fixedContent.replace(duplicatePattern4, `${cityName}'s business landscape`);
    fixesApplied++;
  }

  // Fix 5: Remove duplicate city names in "City's City's thriving business hub"
  const duplicatePattern5 = new RegExp(`(${cityName}'s\\s+){2,}thriving\\s+business\\s+hub`, 'gi');
  if (duplicatePattern5.test(fixedContent)) {
    fixedContent = fixedContent.replace(duplicatePattern5, `${cityName}'s thriving business hub`);
    fixesApplied++;
  }

  return { fixedContent, fixesApplied };
}

// Function to fix broken titles that show "Vending Machine Locations in, state}"
function fixBrokenTitles(content, cityName, stateName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Fix broken title pattern
  const brokenTitlePattern = /Vending Machine Locations in,\s*([^}]+)\}/g;
  if (brokenTitlePattern.test(fixedContent)) {
    fixedContent = fixedContent.replace(brokenTitlePattern, `Vending Machine Locations in ${cityName}, ${stateName}`);
    fixesApplied++;
  }

  return { fixedContent, fixesApplied };
}

// Function to fix a single city page
function fixOverFixedPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);
    
    // Extract city and state from directory name
    const cityParts = cityName.split('-');
    const stateName = cityParts[cityParts.length - 1]; // Last part is usually state
    const cityDisplayName = cityParts.slice(0, -1).map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(' ');
    
    let totalFixes = 0;
    let fixedContent = content;

    // Apply over-fixing fixes
    const overFixedFixes = fixOverFixedCityNames(fixedContent, cityDisplayName);
    fixedContent = overFixedFixes.fixedContent;
    totalFixes += overFixedFixes.fixesApplied;

    // Apply broken title fixes
    const titleFixes = fixBrokenTitles(fixedContent, cityDisplayName, stateName);
    fixedContent = titleFixes.fixedContent;
    totalFixes += titleFixes.fixesApplied;

    // Only write if we made changes
    if (totalFixes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed over-fixing in ${cityName} - ${totalFixes} issues resolved`);
      return { updated: true, cityName, fixesApplied: totalFixes };
    } else {
      console.log(`ℹ️  ${cityName} - No over-fixing issues found`);
      return { updated: false, cityName, fixesApplied: 0 };
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Function to fix all over-fixed city pages
function fixAllOverFixedPages() {
  console.log('🔧 Starting to fix over-fixed city names and broken titles...\n');
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city directories\n`);
  
  let totalUpdated = 0;
  let totalFixes = 0;
  let totalErrors = 0;
  const results = [];
  
  // Process each city directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = fixOverFixedPage(pagePath);
      results.push(result);
      
      if (result.updated) {
        totalUpdated++;
        totalFixes += result.fixesApplied;
      } else if (result.reason === 'error') {
        totalErrors++;
      }
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OVER-FIXING FIX SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total Updated: ${totalUpdated}`);
  console.log(`🔧 Total Fixes Applied: ${totalFixes}`);
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Updated Cities:');
    results.filter(r => r.updated).forEach(result => {
      console.log(`   • ${result.cityName} - ${result.fixesApplied} fixes applied`);
    });
  }
  
  // Show errors if any
  if (totalErrors > 0) {
    console.log('\n⚠️  Errors:');
    results.filter(r => r.reason === 'error').forEach(result => {
      console.log(`   • ${result.cityName}: ${result.error}`);
    });
  }
  
  console.log('\n🎉 Over-fixing fix completed!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run the consistency check again to verify all fixes');
  console.log('   2. Check that city names are no longer duplicated');
  console.log('   3. Verify titles are properly formatted');
  
  return { results, summary: { totalUpdated, totalFixes, totalErrors, totalProcessed: results.length } };
}

// Run the fix
if (require.main === module) {
  fixAllOverFixedPages();
}

module.exports = { fixAllOverFixedPages, fixOverFixedPage };
