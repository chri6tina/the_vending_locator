'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LeadsDashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedSource, setSelectedSource] = useState('all')

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'qualified', label: 'Qualified' },
    { value: 'converted', label: 'Converted' },
    { value: 'lost', label: 'Lost' }
  ]

  const sources = [
    { value: 'all', label: 'All Sources' },
    { value: 'website', label: 'Website' },
    { value: 'hot-leads', label: 'Hot Leads' },
    { value: 'pricing', label: 'Pricing Page' },
    { value: 'location', label: 'Location Pages' }
  ]

  const leads = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      company: 'ABC Corporation',
      location: 'Austin, TX',
      source: 'hot-leads',
      status: 'new',
      value: 15000,
      submitted: '2 hours ago',
      lastContact: 'Never'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@techstartup.com',
      company: 'TechStart Inc',
      location: 'Dallas, TX',
      source: 'pricing',
      status: 'contacted',
      value: 25000,
      submitted: '1 day ago',
      lastContact: '2 hours ago'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      email: 'mike.r@manufacturing.com',
      company: 'Manufacturing Co',
      location: 'Houston, TX',
      source: 'website',
      status: 'qualified',
      value: 35000,
      submitted: '3 days ago',
      lastContact: '1 day ago'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      email: 'lisa.chen@healthcare.org',
      company: 'Healthcare Center',
      location: 'San Antonio, TX',
      source: 'location',
      status: 'converted',
      value: 45000,
      submitted: '1 week ago',
      lastContact: '3 days ago'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'qualified': return 'bg-purple-100 text-purple-800'
      case 'converted': return 'bg-green-100 text-green-800'
      case 'lost': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
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
                Leads Dashboard
              </h1>
              <p className="text-stone text-lg">
                Track, manage, and convert your vending machine business leads
              </p>
            </div>
            <Link 
              href="/admin"
              className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Status</label>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Source</label>
              <select 
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {sources.map((source) => (
                  <option key={source.value} value={source.value}>
                    {source.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Export Leads">
              Export Leads
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Leads</h3>
            <p className="text-3xl font-bold text-bronze">1,247</p>
            <p className="text-sm text-green-600">+18.5% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-bronze">23.4%</p>
            <p className="text-sm text-green-600">+2.1% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Value</h3>
            <p className="text-3xl font-bold text-bronze">$2.1M</p>
            <p className="text-sm text-green-600">+31.2% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Lead Value</h3>
            <p className="text-3xl font-bold text-bronze">$1,687</p>
            <p className="text-sm text-green-600">+10.8% vs last month</p>
          </div>
        </div>

        {/* Lead Sources Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Lead Sources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Lead Sources Performance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Hot Leads</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">45% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Pricing Page</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">32% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Location Pages</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">28% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Website Forms</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">18% conversion</span>
                  <span className="text-red-600 font-semibold">↘️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Status Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Lead Status Distribution</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone">New</span>
                <span className="text-blue-600 font-semibold">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Contacted</span>
                <span className="text-yellow-600 font-semibold">28%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Qualified</span>
                <span className="text-purple-600 font-semibold">18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Converted</span>
                <span className="text-green-600 font-semibold">12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Leads</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Lead</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Source</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Value</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-charcoal">{lead.name}</div>
                        <div className="text-sm text-stone">{lead.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-charcoal">{lead.company}</td>
                    <td className="py-3 px-4 text-charcoal">{lead.location}</td>
                    <td className="py-3 px-4 text-charcoal capitalize">{lead.source.replace('-', ' ')}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-charcoal">${lead.value.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="View">
                          View
                        </button>
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="Contact">
                          Contact
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
