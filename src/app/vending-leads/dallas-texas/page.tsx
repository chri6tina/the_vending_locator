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
import { generateCityMetadata, generateCityStructuredData } from '@/components/CityPageSEO'

// Generate metadata for this page
export const metadata = generateCityMetadata({
  city: 'Dallas',
  state: 'Texas',
  stateAbbr: 'TX',
  population: '1,304,379',
  businessCount: '55,000+',
  industries: ['Financial Services', 'Technology', 'Healthcare', 'Transportation', 'Manufacturing'],
  description: 'Dallas offers excellent opportunities for vending machine placement with its major financial services sector, growing technology industry, and expanding healthcare market.'
})

export default function DallasTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Dallas', 'Sarah in Plano', 'David from Irving', 'Lisa in Arlington',
    'Tom in Richardson', 'Jennifer in Garland', 'Robert from Mesquite', 'Amanda in Grand Prairie',
    'Chris in Carrollton', 'Maria in McKinney', 'James in Frisco', 'Emily in Allen'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 7
      const fluctuation = Math.floor(Math.random() * 3) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    // Update every 2-5 seconds
    const interval = setInterval(updateActiveUsers, Math.random() * 3000 + 2000)
    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex((prevIndex) => (prevIndex + 1) % userNames.length)
    }, 3000) // Change name every 3 seconds
    return () => clearInterval(interval)
  }, [userNames.length])

  // Generate structured data for this page
  const structuredData = generateCityStructuredData({
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '1,304,379',
    businessCount: '55,000+',
    industries: ['Financial Services', 'Technology', 'Healthcare', 'Transportation', 'Manufacturing'],
    description: 'Dallas offers excellent opportunities for vending machine placement with its major financial services sector, growing technology industry, and expanding healthcare market.'
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
        {/* Enhanced Hero Section - Dallas-Specific */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Active Users Counter Pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-coral/10 px-4 py-1 text-sm font-medium text-coral ring-1 ring-inset ring-coral/20"
              >
                <UsersIcon className="h-4 w-4 mr-2" />
                <span className="font-bold">{activeUsers}</span> users are viewing Dallas leads right now!
              </motion.div>
              <div
                key={currentUserIndex}
                className="mt-2 text-xs text-chocolate/70"
              >
                Including {userNames[currentUserIndex]}
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-4xl font-playfair font-bold tracking-tight text-charcoal sm:text-6xl"
              >
                Dallas Vending Machine Leads
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Big D's booming financial services and technology economy.
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Dallas-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span>55,000+ Dallas businesses</span>
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
                  Get Dallas Leads Now
                </Link>
                <Link
                  href="#locations"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-chocolate font-semibold rounded-lg border-2 border-chocolate/20 hover:border-chocolate/40 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  View Dallas Locations
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominent and Early */}
        <div className="bg-white py-16 sm:py-20 lg:py-24" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Unlock Dallas's Vending Potential
              </h2>
              <p className="text-lg text-chocolate/70">
                Choose the plan that best fits your vending machine business needs in Dallas.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Dallas-Specific Stats */}
        <div className="bg-cream/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Why Dallas for Vending?
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Dallas's unique combination of financial services innovation, major technology companies, and growing healthcare sector creates exceptional vending opportunities.
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">1.3M+</h3>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">55K+</h3>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">300+</h3>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">385</h3>
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
                Dallas's Business Landscape
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Dallas's diverse economy spans financial services, technology, healthcare, and transportation sectors, providing excellent vending machine placement opportunities.
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
                  Home to major banks, investment firms, and financial services companies.
                  Financial professionals create consistent vending demand across the city.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Technology & Innovation</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Growing technology sector with major companies, startups, and innovation centers.
                  Tech professionals provide steady vending machine usage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Healthcare & Transportation</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Major healthcare systems and transportation companies with thousands of workers.
                  Healthcare and transportation provide consistent vending machine usage.
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
                Key Dallas Business Districts
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
                <h3 className="text-lg font-semibold text-chocolate mb-3">Downtown Dallas</h3>
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
                <h3 className="text-lg font-semibold text-chocolate mb-3">Uptown Dallas</h3>
                <p className="text-stone text-sm">
                  Upscale business district with corporate offices, hotels, and high-end retail.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Plano Legacy</h3>
                <p className="text-stone text-sm">
                  Major corporate headquarters and technology companies with thousands of employees.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Las Colinas</h3>
                <p className="text-stone text-sm">
                  Corporate office parks and business centers with major companies and professional services.
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
                  Major hospitals and medical facilities with healthcare workers and patients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">DFW Airport Area</h3>
                <p className="text-stone text-sm">
                  Airport operations, logistics companies, and transportation facilities with employee and traveler traffic.
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
                Everything you need to know about vending machine opportunities in Dallas, Texas.
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
                  What types of businesses in Dallas need vending machines?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Dallas's diverse business landscape includes financial services companies, technology firms, healthcare facilities,
                  transportation companies, and manufacturing operations. All of these provide excellent opportunities for vending machine placement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How many vending machine locations are available in Dallas?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  We currently have access to over 2,800 pre-qualified vending machine locations in Dallas and the surrounding metro area.
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
                  What are the best areas in Dallas for vending machine placement?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Downtown Dallas, Uptown, Plano Legacy, and Las Colinas offer the highest
                  foot traffic and employee density. However, opportunities exist throughout the city as Dallas continues to grow rapidly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I access Dallas vending machine leads?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  With our instant access plans, you can download Dallas vending machine leads immediately after purchase.
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
                  Are there seasonal variations in Dallas vending opportunities?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Dallas experiences some seasonal variations, particularly around major events and tourism seasons.
                  However, the strong year-round financial services and technology climate ensures consistent vending machine opportunities.
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
