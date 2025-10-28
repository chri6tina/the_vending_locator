import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for now (in production, use a database)
let leads: any[] = [
  {
    id: 'lead-1',
    title: 'Premium Office Complex - 500+ Employees',
    businessName: 'TechCorp Industries',
    location: '123 Business Blvd, Austin, TX 78701',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    contactName: 'Sarah Johnson',
    contactPhone: '(555) 123-4567',
    contactEmail: 'sarah@techcorp.com',
    employeeCount: '500-1000',
    businessType: 'office',
    description: 'Large tech company with multiple break rooms. Decision maker is facilities manager Sarah Johnson. Best approach is email first, then follow-up call. They are actively looking for vending solutions.',
    price: 299,
    status: 'available',
    createdAt: new Date('2024-01-15').toISOString()
  },
  {
    id: 'lead-2',
    title: 'Manufacturing Facility - High Traffic',
    businessName: 'ABC Manufacturing',
    location: '456 Industrial Way, Dallas, TX 75201',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201',
    contactName: 'Mike Rodriguez',
    contactPhone: '(555) 987-6543',
    contactEmail: 'mike@abcmfg.com',
    employeeCount: '250-500',
    businessType: 'manufacturing',
    description: '24/7 manufacturing operation with 3 shifts. High demand for snacks and beverages. Contact Mike Rodriguez, Plant Manager. He mentioned budget approved for Q1.',
    price: 199,
    status: 'available',
    createdAt: new Date('2024-01-14').toISOString()
  },
  {
    id: 'lead-3',
    title: 'Hospital Complex - Multiple Buildings',
    businessName: 'Central Medical Center',
    location: '789 Health Dr, Houston, TX 77001',
    city: 'Houston',
    state: 'TX',
    zipCode: '77001',
    contactName: 'Dr. Lisa Chen',
    contactPhone: '(555) 456-7890',
    contactEmail: 'lchen@centralmed.com',
    employeeCount: '1000+',
    businessType: 'healthcare',
    description: 'Large hospital system looking for healthy vending options. Dr. Chen is head of facilities. They want to pilot in main lobby first, then expand to other buildings.',
    price: 399,
    status: 'available',
    createdAt: new Date('2024-01-13').toISOString()
  }
]

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
    
    const newLead = {
      id: `lead-${Date.now()}`,
      title: body.title,
      businessName: body.businessName,
      location: body.location,
      city: body.city,
      state: body.state,
      zipCode: body.zipCode,
      contactName: body.contactName,
      contactPhone: body.contactPhone,
      contactEmail: body.contactEmail,
      employeeCount: body.employeeCount,
      businessType: body.businessType,
      description: body.description,
      price: parseFloat(body.price),
      status: 'available',
      createdAt: new Date().toISOString()
    }
    
    leads.unshift(newLead) // Add to beginning of array
    
    return NextResponse.json({ 
      success: true, 
      lead: newLead 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create lead' 
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
