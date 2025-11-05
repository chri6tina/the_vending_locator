'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PlusIcon, EyeIcon, CurrencyDollarIcon, MapPinIcon, BuildingOfficeIcon, PencilIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

interface HotLead {
  id: string
  title: string
  slug: string
  city: string
  state: string
  business_type: string
  employee_count: string
  zip_code: string
  description: string
  price: number
  status: 'available' | 'sold' | 'pending'
  created_at: string
  sold_at?: string
  contact_name?: string
  contact_email?: string
  contact_phone?: string
  full_address?: string
}

export default function HotLeadsAdminPage() {
  const [leads, setLeads] = useState<HotLead[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingLead, setEditingLead] = useState<HotLead | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch leads on component mount
  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    console.log('🔄 Fetching leads from API...')
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/hot-leads')
      const data = await response.json()
      
      console.log('📦 API Response:', data)
      
      if (data.success) {
        const leadsArray = data.leads || []
        console.log(`✅ Loaded ${leadsArray.length} leads`)
        setLeads(leadsArray)
      } else {
        console.error('❌ API returned error:', data.error)
        setError(data.error || 'Failed to load leads')
      }
    } catch (err) {
      console.error('❌ Failed to fetch leads:', err)
      setError('Network error - Failed to fetch leads')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    const leadData = {
      title: formData.get('title') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      businessType: formData.get('businessType') as string,
      employeeCount: formData.get('employeeCount') as string,
      zipCode: formData.get('zipCode') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      contactName: formData.get('contactName') as string || undefined,
      contactEmail: formData.get('contactEmail') as string || undefined,
      contactPhone: formData.get('contactPhone') as string || undefined,
      fullAddress: formData.get('fullAddress') as string || undefined
    }

    console.log('Sending lead data:', leadData)

    try {
      const response = await fetch('/api/hot-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })

      const data = await response.json()
      if (data.success) {
        setShowCreateForm(false)
        e.currentTarget.reset()
        
        // Show success message with the generated URL
        const slug = data.lead.slug
        alert(`✅ Hot lead created successfully!\n\nPublic URL: /hot-leads/${slug}\n\nThe lead is now available for purchase.`)
        
        // Refresh the entire list from the API to ensure consistency
        try {
          await fetchLeads()
        } catch (refreshError) {
          console.error('Failed to refresh leads list:', refreshError)
          // Don't show error to user since the lead was created successfully
        }
      } else {
        alert('Failed to create lead: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Failed to create lead:', error)
      alert('Network error: Failed to create lead. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editingLead) return
    
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    const leadData = {
      id: editingLead.id,
      title: formData.get('title') as string,
      businessType: formData.get('businessType') as string,
      employeeCount: formData.get('employeeCount') as string,
      zipCode: formData.get('zipCode') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string)
    }

    try {
      const response = await fetch('/api/hot-leads', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })

      const data = await response.json()
      if (data.success) {
        setEditingLead(null)
        alert('✅ Lead updated successfully!')
        
        // Refresh the entire list from the API to ensure consistency
        try {
          await fetchLeads()
        } catch (refreshError) {
          console.error('Failed to refresh leads list:', refreshError)
          // Don't show error to user since the update was successful
        }
      } else {
        alert('Failed to update lead: ' + data.error)
      }
    } catch (error) {
      console.error('Failed to update lead:', error)
      alert('Failed to update lead. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead? This action cannot be undone.')) return

    try {
      const response = await fetch(`/api/hot-leads?id=${leadId}`, {
        method: 'DELETE'
      })

      const data = await response.json()
      if (data.success) {
        alert('✅ Lead deleted successfully!')
        
        // Refresh the entire list from the API to ensure consistency
        try {
          await fetchLeads()
        } catch (refreshError) {
          console.error('Failed to refresh leads list:', refreshError)
          // Don't show error to user since the delete was successful
        }
      } else {
        alert('Failed to delete lead: ' + data.error)
      }
    } catch (error) {
      console.error('Failed to delete lead:', error)
      alert('Failed to delete lead. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Hot Leads Management
              </h1>
              <p className="text-stone text-lg">
                Create and manage premium vending machine leads for the marketplace
              </p>
              {!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co' ? (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 border border-yellow-200 rounded-full text-xs text-yellow-800">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  DEV MODE - Using in-memory storage
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-3">
              <Link 
                href="/admin"
                className="px-4 py-2 text-stone hover:text-charcoal transition-colors"
              >
                ← Back
              </Link>
              <button
                onClick={fetchLeads}
                disabled={loading}
                className="px-4 py-2 text-navy hover:bg-navy/5 rounded-lg transition-colors disabled:opacity-50"
              >
                🔄 Refresh
              </button>
              <button
                onClick={() => setShowCreateForm(true)}
                className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
              >
                <PlusIcon className="w-5 h-5" />
                Create New Lead
              </button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Leads</h3>
            <p className="text-3xl font-bold text-bronze">{leads.length}</p>
            <p className="text-sm text-stone">All time</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Available</h3>
            <p className="text-3xl font-bold text-green-600">
              {leads.filter(l => l.status === 'available').length}
            </p>
            <p className="text-sm text-stone">Ready to sell</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Sold</h3>
            <p className="text-3xl font-bold text-blue-600">
              {leads.filter(l => l.status === 'sold').length}
            </p>
            <p className="text-sm text-stone">Completed sales</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-bronze">
              ${leads.filter(l => l.status === 'sold').reduce((sum, l) => sum + l.price, 0).toLocaleString()}
            </p>
            <p className="text-sm text-stone">Total earned</p>
          </div>
        </div>

        {/* Create Lead Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-charcoal">Create New Hot Lead</h2>
                <p className="text-stone mt-1">Add a premium lead to the marketplace</p>
              </div>
              
              <form onSubmit={handleCreateLead} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Lead Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g., Premium Office Complex - 500+ Employees (auto-generated if empty)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                  <p className="text-xs text-stone mt-1">Leave blank to auto-generate from city and state</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g., Ann Arbor"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      placeholder="e.g., Michigan"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Price *
                    </label>
                    <select
                      name="price"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select price...</option>
                      <option value="250">$250</option>
                      <option value="500">$500</option>
                      <option value="750">$750</option>
                      <option value="1000">$1,000</option>
                      <option value="1250">$1,250</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Employee Count *
                    </label>
                    <input
                      type="text"
                      name="employeeCount"
                      required
                      placeholder="e.g., 150"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      placeholder="78701"
                      maxLength={10}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Business Type *
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    required
                    placeholder="e.g., Office Building, Manufacturing, Healthcare, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Description & Notes *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    placeholder="Describe the opportunity, decision maker details, best approach, timing, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-4">Full Contact Information (Hidden Until Purchase)</h3>
                  <p className="text-sm text-stone mb-4">These details will only be revealed to the buyer after purchase</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        placeholder="e.g., John Smith"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        placeholder="e.g., (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        placeholder="e.g., contact@business.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Full Address
                      </label>
                      <input
                        type="text"
                        name="fullAddress"
                        placeholder="e.g., 123 Main St, Suite 100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="px-6 py-2 text-stone hover:text-charcoal transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Creating...' : 'Create Lead'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Lead Modal */}
        {editingLead && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-charcoal">Edit Hot Lead</h2>
                <p className="text-stone mt-1">Update lead information</p>
              </div>
              
              <form onSubmit={handleEditLead} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Lead Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    defaultValue={editingLead.title}
                    placeholder="e.g., Premium Office Complex - 500+ Employees"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Price *
                    </label>
                    <select
                      name="price"
                      required
                      defaultValue={editingLead.price}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select price...</option>
                      <option value="250">$250</option>
                      <option value="500">$500</option>
                      <option value="750">$750</option>
                      <option value="1000">$1,000</option>
                      <option value="1250">$1,250</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Employee Count *
                    </label>
                    <input
                      type="text"
                      name="employeeCount"
                      required
                      defaultValue={editingLead.employee_count}
                      placeholder="e.g., 150"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      defaultValue={editingLead.zip_code}
                      placeholder="78701"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Business Type *
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    required
                    defaultValue={editingLead.business_type}
                    placeholder="e.g., Office Building, Manufacturing, Healthcare, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Description & Notes *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    defaultValue={editingLead.description}
                    placeholder="Describe the opportunity, decision maker details, best approach, timing, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setEditingLead(null)}
                    className="px-6 py-2 text-stone hover:text-charcoal transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Updating...' : 'Update Lead'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Leads List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-charcoal">All Hot Leads</h2>
                <p className="text-stone mt-1">
                  {loading ? 'Loading...' : `${leads.length} total lead${leads.length !== 1 ? 's' : ''}`}
                </p>
              </div>
              {error && (
                <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
                <p className="text-stone">Loading leads...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Error Loading Leads</h3>
                <p className="text-stone mb-4">{error}</p>
                <button
                  onClick={fetchLeads}
                  className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : leads.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">No leads yet</h3>
                <p className="text-stone mb-4">Create your first hot lead to get started</p>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Create First Lead
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead) => (
                  <div key={lead.id} className="border border-gray-200 rounded-lg p-6 hover:border-navy/30 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-charcoal">{lead.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            lead.status === 'available' ? 'bg-green-100 text-green-800' :
                            lead.status === 'sold' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {lead.status}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm text-stone mb-3">
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" />
                            {lead.city}, {lead.state}
                          </div>
                          <div className="flex items-center gap-2">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {lead.business_type}
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="w-4 h-4" />
                            {lead.employee_count}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" />
                            {lead.zip_code}
                          </div>
                          <div className="flex items-center gap-2">
                            <CurrencyDollarIcon className="w-4 h-4" />
                            ${lead.price.toLocaleString()}
                          </div>
                        </div>
                        
                        {lead.slug && (
                          <div className="mb-3 p-2 bg-cream rounded text-xs text-stone">
                            <span className="font-semibold">URL:</span> /hot-leads/{lead.slug}
                          </div>
                        )}
                        
                        <p className="text-stone text-sm line-clamp-2">{lead.description}</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        {lead.slug && (
                          <Link
                            href={`/hot-leads/${lead.slug}`}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy hover:bg-navy hover:text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            <EyeIcon className="w-4 h-4" />
                            View Page
                          </Link>
                        )}
                        <button 
                          onClick={() => setEditingLead(lead)}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <PencilIcon className="w-4 h-4" />
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteLead(lead.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 hover:bg-red-600 hover:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <TrashIcon className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
