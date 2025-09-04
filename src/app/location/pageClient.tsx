'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BuildingStorefrontIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      {/* Hero */}
      <div className="bg-gradient-to-b from-white to-stone-50 border-b border-gray-200">
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

            {/* Live-ish activity pill */}
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-charcoal/80"><strong>18</strong> people are viewing leads right now</span>
            </div>

            {/* Trust badges */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-charcoal">Verified Locations</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-charcoal">4.9/5 Rating</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-charcoal">Secure & Reliable</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-charcoal">Quality Research</span>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/hot-leads" className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">View Hot Leads</Link>
              <Link href="/pricing" className="w-full sm:w-auto bg-transparent text-charcoal border-2 border-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-charcoal hover:text-white transition-colors">View Pricing →</Link>
            </div>
          </div>
        </div>
      </div>

      

      {/* Hot Lead Infographic */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-3">What a Hot Lead Looks Like</h2>
              <p className="text-stone max-w-2xl mx-auto">A concise, verified snapshot you can act on immediately — no fluff, no dead ends.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-cream/40 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy text-white">
                    <BuildingStorefrontIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-lg font-semibold text-charcoal">Riverside Medical Group</div>
                    <div className="text-sm text-stone">Healthcare Clinic • 120 Employees</div>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-navy/10 text-navy px-3 py-1 rounded-full border border-navy/20">Hot Lead</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-gray-200">
                  <MapPinIcon className="h-5 w-5 text-navy mt-0.5" />
                  <div>
                    <div className="text-sm text-stone">Location</div>
                    <div className="text-sm font-medium text-charcoal">123 Oak Ave, Austin, TX 78701</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-gray-200">
                  <UserCircleIcon className="h-5 w-5 text-navy mt-0.5" />
                  <div>
                    <div className="text-sm text-stone">Decision Maker</div>
                    <div className="text-sm font-medium text-charcoal">Alex Morgan, Facilities Manager</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-gray-200">
                  <PhoneIcon className="h-5 w-5 text-navy mt-0.5" />
                  <div>
                    <div className="text-sm text-stone">Phone</div>
                    <div className="text-sm font-medium text-charcoal">(512) 555-0198</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 border border-gray-200">
                  <EnvelopeIcon className="h-5 w-5 text-navy mt-0.5" />
                  <div>
                    <div className="text-sm text-stone">Email</div>
                    <div className="text-sm font-medium text-charcoal">alex.morgan@riversideexample.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4">
                <div className="text-sm text-stone">Notes</div>
                <p className="text-sm font-medium text-charcoal mt-1">Accepts snack + beverage combo. Lobby + staff breakroom. Ideal for 2 machines. Verified contact and open to vendor proposals.</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/hot-leads" className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold text-center">Get Leads Like This</Link>
                <Link href="/how-it-works" className="w-full sm:w-auto border border-navy text-navy hover:bg-navy/10 px-6 py-3 rounded-lg font-semibold text-center">See Our Process</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nationwide Coverage */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-3">We Service Locations Across the U.S.</h2>
            <p className="text-stone max-w-3xl mx-auto">From major metros to surrounding suburbs, we research your exact ZIP and deliver verified businesses ready for outreach.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <div className="text-sm font-semibold text-charcoal mb-2">West</div>
              <ul className="text-sm text-stone space-y-1"><li>Los Angeles, CA</li><li>San Francisco, CA</li><li>Seattle, WA</li><li>Phoenix, AZ</li></ul>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <div className="text-sm font-semibold text-charcoal mb-2">South</div>
              <ul className="text-sm text-stone space-y-1"><li>Dallas, TX</li><li>Houston, TX</li><li>Atlanta, GA</li><li>Miami, FL</li></ul>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <div className="text-sm font-semibold text-charcoal mb-2">Midwest</div>
              <ul className="text-sm text-stone space-y-1"><li>Chicago, IL</li><li>Minneapolis, MN</li><li>Detroit, MI</li><li>Kansas City, MO</li></ul>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-4">
              <div className="text-sm font-semibold text-charcoal mb-2">East</div>
              <ul className="text-sm text-stone space-y-1"><li>New York, NY</li><li>Philadelphia, PA</li><li>Washington, DC</li><li>Boston, MA</li></ul>
            </div>
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
      <Footer />
    </div>
  )
}
