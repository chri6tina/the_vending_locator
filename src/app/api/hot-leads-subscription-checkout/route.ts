import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

// Initialize Stripe
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16'
    })
  : null

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    const payload = await request.json()
    const { email } = payload

    // Convert to cents for Stripe ($20/month)
    const unitAmountCents = 2000

    // Build success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thevendinglocator.com'
    const successUrl = `${baseUrl}/hot-leads/subscription-success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${baseUrl}/hot-leads`

    // Create Stripe Checkout Session (subscription mode for monthly recurring)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Hot Leads Premium Subscription',
              description: 'Get first access to premium vending leads with subscriber discounts',
            },
            unit_amount: unitAmountCents,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        productType: 'hot-leads-subscription',
        monthlyPrice: '20',
        source: 'vending_locator_website'
      },
      billing_address_collection: 'required',
      customer_email: email || undefined,
    })

    console.log('✅ Hot Leads Subscription Checkout Session created:', {
      sessionId: session.id,
      monthlyPrice: 20
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url
    })

  } catch (error) {
    console.error('❌ Error creating hot leads subscription checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
