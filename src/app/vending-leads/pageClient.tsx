'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import states from '@/data/states'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

// states is now imported from shared data file

export default function VendingLeadsDirectory() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])

  const toggleState = (stateSlug: string) => {
    setExpandedStates(prev => 
      prev.includes(stateSlug) 
        ? prev.filter(s => s !== stateSlug)
        : [...prev, stateSlug]
    )
  }

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl lg:text-5xl"
            >
              Vending Machine Leads Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
            >
              Comprehensive directory of vending machine leads and locations across all 50 states. 
              Find qualified businesses for vending machine placement.
            </motion.p>
            
            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <p className="text-base sm:text-lg text-chocolate/70">
                Starting at <span className="text-coral font-bold text-lg sm:text-xl">less than $0.30 per lead</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Chart */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Choose your plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 text-lg text-chocolate/70"
            >
              Access qualified vending locations with the package that fits your goals.
            </motion.p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* States Directory */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
            >
              Browse by State
            </motion.h2>
            
            <div className="grid gap-4">
              {states.map((state, index) => (
                <motion.div
                  key={state.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleState(state.slug)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-navy mr-3" />
                      <span className="font-medium text-chocolate text-lg">
                        {state.name}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        ({state.cities.length} cities)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Link
                        href={`/vending-leads/${state.slug}`}
                        className="mr-4 px-4 py-2 bg-navy text-white rounded-md hover:bg-navy/90 transition-colors text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View State
                      </Link>
                      <ChevronDownIcon 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedStates.includes(state.slug) ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {expandedStates.includes(state.slug) && (
                    <div className="border-t border-gray-200 bg-gray-50">
                      <div className="px-6 py-4">
                        {state.cities.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {state.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/vending-leads/${city.slug}`}
                                className="text-chocolate hover:text-navy transition-colors text-sm py-1 hover:underline"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-4">
                            <p className="text-gray-500 text-sm">
                              No city pages available yet for {state.name}.
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                              Check back soon for updates!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Cities (SSR-friendly static links for discoverability) */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate">All Cities</h2>
            <p className="mt-2 text-chocolate/70">Direct links to every city page for easier discovery and indexing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {states.map((state) => (
              <div key={state.slug} className="bg-cream/50 rounded-lg border border-gray-200 p-5">
                <div className="flex items-center mb-3">
                  <MapPinIcon className="h-5 w-5 text-navy mr-2" />
                  <h3 className="text-lg font-semibold text-chocolate">{state.name}</h3>
                </div>
                <ul className="space-y-1">
                  {state.cities.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/vending-leads/${city.slug}`} className="text-sm text-chocolate hover:text-navy hover:underline">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular States Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-chocolate sm:text-4xl">
              Popular States for Vending Opportunities
            </h2>
            <p className="mt-4 text-lg text-stone/70">
              Explore vending machine opportunities in our most popular states
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link 
              href="/vending-leads/texas" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🤠</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Texas
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                15+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/california" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🌴</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                California
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                12+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/florida" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Florida
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                28 Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/georgia" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🍑</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Georgia
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                9+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/new-york" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🗽</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                New York
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                8+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/illinois" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🏙️</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Illinois
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                7+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/ohio" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Ohio
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                6+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
            
            <Link 
              href="/vending-leads/pennsylvania" 
              className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold text-chocolate group-hover:text-navy transition-colors mb-2">
                Pennsylvania
              </h3>
              <p className="text-sm text-stone/70 mb-3">
                5+ Cities Available
              </p>
              <span className="text-navy text-sm font-medium group-hover:underline">
                View Cities →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}
