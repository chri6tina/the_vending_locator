import { NextResponse } from 'next/server'

// In-memory storage for forms (import from main forms route)
let forms = []

// GET: Retrieve a specific form by ID
export async function GET(request, { params }) {
  try {
    const { id } = params
    
    // Find the form
    const form = forms.find(f => f.id === id)
    
    if (!form) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      form: form,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error fetching form:', error)
    return NextResponse.json(
      { error: 'Failed to fetch form' },
      { status: 500 }
    )
  }
}

// PUT: Update a form (status, payment, task completion, notes)
export async function PUT(request, { params }) {
  try {
    const { id } = params
    const updateData = await request.json()
    
    // Find the form
    const formIndex = forms.findIndex(f => f.id === id)
    
    if (formIndex === -1) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }
    
    // Update the form
    const updatedForm = {
      ...forms[formIndex],
      ...updateData,
      updatedAt: new Date().toISOString()
    }
    
    // Handle special cases
    if (updateData.status === 'completed' && !updatedForm.taskCompleted) {
      updatedForm.taskCompleted = true
      updatedForm.taskCompletedAt = new Date().toISOString()
    }
    
    if (updateData.paymentStatus === 'paid' && !updatedForm.stripePaymentId) {
      updatedForm.stripePaymentId = updateData.stripePaymentId || `stripe_${Date.now()}`
    }
    
    // Update in array
    forms[formIndex] = updatedForm
    
    console.log('📝 Form updated:', updatedForm)
    
    return NextResponse.json({
      success: true,
      message: 'Form updated successfully',
      form: updatedForm,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error updating form:', error)
    return NextResponse.json(
      { error: 'Failed to update form' },
      { status: 500 }
    )
  }
}

// DELETE: Delete a form
export async function DELETE(request, { params }) {
  try {
    const { id } = params
    
    // Find and remove the form
    const formIndex = forms.findIndex(f => f.id === id)
    
    if (formIndex === -1) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }
    
    const deletedForm = forms.splice(formIndex, 1)[0]
    
    console.log('🗑️ Form deleted:', deletedForm)
    
    return NextResponse.json({
      success: true,
      message: 'Form deleted successfully',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error deleting form:', error)
    return NextResponse.json(
      { error: 'Failed to delete form' },
      { status: 500 }
    )
  }
}
