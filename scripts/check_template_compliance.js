const fs = require('fs');
const path = require('path');

// Function to check if a page has all required components
function checkTemplateCompliance(content, cityName) {
  const issues = [];
  let score = 100;

  // Check for required imports
  const requiredImports = [
    'useState', 'useEffect', 'motion', 'CheckBadgeIcon', 'StarIcon', 
    'ShieldCheckIcon', 'ClockIcon', 'MapPinIcon', 'UsersIcon', 
    'BuildingOfficeIcon', 'AcademicCapIcon', 'CpuChipIcon'
  ];

  requiredImports.forEach(importName => {
    if (!content.includes(importName)) {
      issues.push(`Missing import: ${importName}`);
      score -= 5;
    }
  });

  // Check for required components
  const requiredComponents = [
    'Header', 'Footer', 'PricingTable', 'HotLeads', 'VendingCourse', 'ZipCodeModalWrapper'
  ];

  requiredComponents.forEach(component => {
    if (!content.includes(component)) {
      issues.push(`Missing component: ${component}`);
      score -= 10;
    }
  });

  // Check for required state variables
  const requiredState = [
    'activeUsers', 'currentUserIndex', 'cityData'
  ];

  requiredState.forEach(stateVar => {
    if (!content.includes(stateVar)) {
      issues.push(`Missing state variable: ${stateVar}`);
      score -= 8;
    }
  });

  // Check for required sections
  const requiredSections = [
    'Breadcrumb Navigation', 'Hero Section', 'Pricing Section', 
    'Business Landscape', 'Hot Leads Section', 'Vending Course Section', 'FAQ Section'
  ];

  requiredSections.forEach(section => {
    if (!content.includes(section)) {
      issues.push(`Missing section: ${section}`);
      score -= 12;
    }
  });

  // Check for proper centering classes
  if (!content.includes('text-center')) {
    issues.push('Missing text-center class in hero section');
    score -= 8;
  }

  if (!content.includes('mx-auto')) {
    issues.push('Missing mx-auto class for centering');
    score -= 5;
  }

  // Check for proper button styling
  if (!content.includes('bg-navy') || !content.includes('bg-coral')) {
    issues.push('Missing proper CTA button colors');
    score -= 8;
  }

  // Check for Heroicons usage (no emojis)
  const emojiPattern = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
  if (emojiPattern.test(content)) {
    issues.push('Contains emojis (should use Heroicons)');
    score -= 5;
  }

  // Check for proper counter implementation
  if (!content.includes('setActiveUsers') || !content.includes('setInterval')) {
    issues.push('Missing active users counter implementation');
    score -= 8;
  }

  // Check for city-specific content
  if (content.includes('{cityData.name}') || content.includes('{cityData.state}')) {
    issues.push('Contains template variables instead of hardcoded city names');
    score -= 10;
  }

  return { issues, score: Math.max(0, score) };
}

// Function to check a single page
function checkPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    
    const compliance = checkTemplateCompliance(content, cityName);
    
    return {
      cityName,
      filePath,
      score: compliance.score,
      issues: compliance.issues,
      issueCount: compliance.issues.length
    };
  } catch (error) {
    return {
      cityName: path.basename(path.dirname(filePath)),
      filePath,
      score: 0,
      issues: [`Error reading file: ${error.message}`],
      issueCount: 1
    };
  }
}

// Function to check all pages
function checkAllPages() {
  console.log('🔍 Checking template compliance across all vending-leads pages...\n');
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city/state directories\n`);
  
  const results = [];
  let totalScore = 0;
  let pagesWithIssues = 0;
  
  // Process each city/state directory
  cityDirs.forEach(cityDir => {
    const clientPath = path.join(vendingLeadsDir, cityDir, 'pageClient.tsx');
    const serverPath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    const targetPath = fs.existsSync(clientPath) ? clientPath : serverPath;
    
    if (fs.existsSync(targetPath)) {
      const result = checkPage(targetPath);
      results.push(result);
      totalScore += result.score;
      
      if (result.issueCount > 0) {
        pagesWithIssues++;
      }
    }
  });
  
  // Sort results by score (lowest first)
  results.sort((a, b) => a.score - b.score);
  
  // Calculate average score
  const averageScore = totalScore / results.length;
  
  // Summary
  console.log('='.repeat(80));
  console.log('📊 TEMPLATE COMPLIANCE REPORT');
  console.log('='.repeat(80));
  console.log(`📈 Average Compliance Score: ${averageScore.toFixed(1)}%`);
  console.log(`✅ Fully Compliant Pages: ${results.filter(r => r.score === 100).length}`);
  console.log(`⚠️  Pages with Issues: ${pagesWithIssues}`);
  console.log(`📊 Total Pages Analyzed: ${results.length}`);
  
  // Show pages with issues
  if (pagesWithIssues > 0) {
    console.log('\n🚨 PAGES WITH TEMPLATE ISSUES:');
    console.log('-'.repeat(50));
    
    results.filter(r => r.issueCount > 0).forEach(result => {
      console.log(`\n📍 ${result.cityName} (Score: ${result.score}%)`);
      result.issues.forEach(issue => {
        console.log(`   ❌ ${issue}`);
      });
    });
  }
  
  // Show top performing pages
  const topPages = results.filter(r => r.score === 100).slice(0, 5);
  if (topPages.length > 0) {
    console.log('\n🏆 TOP PERFORMING PAGES (100% Compliant):');
    console.log('-'.repeat(50));
    topPages.forEach(result => {
      console.log(`   ✅ ${result.cityName}`);
    });
  }
  
  // Recommendations
  console.log('\n📋 RECOMMENDATIONS:');
  console.log('-'.repeat(50));
  console.log('1. Fix pages with scores below 80% first');
  console.log('2. Ensure all required components are imported and used');
  console.log('3. Replace any emojis with Heroicons');
  console.log('4. Add missing sections (FAQ, Business Landscape, etc.)');
  console.log('5. Fix centering issues with proper CSS classes');
  console.log('6. Ensure CTA buttons are properly styled and visible');
  
  return { results, summary: { averageScore, pagesWithIssues, totalPages: results.length } };
}

// Run the check
if (require.main === module) {
  checkAllPages();
}

module.exports = { checkAllPages, checkPage };
