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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'

// Generate metadata for this page
export default function RaleighNorthCarolinaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Raleigh', 'Sarah in Cary', 'David from Apex', 'Lisa in Holly Springs',
    'Tom in Wake Forest', 'Jennifer in Garner', 'Robert from Knightdale', 'Amanda in Morrisville',
    'Chris in Fuquay-Varina', 'Maria in Rolesville', 'James in Wendell', 'Emily in Zebulon'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 4
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
    city: 'Raleigh',
    state: 'North Carolina',
    stateAbbr: 'NC',
    population: '474,069',
    businessCount: '32,000+',
    industries: ['Technology', 'Research', 'Education', 'Healthcare', 'Biotechnology'],
    description: 'Raleigh offers excellent opportunities for vending machine placement with its Research Triangle Park, major universities, and growing technology sector.'
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
        {/* Enhanced Hero Section - Raleigh-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Raleigh vendors are choosing plans right now
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
                Vending Machine Locations<br />in Raleigh, North Carolina
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in the Research Triangle's booming technology and research economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Raleigh-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span>32,000+ Raleigh businesses</span>
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
                  Get Raleigh Leads Now
                </Link>
                <Link
                  href="#locations"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-chocolate font-semibold rounded-lg border-2 border-chocolate/20 hover:border-chocolate/40 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  View Raleigh Locations
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
                Get Raleigh Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Raleigh vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Raleigh vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Raleigh-Specific Stats */}
        <div className="bg-cream/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Why Raleigh for Vending?
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Raleigh's unique combination of research innovation, major universities, and growing technology sector creates exceptional vending opportunities.
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">474K+</h3>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">32K+</h3>
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
                  <BeakerIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">300+</h3>
                  <p className="text-stone text-sm">Research Companies</p>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">144</h3>
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
                Raleigh's Business Landscape
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Raleigh's diverse economy spans technology, research, education, and healthcare sectors, providing excellent vending machine placement opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Research Triangle Park</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Home to major tech companies like IBM, Cisco, and hundreds of research institutions. 
                  Research Triangle Park provides consistent employee traffic for vending machines.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Education & Research</h3>
                <p className="text-stone text-sm leading-relaxed">
                  NC State University, Duke University, and UNC Chapel Hill with thousands of students and researchers. 
                  Academic environments create steady vending demand.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Biotechnology</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Major biotech companies and research facilities with scientists and healthcare workers. 
                  Biotech industry provides consistent vending machine usage.
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
                Key Raleigh Business Districts
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
                <h3 className="text-lg font-semibold text-chocolate mb-3">Research Triangle Park</h3>
                <p className="text-stone text-sm">
                  Major tech companies, research institutions, and biotech firms with thousands of employees.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">NC State University</h3>
                <p className="text-stone text-sm">
                  Over 35,000 students, faculty, and staff across multiple campuses with high vending machine usage.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Downtown Raleigh</h3>
                <p className="text-stone text-sm">
                  Government offices, financial services, and business headquarters with thousands of employees.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Cary & Apex</h3>
                <p className="text-stone text-sm">
                  Growing tech companies and research facilities with young professionals and families.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Medical District</h3>
                <p className="text-stone text-sm">
                  Hospitals, medical offices, and research facilities with healthcare workers and patients.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Airport Area</h3>
                <p className="text-stone text-sm">
                  Raleigh-Durham International Airport and surrounding logistics companies with employee and traveler traffic.
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
                Everything you need to know about vending machine opportunities in Raleigh, North Carolina.
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
                  What types of businesses in Raleigh need vending machines?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Raleigh's diverse business landscape includes tech companies, research institutions, universities, healthcare facilities, 
                  and biotech companies. All of these provide excellent opportunities for vending machine placement.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How many vending machine locations are available in Raleigh?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  We currently have access to over 1,500 pre-qualified vending machine locations in Raleigh and the surrounding metro area. 
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
                  What are the best areas in Raleigh for vending machine placement?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Research Triangle Park, NC State University campus, downtown Raleigh, and the medical district offer the highest 
                  foot traffic and employee density. However, opportunities exist throughout the city as Raleigh continues to grow rapidly.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I access Raleigh vending machine leads?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  With our instant access plans, you can download Raleigh vending machine leads immediately after purchase. 
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
                  Are there seasonal variations in Raleigh vending opportunities?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Raleigh experiences some seasonal variations, particularly around university schedules and major events. 
                  However, the strong year-round research and business climate ensures consistent vending machine opportunities.
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
