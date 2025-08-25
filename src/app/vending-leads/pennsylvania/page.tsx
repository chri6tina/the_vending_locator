'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function PennsylvaniaVendingLeadsPage() {
  // State display name
  const stateDisplayName = 'Pennsylvania';
  
  // State-specific data
  const stateData = {
    'name': 'Pennsylvania',
    'population': '12.8M+',
    'businesses': '1M+',
    'industries': '15+',
    'verifiedLocations': '2K-5K',
    'rating': '4.8/5',
    'description': 'Historic state with diverse business opportunities'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(32)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Philadelphia', 'Sarah in Pittsburgh', 'David in York', 'Lisa in Lancaster',
    'Tom in Harrisburg', 'Jennifer in Allentown', 'Robert in Erie', 'Amanda in Reading',
    'Chris in Scranton', 'Maria in Bethlehem', 'James in Altoona', 'Emily in Wilkes-Barre'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(28, Math.min(45, newValue))
      })
    }, 4000)
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
            setUsedNames(prev => new Set([...prev, nextIndex]))
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]))
        return randomIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  // Featured cities in Pennsylvania
  const featuredCities = [
    { name: 'Philadelphia', slug: 'philadelphia-pennsylvania', description: 'Largest city with diverse business opportunities' },
    { name: 'Pittsburgh', slug: 'pittsburgh-pennsylvania', description: 'Steel city with growing tech sector' },
    { name: 'York', slug: 'york-pennsylvania', description: 'Historic city with manufacturing heritage' },
    { name: 'Lancaster', slug: 'lancaster-pennsylvania', description: 'Amish country with tourism focus' },
    { name: 'Harrisburg', slug: 'harrisburg-pennsylvania', description: 'State capital with government sector' },
    { name: 'Allentown', slug: 'allentown-pennsylvania', description: 'Lehigh Valley business hub' },
    { name: 'Erie', slug: 'erie-pennsylvania', description: 'Lake Erie port city' },
    { name: 'Reading', slug: 'reading-pennsylvania', description: 'Manufacturing and distribution center' }
  ];

  return (
    <>
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
              <span className="text-charcoal font-medium">{stateDisplayName}</span>
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
                <span className="text-navy">{stateDisplayName}</span>
              </motion.h1>

              {/* State-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations across Pennsylvania's diverse business landscape. 
                From Philadelphia's urban centers to Pittsburgh's industrial heritage, access verified businesses 
                with detailed contact information and placement opportunities.
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
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <Link 
                  href="/pricing"
                  className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing Plans
                </Link>
                <Link 
                  href="/hot-leads"
                  className="w-full sm:w-auto bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Hot Leads
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 p-6 bg-cream/30 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center justify-center gap-2 text-sm text-stone">
                  <UsersIcon className="h-4 w-4 text-navy" />
                  <span>Join <span className="font-semibold text-navy">2,847+</span> vending operators who trust our leads</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Cities Section */}
        <section className="py-16 bg-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-playfair font-bold text-charcoal text-center mb-12"
              >
                Featured Cities in {stateDisplayName}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCities.map((city, index) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      <Link href={`/vending-leads/${city.slug}`} className="hover:text-navy-light transition-colors">
                        {city.name}
                      </Link>
                    </h3>
                    <p className="text-stone text-sm mb-4">{city.description}</p>
                    <Link 
                      href={`/vending-leads/${city.slug}`}
                      className="inline-flex items-center text-navy hover:text-navy-light text-sm font-medium transition-colors"
                    >
                      View Locations
                      <MapPinIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <PricingTable />

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course */}
        <VendingCourse />

        {/* Zip Code Modal Wrapper */}
        <ZipCodeModalWrapper />
      </div>
      
      <Footer />
    </>
  )
}