import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// POST - Store visitor information
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { email, city, state, source, consent } = payload

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('📋 Visitor Data (Supabase not configured):', {
        email: email.trim(),
        city: city?.trim() || null,
        state: state?.trim() || null,
        source: source || 'unknown',
        consent: consent || false,
        timestamp: new Date().toISOString()
      })
      return NextResponse.json({
        success: true,
        message: 'Visitor data logged (database not configured)'
      })
    }

    // Check if email already exists
    const { data: existingVisitor } = await supabase
      .from('visitors')
      .select('id, email, city, state')
      .eq('email', email.trim().toLowerCase())
      .single()

    if (existingVisitor) {
      // Update existing visitor with new information if provided
      const updates: any = {
        updated_at: new Date().toISOString()
      }
      
      if (city && !existingVisitor.city) {
        updates.city = city.trim()
      }
      if (state && !existingVisitor.state) {
        updates.state = state.trim()
      }
      if (source) {
        updates.last_source = source
      }
      if (consent !== undefined) {
        updates.consent = consent
      }

      const { data: updatedVisitor, error: updateError } = await supabase
        .from('visitors')
        .update(updates)
        .eq('id', existingVisitor.id)
        .select()

      if (updateError) {
        console.error('❌ Supabase update error:', updateError)
        return NextResponse.json({
          success: true,
          message: 'Visitor data received (update failed, logged)'
        })
      }

      console.log('✅ Visitor updated:', updatedVisitor)
      return NextResponse.json({
        success: true,
        message: 'Visitor information updated',
        visitor: updatedVisitor?.[0]
      })
    }

    // Create new visitor
    const { data: newVisitor, error } = await supabase
      .from('visitors')
      .insert([{
        email: email.trim().toLowerCase(),
        city: city?.trim() || null,
        state: state?.trim() || null,
        source: source || 'unknown',
        consent: consent || false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('❌ Supabase insert error:', error)
      // Fallback to logging if database insert fails
      console.log('📋 Visitor Data (fallback):', {
        email: email.trim(),
        city: city?.trim() || null,
        state: state?.trim() || null,
        source: source || 'unknown',
        consent: consent || false,
        timestamp: new Date().toISOString()
      })
      return NextResponse.json({
        success: true,
        message: 'Visitor data recorded (logged)'
      })
    }

    console.log('✅ New visitor stored:', newVisitor)

    return NextResponse.json({
      success: true,
      message: 'Visitor information stored',
      visitor: newVisitor?.[0]
    })

  } catch (error) {
    console.error('❌ Error storing visitor:', error)
    return NextResponse.json(
      { error: 'Failed to store visitor information' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve visitors (for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const state = searchParams.get('state')
    const city = searchParams.get('city')
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({
        success: true,
        visitors: [],
        total: 0
      })
    }

    let query = supabase
      .from('visitors')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (state) {
      query = query.eq('state', state)
    }
    if (city) {
      query = query.eq('city', city)
    }

    const { data: visitors, error, count } = await query

    if (error) {
      console.error('❌ Supabase fetch error:', error)
      return NextResponse.json({
        success: true,
        visitors: [],
        total: 0
      })
    }

    return NextResponse.json({
      success: true,
      visitors: visitors || [],
      total: count || 0,
      limit,
      offset
    })

  } catch (error) {
    console.error('❌ Error fetching visitors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch visitors' },
      { status: 500 }
    )
  }
}
