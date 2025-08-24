const fs = require('fs');
const path = require('path');

// Function to fix broken state page titles
function fixStatePageTitles(content, stateName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Fix broken title pattern for state pages
  const brokenStateTitlePattern = /Vending Machine Locations in,\s*([^}]+)\}/g;
  if (brokenStateTitlePattern.test(fixedContent)) {
    fixedContent = fixedContent.replace(brokenStateTitlePattern, `Vending Machine Locations in ${stateName}`);
    fixesApplied++;
  }

  return { fixedContent, fixesApplied };
}

// Function to fix incomplete city page title extraction
function fixCityPageTitleExtraction(content, cityName, stateName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Look for the main headline section and fix it if it's contaminated with JSX
  const headlinePattern = /<motion\.h1[^>]*>([^<]+)<\/motion\.h1>/g;
  const headlineMatch = headlinePattern.exec(content);
  
  if (headlineMatch) {
    const currentTitle = headlineMatch[1];
    
    // Check if the title is contaminated with JSX or incomplete
    if (currentTitle.includes('{') || currentTitle.includes('}') || 
        currentTitle.includes('</motion') || currentTitle.includes('<div') ||
        currentTitle.length > 100) {
      
      // Replace with clean title
      const cleanTitle = `Vending Machine Locations in ${cityName}, ${stateName}`;
      fixedContent = content.replace(headlineMatch[0], 
        `<motion.h1\n                initial={{ opacity: 0, y: 20 }}\n                animate={{ opacity: 1, y: 0 }}\n                transition={{ duration: 0.8, delay: 0.2 }}\n                className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"\n              >\n                ${cleanTitle}\n              </motion.h1>`);
      fixesApplied++;
    }
  }

  return { fixedContent, fixesApplied };
}

// Function to determine if a page is a state page or city page
function isStatePage(cityName) {
  // State pages are typically just the state name
  const stateNames = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
    'wisconsin', 'wyoming'
  ];
  
  return stateNames.includes(cityName.toLowerCase());
}

// Function to fix a single city/state page
function fixRemainingTitleIssues(filePath) {
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

    // Check if this is a state page or city page
    if (isStatePage(cityName)) {
      // Fix state page titles
      const stateFixes = fixStatePageTitles(fixedContent, stateName);
      fixedContent = stateFixes.fixedContent;
      totalFixes += stateFixes.fixesApplied;
    } else {
      // Fix city page titles
      const cityFixes = fixCityPageTitleExtraction(fixedContent, cityDisplayName, stateName);
      fixedContent = cityFixes.fixedContent;
      totalFixes += cityFixes.fixesApplied;
    }

    // Only write if we made changes
    if (totalFixes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed title issues in ${cityName} - ${totalFixes} issues resolved`);
      return { updated: true, cityName, fixesApplied: totalFixes, type: isStatePage(cityName) ? 'state' : 'city' };
    } else {
      console.log(`ℹ️  ${cityName} - No title issues found`);
      return { updated: false, cityName, fixesApplied: 0, type: isStatePage(cityName) ? 'state' : 'city' };
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Function to fix all remaining title issues
function fixAllRemainingTitleIssues() {
  console.log('🔧 Starting to fix remaining title extraction issues...\n');
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city/state directories\n`);
  
  let totalUpdated = 0;
  let totalFixes = 0;
  let totalErrors = 0;
  let statePagesFixed = 0;
  let cityPagesFixed = 0;
  const results = [];
  
  // Process each city/state directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = fixRemainingTitleIssues(pagePath);
      results.push(result);
      
      if (result.updated) {
        totalUpdated++;
        totalFixes += result.fixesApplied;
        if (result.type === 'state') {
          statePagesFixed++;
        } else {
          cityPagesFixed++;
        }
      } else if (result.reason === 'error') {
        totalErrors++;
      }
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 REMAINING TITLE ISSUES FIX SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total Updated: ${totalUpdated}`);
  console.log(`🔧 Total Fixes Applied: ${totalFixes}`);
  console.log(`🏛️  State Pages Fixed: ${statePagesFixed}`);
  console.log(`🏙️  City Pages Fixed: ${cityPagesFixed}`);
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Updated Pages:');
    results.filter(r => r.updated).forEach(result => {
      console.log(`   • ${result.cityName} (${result.type}) - ${result.fixesApplied} fixes applied`);
    });
  }
  
  // Show errors if any
  if (totalErrors > 0) {
    console.log('\n⚠️  Errors:');
    results.filter(r => r.reason === 'error').forEach(result => {
      console.log(`   • ${result.cityName}: ${result.error}`);
    });
  }
  
  console.log('\n🎉 Remaining title issues fix completed!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run the consistency check again to verify all fixes');
  console.log('   2. Check that titles are now properly formatted');
  console.log('   3. Verify consistency is above 90%');
  
  return { results, summary: { totalUpdated, totalFixes, totalErrors, totalProcessed: results.length, statePagesFixed, cityPagesFixed } };
}

// Run the fix
if (require.main === module) {
  fixAllRemainingTitleIssues();
}

module.exports = { fixAllRemainingTitleIssues, fixRemainingTitleIssues };
