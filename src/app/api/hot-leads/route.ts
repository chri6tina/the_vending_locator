import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// In-memory storage for development (when Supabase not configured)
let devLeads: any[] = []

// GET - Retrieve all leads
export async function GET() {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('Using dev mode - returning in-memory leads')
      return NextResponse.json({ 
        success: true, 
        leads: devLeads 
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

// POST - Create new lead
export async function POST(request: NextRequest) {
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
      console.log('Using dev mode - storing in memory')
      
      const newLead = {
        id: `dev-${Date.now()}`,
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
        created_at: new Date().toISOString(),
        contact_name: body.contactName?.trim() || null,
        contact_email: body.contactEmail?.trim() || null,
        contact_phone: body.contactPhone?.trim() || null,
        full_address: body.fullAddress?.trim() || null
      }
      
      devLeads.unshift(newLead)
      
      return NextResponse.json({ 
        success: true, 
        lead: newLead 
      })
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
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to save lead to database: ' + error.message 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      lead: newLead 
    })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create lead' 
    }, { status: 500 })
  }
}

// PUT - Update lead (for marking as sold, etc.)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updates } = body
    
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') {
      console.log('Using dev mode - updating in memory')
      
      const leadIndex = devLeads.findIndex(l => l.id === id)
      
      if (leadIndex === -1) {
        return NextResponse.json({ 
          success: false, 
          error: 'Lead not found' 
        }, { status: 404 })
      }

      // Convert camelCase to snake_case for consistency
      const updateData: any = { ...devLeads[leadIndex] }
      if (updates.title) updateData.title = updates.title
      if (updates.businessType) updateData.business_type = updates.businessType
      if (updates.employeeCount) updateData.employee_count = updates.employeeCount
      if (updates.zipCode) updateData.zip_code = updates.zipCode
      if (updates.description) updateData.description = updates.description
      if (updates.price) updateData.price = updates.price
      if (updates.status) updateData.status = updates.status
      if (updates.status === 'sold') updateData.sold_at = new Date().toISOString()
      
      devLeads[leadIndex] = updateData
      
      return NextResponse.json({ 
        success: true, 
        lead: updateData 
      })
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
        error: 'Failed to update lead: ' + error.message 
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
