const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Function to get all existing vending-leads directories
function getExistingDirectories() {
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  const items = fs.readdirSync(vendingLeadsDir);
  const directories = items.filter(item => {
    const fullPath = path.join(vendingLeadsDir, item);
    if (!fs.statSync(fullPath).isDirectory()) return false;
    // Only include directories that have a page.tsx file
    return fs.existsSync(path.join(fullPath, 'page.tsx'));
  });
  return directories.sort();
}

// Function to test a single URL
function testURL(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    const timeout = 10000; // 10 second timeout
    
    const req = protocol.get(url, { timeout }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        working: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        statusText: err.message,
        headers: {},
        working: false,
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        statusText: 'Timeout',
        headers: {},
        working: false,
        error: 'Request timeout'
      });
    });
  });
}

// Function to test all URLs with progress tracking
async function testAllURLs() {
  const existingDirs = getExistingDirectories();
  const baseURL = 'https://thevendinglocator.com';
  const urls = existingDirs.map(dir => `${baseURL}/vending-leads/${dir}`);
  
  console.log('🚀 STARTING COMPREHENSIVE URL TESTING\n');
  console.log(`📊 Testing ${urls.length} URLs...\n`);
  
  const results = [];
  let completed = 0;
  
  // Test URLs in batches to avoid overwhelming the server
  const batchSize = 5;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchPromises = batch.map(url => testURL(url));
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    completed += batch.length;
    const progress = ((completed / urls.length) * 100).toFixed(1);
    console.log(`⏳ Progress: ${completed}/${urls.length} (${progress}%)`);
    
    // Small delay between batches to be respectful to your server
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
}

// Function to analyze test results
function analyzeResults(results) {
  const working = results.filter(r => r.working);
  const broken = results.filter(r => !r.working);
  const statusCodes = {};
  
  results.forEach(result => {
    const status = result.status;
    statusCodes[status] = (statusCodes[status] || 0) + 1;
  });
  
  console.log('\n📋 TEST RESULTS ANALYSIS');
  console.log('========================');
  console.log(`✅ Working URLs: ${working.length}`);
  console.log(`❌ Broken URLs: ${broken.length}`);
  console.log(`📊 Total URLs: ${results.length}`);
  console.log(`🎯 Success Rate: ${((working.length / results.length) * 100).toFixed(1)}%`);
  
  console.log('\n📊 Status Code Breakdown:');
  Object.keys(statusCodes).sort((a, b) => parseInt(a) - parseInt(b)).forEach(status => {
    const count = statusCodes[status];
    const percentage = ((count / results.length) * 100).toFixed(1);
    const icon = status >= 200 && status < 400 ? '✅' : '❌';
    console.log(`  ${icon} ${status}: ${count} URLs (${percentage}%)`);
  });
  
  if (broken.length > 0) {
    console.log('\n🚨 BROKEN URLS DETAILS:');
    broken.forEach(result => {
      console.log(`  ❌ ${result.url}`);
      console.log(`     Status: ${result.status} - ${result.statusText}`);
      if (result.error) {
        console.log(`     Error: ${result.error}`);
      }
      console.log('');
    });
  }
  
  return { working, broken, statusCodes };
}

// Function to generate a comprehensive report
function generateReport(results, analysis) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = `url_test_report_${timestamp}.md`;
  
  let report = `# 🔍 COMPREHENSIVE URL TESTING REPORT\n\n`;
  report += `**Generated:** ${new Date().toLocaleString()}\n`;
  report += `**Total URLs Tested:** ${results.length}\n`;
  report += `**Working URLs:** ${analysis.working.length}\n`;
  report += `**Broken URLs:** ${analysis.broken.length}\n`;
  report += `**Success Rate:** ${((analysis.working.length / results.length) * 100).toFixed(1)}%\n\n`;
  
  report += `## 📊 Status Code Summary\n\n`;
  Object.keys(analysis.statusCodes).sort((a, b) => parseInt(a) - parseInt(b)).forEach(status => {
    const count = analysis.statusCodes[status];
    const percentage = ((count / results.length) * 100).toFixed(1);
    const icon = status >= 200 && status < 400 ? '✅' : '❌';
    report += `- ${icon} **${status}**: ${count} URLs (${percentage}%)\n`;
  });
  
  if (analysis.broken.length > 0) {
    report += `\n## 🚨 BROKEN URLS\n\n`;
    analysis.broken.forEach(result => {
      report += `### ❌ ${result.url}\n`;
      report += `- **Status:** ${result.status} - ${result.statusText}\n`;
      if (result.error) {
        report += `- **Error:** ${result.error}\n`;
      }
      report += `\n`;
    });
  }
  
  report += `## ✅ WORKING URLS\n\n`;
  analysis.working.forEach(result => {
    report += `- ✅ ${result.url} (${result.status})\n`;
  });
  
  report += `\n## 📝 RECOMMENDATIONS\n\n`;
  
  if (analysis.broken.length === 0) {
    report += `🎉 **Excellent! All URLs are working correctly.**\n\n`;
    report += `### Next Steps:\n`;
    report += `1. Monitor URLs regularly for any new issues\n`;
    report += `2. Set up automated monitoring with Google Search Console\n`;
    report += `3. Consider implementing health checks in your deployment process\n`;
  } else {
    report += `⚠️ **Action Required: ${analysis.broken.length} URLs need attention.**\n\n`;
    report += `### Immediate Actions:\n`;
    report += `1. Investigate and fix the broken URLs listed above\n`;
    report += `2. Check server logs for error details\n`;
    report += `3. Verify server configuration and routing\n`;
    report += `4. Test URLs manually to confirm fixes\n`;
    report += `5. Re-run this test after fixes are implemented\n`;
  }
  
  report += `\n### Long-term Monitoring:\n`;
  report += `- Set up automated URL testing weekly\n`;
  report += `- Monitor Google Search Console for 404 errors\n`;
  report += `- Implement health check endpoints\n`;
  report += `- Use tools like Screaming Frog for regular audits\n`;
  
  fs.writeFileSync(reportPath, report);
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return reportPath;
}

// Function to create a CSV export for easy analysis
function createCSVExport(results) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const csvPath = `url_test_results_${timestamp}.csv`;
  
  let csv = 'URL,Status,StatusText,Working,Error\n';
  results.forEach(result => {
    const url = result.url;
    const status = result.status;
    const statusText = result.statusText;
    const working = result.working ? 'Yes' : 'No';
    const error = result.error || '';
    
    csv += `"${url}","${status}","${statusText}","${working}","${error}"\n`;
  });
  
  fs.writeFileSync(csvPath, csv);
  console.log(`📊 CSV export saved to: ${csvPath}`);
  
  return csvPath;
}

// Main execution function
async function main() {
  try {
    console.log('🔍 COMPREHENSIVE URL TESTING TOOL\n');
    console.log('This tool will test all your vending-leads URLs to ensure they\'re working correctly.\n');
    
    // Test all URLs
    const results = await testAllURLs();
    
    // Analyze results
    const analysis = analyzeResults(results);
    
    // Generate reports
    const reportPath = generateReport(results, analysis);
    const csvPath = createCSVExport(results);
    
    console.log('\n✨ TESTING COMPLETE!');
    console.log('\n📁 Files Generated:');
    console.log(`  📄 Detailed Report: ${reportPath}`);
    console.log(`  📊 CSV Export: ${csvPath}`);
    
    if (analysis.broken.length === 0) {
      console.log('\n🎉 SUCCESS: All URLs are working correctly!');
      console.log('Your website is in excellent health.');
    } else {
      console.log(`\n⚠️  ATTENTION: ${analysis.broken.length} URLs need fixing.`);
      console.log('Please review the detailed report above.');
    }
    
    console.log('\n💡 TIP: Run this test regularly to catch issues early!');
    
  } catch (error) {
    console.error('\n❌ ERROR during testing:', error.message);
    console.log('\nPlease check your internet connection and try again.');
  }
}

// Run the main function
main();
