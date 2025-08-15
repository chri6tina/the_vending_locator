'use client'

import { motion } from 'framer-motion'
import { XCircleIcon, ArrowLeftIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Cancel Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6"
            >
              <XCircleIcon className="h-10 w-10 text-red-600" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl"
            >
              Payment Cancelled
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-chocolate/70"
            >
              No worries! Your payment wasn't processed. You can try again anytime or explore our other options.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-stone/20 p-8 text-center"
          >
            <h2 className="text-2xl font-playfair font-bold text-chocolate mb-6">
              What Would You Like to Do?
            </h2>
            
            <p className="text-stone-600 mb-8">
              We understand that purchasing decisions take time. Here are some options to help you get started:
            </p>

            {/* Action Buttons */}
            <div className="space-y-4 mb-8">
              <Link
                href="/pricing"
                className="block w-full bg-navy text-white px-6 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
              >
                Try Payment Again
              </Link>
              
              <Link
                href="/hot-leads"
                className="block w-full bg-bronze text-white px-6 py-4 rounded-lg font-semibold hover:bg-bronze-dark transition-colors"
              >
                <MapPinIcon className="inline-block h-5 w-5 mr-2" />
                Get Hot Leads Package
              </Link>
              
              <Link
                href="/contact"
                className="block w-full bg-stone-200 text-chocolate px-6 py-4 rounded-lg font-semibold hover:bg-stone-300 transition-colors"
              >
                Contact Us for Help
              </Link>
            </div>

            {/* Back to Home */}
            <div className="pt-6 border-t border-stone/20">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-navy hover:text-navy-light transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Homepage
              </Link>
            </div>
          </motion.div>

          {/* Additional Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Free Resources */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-stone/20">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                Free Resources
              </h3>
              <ul className="space-y-2 text-sm text-stone-600 mb-4">
                <li>• Vending business guide</li>
                <li>• Location scouting tips</li>
                <li>• Industry insights</li>
              </ul>
              <Link
                href="/guide/how-to-start-a-vending-machine-business"
                className="text-navy hover:text-navy-light text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Contact Support */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-stone/20">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                Need Help?
              </h3>
              <p className="text-sm text-stone-600 mb-4">
                Our team is here to answer questions and help you find the right package.
              </p>
              <Link
                href="/contact"
                className="text-navy hover:text-navy-light text-sm font-medium"
              >
                Get Support →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
