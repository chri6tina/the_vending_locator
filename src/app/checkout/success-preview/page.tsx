'use client'

import { CheckCircleIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CheckoutSuccessPreview() {
  // Mock payment details for preview
  const mockPaymentDetails = {
    amount: 19,
    currency: 'usd',
    txId: 'pi_3RwU8VFR8eFcJrWS1ERwyDol',
    planName: 'Basic',
    zipCode: '32244',
    customerEmail: 'customer@example.com'
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Success Header */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircleIcon className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-playfair font-bold tracking-tight text-chocolate sm:text-4xl">
              Payment Successful! 🎉
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-chocolate/70">
              Thank you for choosing The Vending Locator! We are diligently working on getting your leads together. We have your zip code and email address to begin working.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-stone/20 p-8">
            <h2 className="text-2xl font-playfair font-bold text-chocolate mb-6 text-center">
              Order Confirmation
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">Plan:</span>
                <span className="text-chocolate font-semibold">{mockPaymentDetails.planName}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">Amount:</span>
                <span className="text-chocolate font-semibold">
                  ${mockPaymentDetails.amount} {mockPaymentDetails.currency.toUpperCase()}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">Transaction ID:</span>
                <span className="text-chocolate font-mono text-sm">{mockPaymentDetails.txId}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">ZIP Code:</span>
                <span className="text-chocolate font-semibold">{mockPaymentDetails.zipCode}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-navy/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-sm text-navy/80">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-none" />
                  <p>You'll receive a confirmation email at <strong>{mockPaymentDetails.customerEmail}</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-none" />
                  <p>Our team will research qualified vending locations in your area</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-none" />
                  <p>Your location package will be delivered within 3-5 business days</p>
                </div>
              </div>
              
              {/* Hot Leads Disclaimer */}
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Hot leads are not included in the 3-5 day delivery timeframe. 
                  Hot leads require additional research time and will be delivered separately when ready.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="flex-1 bg-navy text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-navy-light transition-colors"
              >
                Go Home
              </Link>
              
              <Link
                href="/pricing"
                className="flex-1 bg-stone-200 text-chocolate px-6 py-3 rounded-lg font-semibold text-center hover:bg-stone-300 transition-colors border-2 border-stone-300"
              >
                Browse More Plans
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-6 text-lg">
              If you have any questions, please reach out to us on Telegram @thevendinglocator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-semibold hover:bg-coral-dark transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Contact Support
              </Link>
              
              <Link
                href="/hot-leads"
                className="inline-flex items-center gap-2 bg-bronze text-white px-6 py-3 rounded-lg font-semibold hover:bg-bronze-dark transition-colors"
              >
                <MapPinIcon className="h-5 w-5" />
                Get Hot Leads
              </Link>
            </div>
          </div>

          {/* Preview Notice */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Preview Mode:</strong> This is a demo version of the checkout success page. 
                In production, this page will show real payment details from Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
