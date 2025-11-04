import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 POST request received to /api/create-checkout-session')

    // In dev, proactively load env files at request time
    if (!process.env.STRIPE_SECRET_KEY) {
      try {
        // Prefer .env.local, then .env
        require('dotenv').config({ path: '.env.local' })
        require('dotenv').config()
      } catch {}
    }

    // Validate required environment variables at request time
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Missing STRIPE_SECRET_KEY environment variable' },
        { status: 500 }
      )
    }

    // Initialize Stripe safely at request time
    let stripe: Stripe
    try {
      stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-10-16'
      })
    } catch (error) {
      console.error('Failed to initialize Stripe:', error)
      return NextResponse.json(
        { error: 'Invalid STRIPE_SECRET_KEY format' },
        { status: 500 }
      )
    }

    // Parse and validate payload
    const payload = await request.json()
    
    // Handle hot lead purchase (new format)
    if (payload.items && payload.metadata?.productType === 'hot-lead') {
      const item = payload.items[0]
      const { metadata, successUrl, cancelUrl } = payload
      
      if (!item.name || !item.price) {
        return NextResponse.json(
          { error: 'Missing required fields for hot lead purchase' },
          { status: 400 }
        )
      }
      
      const priceNumber = Number.parseFloat(String(item.price))
      if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
        return NextResponse.json(
          { error: 'Invalid price value' },
          { status: 400 }
        )
      }
      
      const unitAmountCents = Math.round(priceNumber * 100)
      
      // Create Stripe Checkout Session for hot lead
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                description: 'Exclusive vending machine location lead with full contact information',
              },
              unit_amount: unitAmountCents,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: {
          leadId: metadata.leadId,
          leadSlug: metadata.leadSlug,
          productType: 'hot-lead',
          source: 'vending_locator_website'
        },
        billing_address_collection: 'required',
      })
      
      console.log('✅ Stripe Checkout Session created for hot lead:', {
        sessionId: session.id,
        leadId: metadata.leadId,
        leadSlug: metadata.leadSlug,
        price: item.price
      })
      
      return NextResponse.json({
        success: true,
        sessionId: session.id,
        url: session.url
      })
    }
    
    // Handle regular pricing package purchase (original format)
    const { email, zipCode, planName, planPrice, planId } = payload

    if (!email || !zipCode || !planName || !planPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const priceNumber = Number.parseFloat(String(planPrice))
    if (!Number.isFinite(priceNumber) || priceNumber <= 0) {
      return NextResponse.json(
        { error: 'Invalid planPrice value' },
        { status: 400 }
      )
    }

    const unitAmountCents = Math.round(priceNumber * 100)

    // Determine base URL (use localhost in dev)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (process.env.VERCEL ? 'https://www.thevendinglocator.com' : 'http://localhost:3000')

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
            unit_amount: unitAmountCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel`,
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
    const err: any = error
    console.error('❌ Error creating Stripe Checkout Session:', err)

    // Helpful diagnostics in dev
    const details = {
      message: err?.message,
      type: err?.type,
      code: err?.code,
      statusCode: err?.statusCode
    }
    if (process.env.NODE_ENV !== 'production') {
      console.error('❌ Stripe error details:', details)
    }

    // Map common Stripe errors to clearer responses
    if (err?.code === 'api_key_expired' || err?.type === 'StripeAuthenticationError') {
      return NextResponse.json(
        { error: 'Stripe authentication failed. Please update the API key.', details: process.env.NODE_ENV !== 'production' ? details : undefined },
        { status: 401 }
      )
    }
    if (err?.type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        { error: 'Invalid payment request. Please check the request parameters.', details: process.env.NODE_ENV !== 'production' ? details : undefined },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again.', details: process.env.NODE_ENV !== 'production' ? details : undefined },
      { status: 500 }
    )
  }
}
