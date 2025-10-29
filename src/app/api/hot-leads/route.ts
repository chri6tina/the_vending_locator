import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Retrieve all leads
export async function GET() {
  try {
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

// POST - Create new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.businessType || !body.employeeCount || !body.zipCode || !body.description || !body.price) {
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
    
    const { data: newLead, error } = await supabase
      .from('hot_leads')
      .insert([{
        title: body.title.trim(),
        business_type: body.businessType.trim(),
        employee_count: body.employeeCount,
        zip_code: body.zipCode.trim(),
        description: body.description.trim(),
        price: price,
        status: 'available'
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
