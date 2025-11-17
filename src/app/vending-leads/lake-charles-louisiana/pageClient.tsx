'use client'

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

export default function LakeCharlesLouisianaVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'Lake Charles';
  const stateDisplayName = 'Louisiana';
  
  // City-specific data
  const cityData = {
  'name': 'Lake Charles',
  'state': 'Louisiana',
  'population': '80K+',
  'businesses': '8K-10K',
  'industries': '8-10',
  'verifiedLocations': '150-250',
  'rating': '4.8/5',
  'description': 'Thriving business community in Louisiana'
};
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0)
  const [usedPurchases, setUsedPurchases] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Lake Charles', 'Sarah in Downtown', 'David in Lake Charles', 'Lisa in Lake Charles',
    'Tom in Lake Charles', 'Jennifer in Lake Charles', 'Robert in Lake Charles', 'Amanda in Lake Charles',
    'Chris in Lake Charles', 'Maria in Lake Charles', 'James in Lake Charles', 'Emily in Lake Charles'
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
              <Link href="/vending-leads/louisiana" className="hover:text-navy transition-colors">
                Louisiana
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
                Explore vending machine opportunities throughout Lake Charles's business network, where diverse industries, commercial zones, and community spaces offer multiple placement options for vending success.
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

              {/* CTA Button - Single button only */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center"
              >
                <a 
                  href="#pricing"
                  className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] text-center"
                >
                  View Pricing Plans
                </a>
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
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Lake Charles features modern healthcare facilities including hospitals, medical centers, and clinics with high patient and visitor traffic, creating consistent demand for vending services throughout the day.</p>
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
                <p className="text-stone leading-relaxed">Schools and educational institutions in Lake Charles offer excellent vending opportunities, with high-traffic areas including cafeterias, libraries, student centers, and athletic facilities.</p>
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
                <p className="text-stone leading-relaxed">Lake Charles's manufacturing sector features production facilities, warehouses, and industrial parks with large employee concentrations, ideal for vending machine services.</p>
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
                <p className="text-stone leading-relaxed">Retail locations throughout Lake Charles provide high customer traffic and diverse shopping experiences, creating multiple vending opportunities in malls, shopping centers, and retail districts.</p>
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
                <p className="text-stone leading-relaxed">Professional office spaces in Lake Charles house corporate headquarters, business centers, and professional services with captive employee audiences during business hours, creating consistent vending opportunities.</p>
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
                <p className="text-stone leading-relaxed">Lake Charles's transportation infrastructure includes major transit hubs and travel facilities with year-round passenger flow, ideal for vending machine services in waiting areas and terminals.</p>
              </motion.div>
            </div>
          </div>
        </section>        {/* Why Lake Charles? */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6"
              >
                Why Choose Lake Charles for Vending Machines?
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              <p className="text-lg text-stone leading-relaxed">
                Lake Charles offers strong vending opportunities through its diverse business community, combining local commerce, healthcare facilities, educational institutions, and growing commercial sectors. The city's business mix provides multiple placement options with varying traffic patterns, while Lake Charles's economic stability supports consistent consumer demand. The city's combination of established businesses and growing sectors creates reliable vending placement opportunities.
              </p>
            </motion.div>
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
              
              <motion.div
                key="0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What types of vending machine locations are available in Lake Charles?</h3>
                <p className="text-stone leading-relaxed">Lake Charles specializes in gaming, petrochemical, port operations, and tourism, with vending opportunities in casino resorts, chemical plants, port facilities, hotels, and industrial businesses. Each location is carefully selected based on Lake Charles's casino resort destination with major industrial port.</p>
              </motion.div>
              <motion.div
                key="1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How quickly can I start placing vending machines in Lake Charles?</h3>
                <p className="text-stone leading-relaxed">Our Lake Charles vending leads are delivered within 3-5 business days. We provide comprehensive research focused on Lake Charles's gaming, petrochemical, port operations, and tourism, including verified business contacts, foot traffic analysis in areas like Downtown casino area, Prien Lake commercial district, I-10 industrial corridor, and Westlake, and placement strategies specific to this market.</p>
              </motion.div>
              <motion.div
                key="2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What makes Lake Charles ideal for vending machine placement?</h3>
                <p className="text-stone leading-relaxed">Lake Charles's casino resort destination with major industrial port creates exceptional vending conditions. The concentration of gaming, petrochemical, port operations, and tourism ensures consistent customer traffic and strong revenue potential throughout the year.</p>
              </motion.div>
              <motion.div
                key="3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.30000000000000004 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">Which Lake Charles neighborhoods offer the best vending opportunities?</h3>
                <p className="text-stone leading-relaxed">Prime vending locations in Lake Charles include Downtown casino area, Prien Lake commercial district, I-10 industrial corridor, and Westlake. These areas combine high foot traffic, strong business density, and the demographics that drive vending machine success in Lake Charles's market.</p>
              </motion.div>
              <motion.div
                key="4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What industries in Lake Charles are most profitable for vending machines?</h3>
                <p className="text-stone leading-relaxed">In Lake Charles, gaming, petrochemical, port operations, and tourism sectors show exceptional vending performance. Lake Charles gaming facilities and industrial sites offer high-volume opportunities with shift workers, making these industries particularly attractive for strategic vending machine placement.</p>
              </motion.div>
              <motion.div
                key="5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How do you verify vending locations in Lake Charles?</h3>
                <p className="text-stone leading-relaxed">We conduct Lake Charles-specific research including verification of casino resorts, chemical plants, port facilities, hotels, and industrial businesses, foot traffic analysis in key areas like Downtown casino area, Prien Lake commercial district, I-10 industrial corridor, and Westlake, and detailed industry research. Our verification process specifically accounts for Lake Charles's casino resort destination with major industrial port.</p>
              </motion.div>
              <motion.div
                key="6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6000000000000001 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">Can I get customized leads for specific Lake Charles business districts?</h3>
                <p className="text-stone leading-relaxed">Yes! We can target specific Lake Charles areas like Downtown casino area, Prien Lake commercial district, I-10 industrial corridor, and Westlake, or focus on particular industries such as gaming, petrochemical, port operations, and tourism. Our team customizes lead packages based on your preferred territories and business type preferences within Lake Charles.</p>
              </motion.div>
              <motion.div
                key="7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7000000000000001 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What should I know about operating vending machines in Lake Charles?</h3>
                <p className="text-stone leading-relaxed">24/7 casino operations and industrial shift schedules require extended service and specific products. Understanding Lake Charles's casino resort destination with major industrial port and focusing on gaming, petrochemical, port operations, and tourism will maximize your vending machine success in this market.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}