import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { requireAdminAuth } from '@/lib/api-auth'

// GET - Retrieve all leads (public, but only shows available leads)
export async function GET() {
  try {
    // Always use Supabase - return empty array if not configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('Supabase not configured - returning empty leads array')
      return NextResponse.json({ 
        success: true, 
        leads: [] 
      })
    }

    const { data: leads, error } = await supabase
      .from('hot_leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to fetch leads from database' 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      leads: leads || []
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch leads' 
    }, { status: 500 })
  }
}

// Helper function to generate slug from city and state
function generateSlug(city: string, state: string): string {
  const combined = `hot-vending-lead-in-${city}-${state}`
  return combined
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// POST - Create new lead (admin only)
export async function POST(request: NextRequest) {
  // Require admin authentication
  const authError = requireAdminAuth(request)
  if (authError) {
    return authError
  }

  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.city || !body.state || !body.businessType || !body.employeeCount || !body.zipCode || !body.description || !body.price) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields. Please fill in all fields.' 
      }, { status: 400 })
    }

    // Validate price is a valid number
    const price = parseFloat(body.price)
    if (isNaN(price) || price <= 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Price must be a valid number greater than 0' 
      }, { status: 400 })
    }
    
    // Generate slug from city and state
    const slug = generateSlug(body.city.trim(), body.state.trim())
    
    // Generate title if not provided
    const title = body.title || `Vending Location in ${body.city}, ${body.state}`
    
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({ 
        success: false, 
        error: 'Supabase is not configured. Please configure your database to create leads.' 
      }, { status: 500 })
    }
    
    const { data: newLead, error } = await supabase
      .from('hot_leads')
      .insert([{
        title: title.trim(),
        slug: slug,
        city: body.city.trim(),
        state: body.state.trim(),
        business_type: body.businessType.trim(),
        employee_count: body.employeeCount,
        zip_code: body.zipCode.trim(),
        description: body.description.trim(),
        price: price,
        status: 'available',
        contact_name: body.contactName?.trim() || null,
        contact_email: body.contactEmail?.trim() || null,
        contact_phone: body.contactPhone?.trim() || null,
        full_address: body.fullAddress?.trim() || null
      }])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      // Don't expose database error details to client
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to save lead to database' 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      lead: newLead 
    })
  } catch (error) {
    console.error('Error creating lead:', error)
    // Don't expose error details to client
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create lead' 
    }, { status: 500 })
  }
}

// PUT - Update lead (for marking as sold, etc.) - Admin only
export async function PUT(request: NextRequest) {
  // Require admin authentication
  const authError = requireAdminAuth(request)
  if (authError) {
    return authError
  }

  try {
    const body = await request.json()
    const { id, ...updates } = body
    
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({ 
        success: false, 
        error: 'Supabase is not configured. Please configure your database to update leads.' 
      }, { status: 500 })
    }
    
    // Convert camelCase to snake_case for database
    const dbUpdates: any = {}
    if (updates.title) dbUpdates.title = updates.title
    if (updates.businessType) dbUpdates.business_type = updates.businessType
    if (updates.employeeCount) dbUpdates.employee_count = updates.employeeCount
    if (updates.zipCode) dbUpdates.zip_code = updates.zipCode
    if (updates.description) dbUpdates.description = updates.description
    if (updates.price) dbUpdates.price = updates.price
    if (updates.status) dbUpdates.status = updates.status
    if (updates.status === 'sold') dbUpdates.sold_at = new Date().toISOString()
    
    const { data: updatedLead, error } = await supabase
      .from('hot_leads')
      .update(dbUpdates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Supabase update error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to update lead' 
      }, { status: 500 })
    }

    if (!updatedLead) {
      return NextResponse.json({ 
        success: false, 
        error: 'Lead not found' 
      }, { status: 404 })
    }
    
    return NextResponse.json({ 
      success: true, 
      lead: updatedLead 
    })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update lead' 
    }, { status: 500 })
  }
}

// DELETE - Delete a lead - Admin only
export async function DELETE(request: NextRequest) {
  // Require admin authentication
  const authError = requireAdminAuth(request)
  if (authError) {
    return authError
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Lead ID is required' 
      }, { status: 400 })
    }
    
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      return NextResponse.json({ 
        success: false, 
        error: 'Supabase is not configured. Please configure your database to delete leads.' 
      }, { status: 500 })
    }
    
    const { error } = await supabase
      .from('hot_leads')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase delete error:', error)
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to delete lead' 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Lead deleted successfully' 
    })
  } catch (error) {
    console.error('Error deleting lead:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete lead' 
    }, { status: 500 })
  }
}
