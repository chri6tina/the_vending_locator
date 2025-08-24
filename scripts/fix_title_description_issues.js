const fs = require('fs');
const path = require('path');

// Function to fix common title-description issues
function fixCommonIssues(content, cityName, stateName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Fix 1: Replace generic "diverse and growing business economy" with city-specific text
  const genericPattern = /diverse and growing business economy/gi;
  if (genericPattern.test(fixedContent)) {
    const citySpecificText = `${cityName}'s diverse and growing business economy`;
    fixedContent = fixedContent.replace(genericPattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 2: Replace generic "thriving business hub" with city-specific text
  const hubPattern = /thriving business hub/gi;
  if (hubPattern.test(fixedContent)) {
    const citySpecificText = `${cityName}'s thriving business hub`;
    fixedContent = fixedContent.replace(hubPattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 3: Replace generic "business landscape" with city-specific text
  const landscapePattern = /business landscape/gi;
  if (landscapePattern.test(fixedContent)) {
    const citySpecificText = `${cityName}'s business landscape`;
    fixedContent = fixedContent.replace(landscapePattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 4: Replace generic "vending opportunities" with city-specific text
  const opportunitiesPattern = /vending opportunities/gi;
  if (opportunitiesPattern.test(fixedContent)) {
    const citySpecificText = `${cityName} vending opportunities`;
    fixedContent = fixedContent.replace(opportunitiesPattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 5: Replace generic "verified businesses" with city-specific text
  const businessesPattern = /verified businesses with detailed contact information/gi;
  if (businessesPattern.test(fixedContent)) {
    const citySpecificText = `verified ${cityName} businesses with detailed contact information`;
    fixedContent = fixedContent.replace(businessesPattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 6: Replace generic "placement opportunities" with city-specific text
  const placementPattern = /placement opportunities/gi;
  if (placementPattern.test(fixedContent)) {
    const citySpecificText = `${cityName} placement opportunities`;
    fixedContent = fixedContent.replace(placementPattern, citySpecificText);
    fixesApplied++;
  }

  // Fix 7: Replace generic "business economy" with city-specific text
  const economyPattern = /business economy/gi;
  if (economyPattern.test(fixedContent)) {
    const citySpecificText = `${cityName} business economy`;
    fixedContent = fixedContent.replace(economyPattern, citySpecificText);
    fixesApplied++;
  }

  return { fixedContent, fixesApplied };
}

// Function to fix broken title extractions (JSX code in titles)
function fixBrokenTitles(content, cityName, stateName) {
  let fixedContent = content;
  let fixesApplied = 0;

  // Fix broken title patterns that show raw JSX
  const brokenTitlePatterns = [
    // Pattern 1: Title with JSX code
    /(\w+)\s*<\/motion\.h1>\s*<motion\.p\s+initial=\{[^}]+\}/g,
    // Pattern 2: Title with incomplete JSX
    /(\w+)\s*<\/motion\.h1>\s*<motion\.p\s+initial=\{[^}]+\}\s+animate=\{[^}]+\}\s+transition=\{[^}]+\}\s+className="[^"]*">\s*([^<]+)/g,
    // Pattern 3: Title with motion attributes
    /(\w+)\s*<\/motion\.h1>\s*<motion\.p\s+initial=\{[^}]+\}\s+animate=\{[^}]+\}\s+transition=\{[^}]+\}\s+className="[^"]*">\s*([^<]+)\s*<\/motion\.p>/g
  ];

  brokenTitlePatterns.forEach(pattern => {
    if (pattern.test(fixedContent)) {
      // Replace with proper title format
      fixedContent = fixedContent.replace(pattern, (match, city, description) => {
        fixesApplied++;
        return `Vending Machine Locations in ${cityName}, ${stateName}`;
      });
    }
  });

  return { fixedContent, fixesApplied };
}

// Function to fix a single city page
function fixCityPage(filePath) {
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

    // Apply common fixes
    const commonFixes = fixCommonIssues(fixedContent, cityDisplayName, stateName);
    fixedContent = commonFixes.fixedContent;
    totalFixes += commonFixes.fixesApplied;

    // Apply title fixes
    const titleFixes = fixBrokenTitles(fixedContent, cityDisplayName, stateName);
    fixedContent = titleFixes.fixedContent;
    totalFixes += titleFixes.fixesApplied;

    // Only write if we made changes
    if (totalFixes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed ${cityName} - ${totalFixes} issues resolved`);
      return { updated: true, cityName, fixesApplied: totalFixes };
    } else {
      console.log(`ℹ️  ${cityName} - No issues found`);
      return { updated: false, cityName, fixesApplied: 0 };
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Function to fix all city pages
function fixAllCityPages() {
  console.log('🔧 Starting automated fix for title-description consistency issues...\n');
  
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
      const result = fixCityPage(pagePath);
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
  console.log('📊 FIX SUMMARY');
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
  
  console.log('\n🎉 Auto-fix completed!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run the consistency check again to verify fixes');
  console.log('   2. Review any remaining manual issues');
  console.log('   3. Update the comprehensive template to prevent future issues');
  
  return { results, summary: { totalUpdated, totalFixes, totalErrors, totalProcessed: results.length } };
}

// Run the fix
if (require.main === module) {
  fixAllCityPages();
}

module.exports = { fixAllCityPages, fixCityPage };
