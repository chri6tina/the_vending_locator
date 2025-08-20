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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export default function LongBeachCaliforniaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Long Beach', 'Sarah in Downtown', 'David from Belmont Shore', 'Lisa in Naples',
    'Tom from Alamitos Heights', 'Jennifer in Bixby Knolls', 'Robert from Los Altos', 'Amanda in East Long Beach',
    'Chris in West Long Beach', 'Maria in North Long Beach', 'James in Signal Hill', 'Emily in Lakewood'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 11
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

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Long Beach-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Long Beach vendors are choosing plans right now
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
                Vending Machine Locations<br />in Long Beach, California
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Long Beach's thriving port and manufacturing economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Long Beach-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-chocolate">160+ Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">6 Major Industries</span>
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
                  href="/hot-leads"
                  className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Hot Leads
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Business Landscape */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-navy"
            >
              Business Landscape in Long Beach
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Port & Shipping</h3>
                <p className="text-gray-600">Major port operations and logistics companies with high employee density.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Manufacturing</h3>
                <p className="text-gray-600">Industrial facilities and manufacturing plants with stable workforces.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Healthcare</h3>
                <p className="text-gray-600">Hospitals and medical facilities serving the growing population.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Education</h3>
                <p className="text-gray-600">Universities and schools with growing student populations.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Tourism</h3>
                <p className="text-gray-600">Beach tourism and hospitality businesses with seasonal traffic.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Technology</h3>
                <p className="text-gray-600">Growing tech sector with modern office buildings.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* City Stats */}
        <section className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="text-4xl font-bold text-navy mb-2">466K+</div>
                <div className="text-gray-600">Population</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">22,000+</div>
                <div className="text-gray-600">Businesses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">6</div>
                <div className="text-gray-600">Major Industries</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <PricingTable />

        {/* Hot Leads */}
        <HotLeads />

        {/* Vending Course */}
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
                  What types of businesses are best for vending machines in Long Beach?
                </h3>
                <p className="text-gray-600">
                  Long Beach offers excellent opportunities in port operations, manufacturing, healthcare, and education sectors. The port and manufacturing facilities provide stable employee bases for vending machines.
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
                  How competitive is the vending machine market in Long Beach?
                </h3>
                <p className="text-gray-600">
                  Long Beach has moderate competition with significant growth potential, especially in the expanding healthcare and education sectors, as well as new port and industrial developments.
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
                  What are the best vending machine types for Long Beach businesses?
                </h3>
                <p className="text-gray-600">
                  For port and industrial facilities, industrial-grade snack and beverage machines work best. Healthcare facilities prefer healthy options, while educational institutions need student-friendly machines. We provide specific recommendations for each business type.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Cities in California */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-navy"
            >
              Other Cities in California
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                href="/vending-leads/los-angeles-california" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Los Angeles</h3>
                <p className="text-sm text-gray-600">Entertainment and business hub</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                href="/vending-leads/san-diego-california" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">San Diego</h3>
                <p className="text-sm text-gray-600">Military and healthcare center</p>
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
                <p className="text-sm text-gray-600">Technology and finance hub</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                href="/vending-leads/anaheim-california" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Anaheim</h3>
                <p className="text-sm text-gray-600">Tourism and entertainment center</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                href="/vending-leads/bakersfield-california" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Bakersfield</h3>
                <p className="text-sm text-gray-600">Agriculture and energy center</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                href="/vending-leads/fresno-california" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Fresno</h3>
                <p className="text-sm text-gray-600">Agriculture and healthcare center</p>
              </motion.a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
