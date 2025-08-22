'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, MusicalNoteIcon } from '@heroicons/react/24/solid'

export default function NashvilleTennesseeVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Nashville', 'Sarah in Downtown', 'David in East Nashville', 'Lisa in South Nashville',
    'Tom in North Nashville', 'Jennifer in West Nashville', 'Robert in Central Nashville', 'Amanda in Southwest Nashville',
    'Chris in Northwest Nashville', 'Maria in Southeast Nashville', 'James in Northeast Nashville', 'Emily in Southwest Nashville'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 12
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
        {/* Enhanced Hero Section - Nashville-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Nashville vendors are choosing plans right now
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
                Vending Machine Locations<br />in Nashville, Tennessee
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Nashville's thriving music, healthcare, and tourism economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Nashville-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-stone">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span>300+ Verified Locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span>28,500+ Businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span>8 Major Industries</span>
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

        {/* Pricing Section - Immediately After Hero */}
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
                Get access to qualified vending machine locations in Nashville with flexible pricing options.
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
                Nashville Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Nashville offers diverse vending opportunities across music, healthcare, tourism, and technology sectors.
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
                <MusicalNoteIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Music Industry</h3>
                <p className="text-stone">Record labels, studios, and music venues with high foot traffic and entertainment industry professionals.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <HeartIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">Major hospitals, medical centers, and healthcare facilities with 24/7 operations and high staff density.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <ShoppingBagIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tourism & Hospitality</h3>
                <p className="text-stone">Hotels, restaurants, and tourist attractions with consistent visitor traffic and entertainment venues.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <BuildingOfficeIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Corporate Offices</h3>
                <p className="text-stone">Business parks, corporate headquarters, and professional services with consistent employee traffic.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <AcademicCapIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education</h3>
                <p className="text-stone">Universities, colleges, and educational institutions with large student and staff populations.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-warm-white p-6 rounded-xl text-center"
              >
                <TruckIcon className="h-12 w-12 text-navy mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Logistics & Distribution</h3>
                <p className="text-stone">Warehouses, distribution centers, and logistics companies with high employee density and 24/7 operations.</p>
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
                  What types of businesses are best for vending machines in Nashville?
                </h3>
                <p className="text-gray-600">
                  Nashville offers exceptional opportunities including music industry venues, healthcare facilities, 
                  tourism attractions, corporate offices, and educational institutions. The diverse economy provides
                  excellent placement opportunities with high foot traffic and employee density.
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
                  How competitive is the vending machine market in Nashville?
                </h3>
                <p className="text-gray-600">
                  Nashville has a growing vending presence, but there's still significant opportunity
                  for expansion, especially in the music industry and healthcare sectors.
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
                  What are the peak business hours for vending in Nashville?
                </h3>
                <p className="text-gray-600">
                  Nashville businesses typically operate from 8 AM to 6 PM, with peak vending activity
                  during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM). Music venues
                  and healthcare facilities see consistent traffic throughout the day and evening.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
