'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import states from '@/data/states'

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
          </div>
        </div>
      </div>

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

      <Footer />
    </main>
  )
}
