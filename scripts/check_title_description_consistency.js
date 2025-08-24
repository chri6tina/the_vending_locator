const fs = require('fs');
const path = require('path');

// Function to extract city and state from page title
function extractCityStateFromTitle(content) {
  const titleMatch = content.match(/Vending Machine Locations.*?in\s+([^,]+),\s*([^<>\n]+)/i);
  if (titleMatch) {
    return {
      city: titleMatch[1].trim(),
      state: titleMatch[2].trim()
    };
  }
  return null;
}

// Function to extract city and state from description
function extractCityStateFromDescription(content) {
  const descriptionMatch = content.match(/Get pre-qualified vending machine locations in ([^']+)'s/);
  if (descriptionMatch) {
    return descriptionMatch[1].trim();
  }
  return null;
}

// Function to check for regional mismatches
function checkForRegionalMismatches(content, cityName, stateName) {
  const regionalTerms = [
    'dallas-fort worth metroplex',
    'dfw metroplex', 
    'dallas metroplex',
    'fort worth metroplex',
    'houston metro',
    'austin metro',
    'san antonio metro',
    'chicago metro',
    'los angeles metro',
    'new york metro',
    'miami metro',
    'atlanta metro',
    'denver metro',
    'seattle metro',
    'portland metro',
    'phoenix metro',
    'las vegas metro',
    'orlando metro',
    'tampa metro',
    'nashville metro'
  ];

  const contentLower = content.toLowerCase();
  const mismatches = [];

  regionalTerms.forEach(term => {
    if (contentLower.includes(term)) {
      // Check if this regional term doesn't match the city
      const cityLower = cityName.toLowerCase();
      const stateLower = stateName.toLowerCase();
      
      // If the regional term doesn't contain the city name, it's a mismatch
      if (!term.includes(cityLower) && !term.includes(stateLower)) {
        mismatches.push({
          term: term,
          type: 'regional_mismatch',
          description: `Page mentions "${term}" but title is for ${cityName}, ${stateName}`
        });
      }
    }
  });

  return mismatches;
}

// Function to check for generic descriptions
function checkForGenericDescriptions(content, cityName, stateName) {
  const genericPhrases = [
    'diverse and growing business economy',
    'verified businesses with detailed contact information',
    'placement opportunities',
    'thriving business hub',
    'business landscape',
    'vending opportunities'
  ];

  const contentLower = content.toLowerCase();
  const issues = [];

  // Check if description is too generic
  if (contentLower.includes('diverse and growing business economy') && 
      !contentLower.includes(cityName.toLowerCase())) {
    issues.push({
      type: 'generic_description',
      description: 'Description mentions "diverse and growing business economy" but doesn\'t specify the city'
    });
  }

  return issues;
}

// Function to scan a single city page
function scanCityPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);
    
    // Extract title information
    const titleInfo = extractCityStateFromTitle(content);
    const descriptionCity = extractCityStateFromDescription(content);
    
    if (!titleInfo) {
      return {
        city: cityName,
        fileName,
        status: '❌ Error',
        error: 'Could not extract title information'
      };
    }

    // Check for mismatches
    const regionalMismatches = checkForRegionalMismatches(content, titleInfo.city, titleInfo.state);
    const genericIssues = checkForGenericDescriptions(content, titleInfo.city, titleInfo.state);
    
    // Check if description city matches title city
    const cityMismatch = descriptionCity && descriptionCity !== titleInfo.city;
    
    const allIssues = [
      ...regionalMismatches,
      ...genericIssues,
      ...(cityMismatch ? [{
        type: 'city_mismatch',
        description: `Title says "${titleInfo.city}" but description mentions "${descriptionCity}"`
      }] : [])
    ];

    // Determine status
    let status = '✅ Consistent';
    if (allIssues.length > 0) {
      status = allIssues.length === 1 ? '⚠️ Minor Issue' : '❌ Major Issues';
    }
    
    return {
      city: cityName,
      fileName,
      status,
      titleCity: titleInfo.city,
      titleState: titleInfo.state,
      descriptionCity: descriptionCity,
      issues: allIssues,
      issueCount: allIssues.length,
      lastModified: fs.statSync(filePath).mtime
    };
    
  } catch (error) {
    return {
      city: path.basename(path.dirname(filePath)),
      fileName: path.basename(filePath),
      status: '❌ Error',
      error: error.message
    };
  }
}

// Function to scan all city pages
function checkAllCityPages() {
  console.log('🔍 Scanning all city pages for title-description consistency...\n');
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city directories\n`);
  
  const results = [];
  let totalConsistent = 0;
  let totalMinorIssues = 0;
  let totalMajorIssues = 0;
  let totalErrors = 0;
  
  // Process each city directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = scanCityPage(pagePath);
      results.push(result);
      
      // Count by status
      if (result.status === '✅ Consistent') {
        totalConsistent++;
      } else if (result.status === '⚠️ Minor Issue') {
        totalMinorIssues++;
      } else if (result.status === '❌ Major Issues') {
        totalMajorIssues++;
      } else if (result.status === '❌ Error') {
        totalErrors++;
      }
    }
  });
  
  // Generate summary
  const summary = {
    totalPages: results.length,
    consistent: totalConsistent,
    minorIssues: totalMinorIssues,
    majorIssues: totalMajorIssues,
    errors: totalErrors,
    consistencyRate: Math.round((totalConsistent / results.length) * 100)
  };
  
  // Generate detailed report
  const report = generateDetailedReport(results, summary);
  
  // Save report to file
  const reportPath = path.join(__dirname, '..', 'TITLE_DESCRIPTION_CONSISTENCY_REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf8');
  
  // Display summary
  console.log('📊 CONSISTENCY SUMMARY');
  console.log('='.repeat(50));
  console.log(`📈 Total Pages: ${summary.totalPages}`);
  console.log(`✅ Consistent: ${summary.consistent} (${summary.consistencyRate}%)`);
  console.log(`⚠️  Minor Issues: ${summary.minorIssues}`);
  console.log(`❌ Major Issues: ${summary.majorIssues}`);
  console.log(`❌ Errors: ${summary.errors}`);
  
  console.log('\n🚨 CRITICAL ISSUES FOUND:');
  if (summary.majorIssues > 0) {
    console.log(`   ${summary.majorIssues} pages have major title-description mismatches!`);
    console.log('   These MUST be fixed immediately for SEO and user trust.');
  }
  
  if (summary.minorIssues > 0) {
    console.log(`   ${summary.minorIssues} pages have minor consistency issues.`);
    console.log('   These should be fixed for better user experience.');
  }
  
  console.log(`\n📄 Detailed report saved to: TITLE_DESCRIPTION_CONSISTENCY_REPORT.md`);
  
  return { results, summary };
}

// Function to generate detailed report
function generateDetailedReport(results, summary) {
  let report = `# 🔍 Title-Description Consistency Report\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n`;
  report += `**Total Pages Scanned:** ${summary.totalPages}\n\n`;
  
  report += `## 📊 Summary Statistics\n\n`;
  report += `| Metric | Count | Percentage |\n`;
  report += `|--------|-------|------------|\n`;
  report += `| Consistent | ${summary.consistent} | ${summary.consistencyRate}% |\n`;
  report += `| Minor Issues | ${summary.minorIssues} | ${Math.round((summary.minorIssues / summary.totalPages) * 100)}% |\n`;
  report += `| Major Issues | ${summary.majorIssues} | ${Math.round((summary.majorIssues / summary.totalPages) * 100)}% |\n`;
  report += `| Errors | ${summary.errors} | ${Math.round((summary.errors / summary.totalPages) * 100)}% |\n\n`;
  
  report += `## 🚨 Critical Issues (Must Fix Immediately)\n\n`;
  const majorIssues = results.filter(r => r.status === '❌ Major Issues');
  if (majorIssues.length > 0) {
    report += `These pages have major title-description mismatches that hurt SEO:\n\n`;
    majorIssues.forEach(page => {
      report += `### ${page.city}\n`;
      report += `- **Title:** ${page.titleCity}, ${page.titleState}\n`;
      report += `- **Description City:** ${page.descriptionCity || 'Not found'}\n`;
      report += `- **Issues:** ${page.issueCount}\n`;
      page.issues.forEach(issue => {
        report += `  - ${issue.description}\n`;
      });
      report += `\n`;
    });
  } else {
    report += `✅ No major issues found!\n\n`;
  }
  
  report += `## ⚠️ Minor Issues (Should Fix)\n\n`;
  const minorIssues = results.filter(r => r.status === '⚠️ Minor Issue');
  if (minorIssues.length > 0) {
    report += `These pages have minor consistency issues:\n\n`;
    minorIssues.forEach(page => {
      report += `### ${page.city}\n`;
      report += `- **Title:** ${page.titleCity}, ${page.titleState}\n`;
      report += `- **Issues:** ${page.issueCount}\n`;
      page.issues.forEach(issue => {
        report += `  - ${issue.description}\n`;
      });
      report += `\n`;
    });
  } else {
    report += `✅ No minor issues found!\n\n`;
  }
  
  report += `## ✅ Consistent Pages\n\n`;
  const consistent = results.filter(r => r.status === '✅ Consistent');
  if (consistent.length > 0) {
    report += `These pages have perfect title-description consistency:\n\n`;
    consistent.forEach(page => {
      report += `- ${page.city}: ${page.titleCity}, ${page.titleState}\n`;
    });
  }
  
  return report;
}

// Run the scan
if (require.main === module) {
  checkAllCityPages();
}

module.exports = { checkAllCityPages, scanCityPage };
