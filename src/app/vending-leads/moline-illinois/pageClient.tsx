'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function MolineIllinoisVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'Moline';
  const stateDisplayName = 'Illinois';
  
  // City-specific data
  const cityData = {
    'name': 'Moline',
    'state': 'Illinois',
    'population': '50K-100K',
    'businesses': '5K-10K',
    'industries': '8-12',
    'verifiedLocations': '100-200',
    'rating': '4.8/5',
    'description': 'Quad Cities region manufacturing hub with diverse business opportunities'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Moline', 'Sarah in Downtown', 'David in Moline', 'Lisa in Moline',
    'Tom in Moline', 'Jennifer in Moline', 'Robert in Moline', 'Amanda in Moline',
    'Chris in Moline', 'Maria in Moline', 'James in Moline', 'Emily in Moline'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(25, Math.min(42, newValue))
      })
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames(prev => new Set([...prev, nextIndex]));
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]));
        return randomIndex
      })
    }, 5000);
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  return (
    <>
      <Head>
        <title>Vending Machine Leads in Moline, Illinois - Business Locations & Opportunities</title>
        <meta name="description" content="Discover premium vending machine opportunities in Moline, Illinois. Access verified business locations with industry insights and growth potential data." />
        <meta name="keywords" content="vending machine leads moline illinois, moline il business locations, vending machine business moline, verified business locations moline illinois" />
      </Head>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">
                Vending Leads
              </Link>
              <span>/</span>
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              {/* City-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations in {cityDisplayName}'s diverse and growing business economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.8/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Pricing & Get Started
                </Link>
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <PricingTable />

        {/* City Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Why {cityDisplayName}, {stateDisplayName} for Vending Machines?
                </h2>
                <p className="text-lg text-stone max-w-2xl mx-auto">
                  {cityData.description}. Our comprehensive data helps you identify the best opportunities 
                  for vending machine placement and business growth.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-navy">Verified Locations</h3>
                  </div>
                  <p className="text-stone">
                    Access {cityData.verifiedLocations} pre-verified business locations in {cityDisplayName} 
                    with detailed contact information and business profiles.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold text-navy">Industry Insights</h3>
                  </div>
                  <p className="text-stone">
                    Comprehensive data on {cityData.industries}+ industries, helping you target 
                    the most profitable sectors for vending machine placement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-navy">Geographic Coverage</h3>
                  </div>
                  <p className="text-stone">
                    Complete coverage of major business districts in {cityDisplayName}, 
                    from urban centers to growing suburban areas.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <UsersIcon className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-navy">Active Community</h3>
                  </div>
                  <p className="text-stone">
                    Join {activeUsers} active users currently exploring vending opportunities in {cityDisplayName}. 
                    Stay ahead of the competition with real-time updates.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Footer */}
        <Footer />
      </div>

      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </>
  )
}
