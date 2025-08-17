'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, BanknotesIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'

export default function CharlotteNorthCarolinaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Charlotte', 'Sarah in Matthews', 'David in Mint Hill', 'Lisa in Pineville',
    'Tom in Huntersville', 'Jennifer in Cornelius', 'Robert from Davidson', 'Amanda in Harrisburg',
    'Chris in Indian Trail', 'Maria in Weddington', 'James in Waxhaw', 'Emily in Stallings'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 5
      const fluctuation = Math.floor(Math.random() * 3) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 2000 + 2000)

    updateActiveUsers()
    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [userNames.length])

  // Generate structured data for this page
  const structuredData = generateCityStructuredData({
    city: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    population: '885,708',
    businessCount: '42,000+',
    industries: ['Financial Services', 'Banking', 'Manufacturing', 'Healthcare', 'Technology'],
    description: 'Charlotte offers excellent opportunities for vending machine placement with its major financial services sector, growing manufacturing base, and expanding healthcare industry.'
  })

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Charlotte-Specific */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Active Users Counter Pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> Charlotte vendors are choosing plans right now
                  </span>
                </div>
                <div
                  key={currentUserIndex}
                  className="mt-2 text-xs text-chocolate/70"
                >
                  Including {userNames[currentUserIndex]}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
              >
                Vending Machine Locations<br />in Charlotte, North Carolina
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in the Queen City's booming financial services and manufacturing economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Charlotte-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span>42,000+ Charlotte businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <StarIcon className="w-5 h-5 text-coral" />
                  <span>98% verified locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <ShieldCheckIcon className="w-5 h-5 text-coral" />
                  <span>Instant access</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Get Charlotte Leads Now
                </Link>
                <Link
                  href="#locations"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-chocolate font-semibold rounded-lg border-2 border-chocolate/20 hover:border-chocolate/40 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  View Charlotte Locations
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominent and Early */}
        <div className="bg-white py-16 sm:py-20 lg:py-24" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Get Charlotte Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Charlotte vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Charlotte vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Charlotte-Specific Stats */}
        <div className="bg-cream/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Why Charlotte for Vending?
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Charlotte's unique combination of financial services innovation, major manufacturing, and growing healthcare sector creates exceptional vending opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <UsersIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">885K+</h3>
                  <p className="text-stone text-sm">Population</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <BuildingOfficeIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">42K+</h3>
                  <p className="text-stone text-sm">Businesses</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <BanknotesIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">200+</h3>
                  <p className="text-stone text-sm">Financial Firms</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <MapPinIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">305</h3>
                  <p className="text-stone text-sm">Square Miles</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Business Landscape */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Charlotte's Business Landscape
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Charlotte's diverse economy spans financial services, manufacturing, healthcare, and technology sectors, providing excellent vending machine placement opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Financial Services Hub</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Home to major banks like Bank of America, Wells Fargo, and hundreds of financial services companies. 
                  Financial professionals create consistent vending demand.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Manufacturing & Logistics</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Major manufacturing plants, distribution centers, and logistics companies with thousands of employees. 
                  Manufacturing facilities provide steady vending machine usage.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Healthcare & Technology</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Growing healthcare sector and technology companies with healthcare workers and tech professionals. 
                  These industries provide consistent vending machine usage.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Key Business Districts */}
        <div className="bg-warm-white py-16 sm:py-20" id="locations">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Key Charlotte Business Districts
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                These high-traffic areas offer excellent vending machine placement opportunities with consistent foot traffic and employee bases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Uptown Charlotte</h3>
                <p className="text-stone text-sm">
                  Financial district with major banks, corporate headquarters, and thousands of financial professionals.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">South End</h3>
                <p className="text-stone text-sm">
                  Growing tech companies, startups, and creative businesses with young professionals.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">University Area</h3>
                <p className="text-stone text-sm">
                  UNC Charlotte campus and surrounding businesses with students, faculty, and staff.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Airport Area</h3>
                <p className="text-stone text-sm">
                  Charlotte Douglas International Airport and surrounding logistics companies with employee and traveler traffic.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Manufacturing Corridor</h3>
                <p className="text-stone text-sm">
                  Major manufacturing plants and industrial facilities with thousands of workers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Medical District</h3>
                <p className="text-stone text-sm">
                  Hospitals, medical offices, and research facilities with healthcare workers and patients.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-cream/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-chocolate/70">
                Everything you need to know about vending machine opportunities in Charlotte, North Carolina.
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses in Charlotte need vending machines?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Charlotte's diverse business landscape includes financial services companies, manufacturing plants, healthcare facilities, 
                  technology companies, and logistics operations. All of these provide excellent opportunities for vending machine placement.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How many vending machine locations are available in Charlotte?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  We currently have access to over 2,200 pre-qualified vending machine locations in Charlotte and the surrounding metro area. 
                  New locations are added weekly as businesses expand and new companies move to the area.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best areas in Charlotte for vending machine placement?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Uptown Charlotte, South End, the University area, and the manufacturing corridor offer the highest 
                  foot traffic and employee density. However, opportunities exist throughout the city as Charlotte continues to grow rapidly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I access Charlotte vending machine leads?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  With our instant access plans, you can download Charlotte vending machine leads immediately after purchase. 
                  All leads include verified business information, contact details, and placement opportunities.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there seasonal variations in Charlotte vending opportunities?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Charlotte experiences some seasonal variations, particularly around major events and tourism seasons. 
                  However, the strong year-round financial services and manufacturing climate ensures consistent vending machine opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />
      </div>
      
      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
