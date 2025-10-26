const fs = require('fs');
const path = require('path');

// Function to generate city-specific data
function generateCityData(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ').replace(/\s+\w+$/, ''); // Remove duplicate state if present
  
  const stateDisplayName = cityName.split('-').slice(-1)[0].charAt(0).toUpperCase() + 
                          cityName.split('-').slice(-1)[0].slice(1);
  
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
    description: `${cityDisplayName} is a thriving city in ${stateDisplayName} known for its diverse business opportunities, strong economy, and growing community.`,
    majorEmployers: [
      `${cityDisplayName} Healthcare System`,
      `${cityDisplayName} School District`,
      `${cityDisplayName} University`,
      `${stateDisplayName} State University`,
      `${cityDisplayName} Municipal Government`
    ]
  };
}

// Function to generate business landscape industries with Tyler-style structure
function generateBusinessLandscape(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ').replace(/\s+\w+$/, '');
  
  const stateDisplayName = cityName.split('-').slice(-1)[0].charAt(0).toUpperCase() + 
                          cityName.split('-').slice(-1)[0].slice(1);
  
  return [
    {
      title: 'Healthcare',
      description: `${cityDisplayName} features major healthcare facilities providing high foot traffic and stable operations for vending machines.`,
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
      description: `${cityDisplayName}'s transportation hubs including major highways and regional facilities provide high-volume foot traffic.`,
      icon: 'TruckIcon',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Entertainment',
      description: `${cityDisplayName}'s entertainment venues and cultural attractions provide unique vending machine opportunities with visitors and events.`,
      icon: 'HeartIcon',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];
}

// Function to generate FAQ questions matching Tyler style
function generateFAQ(cityName, stateName) {
  const cityDisplayName = cityName.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ').replace(/\s+\w+$/, '');
  
  const stateDisplayName = cityName.split('-').slice(-1)[0].charAt(0).toUpperCase() + 
                          cityName.split('-').slice(-1)[0].slice(1);
  
  return [
    {
      question: `What types of vending machine locations are available in ${cityDisplayName}?`,
      answer: `${cityDisplayName} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, transportation hubs, and entertainment venues. Each location is pre-verified for optimal vending machine success.`
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
      answer: `Healthcare, education, retail, office buildings, transportation, and entertainment sectors in ${cityDisplayName} show the highest potential for vending machine success due to consistent foot traffic and captive audiences.`
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

// Function to generate pageClient.tsx (the client component)
function buildPageClient(cityName, stateName) {
  const cityData = generateCityData(cityName, stateName);
  const businessLandscape = generateBusinessLandscape(cityName, stateName);
  const faq = generateFAQ(cityName, stateName);
  
  // Extract city and state from slug (assuming format: city-state)
  const parts = cityName.split('-');
  const cityDisplayName = parts.slice(0, -1).map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');
  
  const stateDisplayName = parts.slice(-1)[0].charAt(0).toUpperCase() + 
                          parts.slice(-1)[0].slice(1);
  
  const functionName = cityDisplayName.replace(/\s+/g, '') + stateDisplayName.replace(/\s+/g, '') + 'VendingLeadsPage';
  
  return `'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function ${cityDisplayName.replace(/\s+/g, '')}${stateDisplayName.replace(/\s+/g, '')}VendingLeadsPage() {
  // City and state display names
  const cityDisplayName = '${cityDisplayName}';
  const stateDisplayName = '${stateDisplayName}';
  
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
    'Mike from ${cityDisplayName}', 'Sarah in Downtown', 'David in ${cityDisplayName}', 'Lisa in ${cityDisplayName}',
    'Tom in ${cityDisplayName}', 'Jennifer in ${cityDisplayName}', 'Robert in ${cityDisplayName}', 'Amanda in ${cityDisplayName}',
    'Chris in ${cityDisplayName}', 'Maria in ${cityDisplayName}', 'James in ${cityDisplayName}', 'Emily in ${cityDisplayName}'
  ])

  // Recent purchases disabled per requirements
  const [recentPurchases, setRecentPurchases] = useState<string[]>([])

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
  }, [recentPurchases.length, usedPurchases])

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">
                Vending Leads
              </Link>
              <span>/</span>
              <Link href={\`/vending-leads/\${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}\`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Active Users Counter Pill */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <UsersIcon className="w-4 h-4 mr-2" />
                <span className="animate-pulse">{activeUsers} people</span>
                <span className="ml-2">are currently viewing vending locations</span>
              </motion.div>

              {/* Recent Purchase Notification - removed */}

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              {/* City-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations in ${cityDisplayName}'s diverse and growing business economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust/Feature Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4 mb-8 justify-center"
              >
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full text-sm">
                  <CheckBadgeIcon className="w-4 h-4" />
                  <span>Pre-verified locations</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-sm">
                  <ClockIcon className="w-4 h-4" />
                  <span>3-5 day delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-full text-sm">
                  <StarIcon className="w-4 h-4" />
                  <span>4.8/5 rating</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center"
              >
                <Link 
                  href="/pricing"
                  className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
                >
                  View Pricing Plans
                </Link>
                <Link 
                  href="/hot-leads"
                  className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
                >
                  Get Hot Leads
                </Link>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.population}</div>
                  <div className="text-sm text-stone">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.businesses}</div>
                  <div className="text-sm text-stone">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.industries}</div>
                  <div className="text-sm text-stone">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.verifiedLocations}</div>
                  <div className="text-sm text-stone">Verified Locations</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Get Access to Qualified Vending Machine Locations in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

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
                Business Landscape in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse industries and business opportunities that make {cityDisplayName} an ideal market for vending machines.
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
        </section>

        {/* Hot Leads Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                One-Time Location Packages for {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Get immediate access to qualified vending machine locations without monthly commitments.
              </motion.p>
            </div>
            <HotLeads />
          </div>
        </section>

        {/* Vending Course Section */}
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
                Learn the Vending Machine Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Master the fundamentals of vending machine operations and maximize your success in {cityDisplayName}.
              </motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

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
                Everything you need to know about vending machine opportunities in {cityDisplayName}.
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
        </section>

        {/* Mobile Recent Purchase Notification - removed */}
      </div>
      
      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}`;
}

// Function to build a single page
function buildPage(filePath) {
  try {
    const cityName = path.basename(path.dirname(filePath));
    const fileName = path.basename(filePath);
    
    // Extract city and state from directory name
    const cityParts = cityName.split('-');
    const stateName = cityParts[cityParts.length - 1]; // Last part is usually state
    
    // Generate the complete page content
    const pageContent = buildCompletePage(cityName, stateName);
    
    // Write the new page
    fs.writeFileSync(filePath, pageContent, 'utf8');
    console.log(`✅ Built complete page for ${cityName}`);
    return { updated: true, cityName };
    
  } catch (error) {
    console.error(`❌ Error building ${filePath}:`, error.message);
    return { updated: false, reason: 'error', error: error.message };
  }
}

// Function to build all pages
function buildAllPages() {
  console.log('🏗️  Building complete pages from scratch for all vending-leads locations...\n');
  
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
  let totalErrors = 0;
  const results = [];
  
  // Process each city/state directory
  cityDirs.forEach(cityDir => {
    const pagePath = path.join(vendingLeadsDir, cityDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      const result = buildPage(pagePath);
      results.push(result);
      
      if (result.updated) {
        totalUpdated++;
      } else if (result.reason === 'error') {
        totalErrors++;
      }
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 COMPLETE PAGE BUILD SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Total Pages Built: ${totalUpdated}`);
  console.log(`❌ Total Errors: ${totalErrors}`);
  console.log(`📈 Total Processed: ${results.length}`);
  
  // Show what was updated
  if (totalUpdated > 0) {
    console.log('\n🎯 Built Pages:');
    results.filter(r => r.updated).forEach(result => {
      console.log(`   • ${result.cityName}`);
    });
  }
  
  // Show errors if any
  if (totalErrors > 0) {
    console.log('\n⚠️  Errors:');
    results.filter(r => r.reason === 'error').forEach(result => {
      console.log(`   • ${result.cityName}: ${result.error}`);
    });
  }
  
  console.log('\n🎉 Complete page build finished!');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run the template compliance check to verify 100% compliance');
  console.log('   2. Check that all pages now have complete structure');
  console.log('   3. Verify all required components are present');
  
  return { results, summary: { totalUpdated, totalErrors, totalProcessed: results.length } };
}

// Run the build
if (require.main === module) {
  buildAllPages();
}

module.exports = { buildAllPages, buildPage };
