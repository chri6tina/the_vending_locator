const fs = require('fs');
const path = require('path');

// City size configuration with realistic counter ranges
const citySizeConfig = {
  // Major cities (1M+ population) - high traffic
  major: {
    cities: ['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose'],
    startRange: [35, 45],
    fluctuationRange: [30, 50]
  },
  // Large cities (500K-1M population) - medium-high traffic
  large: {
    cities: ['austin', 'nashville', 'charlotte', 'orlando', 'atlanta', 'boston', 'denver', 'seattle', 'portland', 'miami'],
    startRange: [25, 35],
    fluctuationRange: [20, 40]
  },
  // Medium cities (200K-500K population) - medium traffic
  medium: {
    cities: ['grand-prairie', 'mansfield', 'arlington', 'irving', 'plano', 'fort-worth', 'corpus-christi', 'lubbock', 'amarillo'],
    startRange: [12, 20],
    fluctuationRange: [8, 25]
  },
  // Small cities (100K-200K population) - lower traffic
  small: {
    cities: ['ames', 'waterloo', 'cedar-rapids', 'davenport', 'dayton', 'youngstown', 'akron', 'cary', 'durham'],
    startRange: [8, 15],
    fluctuationRange: [5, 20]
  },
  // State capitals and important cities (regardless of size)
  important: {
    cities: ['sacramento', 'salt-lake-city', 'minneapolis', 'st-louis', 'kansas-city', 'oklahoma-city', 'new-orleans', 'pittsburgh'],
    startRange: [18, 28],
    fluctuationRange: [15, 32]
  }
};

// Function to determine city size and get appropriate counter values
function getCityConfig(cityName) {
  // Check if it's a major city
  if (citySizeConfig.major.cities.some(majorCity => cityName.includes(majorCity))) {
    return citySizeConfig.major;
  }
  // Check if it's a large city
  if (citySizeConfig.large.cities.some(largeCity => cityName.includes(largeCity))) {
    return citySizeConfig.large;
  }
  // Check if it's a medium city
  if (citySizeConfig.medium.cities.some(mediumCity => cityName.includes(mediumCity))) {
    return citySizeConfig.medium;
  }
  // Check if it's a small city
  if (citySizeConfig.small.cities.some(smallCity => cityName.includes(smallCity))) {
    return citySizeConfig.small;
  }
  // Check if it's an important city
  if (citySizeConfig.important.cities.some(importantCity => cityName.includes(importantCity))) {
    return citySizeConfig.important;
  }
  // Default to medium city for unknown cities
  return citySizeConfig.medium;
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
    
    // Get city configuration
    const config = getCityConfig(cityName);
    const startValue = getRandomInRange(config.startRange[0], config.startRange[1]);
    const minFluctuation = config.fluctuationRange[0];
    const maxFluctuation = config.fluctuationRange[1];
    
    // Update the initial counter value
    let updatedContent = content.replace(
      /const \[activeUsers, setActiveUsers\] = useState\(\d+\)/,
      `const [activeUsers, setActiveUsers] = useState(${startValue})`
    );
    
    // Update the counter logic if it exists
    if (updatedContent.includes('Math.max(') && updatedContent.includes('Math.min(')) {
      updatedContent = updatedContent.replace(
        /Math\.max\(\d+, Math\.min\(\d+, newValue\)\)/,
        `Math.max(${minFluctuation}, Math.min(${maxFluctuation}, newValue))`
      );
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    console.log(`✅ Updated ${cityName} - starts at ${startValue}, fluctuates ${minFluctuation}-${maxFluctuation} (${config.cities.includes(cityName.split('-')[0]) ? 'Known city' : 'Defaulted to medium'})`);
    return { updated: true, cityName, startValue, minFluctuation, maxFluctuation, config: config.cities.includes(cityName.split('-')[0]) ? 'Known' : 'Defaulted' };
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Main function to process all city pages
function setRealisticCounters() {
  console.log('🎯 Starting to set realistic active users counters on all city pages...\n');
  
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
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Updated Cities:');
    results.filter(r => r.updated).forEach(result => {
      console.log(`   • ${result.cityName} - starts at ${result.startValue}, fluctuates ${result.minFluctuation}-${result.maxFluctuation} (${result.config})`);
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
  console.log('\n📋 City Size Guidelines:');
  console.log('   • Major Cities (1M+): 35-45 users, fluctuate 30-50');
  console.log('   • Large Cities (500K-1M): 25-35 users, fluctuate 20-40');
  console.log('   • Medium Cities (200K-500K): 12-20 users, fluctuate 8-25');
  console.log('   • Small Cities (100K-200K): 8-15 users, fluctuate 5-20');
  console.log('   • Important Cities: 18-28 users, fluctuate 15-32');
}

// Run the script
if (require.main === module) {
  setRealisticCounters();
}

module.exports = { setRealisticCounters, updateCityPage };
