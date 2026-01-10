import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { requireAdminAuth } from '@/lib/api-auth'

export const dynamic = 'force-dynamic'

// POST - Store subscription data (public - for subscription signups)
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { name, email, city, state, subscriptionType, monthlyPrice, status } = payload

    // Validate required fields
    if (!name || !email || !city || !state) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('📋 Hot Leads Subscription Signup (Supabase not configured):', {
        name,
        email,
        city,
        state,
        subscriptionType,
        monthlyPrice,
        status,
        timestamp: new Date().toISOString()
      })
      return NextResponse.json({
        success: true,
        message: 'Subscription data logged (database not configured)'
      })
    }

    // Store in Supabase
    const { data: subscription, error } = await supabase
      .from('hot_leads_subscriptions')
      .insert([{
        name: name.trim(),
        email: email.trim(),
        city: city.trim(),
        state: state.trim(),
        subscription_type: subscriptionType || 'hot-leads-premium',
        monthly_price: monthlyPrice || 20,
        status: status || 'pending',
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('❌ Supabase insert error:', error)
      // Fallback to logging if database insert fails
      console.log('📋 Hot Leads Subscription Signup (fallback):', {
        name,
        email,
        city,
        state,
        subscriptionType,
        monthlyPrice,
        status,
        timestamp: new Date().toISOString()
      })
      return NextResponse.json({
        success: true,
        message: 'Subscription data recorded (logged)'
      })
    }

    console.log('✅ Hot Leads Subscription stored:', subscription)

    return NextResponse.json({
      success: true,
      message: 'Subscription data recorded',
      subscription: subscription?.[0]
    })

  } catch (error) {
    console.error('❌ Error recording subscription:', error)
    return NextResponse.json(
      { error: 'Failed to record subscription' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve subscriptions (for dashboard) - Admin only
export async function GET(request: NextRequest) {
  // Require admin authentication
  const authError = requireAdminAuth(request)
  if (authError) {
    return authError
  }

  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({
        success: true,
        subscriptions: []
      })
    }

    const { data: subscriptions, error } = await supabase
      .from('hot_leads_subscriptions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('❌ Supabase fetch error:', error)
      return NextResponse.json({
        success: true,
        subscriptions: []
      })
    }

    return NextResponse.json({
      success: true,
      subscriptions: subscriptions || []
    })

  } catch (error) {
    console.error('❌ Error fetching subscriptions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions' },
      { status: 500 }
    )
  }
}
