const fs = require('fs');
const path = require('path');

// Read states.ts file and extract cities
function extractCitiesFromStates() {
  const statesFile = path.join(__dirname, '..', 'src', 'data', 'states.ts');
  const content = fs.readFileSync(statesFile, 'utf8');
  
  const cities = [];
  const stateRegex = /name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],\s*cities:\s*\[([^\]]+)\]/g;
  const cityRegex = /\{\s*name:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"]\s*\}/g;
  
  let stateMatch;
  while ((stateMatch = stateRegex.exec(content)) !== null) {
    const stateName = stateMatch[1];
    const stateSlug = stateMatch[2];
    const citiesContent = stateMatch[3];
    
    let cityMatch;
    while ((cityMatch = cityRegex.exec(citiesContent)) !== null) {
      const cityName = cityMatch[1];
      const citySlug = cityMatch[2];
      cities.push({
        name: cityName,
        slug: citySlug,
        state: stateName,
        stateSlug: stateSlug
      });
    }
  }
  
  return cities;
}

// Check which cities don't have pages
function findMissingCities() {
  const allCities = extractCitiesFromStates();
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  
  const existingPages = new Set();
  if (fs.existsSync(vendingLeadsDir)) {
    const dirs = fs.readdirSync(vendingLeadsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    dirs.forEach(dir => {
      if (dir.includes('-')) {
        existingPages.add(dir);
      }
    });
  }
  
  const missing = allCities.filter(city => !existingPages.has(city.slug));
  
  return missing;
}

// Generate pageClient.tsx based on Manchester template
function generatePageClient(city) {
  const cityDisplayName = city.name;
  const stateDisplayName = city.state;
  const citySlug = city.slug;
  
  // Generate function name
  const functionName = cityDisplayName.replace(/[^a-zA-Z0-9]/g, '') + stateDisplayName.replace(/[^a-zA-Z0-9]/g, '') + 'VendingLeadsPage';
  
  // Generate city data
  const citySize = citySlug.split('-').length;
  let population, businesses, industries, verifiedLocations;
  
  if (citySize <= 2) {
    population = '50K-100K';
    businesses = '5K-10K';
    industries = '8-12';
    verifiedLocations = '100-200';
  } else if (citySize === 3) {
    population = '100K-500K';
    businesses = '10K-50K';
    industries = '10-15';
    verifiedLocations = '200-400';
  } else {
    population = '500K+';
    businesses = '50K+';
    industries = '15+';
    verifiedLocations = '400+';
  }
  
  const userNames = [
    `Mike from ${cityDisplayName}`, `Sarah in Downtown`, `David in ${cityDisplayName}`, `Lisa in ${cityDisplayName}`,
    `Tom in ${cityDisplayName}`, `Jennifer in ${cityDisplayName}`, `Robert in ${cityDisplayName}`, `Amanda in ${cityDisplayName}`,
    `Chris in ${cityDisplayName}`, `Maria in ${cityDisplayName}`, `James in ${cityDisplayName}`, `Emily in ${cityDisplayName}`
  ];
  
  return `'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import states from '@/data/states'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function ${functionName}() {
  // City and state display names
  const cityDisplayName = '${cityDisplayName}';
  const stateDisplayName = '${stateDisplayName}';
  
  // City-specific data
  const cityData = {
    'name': '${cityDisplayName}',
    'state': '${stateDisplayName}',
    'population': '${population}',
    'businesses': '${businesses}',
    'industries': '${industries}',
    'verifiedLocations': '${verifiedLocations}',
    'rating': '4.7/5',
    'description': 'Thriving business community in ${stateDisplayName}'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(25)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    ${userNames.map(n => `'${n}'`).join(', ')}
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(20, Math.min(35, newValue))
      })
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names
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
            setUsedNames(prev => new Set([...prev, nextIndex]));
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]));
        return randomIndex
      })
    }, 5000);
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  // Build related cities (for internal linking)
  const state = states.find(s => s.slug === '${city.stateSlug}');
  const relatedCities = state ? state.cities.filter(c => c.slug !== '${citySlug}').slice(0, 8) : [];

  // FAQ items reused for JSON-LD
  const faqItems = [
    { q: 'What types of vending machine locations are available in ${cityDisplayName}?', a: '${cityDisplayName} offers diverse vending opportunities including healthcare facilities, educational institutions, retail locations, office buildings, and manufacturing facilities. Each location is pre-verified for optimal vending machine success.' },
    { q: 'How quickly can I get vending machine leads for ${cityDisplayName}?', a: 'Our ${cityDisplayName} vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry.' },
    { q: 'What makes ${cityDisplayName} a good market for vending machines?', a: "${cityDisplayName} features a thriving business community with diverse industries and strong economic activity. The city's business density and diverse demographics create ideal conditions for vending machine success." },
    { q: 'Do you provide ongoing support for ${cityDisplayName} locations?', a: 'Yes, we offer comprehensive support including location research, contact information, placement strategies, and ongoing consultation to ensure your vending machines thrive in ${cityDisplayName}.' },
    { q: 'What industries in ${cityDisplayName} are best for vending machines?', a: 'Healthcare, education, retail, office buildings, and manufacturing in ${cityDisplayName} show the highest potential for vending machine success due to consistent foot traffic and diverse demographics.' },
    { q: 'How do you verify the quality of ${cityDisplayName} vending locations?', a: 'We conduct thorough research on each ${cityDisplayName} location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.' },
    { q: 'Can I get customized vending leads for specific areas of ${cityDisplayName}?', a: 'Absolutely! We can provide targeted vending leads for specific neighborhoods, business districts, or industrial areas within ${cityDisplayName} based on your preferences and target market requirements.' },
    { q: "What's the typical ROI for vending machines in ${cityDisplayName}?", a: "Vending machines in ${cityDisplayName} typically show strong ROI due to the city's business density and diverse economy. Our research shows average payback periods of 12-18 months for well-placed machines." }
  ];

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
              <Link href={\`/vending-leads/\${stateDisplayName.toLowerCase().replace(/\\s+/g, '-')}\`} className="hover:text-navy transition-colors">
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
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div></motion.div>

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

              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.7/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button 
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing')
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                    Get Started
                  </button>

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
        <section id="pricing" className="py-16 bg-warm-white">
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
              
              <motion.div
                key="Healthcare"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <HeartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Healthcare facilities in ${cityDisplayName} offer stable operations with high foot traffic from patients, visitors, and staff.</p>
              </motion.div>
              <motion.div
                key="Education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 mb-4">
                  <AcademicCapIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">Educational institutions in ${cityDisplayName} provide consistent student and staff populations for vending machine opportunities.</p>
              </motion.div>
              <motion.div
                key="Manufacturing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  <CpuChipIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing</h3>
                <p className="text-stone leading-relaxed">${cityDisplayName}'s manufacturing sector offers large employee bases and extended operating hours, perfect for vending machine placement.</p>
              </motion.div>
              <motion.div
                key="Retail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.30000000000000004 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 mb-4">
                  <ShoppingBagIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail</h3>
                <p className="text-stone leading-relaxed">Retail locations throughout ${cityDisplayName} provide high customer traffic and diverse demographics for vending machine success.</p>
              </motion.div>
              <motion.div
                key="Office Buildings"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Office Buildings</h3>
                <p className="text-stone leading-relaxed">Professional office spaces in ${cityDisplayName} offer captive audiences during business hours with consistent daily traffic.</p>
              </motion.div>
              <motion.div
                key="Transportation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <TruckIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Transportation</h3>
                <p className="text-stone leading-relaxed">${cityDisplayName}'s transportation hubs including airports, bus stations, and transit centers provide high-volume foot traffic.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <section id="hot-leads" className="py-16 bg-warm-white">
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
        <section id="faq" className="py-16 bg-warm-white">
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
                className="text-lg text-chocolate/70 leading-relaxed"
              >
                Everything you need to know about vending machine opportunities in {cityDisplayName}.
              </motion.p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{item.q}</h3>
                  <p className="text-stone leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* More cities in state */}
        {relatedCities.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">More cities in {stateDisplayName}</h2>
              <div className="flex flex-wrap gap-3">
                {relatedCities.map(city => (
                  <Link key={city.slug} href={\`/vending-leads/\${city.slug}\`} className="px-3 py-2 rounded-lg border border-gray-200 bg-cream/60 text-chocolate hover:text-navy">
                    Vending Leads in {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>
      
      <Footer />
      <ZipCodeModalWrapper />
      {/* JSON-LD: Breadcrumbs and FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thevendinglocator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Vending Leads', item: 'https://www.thevendinglocator.com/vending-leads' },
              { '@type': 'ListItem', position: 3, name: '${stateDisplayName}', item: 'https://www.thevendinglocator.com/vending-leads/${city.stateSlug}' },
              { '@type': 'ListItem', position: 4, name: '${cityDisplayName}', item: 'https://www.thevendinglocator.com/vending-leads/${citySlug}' }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(i => ({
              '@type': 'Question',
              name: i.q,
              acceptedAnswer: { '@type': 'Answer', text: i.a }
            }))
          })
        }}
      />
    </>
  )
}
`;
}

// Generate page.tsx (metadata)
function generatePage(city) {
  const cityDisplayName = city.name;
  const stateDisplayName = city.state;
  const citySlug = city.slug;
  
  return `import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in ${cityDisplayName}, ${stateDisplayName} - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout ${cityDisplayName}, ${stateDisplayName}. Find qualified businesses for vending machine placement.",
  keywords: "vending machines ${cityDisplayName}, vending leads ${cityDisplayName}, vending locations ${cityDisplayName}, vending opportunities ${cityDisplayName}",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/${citySlug}"
  },
  openGraph: {
    title: "Vending Machine Leads in ${cityDisplayName}, ${stateDisplayName} - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout ${cityDisplayName}, ${stateDisplayName}. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/${citySlug}",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in ${cityDisplayName}, ${stateDisplayName} - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout ${cityDisplayName}, ${stateDisplayName}. Find qualified businesses for vending machine placement."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function Page() {
  return <PageClient />
}
`;
}

// Main function
function main() {
  console.log('Finding missing cities...');
  const missingCities = findMissingCities();
  
  console.log(`Found ${missingCities.length} missing cities from states.ts`);
  console.log(`Current pages: 785`);
  console.log(`Target: 1000 pages`);
  console.log(`Need to create: ${Math.max(0, 1000 - 785)} pages`);
  
  // First, create pages for cities in states.ts that don't have pages
  // Then we'll need to add more cities to states.ts to reach 1000
  const needed = Math.max(0, 1000 - 785);
  const citiesToCreate = missingCities.slice(0, Math.min(missingCities.length, needed));
  
  if (citiesToCreate.length < needed) {
    console.log(`\nNote: Only ${citiesToCreate.length} cities found in states.ts without pages.`);
    console.log(`We need ${needed - citiesToCreate.length} more cities added to states.ts to reach 1000 pages.`);
  }
  
  console.log(`\nCreating ${citiesToCreate.length} city pages...`);
  
  const vendingLeadsDir = path.join(__dirname, '..', 'src', 'app', 'vending-leads');
  let created = 0;
  let errors = 0;
  
  citiesToCreate.forEach((city, index) => {
    try {
      const cityDir = path.join(vendingLeadsDir, city.slug);
      
      // Create directory
      if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true });
      }
      
      // Generate and write pageClient.tsx
      const pageClientContent = generatePageClient(city);
      fs.writeFileSync(path.join(cityDir, 'pageClient.tsx'), pageClientContent, 'utf8');
      
      // Generate and write page.tsx
      const pageContent = generatePage(city);
      fs.writeFileSync(path.join(cityDir, 'page.tsx'), pageContent, 'utf8');
      
      created++;
      if ((index + 1) % 10 === 0) {
        console.log(`Created ${index + 1} pages...`);
      }
    } catch (error) {
      console.error(`Error creating ${city.slug}:`, error.message);
      errors++;
    }
  });
  
  console.log(`\nComplete!`);
  console.log(`Pages created: ${created}`);
  console.log(`Errors: ${errors}`);
  console.log(`\nNext step: Run the enhancement script to add unique content:`);
  console.log(`node scripts/enhance_city_pages_content.js`);
}

if (require.main === module) {
  main();
}

module.exports = { findMissingCities, generatePageClient, generatePage };

