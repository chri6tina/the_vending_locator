const fs = require('fs');
const path = require('path');

// Function to generate city-specific data
function generateCityData(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
  
  const stateDisplayName = stateName.charAt(0).toUpperCase() + stateName.slice(1);
  
  // Generate realistic population and business numbers based on city size
  const citySize = cityName.split('-').length;
  let population, businesses, industries, verifiedLocations;
  
  if (citySize === 1) {
    // State page
    population = '1M+';
    businesses = '100K+';
    industries = '15+';
    verifiedLocations = '500+';
  } else if (citySize === 2) {
    // Small city
    population = '50K-100K';
    businesses = '5K-10K';
    industries = '8-12';
    verifiedLocations = '100-200';
  } else if (citySize === 3) {
    // Medium city
    population = '100K-500K';
    businesses = '10K-50K';
    industries = '10-15';
    verifiedLocations = '200-400';
  } else {
    // Large city
    population = '500K+';
    businesses = '50K+';
    industries = '15+';
    verifiedLocations = '400+';
  }
  
  return {
    name: cityDisplayName,
    state: stateDisplayName,
    population,
    businesses,
    industries,
    verifiedLocations: verifiedLocations,
    rating: '4.8/5',
    description: `Thriving business community in ${stateDisplayName}`
  };
}

// Function to generate business landscape industries
function generateBusinessLandscape(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
  
  return [
    {
      title: 'Healthcare',
      description: `${cityDisplayName} features modern healthcare facilities including hospitals, clinics, and medical offices with high foot traffic and stable operations.`,
      icon: 'BuildingOfficeIcon',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Education',
      description: `Educational institutions in ${cityDisplayName} provide consistent student populations and staff, creating ideal vending machine opportunities.`,
      icon: 'AcademicCapIcon',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Manufacturing',
      description: `${cityDisplayName}'s manufacturing sector offers large employee bases and extended operating hours, perfect for vending machine placement.`,
      icon: 'CpuChipIcon',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Retail',
      description: `Retail locations throughout ${cityDisplayName} provide high customer traffic and diverse demographics for vending machine success.`,
      icon: 'ShoppingBagIcon',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Office Buildings',
      description: `Professional office spaces in ${cityDisplayName} offer captive audiences during business hours with consistent daily traffic.`,
      icon: 'BuildingOfficeIcon',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Transportation',
      description: `${cityDisplayName}'s transportation hubs including airports, bus stations, and transit centers provide high-volume foot traffic.`,
      icon: 'TruckIcon',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];
}

// Function to generate FAQ questions
function generateFAQ(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
  
  const stateDisplayName = stateName.charAt(0).toUpperCase() + stateName.slice(1);
  
  return [
    {
      question: `What types of vending machine locations are available in ${cityDisplayName}?`,
      answer: `${cityDisplayName} offers diverse vending opportunities including healthcare facilities, educational institutions, manufacturing plants, retail locations, office buildings, and transportation hubs. Each location is pre-verified for optimal vending machine success.`
    },
    {
      question: `How quickly can I get vending machine leads for ${cityDisplayName}?`,
      answer: `Our ${cityDisplayName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.`
    },
    {
      question: `What makes ${cityDisplayName} a good market for vending machines?`,
      answer: `${cityDisplayName} features a strong business community with diverse industries, stable employment, and consistent foot traffic. The city's economic growth and business-friendly environment create ideal conditions for vending machine success.`
    },
    {
      question: `Do you provide ongoing support for ${cityDisplayName} locations?`,
      answer: `Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${cityDisplayName}.`
    },
    {
      question: `What industries in ${cityDisplayName} are best for vending machines?`,
      answer: `Healthcare, education, manufacturing, retail, office buildings, and transportation sectors in ${cityDisplayName} show the highest potential for vending machine success due to consistent foot traffic and captive audiences.`
    },
    {
      question: `How do you verify the quality of ${cityDisplayName} vending locations?`,
      answer: `We conduct thorough research on each ${cityDisplayName} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.`
    },
    {
      question: `Can I get customized vending leads for specific areas of ${cityDisplayName}?`,
      answer: `Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityDisplayName} based on your preferences and target market requirements.`
    },
    {
      question: `What's the typical ROI for vending machines in ${cityDisplayName}?`,
      answer: `Vending machines in ${cityDisplayName} typically show strong ROI due to the city's business density and consistent traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines.`
    }
  ];
}

// Function to add missing imports
function addMissingImports(content) {
  const requiredImports = [
    'useState', 'useEffect', 'motion', 'CheckBadgeIcon', 'StarIcon', 
    'ShieldCheckIcon', 'ClockIcon', 'MapPinIcon', 'UsersIcon', 
    'BuildingOfficeIcon', 'AcademicCapIcon', 'CpuChipIcon', 'HeartIcon', 
    'ShoppingBagIcon', 'TruckIcon', 'BuildingLibraryIcon', 'CurrencyDollarIcon', 'SparklesIcon'
  ];
  
  let updatedContent = content;
  let importsAdded = 0;
  
  // Check if Heroicons import exists
  if (!content.includes('@heroicons/react/24/solid')) {
    const importStatement = `import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'`;
    
    // Find the last import statement and add after it
    const lastImportIndex = content.lastIndexOf('import');
    if (lastImportIndex !== -1) {
      const nextLineIndex = content.indexOf('\n', lastImportIndex);
      if (nextLineIndex !== -1) {
        updatedContent = content.slice(0, nextLineIndex + 1) + importStatement + '\n' + content.slice(nextLineIndex + 1);
        importsAdded++;
      }
    }
  }
  
  return { updatedContent, importsAdded };
}

// Function to add missing state variables
function addMissingStateVariables(content, cityName, stateName) {
  if (content.includes('cityData')) {
    return { updatedContent: content, stateAdded: 0 };
  }
  
  const cityData = generateCityData(cityName, stateName);
  const stateVariables = `
  // City-specific data
  const cityData = ${JSON.stringify(cityData, null, 2).replace(/"/g, "'")};
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0)
  const [usedPurchases, setUsedPurchases] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from ${cityData.name}', 'Sarah in Downtown', 'David in ${cityData.name}', 'Lisa in ${cityData.name}',
    'Tom in ${cityData.name}', 'Jennifer in ${cityData.name}', 'Robert in ${cityData.name}', 'Amanda in ${cityData.name}',
    'Chris in ${cityData.name}', 'Maria in ${cityData.name}', 'James in ${cityData.name}', 'Emily in ${cityData.name}'
  ])

  // Recent purchases for social proof
  const [recentPurchases, setRecentPurchases] = useState([
    'Just purchased ${cityData.name} vending leads',
    'Got ${cityData.name} location package',
    'Bought ${cityData.name} business leads',
    'Acquired ${cityData.name} vending spots',
    'Secured ${cityData.name} locations'
  ])`;
  
  // Find the function declaration and add state variables after it
  const functionMatch = content.match(/export default function \w+\(\) {/);
  if (functionMatch) {
    const insertIndex = functionMatch.index + functionMatch[0].length;
    updatedContent = content.slice(0, insertIndex) + stateVariables + content.slice(insertIndex);
    return { updatedContent, stateAdded: 1 };
  }
  
  return { updatedContent: content, stateAdded: 0 };
}

// Function to add missing useEffect hooks
function addMissingUseEffectHooks(content) {
  if (content.includes('setActiveUsers') && content.includes('setInterval')) {
    return { updatedContent: content, hooksAdded: 0 };
  }
  
  const useEffectHooks = `
  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(25, Math.min(42, newValue))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names and recent purchases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames(prev => new Set([...prev, nextIndex]))
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]))
        return randomIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPurchaseIndex(prev => {
        if (usedPurchases.size > recentPurchases.length * 0.8) {
          setUsedPurchases(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % recentPurchases.length
          if (!usedPurchases.has(nextIndex)) {
            setUsedPurchases(prev => new Set([...prev, nextIndex]))
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * recentPurchases.length)
        setUsedPurchases(prev => new Set([...prev, randomIndex]))
        return randomIndex
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [recentPurchases.length, usedPurchases])`;
  
  // Find where to insert useEffect hooks (after state variables)
  const stateEndIndex = content.indexOf('return (');
  if (stateEndIndex !== -1) {
    updatedContent = content.slice(0, stateEndIndex) + useEffectHooks + '\n  ' + content.slice(stateEndIndex);
    return { updatedContent, hooksAdded: 1 };
  }
  
  return { updatedContent: content, hooksAdded: 0 };
}

// Function to add missing sections
function addMissingSections(content, cityName, stateName) {
  let updatedContent = content;
  let sectionsAdded = 0;
  
  // Check if Business Landscape section exists
  if (!content.includes('Business Landscape')) {
    const businessLandscape = generateBusinessLandscape(cityName, stateName);
    const businessLandscapeSection = `
        {/* Business Landscape */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Business Landscape in ${cityName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse industries and business opportunities that make ${cityName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')} an ideal market for vending machines.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${businessLandscape.map((industry, index) => `
              <motion.div
                key="${industry.title}"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: ${index * 0.1} }}
                viewport={{ once: true }}
                className="${industry.bgColor} p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="${industry.color} mb-4">
                  <${industry.icon} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">${industry.title}</h3>
                <p className="text-stone leading-relaxed">${industry.description}</p>
              </motion.div>`).join('')}
            </div>
          </div>
        </section>`;
    
    // Insert before the FAQ section or at the end if no FAQ
    const faqIndex = content.indexOf('FAQ');
    if (faqIndex !== -1) {
      updatedContent = content.slice(0, faqIndex) + businessLandscapeSection + '\n        ' + content.slice(faqIndex);
    } else {
      // Insert before Footer
      const footerIndex = content.indexOf('<Footer');
      if (footerIndex !== -1) {
        updatedContent = content.slice(0, footerIndex) + businessLandscapeSection + '\n      ' + content.slice(footerIndex);
      }
    }
    sectionsAdded++;
  }
  
  // Check if FAQ section exists
  if (!content.includes('FAQ')) {
    const faq = generateFAQ(cityName, stateName);
    const faqSection = `
        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone"
              >
                Everything you need to know about vending machine opportunities in ${cityName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')}.
              </motion.p>
            </div>
            
            <div className="space-y-6">
              ${faq.map((item, index) => `
              <motion.div
                key="${index}"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: ${index * 0.1} }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">${item.question}</h3>
                <p className="text-stone leading-relaxed">${item.answer}</p>
              </motion.div>`).join('')}
            </div>
          </div>
        </section>`;
    
    // Insert before Footer
    const footerIndex = content.indexOf('<Footer');
    if (footerIndex !== -1) {
      updatedContent = content.slice(0, footerIndex) + faqSection + '\n      ' + content.slice(footerIndex);
      sectionsAdded++;
    }
  }
  
  return { updatedContent, sectionsAdded };
}

// Function to fix a single page
function fixTemplateCompliance(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cityName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);
    
    // Extract city and state from directory name
    const cityParts = cityName.split('-');
    const stateName = cityParts[cityParts.length - 1]; // Last part is usually state
    
    let updatedContent = content;
    let totalFixes = 0;
    
    // Add missing imports
    const importFixes = addMissingImports(updatedContent);
    updatedContent = importFixes.updatedContent;
    totalFixes += importFixes.importsAdded;
    
    // Add missing state variables
    const stateFixes = addMissingStateVariables(updatedContent, cityName, stateName);
    updatedContent = stateFixes.updatedContent;
    totalFixes += stateFixes.stateAdded;
    
    // Add missing useEffect hooks
    const hookFixes = addMissingUseEffectHooks(updatedContent);
    updatedContent = hookFixes.updatedContent;
    totalFixes += hookFixes.hooksAdded;
    
    // Add missing sections
    const sectionFixes = addMissingSections(updatedContent, cityName, stateName);
    updatedContent = sectionFixes.updatedContent;
    totalFixes += sectionFixes.sectionsAdded;
    
    // Only write if we made changes
    if (totalFixes > 0) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Fixed template compliance in ${cityName} - ${totalFixes} issues resolved`);
      return { updated: true, cityName, fixesApplied: totalFixes };
    } else {
      console.log(`ℹ️  ${cityName} - Already template compliant`);
      return { updated: false, cityName, fixesApplied: 0 };
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Function to fix all pages
function fixAllTemplateCompliance() {
  console.log('🔧 Starting to fix template compliance across all vending-leads pages...\n');
  
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
  const results = [];
  
  // Process each city/state directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = fixTemplateCompliance(pagePath);
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
  console.log('📊 TEMPLATE COMPLIANCE FIX SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total Updated: ${totalUpdated}`);
  console.log(`🔧 Total Fixes Applied: ${totalFixes}`);
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Updated Pages:');
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
  
  console.log('\n🎉 Template compliance fix completed!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run the template compliance check again to verify all fixes');
  console.log('   2. Check that all pages now have required components');
  console.log('   3. Verify consistency is above 95%');
  
  return { results, summary: { totalUpdated, totalFixes, totalErrors, totalProcessed: results.length } };
}

// Run the fix
if (require.main === module) {
  fixAllTemplateCompliance();
}

module.exports = { fixAllTemplateCompliance, fixTemplateCompliance };
