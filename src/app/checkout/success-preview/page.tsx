'use client'

import { CheckCircleIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Header from '@/components/Header'

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
      {/* Header Navigation */}
      <Header />
      
      {/* Success Header */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-b border-green-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 border-4 border-green-200 mb-6 shadow-lg">
              <CheckCircleIcon className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-chocolate sm:text-5xl mb-4">
              Payment Successful! 🎉
            </h1>
            
            <p className="text-xl leading-8 text-chocolate/80 max-w-xl mx-auto">
              Thank you for choosing The Vending Locator! We are diligently working on getting your leads together. We have your zip code and email address to begin working.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-stone/20 p-8 lg:p-10">
            <h2 className="text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
              Order Confirmation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-navy/5 to-navy/10 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Plan</span>
                <p className="text-chocolate font-bold text-xl mt-1">{mockPaymentDetails.planName}</p>
              </div>
              
              <div className="bg-gradient-to-r from-navy/5 to-navy/10 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Amount</span>
                <p className="text-chocolate font-bold text-xl mt-1">
                  ${mockPaymentDetails.amount} {mockPaymentDetails.currency.toUpperCase()}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-navy/5 to-navy/10 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">ZIP Code</span>
                <p className="text-chocolate font-bold text-xl mt-1">{mockPaymentDetails.zipCode}</p>
              </div>
              
              <div className="bg-gradient-to-r from-navy/5 to-navy/10 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Transaction ID</span>
                <p className="text-chocolate font-mono text-sm mt-1 break-all">{mockPaymentDetails.txId}</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-navy/5 to-navy/10 rounded-2xl p-8 mb-8 border border-navy/20">
              <h3 className="text-2xl font-semibold text-navy mb-6 text-center">What Happens Next?</h3>
              <div className="space-y-4 text-navy/80">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-navy mt-2 flex-none" />
                  <p className="text-base">You'll receive a confirmation email at <strong className="text-navy">{mockPaymentDetails.customerEmail}</strong></p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-navy mt-2 flex-none" />
                  <p className="text-base">Our team will research qualified vending locations in your area</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-navy mt-2 flex-none" />
                  <p className="text-base">Your location package will be delivered within 3-5 business days</p>
                </div>
              </div>
              
              {/* Hot Leads Disclaimer */}
              <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400 mt-0.5 flex-none" />
                  <div>
                    <p className="text-amber-800 font-medium mb-1">Important Note</p>
                    <p className="text-amber-700">
                      Hot leads are not included in the 3-5 day delivery timeframe. 
                      Hot leads require additional research time and will be delivered separately when ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/"
                className="flex-1 bg-gradient-to-r from-navy to-navy-dark text-white px-8 py-4 rounded-xl font-semibold text-center hover:from-navy-dark hover:to-navy transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Go Home
              </Link>
              
              <Link
                href="/pricing"
                className="flex-1 bg-white text-chocolate px-8 py-4 rounded-xl font-semibold text-center hover:bg-stone-50 transition-all duration-200 border-2 border-stone-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Browse More Plans
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-stone-50 to-stone-100 rounded-3xl p-8 border border-stone-200">
            <p className="text-stone-700 mb-8 text-xl font-medium">
              If you have any questions, please reach out to us on Telegram @thevendinglocator
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-coral to-coral-dark text-white px-8 py-4 rounded-xl font-semibold hover:from-coral-dark hover:to-coral transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <EnvelopeIcon className="h-6 w-6" />
                Contact Support
              </Link>
              
              <Link
                href="/hot-leads"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-bronze to-bronze-dark text-white px-8 py-4 rounded-xl font-semibold hover:from-bronze-dark hover:to-bronze transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <MapPinIcon className="h-6 w-6" />
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
