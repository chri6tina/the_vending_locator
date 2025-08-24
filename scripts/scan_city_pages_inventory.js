const fs = require('fs');
const path = require('path');

// Function to check if a page has all required template components
function checkTemplateCompliance(content) {
  const checks = {
    activeUsersCounter: content.includes('const [activeUsers, setActiveUsers] = useState(') && !content.includes('useState(0)'),
    heroSection: content.includes('Vending Machine Locations') && content.includes('bg-warm-white'),
    pricingSection: content.includes('<PricingTable />'),
    businessLandscape: content.includes('Business Landscape') || content.includes('business landscape'),
    hotLeads: content.includes('<HotLeads />'),
    vendingCourse: content.includes('<VendingCourse />'),
    faqSection: content.includes('Frequently Asked Questions') || content.includes('FAQ'),
    breadcrumbs: content.includes('Home') && content.includes('Vending Leads'),
    requiredImports: content.includes('useState') && content.includes('useEffect') && content.includes('motion'),
    heroicons: content.includes('@heroicons/react/24/solid')
  };
  
  const passedChecks = Object.values(checks).filter(Boolean).length;
  const totalChecks = Object.keys(checks).length;
  const compliancePercentage = Math.round((passedChecks / totalChecks) * 100);
  
  return {
    checks,
    passedChecks,
    totalChecks,
    compliancePercentage,
    isCompliant: compliancePercentage >= 80
  };
}

// Function to get active users counter info
function getActiveUsersInfo(content) {
  const useStateMatch = content.match(/const \[activeUsers, setActiveUsers\] = useState\((\d+)\)/);
  if (!useStateMatch) return { hasCounter: false, startValue: 0, needsFix: false };
  
  const startValue = parseInt(useStateMatch[1]);
  return {
    hasCounter: true,
    startValue,
    needsFix: startValue === 0
  };
}

// Function to scan a single city page
function scanCityPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);
    
    const templateCompliance = checkTemplateCompliance(content);
    const activeUsersInfo = getActiveUsersInfo(content);
    
    // Determine status
    let status = '❌ Needs Update';
    if (templateCompliance.isCompliant && !activeUsersInfo.needsFix) {
      status = '✅ Complete';
    } else if (templateCompliance.compliancePercentage >= 60) {
      status = '⚠️ Partial Template';
    }
    
    // Determine template status
    let templateStatus = '❌ Missing Template';
    if (templateCompliance.isCompliant) {
      templateStatus = '✅ Full Template';
    } else if (templateCompliance.compliancePercentage >= 60) {
      templateStatus = '⚠️ Partial Template';
    }
    
    return {
      city: cityName,
      fileName,
      status,
      templateStatus,
      activeUsers: activeUsersInfo.startValue,
      needsCounterFix: activeUsersInfo.needsFix,
      templateCompliance: templateCompliance.compliancePercentage,
      lastModified: fs.statSync(filePath).mtime,
      fileSize: fs.statSync(filePath).size,
      checks: templateCompliance.checks
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
function scanAllCityPages() {
  console.log('🔍 Scanning all city pages for inventory...\n');
  
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city directories\n`);
  
  const results = [];
  let totalComplete = 0;
  let totalPartial = 0;
  let totalNeedsUpdate = 0;
  let totalErrors = 0;
  let totalCounterIssues = 0;
  
  // Process each city directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = scanCityPage(pagePath);
      results.push(result);
      
      // Count by status
      if (result.status === '✅ Complete') {
        totalComplete++;
      } else if (result.status === '⚠️ Partial Template') {
        totalPartial++;
      } else if (result.status === '❌ Needs Update') {
        totalNeedsUpdate++;
      } else if (result.status === '❌ Error') {
        totalErrors++;
      }
      
      // Count counter issues
      if (result.needsCounterFix) {
        totalCounterIssues++;
      }
    }
  });
  
  // Generate summary
  const summary = {
    totalPages: results.length,
    complete: totalComplete,
    partial: totalPartial,
    needsUpdate: totalNeedsUpdate,
    errors: totalErrors,
    counterIssues: totalCounterIssues,
    complianceRate: Math.round((totalComplete / results.length) * 100)
  };
  
  // Generate detailed report
  const report = generateDetailedReport(results, summary);
  
  // Save report to file
  const reportPath = path.join(__dirname, 'CITY_PAGES_SCAN_REPORT.md');
  fs.writeFileSync(reportPath, report, 'utf8');
  
  // Display summary
  console.log('📊 SCAN SUMMARY');
  console.log('='.repeat(50));
  console.log(`📈 Total Pages: ${summary.totalPages}`);
  console.log(`✅ Complete & Template-Compliant: ${summary.complete} (${summary.complianceRate}%)`);
  console.log(`⚠️  Partial Template: ${summary.partial}`);
  console.log(`❌ Needs Update: ${summary.needsUpdate}`);
  console.log(`❌ Errors: ${summary.errors}`);
  console.log(`🔧 Counter Issues: ${summary.counterIssues}`);
  
  console.log('\n🎯 PRIORITY ACTIONS:');
  if (summary.counterIssues > 0) {
    console.log(`   1. Fix ${summary.counterIssues} pages with counter starting at 0`);
  }
  if (summary.needsUpdate > 0) {
    console.log(`   2. Update ${summary.needsUpdate} pages to full template`);
  }
  if (summary.partial > 0) {
    console.log(`   3. Complete ${summary.partial} partially-compliant pages`);
  }
  
  console.log(`\n📄 Detailed report saved to: CITY_PAGES_SCAN_REPORT.md`);
  
  return { results, summary };
}

// Function to generate detailed report
function generateDetailedReport(results, summary) {
  let report = `# 🔍 City Pages Scan Report\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n`;
  report += `**Total Pages Scanned:** ${summary.totalPages}\n\n`;
  
  report += `## 📊 Summary Statistics\n\n`;
  report += `| Metric | Count | Percentage |\n`;
  report += `|--------|-------|------------|\n`;
  report += `| Complete & Template-Compliant | ${summary.complete} | ${summary.complianceRate}% |\n`;
  report += `| Partial Template | ${summary.partial} | ${Math.round((summary.partial / summary.totalPages) * 100)}% |\n`;
  report += `| Needs Update | ${summary.needsUpdate} | ${Math.round((summary.needsUpdate / summary.totalPages) * 100)}% |\n`;
  report += `| Errors | ${summary.errors} | ${Math.round((summary.errors / summary.totalPages) * 100)}% |\n`;
  report += `| Counter Issues | ${summary.counterIssues} | ${Math.round((summary.counterIssues / summary.totalPages) * 100)}% |\n\n`;
  
  report += `## 🎯 Priority Actions\n\n`;
  if (summary.counterIssues > 0) {
    report += `1. **Fix Counter Issues** (${summary.counterIssues} pages) - Run \`fix_active_users_counters.js\`\n`;
  }
  if (summary.needsUpdate > 0) {
    report += `2. **Update Template** (${summary.needsUpdate} pages) - Apply full template\n`;
  }
  if (summary.partial > 0) {
    report += `3. **Complete Partial Pages** (${summary.partial} pages) - Add missing components\n`;
  }
  report += '\n';
  
  report += `## 📋 Detailed Page Status\n\n`;
  
  // Group by status
  const byStatus = {
    'Complete': results.filter(r => r.status === '✅ Complete'),
    'Partial Template': results.filter(r => r.status === '⚠️ Partial Template'),
    'Needs Update': results.filter(r => r.status === '❌ Needs Update'),
    'Errors': results.filter(r => r.status === '❌ Error')
  };
  
  Object.entries(byStatus).forEach(([status, pages]) => {
    if (pages.length === 0) return;
    
    report += `### ${status} (${pages.length} pages)\n\n`;
    report += `| City | Template Compliance | Active Users | Counter Issue | Last Modified |\n`;
    report += `|------|-------------------|--------------|---------------|---------------|\n`;
    
    pages.forEach(page => {
      if (page.error) {
        report += `| ${page.city} | ❌ Error | - | - | - |\n`;
      } else {
        const compliance = page.templateCompliance ? `${page.templateCompliance}%` : 'N/A';
        const counterIssue = page.needsCounterFix ? '❌ Starts at 0' : '✅ OK';
        const lastMod = page.lastModified ? page.lastModified.toLocaleDateString() : 'N/A';
        report += `| ${page.city} | ${compliance} | ${page.activeUsers} | ${counterIssue} | ${lastMod} |\n`;
      }
    });
    report += '\n';
  });
  
  // Show pages with counter issues
  const counterIssues = results.filter(r => r.needsCounterFix);
  if (counterIssues.length > 0) {
    report += `## 🔧 Counter Issues (${counterIssues.length} pages)\n\n`;
    report += `These pages need the active users counter fixed:\n\n`;
    counterIssues.forEach(page => {
      report += `- ${page.city} (currently starts at ${page.activeUsers})\n`;
    });
    report += '\n';
  }
  
  // Show pages needing template updates
  const needsTemplate = results.filter(r => r.status === '❌ Needs Update' && !r.needsCounterFix);
  if (needsTemplate.length > 0) {
    report += `## 🏗️ Template Updates Needed (${needsTemplate.length} pages)\n\n`;
    report += `These pages need the full template applied:\n\n`;
    needsTemplate.forEach(page => {
      report += `- ${page.city} (${page.templateCompliance}% compliant)\n`;
    });
    report += '\n';
  }
  
  return report;
}

// Run the scan
if (require.main === module) {
  scanAllCityPages();
}

module.exports = { scanAllCityPages, scanCityPage, checkTemplateCompliance };
