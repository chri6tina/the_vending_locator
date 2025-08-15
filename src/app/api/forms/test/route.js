import { NextResponse } from 'next/server'

// Sample form data for testing
const sampleForms = [
  {
    page: '/contact',
    formType: 'contact_form',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    customerPhone: '(555) 123-4567',
    customerCompany: 'ABC Company',
    paymentAmount: 0,
    notes: 'Interested in vending machine locations in Austin, TX'
  },
  {
    page: '/pricing',
    formType: 'pricing_inquiry',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah@business.com',
    customerPhone: '(555) 987-6543',
    customerCompany: 'XYZ Corp',
    paymentAmount: 99,
    notes: 'Purchased premium package for vending leads'
  },
  {
    page: '/services',
    formType: 'service_request',
    customerName: 'Mike Davis',
    customerEmail: 'mike@startup.io',
    customerPhone: '(555) 456-7890',
    customerCompany: 'Startup Inc',
    paymentAmount: 0,
    notes: 'Looking for bulk location data for expansion'
  }
]

export async function POST() {
  try {
    // Submit sample forms
    const submittedForms = []
    
    for (const formData of sampleForms) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/forms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const result = await response.json()
        submittedForms.push(result)
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Sample forms added successfully',
      formsAdded: submittedForms.length,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error adding sample forms:', error)
    return NextResponse.json(
      { error: 'Failed to add sample forms' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Test endpoint - use POST to add sample form data',
    timestamp: new Date().toISOString()
  })
}
