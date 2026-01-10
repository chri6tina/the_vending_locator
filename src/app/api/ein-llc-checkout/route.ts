import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { calculateTotalPrice, getStateFee, SERVICE_FEE } from '@/data/stateFilingFees'
import states from '@/data/states'

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
    const { stateSlug, citySlug, cityName, stateName, email } = payload

    // Validate required fields
    if (!stateSlug) {
      return NextResponse.json(
        { error: 'Missing stateSlug parameter' },
        { status: 400 }
      )
    }

    // Find state to validate
    const state = states.find(s => s.slug === stateSlug.toLowerCase())
    if (!state) {
      return NextResponse.json(
        { error: 'Invalid state' },
        { status: 400 }
      )
    }

    // Calculate price
    const stateFee = getStateFee(stateSlug)
    const totalPrice = calculateTotalPrice(stateSlug)

    if (totalPrice <= SERVICE_FEE) {
      return NextResponse.json(
        { error: 'Invalid state fee configuration' },
        { status: 400 }
      )
    }

    // Convert to cents for Stripe
    const unitAmountCents = Math.round(totalPrice * 100)

    // Build description
    const serviceDescription = `EIN & LLC Filing Service for ${cityName || stateName || state.name}`
    const lineItemDescription = `State filing fee: $${stateFee.toFixed(2)} + Service fee: $${SERVICE_FEE.toFixed(2)}`

    // Build success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thevendinglocator.com'
    const successUrl = `${baseUrl}/ein-llc/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = citySlug 
      ? `${baseUrl}/ein-llc/${citySlug}`
      : `${baseUrl}/ein-llc/${stateSlug}`

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceDescription,
              description: lineItemDescription,
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
        productType: 'ein-llc-filing',
        stateSlug: stateSlug,
        stateName: state.name,
        citySlug: citySlug || '',
        cityName: cityName || '',
        stateFee: stateFee.toString(),
        serviceFee: SERVICE_FEE.toString(),
        totalPrice: totalPrice.toString(),
        source: 'vending_locator_website'
      },
      billing_address_collection: 'required',
      customer_email: email || undefined, // Optional: pre-fill email if provided
    })

    console.log('✅ EIN/LLC Checkout Session created:', {
      sessionId: session.id,
      stateSlug,
      citySlug,
      totalPrice,
      stateFee,
      serviceFee: SERVICE_FEE
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url
    })

  } catch (error) {
    console.error('❌ Error creating EIN/LLC checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}


