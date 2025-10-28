import { NextRequest, NextResponse } from 'next/server'

// Production-ready storage - starts empty for real leads only
// In production, this should be replaced with a proper database
let leads: any[] = []

// GET - Retrieve all leads
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      leads: leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    })
  } catch (error) {
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
    
    const newLead = {
      id: `lead-${Date.now()}`,
      title: body.title.trim(),
      businessType: body.businessType.trim(),
      employeeCount: body.employeeCount,
      zipCode: body.zipCode.trim(),
      description: body.description.trim(),
      price: price,
      status: 'available',
      createdAt: new Date().toISOString()
    }
    
    leads.unshift(newLead) // Add to beginning of array
    
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
    
    const leadIndex = leads.findIndex(lead => lead.id === id)
    if (leadIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        error: 'Lead not found' 
      }, { status: 404 })
    }
    
    leads[leadIndex] = { ...leads[leadIndex], ...updates }
    
    return NextResponse.json({ 
      success: true, 
      lead: leads[leadIndex] 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update lead' 
    }, { status: 500 })
  }
}
