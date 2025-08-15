import { NextResponse } from 'next/server'

// In-memory storage for forms (in production, this would be a database)
let forms = []
let formIdCounter = 1

// Helper function to generate unique form ID
function generateFormId() {
  return `form_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// GET: Retrieve all forms with optional filtering
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = searchParams.get('page')
    const paymentStatus = searchParams.get('paymentStatus')
    
    let filteredForms = [...forms]
    
    // Filter by status
    if (status) {
      filteredForms = filteredForms.filter(form => form.status === status)
    }
    
    // Filter by page
    if (page) {
      filteredForms = filteredForms.filter(form => form.page === page)
    }
    
    // Filter by payment status
    if (paymentStatus) {
      filteredForms = filteredForms.filter(form => form.paymentStatus === paymentStatus)
    }
    
    // Sort by most recent first
    filteredForms.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
    
    return NextResponse.json({
      success: true,
      forms: filteredForms,
      total: filteredForms.length,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error fetching forms:', error)
    return NextResponse.json(
      { error: 'Failed to fetch forms' },
      { status: 500 }
    )
  }
}

// POST: Submit a new form
export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    if (!formData.page || !formData.formType) {
      return NextResponse.json(
        { error: 'Missing required fields: page and formType' },
        { status: 400 }
      )
    }
    
    // Create new form entry
    const newForm = {
      id: generateFormId(),
      ...formData,
      submittedAt: new Date().toISOString(),
      status: 'pending', // pending, in_progress, completed, cancelled
      paymentStatus: 'unpaid', // unpaid, paid, refunded, failed
      paymentAmount: formData.paymentAmount || 0,
      stripePaymentId: formData.stripePaymentId || null,
      taskCompleted: false,
      taskCompletedAt: null,
      notes: formData.notes || '',
      customerContact: {
        name: formData.customerName || '',
        email: formData.customerEmail || '',
        phone: formData.customerPhone || '',
        company: formData.customerCompany || ''
      }
    }
    
    // Add to forms array
    forms.push(newForm)
    
    console.log('📝 New form submitted:', newForm)
    
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      formId: newForm.id,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
