const fs = require('fs');
const path = require('path');

// Configuration for different city types
const cityConfigs = {
  // Major cities (high traffic) - start with higher numbers
  major: {
    cities: ['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose'],
    startRange: [35, 45],
    fluctuationRange: [30, 50]
  },
  // State capitals and important cities
  important: {
    cities: ['austin', 'nashville', 'charlotte', 'orlando', 'atlanta', 'boston', 'denver', 'seattle', 'portland', 'miami'],
    startRange: [28, 38],
    fluctuationRange: [25, 42]
  },
  // Regular cities
  regular: {
    cities: ['*'], // Wildcard for all other cities
    startRange: [22, 32],
    fluctuationRange: [20, 38]
  }
};

// Function to determine city type and get appropriate counter values
function getCityConfig(cityName) {
  // Check if it's a major city
  if (cityConfigs.major.cities.some(majorCity => cityName.includes(majorCity))) {
    return cityConfigs.major;
  }
  // Check if it's an important city
  if (cityConfigs.important.cities.some(importantCity => cityName.includes(importantCity))) {
    return cityConfigs.important;
  }
  // Default to regular city
  return cityConfigs.regular;
}

// Function to generate random number within range
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update a single city page
function updateCityPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    
    // Skip if already updated (doesn't start with useState(0))
    if (!content.includes('const [activeUsers, setActiveUsers] = useState(0)')) {
      console.log(`⏭️  Skipping ${cityName} - already updated`);
      return { updated: false, reason: 'already updated' };
    }
    
    // Get city configuration
    const config = getCityConfig(cityName);
    const startValue = getRandomInRange(config.startRange[0], config.startRange[1]);
    const minFluctuation = config.fluctuationRange[0];
    const maxFluctuation = config.fluctuationRange[1];
    
    // Update the initial counter value
    let updatedContent = content.replace(
      /const \[activeUsers, setActiveUsers\] = useState\(0\)/,
      `const [activeUsers, setActiveUsers] = useState(${startValue})`
    );
    
    // Update the counter logic if it exists
    if (updatedContent.includes('// Fluctuating active users counter')) {
      updatedContent = updatedContent.replace(
        /\/\/ Fluctuating active users counter[\s\S]*?return \(\) => clearInterval\(interval\)\s*\)\s*}, \[\]/,
        `// Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(${minFluctuation}, Math.min(${maxFluctuation}, newValue))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, []`
      );
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    console.log(`✅ Updated ${cityName} - starts at ${startValue}, fluctuates ${minFluctuation}-${maxFluctuation}`);
    return { updated: true, cityName, startValue, minFluctuation, maxFluctuation };
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Main function to process all city pages
function fixAllCityPages() {
  console.log('🚀 Starting to fix active users counters on all city pages...\n');
  
  const vendingLeadsDir = path.join(__dirname, 'src', 'app', 'vending-leads');
  
  if (!fs.existsSync(vendingLeadsDir)) {
    console.error('❌ Vending leads directory not found!');
    return;
  }
  
  const cityDirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`📁 Found ${cityDirs.length} city directories\n`);
  
  let totalUpdated = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  const results = [];
  
  // Process each city directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = updateCityPage(pagePath);
      results.push({ city: cityDir, ...result });
      
      if (result.updated) {
        totalUpdated++;
      } else if (result.reason === 'already updated') {
        totalSkipped++;
      } else {
        totalErrors++;
      }
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total Updated: ${totalUpdated}`);
  console.log(`⏭️  Total Skipped: ${totalSkipped}`);
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Updated Cities:');
    results.filter(r => r.updated).forEach(result => {
      console.log(`   • ${result.cityName} - starts at ${result.startValue}, fluctuates ${result.minFluctuation}-${result.maxFluctuation}`);
    });
  }
  
  // Show errors if any
  if (totalErrors > 0) {
    console.log('\n⚠️  Errors:');
    results.filter(r => r.reason === 'error').forEach(result => {
      console.log(`   • ${result.city}: ${result.error}`);
    });
  }
  
  console.log('\n🎉 Script completed!');
}

// Run the script
if (require.main === module) {
  fixAllCityPages();
}

module.exports = { fixAllCityPages, updateCityPage };
