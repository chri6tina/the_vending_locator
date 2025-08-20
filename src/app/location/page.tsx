'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/outline'



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
