'use client'

import { useState } from 'react'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface EinLLCCheckoutButtonProps {
  stateSlug: string
  stateName: string
  variant?: 'default' | 'large' | 'inline'
  className?: string
}

export default function EinLLCCheckoutButton({ 
  stateSlug, 
  stateName,
  variant = 'default',
  className = ''
}: EinLLCCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/ein-llc-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stateSlug,
          stateName,
        }),
      })

      const data = await response.json()

      if (data.success && data.url) {
        window.location.href = data.url
      } else {
        alert('Error creating checkout session. Please try again.')
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Error creating checkout session. Please try again.')
      setIsLoading(false)
    }
  }

  const totalPrice = calculateTotalPrice(stateSlug)
  const stateFee = getStateFee(stateSlug)

  if (variant === 'inline') {
    return (
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={`inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        {isLoading ? 'Processing...' : `Get Started - $${totalPrice.toFixed(2)}`}
        {!isLoading && <ArrowRightIcon className="h-4 w-4" />}
      </button>
    )
  }

  if (variant === 'large') {
    return (
      <div className={`bg-white p-8 rounded-2xl shadow-xl border border-stone/20 ${className}`}>
        <h3 className="text-3xl font-playfair font-bold text-navy mb-4">
          File Your EIN & LLC in {stateName}
        </h3>
        
        <div className="mb-6 space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-stone/20">
            <span className="text-charcoal">State Filing Fee:</span>
            <span className="font-semibold text-charcoal">${stateFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-stone/20">
            <span className="text-charcoal">Service Fee:</span>
            <span className="font-semibold text-charcoal">${SERVICE_FEE.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-semibold text-charcoal">Total:</span>
            <span className="text-2xl font-bold text-navy">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        
        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full bg-navy hover:bg-navy/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? 'Processing...' : `Get Started - $${totalPrice.toFixed(2)}`}
          {!isLoading && <ArrowRightIcon className="h-5 w-5" />}
        </button>
        
        <p className="text-xs text-charcoal/60 text-center mt-4">
          Secure checkout powered by Stripe • All major credit cards accepted
        </p>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-stone/20 ${className}`}>
      <div className="mb-4">
        <h3 className="text-2xl font-playfair font-bold text-navy mb-3">
          File Your EIN & LLC in {stateName}
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-charcoal/70">State Filing Fee:</span>
            <span className="font-semibold text-charcoal">${stateFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal/70">Service Fee:</span>
            <span className="font-semibold text-charcoal">${SERVICE_FEE.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-stone/20">
            <span className="font-semibold text-charcoal">Total:</span>
            <span className="font-bold text-navy text-lg">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? 'Processing...' : `Get Started - $${totalPrice.toFixed(2)}`}
        {!isLoading && <ArrowRightIcon className="h-5 w-5" />}
      </button>
      
      <p className="text-xs text-charcoal/60 text-center mt-3">
        Secure checkout powered by Stripe
      </p>
    </div>
  )
}


