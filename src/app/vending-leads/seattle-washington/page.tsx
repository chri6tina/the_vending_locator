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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CloudIcon } from '@heroicons/react/24/solid'

export default function SeattleWashingtonVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Seattle', 'Sarah in Downtown', 'David from Capitol Hill', 'Lisa in Queen Anne',
    'Tom in Ballard', 'Jennifer in Fremont', 'Robert from West Seattle', 'Amanda in Green Lake',
    'Chris in Wallingford', 'Maria in University District', 'James in Magnolia', 'Emily in Phinney Ridge'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 9
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

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Seattle-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Seattle vendors are choosing plans right now
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
                Vending Machine Locations<br />in Seattle, Washington
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Seattle's thriving Pacific Northwest technology economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Seattle-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-stone">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span>160+ Verified Locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span>35,000+ Businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span>5 Major Industries</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="#pricing"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing Plans
                </a>
                <a
                  href="#hot-leads"
                  className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
                >
                  Get Hot Leads
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Moved to be immediately after hero for maximum prominence */}
        <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-stone leading-relaxed max-w-3xl mx-auto">
                Get access to qualified vending machine locations in Seattle with flexible pricing options. 
                No long-term contracts, just results that help you grow your business.
              </p>
            </motion.div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape Section */}
        <section className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Seattle Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Seattle is Washington's largest city and a major technology hub, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <CloudIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology</h3>
                <p className="text-stone">Major tech companies, startups, and innovation hubs with high employee density.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <BuildingOfficeIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone">Aerospace, automotive, and industrial manufacturing companies with production staff.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <AcademicCapIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">Hospitals, medical centers, and healthcare facilities with 24/7 operations.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <MapPinIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Aerospace</h3>
                <p className="text-stone">Boeing and aerospace companies with engineering and manufacturing staff.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <UsersIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Maritime</h3>
                <p className="text-stone">Port operations, shipping companies, and maritime businesses with waterfront staff.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <BuildingOfficeIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Biotechnology</h3>
                <p className="text-stone">Biotech companies, research facilities, and pharmaceutical operations with scientists and staff.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* City Stats Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Seattle by the Numbers
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key statistics that make Seattle an excellent market for vending machine placement.
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
                <div className="text-4xl font-bold text-navy mb-2">737,015</div>
                <div className="text-gray-600">Population</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-navy mb-2">35,000+</div>
                <div className="text-gray-600">Businesses</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-navy mb-2">5</div>
                <div className="text-gray-600">Major Industries</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-navy"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  What types of businesses are best for vending machines in Seattle?
                </h3>
                <p className="text-gray-600">
                  Seattle offers diverse opportunities including tech companies, manufacturing facilities, healthcare centers, 
                  aerospace companies, and maritime businesses. The major technology sector and manufacturing base 
                  provide excellent placement opportunities.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  How competitive is the vending machine market in Seattle?
                </h3>
                <p className="text-gray-600">
                  Seattle has a growing vending presence, but there's still significant opportunity 
                  for expansion, especially in new business developments and emerging tech campuses.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  What are the peak business hours for vending in Seattle?
                </h3>
                <p className="text-gray-600">
                  Seattle businesses typically operate from 8 AM to 6 PM, with peak vending activity 
                  during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM).
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Cities in Washington */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-navy"
            >
              Other Cities in Washington
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                href="/vending-leads/portland-oregon"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Portland</h3>
                <p className="text-sm text-gray-600">Technology and healthcare hub</p>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                href="/vending-leads/denver-colorado"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Denver</h3>
                <p className="text-sm text-gray-600">Technology and outdoor recreation hub</p>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                href="/vending-leads/san-francisco-california"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">San Francisco</h3>
                <p className="text-sm text-gray-600">Tech startups and financial services</p>
              </motion.a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </>
  )
}
