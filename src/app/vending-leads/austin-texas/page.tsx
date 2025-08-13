'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPinIcon, BuildingStorefrontIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline'

export default function AustinTexasVendingLeadsPage() {
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
              Vending Machine Leads in Austin, Texas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto"
            >
              Find qualified vending machine locations and business leads in Austin, TX. Get pre-researched locations with contact information for decision makers.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-3xl font-bold text-navy mb-2">150+</div>
              <div className="text-stone font-medium">Qualified Locations</div>
              <div className="text-sm text-stone/70 mt-1">Pre-screened businesses</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-3xl font-bold text-navy mb-2">15-mile</div>
              <div className="text-stone font-medium">Search Radius</div>
              <div className="text-sm text-stone/70 mt-1">Covering Austin metro</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-3xl font-bold text-navy mb-2">5 Days</div>
              <div className="text-stone font-medium">Delivery Time</div>
              <div className="text-sm text-stone/70 mt-1">Research completed</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              What You Get with Austin Vending Leads
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Comprehensive location research specifically for the Austin, Texas market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4">Location Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Business name and address</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Contact person and phone number</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Email addresses when available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Business hours and foot traffic</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4">Research & Analysis</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Market analysis for Austin area</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Competition assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Revenue potential estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" />
                  <span className="text-stone">Local business climate insights</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-4"
          >
            Ready to Get Austin Vending Machine Leads?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Choose your plan and get qualified vending machine locations in Austin, Texas delivered to your inbox
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
              View Austin Vending Leads Pricing
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

      {/* Related Locations */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Other Texas Vending Locations
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Explore vending machine leads in other major Texas cities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dallas', slug: 'dallas-texas', count: '180+ leads' },
              { name: 'Houston', slug: 'houston-texas', count: '200+ leads' },
              { name: 'San Antonio', slug: 'san-antonio-texas', count: '120+ leads' },
            ].map((city, idx) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-navy/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPinIcon className="h-6 w-6 text-navy" />
                  <h3 className="text-lg font-bold text-charcoal">{city.name}, TX</h3>
                </div>
                <p className="text-stone mb-4">{city.count} available</p>
                <Link
                  href={`/vending-leads/${city.slug}`}
                  className="text-navy hover:text-navy-light font-medium hover:underline"
                >
                  View {city.name} vending leads →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
