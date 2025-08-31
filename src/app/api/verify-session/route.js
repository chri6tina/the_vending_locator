import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

// Handle missing environment variables during build time
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY not found - using placeholder for build process')
}

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
}) : null

export async function GET(request) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session_id')
    
    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id parameter' },
        { status: 400 }
      )
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent', 'line_items']
    })

    console.log('🔍 Verifying Stripe session:', {
      sessionId,
      paymentStatus: session.payment_status,
      customerEmail: session.customer_email,
      amount: session.amount_total
    })

    // Check if payment was successful
    if (session.payment_status === 'paid') {
      const amount = session.amount_total / 100 // Convert from cents
      const currency = session.currency
      const txId = session.payment_intent?.id || session.id
      
      // Get plan details from metadata
      const planName = session.metadata?.planName || 'Unknown Plan'
      const zipCode = session.metadata?.zipCode || 'Unknown'
      
      // Log successful payment for admin tracking
      console.log('✅ Payment verified successfully:', {
        sessionId,
        amount,
        currency,
        txId,
        planName,
        zipCode,
        customerEmail: session.customer_email
      })

      return NextResponse.json({
        ok: true,
        amount,
        currency,
        txId,
        planName,
        zipCode,
        customerEmail: session.customer_email,
        sessionData: {
          id: session.id,
          paymentStatus: session.payment_status,
          createdAt: session.created,
          metadata: session.metadata
        }
      })
    } else {
      console.log('❌ Payment not completed:', {
        sessionId,
        paymentStatus: session.payment_status
      })
      
      return NextResponse.json({
        ok: false,
        paymentStatus: session.payment_status,
        error: 'Payment not completed'
      })
    }

  } catch (error) {
    console.error('❌ Error verifying Stripe session:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
}
