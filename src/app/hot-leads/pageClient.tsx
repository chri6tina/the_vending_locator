'use client'

import { useState, useEffect, Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HotLeadsMarketplace from '@/components/HotLeadsMarketplace'
import HotLeads from '@/components/HotLeads'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

export default function HotLeadsPage() {
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(18)

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(12, Math.min(25, newValue))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
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
                  <span className="font-bold text-coral">{activeUsers}</span> people are browsing leads right now
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
            >
              <span className="text-navy">Premium Hot Leads</span> for Vending Locations
            </motion.h1>

            {/* Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Purchase exclusive, ready-to-contact vending machine location opportunities. 
              Each lead includes full contact information and is sold only once.
            </motion.p>

            {/* Trust Signals */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
            >
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-chocolate">Verified Contacts</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-chocolate">Exclusive Leads</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-chocolate">Secure Payment</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-chocolate">Instant Access</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const marketplace = document.getElementById('marketplace')
                  if (marketplace) {
                    marketplace.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Browse Available Leads
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hot Leads Marketplace */}
      <Suspense fallback={<div className="py-16 text-center text-stone">Loading hot leads…</div>}>
        <HotLeadsMarketplace />
      </Suspense>

      {/* Additional Information */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Why Choose Our Location Packages?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Our research-driven approach ensures you get the best opportunities for your vending business.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <div className="card">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal">
                Thorough Research
              </h3>
              <p className="mt-4 text-sm leading-6 text-stone">
                We don&apos;t just find locations - we research them thoroughly to ensure they meet your specific criteria and have real potential.
              </p>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal">
                Pre-Qualified Leads
              </h3>
              <p className="mt-4 text-sm leading-6 text-stone">
                Every location we provide has been pre-screened and verified. Save time by focusing on qualified opportunities only.
              </p>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-playfair font-semibold leading-8 text-charcoal">
                Verified Contacts
              </h3>
              <p className="mt-4 text-sm leading-6 text-stone">
                Get direct contact information for decision-makers. No more gatekeepers or wrong numbers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-warm-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Our Proven Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              We&apos;ve refined our process over years of helping vending operators succeed.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            <div className="text-center">
              <div className="bg-navy text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-charcoal mb-2">Area Analysis</h4>
              <p className="text-sm text-stone">We analyze your target area for demographic and business opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-charcoal mb-2">Location Research</h4>
              <p className="text-sm text-stone">Deep research into potential locations and decision-makers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-charcoal mb-2">Verification</h4>
              <p className="text-sm text-stone">We verify all contact information and business details</p>
            </div>
            
            <div className="text-center">
              <div className="bg-navy text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold text-charcoal mb-2">Delivery</h4>
              <p className="text-sm text-stone">Your qualified leads are delivered with complete research</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Prefer Full-Service Location Research?
          </h2>
          <p className="text-lg text-stone mb-8">
            Let our expert team handle the entire process for you. We&apos;ll research, verify, and secure guaranteed vending locations on your behalf.
          </p>
          <button
            onClick={() => {
              const packages = document.getElementById('packages')
              if (packages) {
                packages.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
          >
            View Our Location Packages
          </button>
        </div>
      </div>

      {/* Guaranteed Location Packages */}
      <HotLeads />

      <Footer />
    </main>
  )
}
