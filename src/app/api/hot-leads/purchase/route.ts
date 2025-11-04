import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import Stripe from 'stripe'

// POST - Mark lead as purchased and return full details
export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ 
        success: false, 
        error: 'Database not configured' 
      }, { status: 503 })
    }

    const body = await request.json()
    const { leadId, sessionId } = body

    if (!leadId || !sessionId) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields' 
      }, { status: 400 })
    }

    // Verify the Stripe session
    if (process.env.STRIPE_SECRET_KEY) {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-10-16'
      })

      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        
        // Verify payment was successful and matches the lead
        if (session.payment_status !== 'paid') {
          return NextResponse.json({ 
            success: false, 
            error: 'Payment not completed' 
          }, { status: 400 })
        }

        if (session.metadata?.leadId !== leadId) {
          return NextResponse.json({ 
            success: false, 
            error: 'Payment does not match this lead' 
          }, { status: 400 })
        }

        // Update lead status to sold
        const { data: updatedLead, error: updateError } = await supabase
          .from('hot_leads')
          .update({
            status: 'sold',
            sold_at: new Date().toISOString(),
            buyer_email: session.customer_email || session.customer_details?.email
          })
          .eq('id', leadId)
          .select()
          .single()

        if (updateError) {
          console.error('Failed to update lead:', updateError)
          return NextResponse.json({ 
            success: false, 
            error: 'Failed to mark lead as sold' 
          }, { status: 500 })
        }

        // Return the full lead details including contact information
        return NextResponse.json({ 
          success: true, 
          lead: updatedLead
        })

      } catch (stripeError) {
        console.error('Stripe verification error:', stripeError)
        return NextResponse.json({ 
          success: false, 
          error: 'Failed to verify payment' 
        }, { status: 500 })
      }
    }

    // If Stripe is not configured, just return the lead (dev mode)
    const { data: lead, error } = await supabase
      .from('hot_leads')
      .select('*')
      .eq('id', leadId)
      .single()

    if (error || !lead) {
      return NextResponse.json({ 
        success: false, 
        error: 'Lead not found' 
      }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true, 
      lead: lead
    })

  } catch (error) {
    console.error('Error processing purchase:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process purchase' 
    }, { status: 500 })
  }
}

