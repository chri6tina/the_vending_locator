import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 POST request received to /api/create-payment-links')

    // In dev, proactively load env files at request time
    if (!process.env.STRIPE_SECRET_KEY) {
      try {
        require('dotenv').config({ path: '.env.local' })
        require('dotenv').config()
      } catch {}
    }

    // Validate required environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Missing STRIPE_SECRET_KEY environment variable' },
        { status: 500 }
      )
    }

    // Initialize Stripe
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

    // Price tiers for hot leads
    const priceTiers = [
      { amount: 250, name: 'Hot Lead - $250' },
      { amount: 500, name: 'Hot Lead - $500' },
      { amount: 750, name: 'Hot Lead - $750' },
      { amount: 1000, name: 'Hot Lead - $1,000' },
      { amount: 1250, name: 'Hot Lead - $1,250' }
    ]

    const paymentLinks = []

    // Create a payment link for each price tier
    for (const tier of priceTiers) {
      try {
        const paymentLink = await stripe.paymentLinks.create({
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: tier.name,
                  description: 'Exclusive vending machine location lead with full contact information',
                },
                unit_amount: tier.amount * 100, // Convert to cents
              },
              quantity: 1,
            },
          ],
          metadata: {
            productType: 'hot-lead',
            priceTier: tier.amount.toString(),
            source: 'vending_locator_admin'
          },
        })

        paymentLinks.push({
          price: tier.amount,
          name: tier.name,
          url: paymentLink.url,
          id: paymentLink.id
        })

        console.log(`✅ Created payment link for $${tier.amount}:`, paymentLink.url)
      } catch (error: any) {
        console.error(`❌ Failed to create payment link for $${tier.amount}:`, error.message)
        paymentLinks.push({
          price: tier.amount,
          name: tier.name,
          error: error.message
        })
      }
    }

    return NextResponse.json({
      success: true,
      paymentLinks
    })

  } catch (error) {
    const err: any = error
    console.error('❌ Error creating Stripe Payment Links:', err)

    return NextResponse.json(
      { 
        error: 'Failed to create payment links. Please try again.',
        details: process.env.NODE_ENV !== 'production' ? err?.message : undefined
      },
      { status: 500 }
    )
  }
}

