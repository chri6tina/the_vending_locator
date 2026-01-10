import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

// Initialize Stripe
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16'
    })
  : null

// Package pricing configuration
const PACKAGE_PRICES: Record<string, { amount: number; name: string; description: string }> = {
  starter: {
    amount: 49,
    name: 'Website Rental - Starter Plan',
    description: 'Multi-page website (3-4 pages) with basic features'
  },
  professional: {
    amount: 99,
    name: 'Website Rental - Professional Plan',
    description: 'Multi-page website (5-7 pages) with enhanced features'
  },
  premium: {
    amount: 149,
    name: 'Website Rental - Premium Plan',
    description: 'Multi-page website (8-10 pages) with advanced features'
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    const payload = await request.json()
    const { packageType, email } = payload

    // Validate required fields
    if (!packageType) {
      return NextResponse.json(
        { error: 'Missing packageType parameter' },
        { status: 400 }
      )
    }

    // Validate package type
    const packageConfig = PACKAGE_PRICES[packageType.toLowerCase()]
    if (!packageConfig) {
      return NextResponse.json(
        { error: 'Invalid package type' },
        { status: 400 }
      )
    }

    // Convert to cents for Stripe
    const unitAmountCents = Math.round(packageConfig.amount * 100)

    // Build success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thevendinglocator.com'
    const successUrl = `${baseUrl}/vending-website-rental/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${baseUrl}/vending-website-rental`

    // Create Stripe Checkout Session (subscription mode for monthly recurring)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageConfig.name,
              description: packageConfig.description,
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
        productType: 'website-rental',
        packageType: packageType.toLowerCase(),
        packageName: packageConfig.name,
        monthlyPrice: packageConfig.amount.toString(),
        source: 'vending_locator_website'
      },
      billing_address_collection: 'required',
      customer_email: email || undefined, // Optional: pre-fill email if provided
    })

    console.log('✅ Website Rental Checkout Session created:', {
      sessionId: session.id,
      packageType,
      monthlyPrice: packageConfig.amount
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url
    })

  } catch (error) {
    console.error('❌ Error creating website rental checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
