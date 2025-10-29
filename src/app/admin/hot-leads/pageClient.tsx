'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PlusIcon, EyeIcon, CurrencyDollarIcon, MapPinIcon, BuildingOfficeIcon, PencilIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

interface HotLead {
  id: string
  title: string
  business_type: string
  employee_count: string
  zip_code: string
  description: string
  price: number
  status: 'available' | 'sold' | 'pending'
  created_at: string
  sold_at?: string
}

export default function HotLeadsAdminPage() {
  const [leads, setLeads] = useState<HotLead[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingLead, setEditingLead] = useState<HotLead | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)

  // Fetch leads on component mount
  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/hot-leads')
      const data = await response.json()
      if (data.success) {
        setLeads(data.leads || [])
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
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
      businessType: formData.get('businessType') as string,
      employeeCount: formData.get('employeeCount') as string,
      zipCode: formData.get('zipCode') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string)
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
        // Add new lead to the list
        setLeads(prev => [data.lead, ...prev])
        setShowCreateForm(false)
        e.currentTarget.reset()
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
        // Update lead in the list
        setLeads(prev => prev.map(lead => 
          lead.id === editingLead.id ? data.lead : lead
        ))
        setEditingLead(null)
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
    if (!confirm('Are you sure you want to delete this lead?')) return

    try {
      const response = await fetch('/api/hot-leads', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: leadId, status: 'deleted' })
      })

      const data = await response.json()
      if (data.success) {
        setLeads(prev => prev.filter(lead => lead.id !== leadId))
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Hot Leads Management
              </h1>
              <p className="text-stone text-lg">
                Create and manage premium vending machine leads for the marketplace
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/admin"
                className="px-4 py-2 text-stone hover:text-charcoal transition-colors"
              >
                ← Back to Dashboard
              </Link>
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
                    Lead Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g., Premium Office Complex - 500+ Employees"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      required
                      min="1"
                      step="0.01"
                      placeholder="299.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Employee Count *
                    </label>
                    <select
                      name="employeeCount"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select range...</option>
                      <option value="50-100">50-100 employees</option>
                      <option value="100-250">100-250 employees</option>
                      <option value="250-500">250-500 employees</option>
                      <option value="500-1000">500-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
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
                    <input
                      type="number"
                      name="price"
                      required
                      min="1"
                      step="0.01"
                      defaultValue={editingLead.price}
                      placeholder="299.00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Employee Count *
                    </label>
                    <select
                      name="employeeCount"
                      required
                      defaultValue={editingLead.employee_count}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select range...</option>
                      <option value="50-100">50-100 employees</option>
                      <option value="100-250">100-250 employees</option>
                      <option value="250-500">250-500 employees</option>
                      <option value="500-1000">500-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
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
            <h2 className="text-xl font-semibold text-charcoal">Hot Leads</h2>
            <p className="text-stone mt-1">Manage your premium leads</p>
          </div>
          
          <div className="p-6">
            {leads.length === 0 ? (
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-stone mb-4">
                          <div className="flex items-center gap-2">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {lead.business_type}
                          </div>
                          <div className="flex items-center gap-2">
                            <UsersIcon className="w-4 h-4" />
                            {lead.employee_count} employees
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
                        
                        <p className="text-stone text-sm">{lead.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button 
                          onClick={() => setEditingLead(lead)}
                          className="p-2 text-stone hover:text-navy transition-colors"
                          title="Edit lead"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 text-stone hover:text-red-600 transition-colors"
                          title="Delete lead"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-stone hover:text-navy transition-colors" title="View details">
                          <EyeIcon className="w-5 h-5" />
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
