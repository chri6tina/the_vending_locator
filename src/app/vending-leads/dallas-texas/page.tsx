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

export default function DallasTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Dallas', 'Sarah in Downtown', 'David in Uptown', 'Lisa in Deep Ellum',
    'Tom in Oak Lawn', 'Jennifer in Bishop Arts', 'Robert in Lakewood', 'Amanda in Highland Park',
    'Chris in Preston Hollow', 'Maria in North Dallas', 'James in East Dallas', 'Emily in West Dallas'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 15
      const fluctuation = Math.floor(Math.random() * 5) + 1
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
        {/* Enhanced Hero Section - Dallas-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Dallas vendors are choosing plans right now
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
                Vending Machine Locations<br />in Dallas, Texas
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Dallas's thriving business and technology economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Dallas-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-chocolate">250+ Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">7 Major Industries</span>
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
              Business Landscape in Dallas
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
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Business</h3>
                <p className="text-gray-600">Corporate headquarters and business services.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Technology</h3>
                <p className="text-gray-600">Tech companies and startups.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Healthcare</h3>
                <p className="text-gray-600">Hospitals and medical facilities.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Education</h3>
                <p className="text-gray-600">Universities and educational institutions.</p>
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
                <h3 className="text-xl font-semibold mb-2 text-navy">Financial</h3>
                <p className="text-gray-600">Banking and financial services.</p>
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
                <h3 className="text-xl font-semibold mb-2 text-navy">Retail</h3>
                <p className="text-gray-600">Shopping centers and retail businesses.</p>
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
                <div className="text-4xl font-bold text-navy mb-2">1.3M+</div>
                <div className="text-gray-600">Population</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">85,000+</div>
                <div className="text-gray-600">Businesses</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy mb-2">7</div>
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
                  What types of businesses are best for vending machines in Dallas?
                </h3>
                <p className="text-gray-600">
                  Dallas offers excellent opportunities in business services, technology, healthcare, and education sectors. The corporate headquarters, tech companies, and healthcare facilities provide stable employee bases for vending machines.
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
                  How competitive is the vending machine market in Dallas?
                </h3>
                <p className="text-gray-600">
                  Dallas has moderate competition with significant growth potential, especially in the expanding technology and business services sectors, as well as new commercial developments throughout the metro area.
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
                  What are the best vending machine types for Dallas businesses?
                </h3>
                <p className="text-gray-600">
                  For corporate offices, reliable snack and beverage machines work best. Tech companies prefer modern machines, while healthcare facilities need healthy options. We provide specific recommendations for each business type.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Cities in Texas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-navy"
            >
              Other Cities in Texas
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                href="/vending-leads/houston-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Houston</h3>
                <p className="text-sm text-gray-600">Energy and healthcare hub</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                href="/vending-leads/austin-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Austin</h3>
                <p className="text-sm text-gray-600">Technology and government hub</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                href="/vending-leads/san-antonio-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">San Antonio</h3>
                <p className="text-sm text-gray-600">Military and tourism center</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                href="/vending-leads/fort-worth-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Fort Worth</h3>
                <p className="text-sm text-gray-600">Manufacturing and logistics hub</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                href="/vending-leads/corpus-christi-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">Corpus Christi</h3>
                <p className="text-sm text-gray-600">Port city and energy center</p>
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                href="/vending-leads/el-paso-texas" 
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-navy">El Paso</h3>
                <p className="text-sm text-gray-600">Border city and military center</p>
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
