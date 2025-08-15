import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Debug environment variable
console.log('🔍 STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY)
console.log('🔍 STRIPE_SECRET_KEY length:', process.env.STRIPE_SECRET_KEY?.length || 0)
console.log('🔍 STRIPE_SECRET_KEY starts with:', process.env.STRIPE_SECRET_KEY?.substring(0, 7) || 'undefined')

// More robust Stripe initialization
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
})

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 POST request received to /api/create-checkout-session')
    console.log('🔍 Environment check inside POST:', {
      hasKey: !!process.env.STRIPE_SECRET_KEY,
      keyLength: process.env.STRIPE_SECRET_KEY?.length || 0,
      keyStart: process.env.STRIPE_SECRET_KEY?.substring(0, 7) || 'undefined'
    })
    
    const { email, zipCode, planName, planPrice, planId } = await request.json()
    
    if (!email || !zipCode || !planName || !planPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planName} - Vending Location Package`,
              description: `Access to qualified vending locations with ${planName} package`,
            },
            unit_amount: Math.round(parseFloat(planPrice) * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.thevendinglocator.com'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.thevendinglocator.com'}/checkout/cancel`,
      customer_email: email,
      metadata: {
        zipCode: zipCode,
        planName: planName,
        planId: planId,
        source: 'vending_locator_website'
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    })

    console.log('✅ Stripe Checkout Session created:', {
      sessionId: session.id,
      planName,
      planPrice,
      email,
      zipCode
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url
    })

  } catch (error) {
    console.error('❌ Error creating Stripe Checkout Session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
