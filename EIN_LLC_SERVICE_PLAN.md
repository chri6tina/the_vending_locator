# EIN & LLC Filing Service Implementation Plan

## Overview
Create a service to help people file their EIN and LLC, with pricing that varies by state (state filing fee + $50 service fee).

## Architecture

### 1. Data Structure
- **File**: `src/data/stateFilingFees.ts`
- Stores state LLC filing fees
- Service fee: $50 (configurable constant)
- Helper functions to calculate total price

### 2. API Route
- **File**: `src/app/api/ein-llc-checkout/route.ts`
- Creates Stripe Checkout session with dynamic pricing
- Accepts: `stateSlug`, `citySlug` (optional), `cityName` (optional), `stateName`, `email` (optional)
- Calculates: `stateFee + $50 = totalPrice`
- Returns Stripe Checkout URL

### 3. Service Pages Structure
Similar to tax-services:
- `/ein-llc` - Main landing page
- `/ein-llc/[state-slug]` - State pages (e.g., `/ein-llc/florida`)
- `/ein-llc/[city-slug]` - City pages (e.g., `/ein-llc/jacksonville-florida`)

### 4. Checkout Flow
1. User clicks "Get Started" or "File Now" button on city/state page
2. Button calls `/api/ein-llc-checkout` with state/city info
3. API calculates price and creates Stripe Checkout session
4. User redirected to Stripe Checkout
5. After payment, redirected to success page

## Implementation Steps

### Step 1: Update State Filing Fees
- Review and update `src/data/stateFilingFees.ts` with accurate 2024 filing fees
- Note: Some states have additional fees (e.g., CA has $800 annual tax, NY requires publication)

### Step 2: Create API Route
- Already created: `src/app/api/ein-llc-checkout/route.ts`
- Test with different states to verify pricing

### Step 3: Create Service Pages
- Create `/src/app/ein-llc/pageClient.tsx` (main landing page)
- Create `/src/app/ein-llc/[state-slug]/pageClient.tsx` (state pages)
- Create `/src/app/ein-llc/[city-slug]/pageClient.tsx` (city pages) - Optional, can start with state pages only

### Step 4: Add Checkout Button Component
Create a reusable checkout button component:

```tsx
// src/components/EinLLCCheckoutButton.tsx
'use client'

import { useState } from 'react'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'

interface Props {
  stateSlug: string
  citySlug?: string
  cityName?: string
  stateName: string
}

export default function EinLLCCheckoutButton({ stateSlug, citySlug, cityName, stateName }: Props) {
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
          citySlug,
          cityName,
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-stone/20">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-navy mb-2">
          File Your EIN & LLC in {cityName || stateName}
        </h3>
        <div className="space-y-1 text-sm text-charcoal/70">
          <div className="flex justify-between">
            <span>State Filing Fee:</span>
            <span className="font-semibold">${stateFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee:</span>
            <span className="font-semibold">${SERVICE_FEE.toFixed(2)}</span>
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
        className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : `Get Started - $${totalPrice.toFixed(2)}`}
      </button>
      
      <p className="text-xs text-charcoal/60 text-center mt-3">
        Secure checkout powered by Stripe
      </p>
    </div>
  )
}
```

### Step 5: Create Success Page
- `/src/app/ein-llc/success/pageClient.tsx`
- Verify payment with Stripe
- Display confirmation and next steps

## Pricing Strategy

### Current Approach
- **State Filing Fee** (varies by state) + **$50 Service Fee** = Total Price
- Example: Florida = $125 (state) + $50 (service) = $175 total

### Alternative Approaches (if needed)
1. **Fixed Service Fee Only** - Charge just $50, customer pays state fee separately
2. **Tiered Pricing** - Different service fees by state complexity
3. **Bundle Pricing** - EIN + LLC together vs. separate

## Important Considerations

### State-Specific Requirements
- **California**: $70 filing fee + $800 annual franchise tax (paid separately)
- **New York**: $200 filing fee + Publication requirement (~$1000-1500)
- **Tennessee**: Filing fee varies by county (minimum $300)
- **Massachusetts**: $500 filing fee (one of the highest)

### Legal Considerations
- You may need to be a registered agent in each state
- Some states require professional licensing for business filing services
- Consider adding disclaimers about not providing legal/tax advice

### EIN Filing
- EIN filing is FREE with the IRS
- Your $50 service fee would be for assistance/filing the form
- Consider if you want to charge separately or bundle with LLC

## Next Steps

1. **Review and update state filing fees** in `stateFilingFees.ts`
2. **Test the API route** with a few states
3. **Create the main landing page** (`/ein-llc`)
4. **Create state pages** (start with FL, TX, CA like tax-services)
5. **Create checkout button component**
6. **Create success page**
7. **Test end-to-end flow**
8. **Add to sitemap**

## Questions to Consider

1. Do you want city-specific pages or just state pages?
2. Should EIN filing be included or separate service?
3. Do you need to handle the actual filing, or just collect payment and file manually?
4. Do you need webhooks to handle post-payment processing?
5. Should you collect additional information (business name, type, etc.) before checkout?

