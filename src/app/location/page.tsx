'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPinIcon, BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const states = [
  {
    name: 'Texas',
    slug: 'texas',
    cities: [
      { name: 'Austin', slug: 'austin-tx', vendorCount: '150+', businessCount: '200+' },
      { name: 'Dallas', slug: 'dallas-tx', vendorCount: '180+', businessCount: '250+' },
      { name: 'Houston', slug: 'houston-tx', vendorCount: '200+', businessCount: '300+' },
      { name: 'San Antonio', slug: 'san-antonio-tx', vendorCount: '120+', businessCount: '180+' },
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    cities: [
      { name: 'Miami', slug: 'miami-fl', vendorCount: '160+', businessCount: '220+' },
      { name: 'Jacksonville', slug: 'jacksonville-fl', vendorCount: '90+', businessCount: '140+' },
    ]
  },
  {
    name: 'California',
    slug: 'california',
    cities: [
      { name: 'Los Angeles', slug: 'los-angeles-ca', vendorCount: '250+', businessCount: '400+' },
      { name: 'San Francisco', slug: 'san-francisco-ca', vendorCount: '180+', businessCount: '280+' },
      { name: 'San Diego', slug: 'san-diego-ca', vendorCount: '140+', businessCount: '220+' },
      { name: 'San Jose', slug: 'san-jose-ca', vendorCount: '120+', businessCount: '200+' },
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    cities: [
      { name: 'Chicago', slug: 'chicago-il', vendorCount: '220+', businessCount: '350+' },
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    cities: [
      { name: 'New York City', slug: 'new-york-ny', vendorCount: '300+', businessCount: '500+' },
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    cities: [
      { name: 'Philadelphia', slug: 'philadelphia-pa', vendorCount: '140+', businessCount: '220+' },
    ]
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    cities: [
      { name: 'Phoenix', slug: 'phoenix-az', vendorCount: '110+', businessCount: '180+' },
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    cities: [
      { name: 'Seattle', slug: 'seattle-wa', vendorCount: '130+', businessCount: '200+' },
    ]
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-charcoal"
            >
              Vending Locations Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto"
            >
              Find vending machine locations or connect with businesses looking for vendors in your area
            </motion.p>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Choose Your Service
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Whether you're a vending operator looking for locations or a business seeking vendors, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Vendors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-6">
                <BuildingStorefrontIcon className="h-16 w-16 text-navy mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  For Vending Operators
                </h3>
                <p className="text-stone">
                  Find qualified vending machine locations in your target area
                </p>
              </div>
              <ul className="text-sm text-stone space-y-2 mb-6">
                <li>• Pre-qualified business locations</li>
                <li>• Contact information for decision makers</li>
                <li>• Location research and analysis</li>
                <li>• Contract templates and scripts</li>
              </ul>
              <Link
                href="/pricing"
                className="w-full bg-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-light transition-colors text-center block"
              >
                Get Location Leads
              </Link>
            </motion.div>

            {/* For Businesses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-6">
                <UserGroupIcon className="h-16 w-16 text-coral mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  For Businesses
                </h3>
                <p className="text-stone">
                  Find reliable vending machine operators for your location
                </p>
              </div>
              <ul className="text-sm text-stone space-y-2 mb-6">
                <li>• Verified vending operators</li>
                <li>• Machine variety and options</li>
                <li>• Revenue sharing opportunities</li>
                <li>• Professional service providers</li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-stone font-medium">
                  Coming Soon - Business Directory
                </p>
                <p className="text-xs text-stone/70 mt-1">
                  We're building a directory to connect businesses with vendors
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* States Directory */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Browse by State
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Select your state to find vending opportunities and business locations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {states.map((state, stateIdx) => (
              <motion.div
                key={state.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * stateIdx }}
                className="bg-warm-white rounded-xl p-6 border border-gray-200 hover:border-navy/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPinIcon className="h-6 w-6 text-navy" />
                  <h3 className="text-lg font-bold text-charcoal">{state.name}</h3>
                </div>
                
                <div className="space-y-3 mb-4">
                  {state.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/location/${city.slug}`}
                      className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-charcoal">{city.name}</span>
                        <span className="text-xs text-stone bg-stone/20 px-2 py-1 rounded">
                          {city.vendorCount} locations
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/location/${state.slug}`}
                  className="text-sm text-navy hover:text-navy-light font-medium hover:underline"
                >
                  View all {state.name} locations →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-4"
          >
            Ready to Find Your Next Vending Location?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Get started with our location research service and find qualified businesses in your target area
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/pricing"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing Plans
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-coral transition-colors font-medium"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
