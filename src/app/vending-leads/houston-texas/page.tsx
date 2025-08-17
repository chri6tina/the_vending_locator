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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, TruckIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'

// Generate metadata for this page
export default function HoustonTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Houston', 'Sarah in Sugar Land', 'David from Katy', 'Lisa in The Woodlands',
    'Tom in Spring', 'Jennifer in Cypress', 'Robert from Pearland', 'Amanda in League City',
    'Chris in Humble', 'Maria in Baytown', 'James in Pasadena', 'Emily in Deer Park'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
      const fluctuation = Math.floor(Math.random() * 4) + 1
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
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2,304,580',
    businessCount: '65,000+',
    industries: ['Energy', 'Healthcare', 'Manufacturing', 'Aerospace', 'Port & Logistics'],
    description: 'Houston offers excellent opportunities for vending machine placement with its major energy sector, world-class healthcare, and growing manufacturing base.'
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
        {/* Enhanced Hero Section - Houston-Specific */}
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
                <span className="font-bold">{activeUsers}</span> users are viewing Houston leads right now!
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
                Houston Vending Machine Leads
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Space City's booming energy and healthcare economy.
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Houston-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate/70">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span>65,000+ Houston businesses</span>
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
                  Get Houston Leads Now
                </Link>
                <Link
                  href="#locations"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-chocolate font-semibold rounded-lg border-2 border-chocolate/20 hover:border-chocolate/40 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  View Houston Locations
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
                Unlock Houston's Vending Potential
              </h2>
              <p className="text-lg text-chocolate/70">
                Choose the plan that best fits your vending machine business needs in Houston.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Houston-Specific Stats */}
        <div className="bg-cream/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
                Why Houston for Vending?
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Houston's unique combination of energy innovation, world-class healthcare, and major manufacturing creates exceptional vending opportunities.
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">2.3M+</h3>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">65K+</h3>
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
                  <TruckIcon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-chocolate mb-2">500+</h3>
                  <p className="text-stone text-sm">Energy Companies</p>
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
                  <h3 className="text-2xl font-bold text-chocolate mb-2">640</h3>
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
                Houston's Business Landscape
              </h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Houston's diverse economy spans energy, healthcare, manufacturing, and aerospace sectors, providing excellent vending machine placement opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Energy Capital</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Home to major oil and gas companies, energy trading firms, and renewable energy companies.
                  Energy professionals create consistent vending demand across the city.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Healthcare & Medical</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Texas Medical Center, the largest medical complex in the world, with major hospitals and research institutions.
                  Healthcare workers and patients provide steady vending machine usage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-cream/30 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-chocolate mb-3">Port & Manufacturing</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Houston Ship Channel and major manufacturing plants with thousands of workers.
                  Port operations and manufacturing provide consistent vending machine usage.
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
                Key Houston Business Districts
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
                <h3 className="text-lg font-semibold text-chocolate mb-3">Downtown Houston</h3>
                <p className="text-stone text-sm">
                  Corporate headquarters, financial services, and cultural attractions with high foot traffic.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Texas Medical Center</h3>
                <p className="text-stone text-sm">
                  World's largest medical complex with hospitals, research institutions, and healthcare workers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Energy Corridor</h3>
                <p className="text-stone text-sm">
                  Major oil and gas companies, energy trading firms, and energy professionals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Houston Ship Channel</h3>
                <p className="text-stone text-sm">
                  Port operations, logistics companies, and manufacturing facilities with thousands of workers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">Galleria Area</h3>
                <p className="text-stone text-sm">
                  Upscale shopping, hotels, and corporate offices with high tourist and business traffic.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">NASA Johnson Space Center</h3>
                <p className="text-stone text-sm">
                  Aerospace companies, research facilities, and space industry professionals.
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
                Everything you need to know about vending machine opportunities in Houston, Texas.
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
                  What types of businesses in Houston need vending machines?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Houston's diverse business landscape includes energy companies, healthcare facilities, manufacturing plants,
                  aerospace companies, and logistics operations. All of these provide excellent opportunities for vending machine placement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How many vending machine locations are available in Houston?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  We currently have access to over 3,200 pre-qualified vending machine locations in Houston and the surrounding metro area.
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
                  What are the best areas in Houston for vending machine placement?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Downtown Houston, Texas Medical Center, Energy Corridor, and the Houston Ship Channel offer the highest
                  foot traffic and employee density. However, opportunities exist throughout the city as Houston continues to grow rapidly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I access Houston vending machine leads?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  With our instant access plans, you can download Houston vending machine leads immediately after purchase.
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
                  Are there seasonal variations in Houston vending opportunities?
                </h3>
                <p className="text-stone text-sm leading-relaxed">
                  Houston experiences some seasonal variations, particularly around major events and tourism seasons.
                  However, the strong year-round energy and healthcare climate ensures consistent vending machine opportunities.
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
