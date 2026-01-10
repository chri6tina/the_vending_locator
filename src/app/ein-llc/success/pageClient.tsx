'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircleIcon, DocumentTextIcon, ClockIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function EinLLCSuccessPage() {
  const searchParams = useSearchParams()
  const stateName = searchParams.get('state') || 'your state'
  const sessionId = searchParams.get('session_id')

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
              <CheckCircleIcon className="h-12 w-12 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-chocolate mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-charcoal/80 mb-8">
              Thank you for using our EIN & LLC filing service. Your business formation is now in progress.
            </p>

            {/* What Happens Next */}
            <div className="bg-warm-white rounded-lg p-8 mb-8 text-left">
              <h2 className="text-xl font-playfair font-bold text-navy mb-6 text-center">
                What Happens Next?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                      <DocumentTextIcon className="h-6 w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">We'll Process Your Filing</h3>
                    <p className="text-charcoal/80 text-sm">
                      Our team will file your LLC formation documents with {stateName}'s Secretary of State 
                      and apply for your EIN with the IRS.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                      <ClockIcon className="h-6 w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Processing Time</h3>
                    <p className="text-charcoal/80 text-sm">
                      Most LLC formations are processed within 1-2 business days. EIN assignment from the IRS 
                      typically happens within minutes to a few hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                      <EnvelopeIcon className="h-6 w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">You'll Receive Your Documents</h3>
                    <p className="text-charcoal/80 text-sm">
                      Once processing is complete, you'll receive all confirmation documents and certificates 
                      via email, including your LLC formation certificate and EIN confirmation letter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white border-2 border-navy rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-navy mb-3">Next Steps:</h3>
              <ul className="text-left space-y-2 text-charcoal/80 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Check your email for a confirmation message with your order details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>You'll receive a form to provide your LLC name and business information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Complete the form as soon as possible to expedite processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Watch for your final documents within 1-2 business days</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ein-llc"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy/5 transition-all duration-200"
              >
                Back to EIN/LLC Services
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy/90 transition-all duration-200"
              >
                Return to Homepage
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>

            {/* Support Info */}
            <div className="mt-12 pt-8 border-t border-stone/20">
              <p className="text-sm text-charcoal/60 mb-2">
                Questions about your order?
              </p>
              <Link
                href="/contact"
                className="text-sm text-coral hover:text-coral/80 font-medium"
              >
                Contact our support team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}


