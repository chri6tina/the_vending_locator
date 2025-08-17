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

export default function PennsylvaniaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Philadelphia', 'Sarah in Pittsburgh', 'David in Allentown', 'Lisa in Erie',
    'Tom in Reading', 'Jennifer in Scranton', 'Robert in Bethlehem', 'Amanda in Lancaster',
    'Chris in Harrisburg', 'Maria in Altoona', 'James in York', 'Emily in Wilkes-Barre'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 9
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
      name: 'Philadelphia', 
      slug: 'philadelphia-pennsylvania', 
      vendorCount: '160+', 
      businessCount: '240+', 
      description: 'Healthcare and education hub',
      highlights: ['Healthcare', 'Education', 'Financial Services']
    },
    { 
      name: 'Pittsburgh', 
      slug: 'pittsburgh-pennsylvania', 
      vendorCount: '140+', 
      businessCount: '200+', 
      description: 'Technology and healthcare innovation',
      highlights: ['Technology', 'Healthcare', 'Manufacturing']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Pennsylvania-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Pennsylvania vendors are choosing plans right now
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
                Vending Machine Locations<br />in Pennsylvania
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations across the Keystone State. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Pennsylvania-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-chocolate">300+ Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">2 Major Cities</span>
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
              Pennsylvania Cities with Vending Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
              Select a city below to access verified vending machine locations with business details, 
              contact information, and placement opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                Choose Your Pennsylvania Vending Leads Package
              </h2>
              <p className="text-lg text-stone max-w-2xl mx-auto">
                Get access to verified vending locations across Pennsylvania with our flexible pricing options
              </p>
            </motion.div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Pennsylvania-Specific Business Climate Section */}
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
                Pennsylvania Vending Machine Business Climate
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Understand the unique opportunities and challenges of operating vending machines in the Keystone State
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
                <h3 className="text-xl font-bold text-chocolate mb-4">Major Industries in Pennsylvania</h3>
                <ul className="space-y-3 text-stone">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Manufacturing:</strong> Steel, automotive, and industrial manufacturing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Healthcare:</strong> Medical centers and pharmaceutical companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Education:</strong> Universities and research institutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technology:</strong> Growing tech sector in major cities</span>
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
                <h3 className="text-xl font-bold text-chocolate mb-4">Pennsylvania Business Demographics</h3>
                <ul className="space-y-3 text-stone">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Population:</strong> 13+ million with diverse business landscape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Business Density:</strong> High concentration in Philadelphia and Pittsburgh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Growth Rate:</strong> Expanding healthcare and tech sectors</span>
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

        {/* Pennsylvania-Specific FAQ Section */}
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
                Pennsylvania Vending Machine FAQ
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get answers to common questions about vending machine opportunities in Pennsylvania
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
                  What are Pennsylvania-specific vending machine regulations?
                </h3>
                <p className="text-stone">
                  Pennsylvania requires food service permits, health department inspections, and compliance with 
                  the Pennsylvania Food Code. We provide guidance on Pennsylvania-specific requirements and help ensure 
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
                  How do Pennsylvania business climates affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Pennsylvania's manufacturing-driven economy creates unique vending opportunities. Industrial facilities need 
                  high-capacity machines, healthcare companies prefer healthy options, and educational institutions require 
                  student-friendly solutions. Each region has specific business preferences and operational requirements.
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
                  What are the best vending machine types for Pennsylvania businesses?
                </h3>
                <p className="text-stone">
                  For Pennsylvania manufacturing facilities, industrial-grade snack and beverage machines work best. Healthcare 
                  companies prefer healthy snack and coffee options, universities need high-capacity machines, and tech companies 
                  prefer modern, sustainable solutions. We provide specific recommendations for each Pennsylvania business type.
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
                  How does Pennsylvania weather affect vending machine operations?
                </h3>
                <p className="text-stone">
                  Pennsylvania's four-season climate requires versatile vending solutions. Winter needs heating systems, 
                  summer requires efficient cooling, and all seasons need weather-resistant outdoor machines. We provide 
                  climate-specific recommendations for each Pennsylvania location to ensure year-round performance.
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
                  What are average commission rates in Pennsylvania?
                </h3>
                <p className="text-stone">
                  Pennsylvania commission rates vary by industry: manufacturing facilities typically offer 15-25%, healthcare 
                  companies 25-35%, educational institutions 20-30%, and tech companies 20-30%. Our Pennsylvania leads include 
                  current commission information and negotiation strategies for each business type and region.
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
                  How do I approach Pennsylvania businesses for vending placement?
                </h3>
                <p className="text-stone">
                  Pennsylvania businesses have different preferences by industry. Manufacturing facilities require practical 
                  proposals, healthcare companies need compliance documentation, universities respond to educational presentations, 
                  and tech companies prefer digital proposals. We provide industry-specific approach strategies for each Pennsylvania business.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pennsylvania Market Insights Section */}
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
                Pennsylvania Vending Machine Market Insights
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key insights to help you succeed in the Pennsylvania vending machine market
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
                <h3 className="text-lg font-bold text-chocolate mb-3">Manufacturing Heritage</h3>
                <p className="text-stone text-sm">
                  Pennsylvania has a rich manufacturing heritage, with industrial facilities creating unique vending 
                  opportunities and requiring robust, high-capacity machines for large workforces across the state.
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
                <h3 className="text-lg font-bold text-chocolate mb-3">Healthcare Hub</h3>
                <p className="text-stone text-sm">
                  Pennsylvania is a major healthcare hub, with medical centers and pharmaceutical companies creating 
                  demand for specialized vending solutions that meet healthcare industry standards and requirements.
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
                <h3 className="text-lg font-bold text-chocolate mb-3">Educational Excellence</h3>
                <p className="text-stone text-sm">
                  Pennsylvania's strong educational sector, including major universities and research institutions, 
                  provides additional vending opportunities with unique requirements for student populations and academic staff.
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
