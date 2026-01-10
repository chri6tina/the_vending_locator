'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircleIcon, GlobeAltIcon, ClockIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

function SuccessContent() {
  const searchParams = useSearchParams()
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
              Thank you for subscribing to our website rental service. Your professional vending website is now being set up.
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
                      <EnvelopeIcon className="h-6 w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">We'll Contact You</h3>
                    <p className="text-charcoal/80 text-sm">
                      Our team will reach out via email within 24 hours to collect your business details, 
                      service area, contact information, and any specific requirements for your website.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                      <GlobeAltIcon className="h-6 w-6 text-coral" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">We Build Your Website</h3>
                    <p className="text-charcoal/80 text-sm">
                      Once we have your information, we'll build and publish your professional vending website. 
                      This typically takes 3-5 business days.
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
                    <h3 className="font-semibold text-navy mb-2">Your Website Goes Live</h3>
                    <p className="text-charcoal/80 text-sm">
                      You'll receive a notification when your website is live, along with the URL and login 
                      credentials. You can start receiving inquiries right away!
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
                  <span>Respond promptly to our information request to expedite your website launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Have your business logo, service areas, and contact information ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Your website will be live within 3-5 business days</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vending-website-rental"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy/5 transition-all duration-200"
              >
                Back to Website Rental
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
                Questions about your subscription?
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

export default function WebsiteRentalSuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  )
}
