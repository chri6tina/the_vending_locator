'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, TruckIcon, FilmIcon, SunIcon, BeakerIcon, SparklesIcon, HeartIcon, CloudIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function MissouriVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(16)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  const users = [
    'Tom from Kansas City',
    'Sarah from St. Louis',
    'Mike from Springfield',
    'Lisa from Columbia',
    'David from Independence'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % users.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [users.length])

  const cities = []

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/" className="text-gray-400 hover:text-gray-500">
                      <svg className="flex-shrink-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <Link href="/vending-leads" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Vending Leads
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-4 text-sm font-medium text-gray-500">Missouri</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              {/* Active Users Counter */}
              <div className="inline-flex items-center gap-2 bg-bronze/10 text-bronze px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-bronze rounded-full animate-pulse"></div>
                {activeUsers} active users right now
              </div>

              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Missouri Vending Machine Locations
              </motion.h1>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover premium vending machine placement opportunities across Missouri. 
                Access 120,000+ businesses and the heart of America's manufacturing and healthcare hub.
              </motion.p>

              {/* Trust Signals */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-bronze" />
                  1,400+ Verified Locations
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4 text-bronze" />
                  120,000+ Businesses
                </div>
                <div className="flex items-center gap-2">
                  <BuildingOfficeIcon className="w-4 h-4 text-bronze" />
                  5 Major Industries
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bronze hover:bg-bronze/90 transition-colors"
                >
                  View Pricing
                </Link>
                <Link
                  href="#hot-leads"
                  className="inline-flex items-center justify-center px-6 py-3 border border-bronze text-base font-medium rounded-md text-bronze bg-transparent hover:bg-bronze/10 transition-colors"
                >
                  Hot Leads
                </Link>
              </div>

              {/* Current User */}
              <div className="mt-6 text-sm text-stone">
                <span className="text-bronze font-medium">{users[currentUserIndex]}</span> just viewed this page
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-stone">
                Get access to Missouri's top vending machine opportunities
              </p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Missouri Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Missouri's diverse economy spans manufacturing, healthcare, education, and transportation, 
                creating ideal opportunities for vending machine placement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CpuChipIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone">Strong industrial base with automotive and aerospace</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <HeartIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">Major healthcare sector with medical facilities</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <AcademicCapIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education</h3>
                <p className="text-stone">Top universities and research institutions</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SunIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Agriculture</h3>
                <p className="text-stone">Fertile farmland and agricultural innovation</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <TruckIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Transportation</h3>
                <p className="text-stone">Major logistics and distribution hub</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <BuildingOfficeIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Retail</h3>
                <p className="text-stone">Growing retail and service sector</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* State Stats */}
        <section className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Missouri by the Numbers
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">6.2M+</div>
                <div className="text-lg text-charcoal">Population</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">120,000+</div>
                <div className="text-lg text-charcoal">Businesses</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">6</div>
                <div className="text-lg text-charcoal">Major Industries</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <section id="hot-leads" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HotLeads />
          </div>
        </section>

        {/* Vending Course Section */}
        <section className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  What makes Missouri a good market for vending machines?
                </h3>
                <p className="text-stone">
                  Missouri's strong manufacturing sector, healthcare industry, and diverse business 
                  landscape create ideal conditions for vending machine placement with high foot traffic.
                </p>
              </motion.div>

              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Which cities in Missouri have the best opportunities?
                </h3>
                <p className="text-stone">
                  Kansas City and St. Louis offer the highest concentration of businesses 
                  and manufacturing facilities, making them prime locations for vending machine placement.
                </p>
              </motion.div>

              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  How do I get started with vending machines in Missouri?
                </h3>
                <p className="text-stone">
                  Start by accessing our verified business leads, then contact locations that match your 
                  criteria. Our platform provides all the information you need to make successful placements.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Major Cities Section - Removed since no city pages exist */}
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
