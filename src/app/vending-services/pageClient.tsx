'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MapPinIcon, ChevronDownIcon, BuildingOffice2Icon, CheckCircleIcon } from '@heroicons/react/24/outline'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

// Placeholder states - will be populated with actual service locations
const states = [
  {
    name: 'Coming Soon',
    slug: 'coming-soon',
    cities: []
  }
]

export default function VendingServicesDirectory() {
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
              Vending Machine Services Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-chocolate/70 leading-relaxed"
            >
              Connect with professional vending machine service providers across all 50 states. 
              Find qualified operators ready to install and maintain vending machines at your business location.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <section className="bg-warm-white border-t border-gray-200 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              Why List Your Business With Us?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <BuildingOffice2Icon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Get Quality Leads</h3>
              <p className="text-charcoal/80">
                Connect with business owners actively seeking vending machine services for their locations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <MapPinIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Local Visibility</h3>
              <p className="text-charcoal/80">
                Increase your visibility in specific cities and states where you operate vending services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border border-stone/20"
            >
              <CheckCircleIcon className="h-10 w-10 text-coral mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Verified Listings</h3>
              <p className="text-charcoal/80">
                Build trust with verified business profiles and customer reviews from actual partnerships.
              </p>
            </motion.div>
          </div>
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
              Browse Service Providers by State
            </motion.h2>
            
            <div className="grid gap-4">
              {states.map((state, index) => (
                <motion.div
                  key={state.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-stone/20"
                >
                  {state.cities.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleState(state.slug)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <MapPinIcon className="h-5 w-5 text-coral flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-navy">{state.name}</h3>
                            <p className="text-sm text-stone mt-0.5">
                              {state.cities.length === 1 
                                ? '1 City Available' 
                                : `${state.cities.length} Cities Available`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/vending-services/${state.slug}`}
                            className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors text-sm font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View State
                          </Link>
                          <ChevronDownIcon 
                            className={`h-5 w-5 text-stone transition-transform ${
                              expandedStates.includes(state.slug) ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>
                      
                      {expandedStates.includes(state.slug) && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {state.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/vending-services/${city.slug}`}
                                className="text-chocolate hover:text-navy transition-colors text-sm py-1 hover:underline"
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="h-5 w-5 text-stone/50 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-stone">{state.name}</h3>
                          <p className="text-sm text-stone/70 mt-0.5">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Call to Action for Service Providers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-navy rounded-lg p-8 text-center"
            >
              <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                Are You a Vending Service Provider?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get listed in our directory and connect with businesses looking for vending machine services in your area.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                List Your Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate"
            >
              How It Works
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">1</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Find Your Area</h3>
              <p className="text-charcoal/80">
                Browse service providers by state and city to find operators in your location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">2</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Review Providers</h3>
              <p className="text-charcoal/80">
                Compare verified vending service providers, their offerings, and customer reviews.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">3</span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Connect & Grow</h3>
              <p className="text-charcoal/80">
                Contact service providers directly to discuss vending solutions for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What types of vending services are available?
              </h3>
              <p className="text-charcoal/80">
                Our directory includes full-service vending operators who provide machine installation, stocking, maintenance, and revenue sharing arrangements. Services range from traditional snack and beverage machines to specialty vending solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How do I get vending machines installed at my location?
              </h3>
              <p className="text-charcoal/80">
                Browse service providers in your state and city, review their profiles, and contact them directly. Most providers offer free consultations to assess your location and discuss placement options with no upfront costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                Is there a cost for businesses to use this directory?
              </h3>
              <p className="text-charcoal/80">
                No, browsing and contacting vending service providers through our directory is completely free for business owners. Service providers typically operate on commission or revenue-sharing models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How are service providers verified?
              </h3>
              <p className="text-charcoal/80">
                We verify business credentials, licensing, insurance coverage, and operating history for all listed service providers. Only qualified, professional operators are included in our directory.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                What types of locations do vending operators serve?
              </h3>
              <p className="text-charcoal/80">
                Vending operators serve offices, schools, hospitals, gyms, manufacturing facilities, retail locations, apartment buildings, and virtually any business with consistent foot traffic and employee or customer presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone/20">
              <h3 className="text-lg font-semibold text-navy mb-2">
                How quickly can I get vending machines installed?
              </h3>
              <p className="text-charcoal/80">
                Installation timelines vary by provider and location assessment, but most operators can have machines installed within 1-2 weeks after an initial consultation and site evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}

