'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPinIcon, BuildingStorefrontIcon, CheckIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function AustinTexasVendingCompaniesPage() {
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
              Vending Machine Companies in Austin, Texas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto"
            >
              Find reliable vending machine operators and companies serving the Austin, TX area. Connect with professional vendors for your business location.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200"
          >
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Vending Company Directory Coming Soon
            </h2>
            <p className="text-lg text-stone mb-6 max-w-2xl mx-auto">
              We're building a comprehensive directory to connect businesses with verified vending machine companies in Austin and across Texas.
            </p>
            
            <div className="bg-navy/5 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">What We're Building:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2 text-sm text-stone">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Verified vending companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Machine variety & options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Service area coverage</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-stone">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Revenue sharing details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Customer reviews & ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span>Contact & quote requests</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-stone font-medium">
                Get notified when the directory launches:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
                >
                  Contact Us for Updates
                </Link>
                <Link
                  href="/vending-leads/austin-texas"
                  className="text-navy hover:text-navy-light font-medium hover:underline"
                >
                  Need vending leads instead? →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alternative Services */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Alternative Services Available Now
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              While we build the company directory, here are other services you can use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-warm-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <BuildingStorefrontIcon className="h-8 w-8 text-navy" />
                <h3 className="text-lg font-bold text-charcoal">Vending Machine Leads</h3>
              </div>
              <p className="text-stone mb-4">
                If you're a vending operator looking for locations in Austin, we can help you find qualified business leads.
              </p>
              <Link
                href="/vending-leads/austin-texas"
                className="text-navy hover:text-navy-light font-medium hover:underline"
              >
                Get Austin vending leads →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-warm-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <ClockIcon className="h-8 w-8 text-coral" />
                <h3 className="text-lg font-bold text-charcoal">Vending Course</h3>
              </div>
              <p className="text-stone mb-4">
                Learn how to start and grow your vending machine business with our comprehensive course.
              </p>
              <Link
                href="/pricing"
                className="text-coral hover:text-coral/80 font-medium hover:underline"
              >
                View vending course →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related Cities */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Other Texas Cities
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Explore vending services in other major Texas cities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dallas', slug: 'dallas-texas' },
              { name: 'Houston', slug: 'houston-texas' },
              { name: 'San Antonio', slug: 'san-antonio-texas' },
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
                <div className="space-y-2">
                  <Link
                    href={`/vending-leads/${city.slug}`}
                    className="text-navy hover:text-navy-light font-medium hover:underline block"
                  >
                    Vending leads in {city.name} →
                  </Link>
                  <span className="text-sm text-stone/50 block">
                    Companies directory coming soon
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
