'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HotLeadsMarketplace from '@/components/HotLeadsMarketplace'
import { motion } from 'framer-motion'
import { SparklesIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

export default function HotLeadsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
            >
              <BoltIcon className="w-4 h-4 text-coral" />
              Premium Location Leads
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-5xl mb-6"
            >
              Hot Vending Location Leads
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl leading-8 text-white/90 mb-8"
            >
              Purchase exclusive, ready-to-contact vending machine location opportunities. 
              Each lead includes full contact information and is sold only once.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-coral" />
                <span className="text-sm font-medium">Verified Contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-coral" />
                <span className="text-sm font-medium">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5 text-coral" />
                <span className="text-sm font-medium">Exclusive Leads</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-coral text-white rounded-lg font-semibold text-lg hover:bg-coral-dark transition-all transform hover:scale-105 shadow-lg"
              >
                Browse Available Leads
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hot Leads Marketplace */}
      <HotLeadsMarketplace />

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

      <Footer />
    </main>
  )
}
