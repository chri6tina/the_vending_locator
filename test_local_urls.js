const fs = require('fs');
const path = require('path');
const http = require('http');

// Function to get all existing vending-leads directories
function getExistingDirectories() {
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  const items = fs.readdirSync(vendingLeadsDir);
  const directories = items.filter(item => {
    const fullPath = path.join(vendingLeadsDir, item);
    return fs.statSync(fullPath).isDirectory();
  });
  return directories.sort();
}

// Function to test a single URL against localhost
function testLocalURL(url) {
  return new Promise((resolve) => {
    const timeout = 5000; // 5 second timeout for local testing
    
    const req = http.get(url, { timeout }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        statusText: res.statusMessage,
        working: res.statusCode >= 200 && res.statusCode < 400
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        statusText: err.message,
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
        working: false,
        error: 'Request timeout'
      });
    });
  });
}

// Function to test all URLs locally
async function testLocalURLs() {
  const existingDirs = getExistingDirectories();
  const baseURL = 'http://localhost:3000';
  const urls = existingDirs.map(dir => `${baseURL}/vending-leads/${dir}`);
  
  console.log('🚀 TESTING URLs AGAINST LOCAL DEVELOPMENT SERVER\n');
  console.log(`📊 Testing ${urls.length} URLs at ${baseURL}...\n`);
  console.log('⚠️  Make sure your development server is running (npm run dev)\n');
  
  const results = [];
  let completed = 0;
  
  // Test URLs in smaller batches for local server
  const batchSize = 3;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchPromises = batch.map(url => testLocalURL(url));
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    completed += batch.length;
    const progress = ((completed / urls.length) * 100).toFixed(1);
    console.log(`⏳ Progress: ${completed}/${urls.length} (${progress}%)`);
    
    // Shorter delay for local testing
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  return results;
}

// Function to analyze local test results
function analyzeLocalResults(results) {
  const working = results.filter(r => r.working);
  const broken = results.filter(r => !r.working);
  const statusCodes = {};
  
  results.forEach(result => {
    const status = result.status;
    statusCodes[status] = (statusCodes[status] || 0) + 1;
  });
  
  console.log('\n📋 LOCAL TEST RESULTS ANALYSIS');
  console.log('==============================');
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
    console.log('\n🚨 BROKEN URLS (Local):');
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

// Function to generate local test report
function generateLocalReport(results, analysis) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = `local_url_test_report_${timestamp}.md`;
  
  let report = `# 🔍 LOCAL URL TESTING REPORT\n\n`;
  report += `**Generated:** ${new Date().toLocaleString()}\n`;
  report += `**Server:** http://localhost:3000\n`;
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
    report += `\n## 🚨 BROKEN URLS (Local)\n\n`;
    analysis.broken.forEach(result => {
      report += `### ❌ ${result.url}\n`;
      report += `- **Status:** ${result.status} - ${result.statusText}\n`;
      if (result.error) {
        report += `- **Error:** ${result.error}\n`;
      }
      report += `\n`;
    });
  }
  
  report += `## ✅ WORKING URLS (Local)\n\n`;
  analysis.working.forEach(result => {
    report += `- ✅ ${result.url} (${result.status})\n`;
  });
  
  report += `\n## 📝 RECOMMENDATIONS\n\n`;
  
  if (analysis.broken.length === 0) {
    report += `🎉 **Excellent! All URLs are working locally.**\n\n`;
    report += `### Next Steps:\n`;
    report += `1. Your local development environment is healthy\n`;
    report += `2. Consider running the production URL test\n`;
    report += `3. Deploy with confidence\n`;
  } else {
    report += `⚠️ **Local Issues Found: ${analysis.broken.length} URLs need attention.**\n\n`;
    report += `### Immediate Actions:\n`;
    report += `1. Check if your development server is running properly\n`;
    report += `2. Verify Next.js routing configuration\n`;
    report += `3. Check for build errors\n`;
    report += `4. Restart your development server\n`;
    report += `5. Fix any local issues before deploying\n`;
  }
  
  fs.writeFileSync(reportPath, report);
  console.log(`\n📄 Local test report saved to: ${reportPath}`);
  
  return reportPath;
}

// Main execution function
async function main() {
  try {
    console.log('🔍 LOCAL URL TESTING TOOL\n');
    console.log('This tool will test all your vending-leads URLs against your local development server.\n');
    console.log('Prerequisites:\n');
    console.log('  1. Make sure your development server is running (npm run dev)\n');
    console.log('  2. Server should be accessible at http://localhost:3000\n');
    console.log('  3. All pages should be built and accessible\n\n');
    
    // Test all URLs locally
    const results = await testLocalURLs();
    
    // Analyze results
    const analysis = analyzeLocalResults(results);
    
    // Generate report
    const reportPath = generateLocalReport(results, analysis);
    
    console.log('\n✨ LOCAL TESTING COMPLETE!');
    console.log('\n📁 Files Generated:');
    console.log(`  📄 Local Test Report: ${reportPath}`);
    
    if (analysis.broken.length === 0) {
      console.log('\n🎉 SUCCESS: All URLs are working locally!');
      console.log('Your development environment is healthy.');
      console.log('\n💡 Next: Consider running the production URL test to verify live site health.');
    } else {
      console.log(`\n⚠️  ATTENTION: ${analysis.broken.length} URLs have local issues.`);
      console.log('Please fix these before deploying to production.');
    }
    
  } catch (error) {
    console.error('\n❌ ERROR during local testing:', error.message);
    console.log('\nPlease check that your development server is running and try again.');
  }
}

// Run the main function
main();
