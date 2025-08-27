'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircleIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { trackPurchase } from '@/lib/conversion-tracking'
import Header from '@/components/Header'

interface PaymentDetails {
  amount: number
  currency: string
  txId: string
  planName: string
  zipCode: string
  customerEmail: string
}

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [conversionTracked, setConversionTracked] = useState(false)

  useEffect(() => {
    if (sessionId) {
      verifyPayment()
    } else {
      setError('No session ID found')
      setIsLoading(false)
    }
  }, [sessionId])

  const verifyPayment = async () => {
    try {
      const response = await fetch(`/api/verify-session?session_id=${sessionId}`)
      const data = await response.json()

      if (data.ok && data.sessionData?.paymentStatus === 'paid') {
        setPaymentDetails({
          amount: data.amount,
          currency: data.currency,
          txId: data.txId,
          planName: data.planName,
          zipCode: data.zipCode,
          customerEmail: data.customerEmail
        })

        // Track conversion if not already tracked
        if (!conversionTracked) {
          // Track with our conversion tracking utility
          trackPurchase(
            data.planName,
            data.amount,
            data.currency,
            data.txId
          )
          
          // Also fire the specific Google Ads conversion snippet
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-16569722490/43XACJ2Z3rAZEPrMh909',
              'value': data.amount,
              'currency': data.currency.toUpperCase(),
              'transaction_id': data.txId
            });
          }
          
          setConversionTracked(true)
          
          // Also track as a form submission for admin dashboard
          try {
            await fetch('/api/forms', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                page: '/checkout/success',
                formType: 'stripe_purchase',
                customerName: 'Customer', // We don't have name from Stripe
                customerEmail: data.customerEmail,
                customerPhone: '',
                customerCompany: '',
                notes: `Plan: ${data.planName}\nZIP Code: ${data.zipCode}\nTransaction ID: ${data.txId}\nAmount: $${data.amount} ${data.currency}`,
                paymentAmount: data.amount,
                stripePaymentId: data.txId
              }),
            })
          } catch (apiError) {
            console.log('Forms API submission failed (non-critical):', apiError)
          }
        }
      } else {
        setError('Payment verification failed')
      }
    } catch (error) {
      console.error('Error verifying payment:', error)
      setError('Failed to verify payment')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
          <p className="text-chocolate text-lg">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-2xl font-playfair font-bold text-red-800 mb-4">
              Payment Verification Failed
            </h1>
            <p className="text-red-700 mb-6">{error}</p>
            <Link
              href="/pricing"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Return to Pricing
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Navigation */}
      <Header />
      
      {/* Success Header */}
      <div className="bg-white border-b border-green-200">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 border-2 border-green-200 mb-6">
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
              <div className="bg-navy/5 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Plan</span>
                <p className="text-chocolate font-bold text-xl mt-1">{paymentDetails?.planName}</p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Amount</span>
                <p className="text-chocolate font-bold text-xl mt-1">
                  ${paymentDetails?.amount} {paymentDetails?.currency?.toUpperCase()}
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">ZIP Code</span>
                <p className="text-chocolate font-bold text-xl mt-1">{paymentDetails?.zipCode}</p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl border border-navy/20">
                <span className="text-stone-600 font-medium text-sm uppercase tracking-wide">Transaction ID</span>
                <p className="text-chocolate font-mono text-sm mt-1 break-all">{paymentDetails?.txId}</p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-navy/5 rounded-2xl p-8 mb-8 border border-navy/20">
              <h3 className="text-2xl font-semibold text-navy mb-6 text-center">What Happens Next?</h3>
              <div className="space-y-4 text-navy/80">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-navy mt-2 flex-none" />
                  <p className="text-base">You'll receive a confirmation call at <strong className="text-navy">{paymentDetails?.customerEmail}</strong></p>
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
              <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-xl">
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
                className="flex-1 bg-navy text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-navy-dark transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Go Home
              </Link>
              
              <Link
                href="/pricing"
                className="flex-1 bg-white text-chocolate px-8 py-4 rounded-xl font-semibold text-center hover:bg-stone-50 transition-all duration-200 border-2 border-stone-300 shadow-lg hover:shadow-xl"
              >
                Browse More Plans
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-16 text-center bg-stone-50 rounded-3xl p-8 border border-stone-200">
            <p className="text-stone-700 mb-8 text-xl font-medium">
              If you have any questions, please reach out to us on Telegram @thevendinglocator
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-dark transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <EnvelopeIcon className="h-6 w-6" />
                Contact Support
              </Link>
              
              <Link
                href="/hot-leads"
                className="inline-flex items-center gap-3 bg-bronze text-white px-8 py-4 rounded-xl font-semibold hover:bg-bronze-dark transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MapPinIcon className="h-6 w-6" />
                Get Hot Leads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
          <p className="text-chocolate text-lg">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
