import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
})

export async function POST(request) {
  try {
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
