'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PlusIcon, EyeIcon, CurrencyDollarIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface HotLead {
  id: string
  title: string
  businessName: string
  location: string
  city: string
  state: string
  zipCode: string
  contactName: string
  contactPhone: string
  contactEmail: string
  employeeCount: string
  businessType: string
  description: string
  price: number
  status: 'available' | 'sold' | 'pending'
  createdAt: Date
  soldAt?: Date
}

export default function HotLeadsAdminPage() {
  const [leads, setLeads] = useState<HotLead[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCreateLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    const newLead: HotLead = {
      id: `lead-${Date.now()}`,
      title: formData.get('title') as string,
      businessName: formData.get('businessName') as string,
      location: formData.get('location') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zipCode: formData.get('zipCode') as string,
      contactName: formData.get('contactName') as string,
      contactPhone: formData.get('contactPhone') as string,
      contactEmail: formData.get('contactEmail') as string,
      employeeCount: formData.get('employeeCount') as string,
      businessType: formData.get('businessType') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      status: 'available',
      createdAt: new Date()
    }

    // TODO: Save to database/API
    setLeads(prev => [newLead, ...prev])
    setShowCreateForm(false)
    setIsSubmitting(false)
    
    // Reset form
    e.currentTarget.reset()
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      placeholder="ABC Corporation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    >
                      <option value="">Select type...</option>
                      <option value="office">Office Building</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail Center</option>
                      <option value="healthcare">Healthcare Facility</option>
                      <option value="education">Educational Institution</option>
                      <option value="warehouse">Warehouse/Distribution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Austin"
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
                      placeholder="TX"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Address *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="123 Business Blvd, Austin, TX 78701"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      placeholder="John Smith"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      required
                      placeholder="(555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      required
                      placeholder="john@company.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                    />
                  </div>
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-stone mb-4">
                          <div className="flex items-center gap-2">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {lead.businessName}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" />
                            {lead.city}, {lead.state}
                          </div>
                          <div className="flex items-center gap-2">
                            <CurrencyDollarIcon className="w-4 h-4" />
                            ${lead.price}
                          </div>
                        </div>
                        
                        <p className="text-stone text-sm">{lead.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 text-stone hover:text-navy transition-colors">
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
