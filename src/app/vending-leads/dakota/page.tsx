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

export default function DakotaVendingLeadsPage() {
  // State display name
  const stateDisplayName = 'Dakota';
  
  // State-specific data
  const stateData = {
    'name': 'Dakota',
    'population': '1.5M+',
    'businesses': '50K+',
    'industries': '15+',
    'verifiedLocations': '500+',
    'rating': '4.8/5',
    'description': 'Thriving business communities across the Dakota region'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(45)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from North Dakota', 'Sarah in South Dakota', 'David in Fargo', 'Lisa in Sioux Falls',
    'Tom in Bismarck', 'Jennifer in Rapid City', 'Robert in Grand Forks', 'Amanda in Aberdeen',
    'Chris in Minot', 'Maria in Pierre', 'James in Watertown', 'Emily in Brookings'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(40, Math.min(60, newValue))
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
        <title>Vending Machine Leads in Dakota - North & South Dakota Business Locations</title>
        <meta name="description" content="Discover premium vending machine opportunities across Dakota. Access verified business locations in North Dakota and South Dakota with industry insights and growth potential data." />
        <meta name="keywords" content="vending machine leads dakota, north dakota vending locations, south dakota business opportunities, vending machine business dakota, verified business locations dakota" />
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
              <span className="text-navy font-medium">{stateDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
                  Vending Machine Leads in {stateDisplayName}
                </h1>
                <p className="text-xl text-stone mb-8 max-w-3xl mx-auto">
                  Discover premium vending machine opportunities across {stateDisplayName}. 
                  Access verified business locations, industry insights, and growth potential data.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy">{stateData.population}</div>
                    <div className="text-sm text-stone">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy">{stateData.businesses}</div>
                    <div className="text-sm text-stone">Businesses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy">{stateData.industries}</div>
                    <div className="text-sm text-stone">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy">{stateData.rating}</div>
                    <div className="text-sm text-stone">Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/vending-leads/north-dakota" className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-dark transition-colors">
                    North Dakota Leads
                  </Link>
                  <Link href="/vending-leads/south-dakota" className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-dark transition-colors">
                    South Dakota Leads
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <PricingTable />

        {/* State Overview Section */}
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
                  Why {stateDisplayName} for Vending Machines?
                </h2>
                <p className="text-lg text-stone max-w-2xl mx-auto">
                  {stateData.description}. Our comprehensive data helps you identify the best opportunities 
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
                    Access {stateData.verifiedLocations} pre-verified business locations across {stateDisplayName} 
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
                    Comprehensive data on {stateData.industries}+ industries, helping you target 
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
                    Complete coverage of major cities and business districts across {stateDisplayName}, 
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
                    Join {activeUsers} active users currently exploring vending opportunities in {stateDisplayName}. 
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
