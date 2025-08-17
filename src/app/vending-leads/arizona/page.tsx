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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function ArizonaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Phoenix', 'Sarah in Tucson', 'David in Mesa', 'Lisa in Chandler',
    'Tom in Scottsdale', 'Jennifer in Glendale', 'Robert in Gilbert', 'Amanda in Tempe',
    'Chris in Peoria', 'Maria in Surprise', 'James in Avondale', 'Emily in Goodyear'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 7
      const fluctuation = Math.floor(Math.random() * 4) + 1
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

  const cities = [
    { 
      name: 'Phoenix', 
      slug: 'phoenix-arizona', 
      vendorCount: '150+', 
      businessCount: '220+', 
      description: 'Growing tech and healthcare sector',
      highlights: ['Tech Companies', 'Healthcare', 'Financial Services']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Arizona-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Arizona vendors are choosing plans right now
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
                Vending Machine Locations<br />in Arizona
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations across the Grand Canyon State. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Arizona-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-chocolate">150+ Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">1 Major City</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-chocolate">100% Verified</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-chocolate">3-5 Day Delivery</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Pricing & Get Started
                </Link>
                <Link
                  href="/vending-leads"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Back to All States <span aria-hidden="true">←</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Arizona Cities with Vending Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
              Select a city below to access verified vending machine locations with business details, 
              contact information, and placement opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/vending-leads/${city.slug}`}
                  className="group block bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-navy/30 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-chocolate group-hover:text-navy transition-colors">
                        {city.name}
                      </h3>
                      <div className="text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-chocolate/70 text-base mb-6 leading-relaxed">
                      {city.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-chocolate/60">Locations:</span>
                        <span className="font-semibold text-chocolate">{city.vendorCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-chocolate/60">Businesses:</span>
                        <span className="font-semibold text-chocolate">{city.businessCount}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="inline-block bg-navy/10 text-navy text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Choose Your Arizona Vending Leads Package
              </h2>
              <p className="text-lg text-stone max-w-2xl mx-auto">
                Get access to verified vending locations across Arizona with our flexible pricing options
              </p>
            </motion.div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Arizona-Specific Business Climate Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Arizona Vending Machine Business Climate
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Understand the unique opportunities and challenges of operating vending machines in the Grand Canyon State
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Major Industries in Arizona</h3>
                <ul className="space-y-3 text-stone">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technology:</strong> Semiconductor and aerospace manufacturing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Healthcare:</strong> Medical centers and retirement communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Tourism:</strong> Hospitality and entertainment venues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Education:</strong> Universities and research institutions</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Arizona Business Demographics</h3>
                <ul className="space-y-3 text-stone">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Population:</strong> 7+ million with diverse business landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Business Density:</strong> High concentration in Phoenix and Tucson</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Growth Rate:</strong> Rapidly expanding tech and healthcare sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Employee Count:</strong> Large companies with 100+ employees</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arizona-Specific FAQ Section */}
        <div className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Arizona Vending Machine FAQ
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get answers to common questions about vending machine opportunities in Arizona
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are Arizona-specific vending machine regulations?
                </h3>
                <p className="text-stone">
                  Arizona requires food service permits, health department inspections, and compliance with 
                  the Arizona Food Code. We provide guidance on Arizona-specific requirements and help ensure 
                  compliance for each placement location across the state.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Arizona business climates affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Arizona's tech-driven economy creates unique vending opportunities. Semiconductor companies need 
                  high-capacity machines, healthcare facilities prefer healthy options, and tourism venues require 
                  visitor-friendly solutions. Each region has specific business preferences and operational requirements.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Arizona businesses?
                </h3>
                <p className="text-stone">
                  For Arizona tech companies, modern snack and beverage machines work best. Healthcare facilities prefer 
                  healthy snack and coffee options, tourism venues need high-capacity machines, and universities require 
                  student-friendly solutions. We provide specific recommendations for each Arizona business type.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Arizona weather affect vending machine operations?
                </h3>
                <p className="text-stone">
                  Arizona's desert climate requires specialized vending solutions. High temperatures need efficient cooling 
                  systems, low humidity requires moisture management, and outdoor placements need heat-resistant machines. 
                  We provide climate-specific recommendations for each Arizona location.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are average commission rates in Arizona?
                </h3>
                <p className="text-stone">
                  Arizona commission rates vary by industry: tech companies typically offer 20-30%, healthcare facilities 
                  25-35%, tourism venues 15-25%, and educational institutions 20-30%. Our Arizona leads include current 
                  commission information and negotiation strategies for each business type and region.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Arizona businesses for vending placement?
                </h3>
                <p className="text-stone">
                  Arizona businesses have different preferences by industry. Tech companies prefer digital proposals, 
                  healthcare facilities need compliance documentation, tourism venues respond to creative presentations, 
                  and universities require educational proposals. We provide industry-specific approach strategies for each Arizona business.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Arizona Market Insights Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Arizona Vending Machine Market Insights
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key insights to help you succeed in the Arizona vending machine market
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-3">Tech Innovation Hub</h3>
                <p className="text-stone text-sm">
                  Arizona is a major technology hub, with semiconductor and aerospace companies creating unique vending 
                  opportunities and demanding cutting-edge, sustainable vending solutions for their high-tech workforces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-3">Population Growth</h3>
                <p className="text-stone text-sm">
                  Arizona leads the nation in population growth, with businesses expanding to serve the growing 
                  population and increasing demand for vending services across all sectors and regions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-3">Climate Considerations</h3>
                <p className="text-stone text-sm">
                  Arizona's unique desert climate creates specific vending requirements, with businesses seeking 
                  climate-appropriate machines that can handle extreme temperatures and low humidity conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Vending Course Section */}
        <VendingCourse />
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
