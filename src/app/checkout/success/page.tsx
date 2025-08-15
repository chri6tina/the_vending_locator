'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircleIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { trackPurchase } from '@/lib/conversion-tracking'

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
                <span className="text-chocolate font-semibold">{paymentDetails?.planName}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">Amount:</span>
                <span className="text-chocolate font-semibold">
                  ${paymentDetails?.amount} {paymentDetails?.currency?.toUpperCase()}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">Transaction ID:</span>
                <span className="text-chocolate font-mono text-sm">{paymentDetails?.txId}</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-stone/5 rounded-lg">
                <span className="text-stone-600 font-medium">ZIP Code:</span>
                <span className="text-chocolate font-semibold">{paymentDetails?.zipCode}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-navy/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-sm text-navy/80">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-navy mt-2 flex-none" />
                  <p>You'll receive a confirmation email at <strong>{paymentDetails?.customerEmail}</strong></p>
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
