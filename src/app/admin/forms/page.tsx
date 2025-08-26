'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FormsDashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedForm, setSelectedForm] = useState('all')

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'qualified', label: 'Qualified' },
    { value: 'converted', label: 'Converted' },
    { value: 'lost', label: 'Lost' }
  ]

  const forms = [
    { value: 'all', label: 'All Forms' },
    { value: 'contact', label: 'Contact Form' },
    { value: 'hot-leads', label: 'Hot Leads' },
    { value: 'pricing', label: 'Pricing Inquiry' },
    { value: 'location', label: 'Location Specific' }
  ]

  const recentSubmissions = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      company: 'ABC Corporation',
      location: 'Austin, TX',
      form: 'Hot Leads',
      status: 'new',
      submitted: '2 hours ago',
      message: 'Interested in vending machine opportunities in Austin area.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@techstartup.com',
      company: 'TechStart Inc',
      location: 'Dallas, TX',
      form: 'Pricing Inquiry',
      status: 'contacted',
      submitted: '1 day ago',
      message: 'Looking for pricing on 5 vending machines for our office.'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      email: 'mike.r@manufacturing.com',
      company: 'Manufacturing Co',
      location: 'Houston, TX',
      form: 'Contact Form',
      status: 'qualified',
      submitted: '3 days ago',
      message: 'Need vending solutions for our 200+ employee facility.'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      email: 'lisa.chen@healthcare.org',
      company: 'Healthcare Center',
      location: 'San Antonio, TX',
      form: 'Location Specific',
      status: 'converted',
      submitted: '1 week ago',
      message: 'Successfully placed 3 vending machines in our facility.'
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'New'
      case 'contacted': return 'Contacted'
      case 'qualified': return 'Qualified'
      case 'converted': return 'Converted'
      case 'lost': return 'Lost'
      default: return 'Unknown'
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
                Forms Dashboard
              </h1>
              <p className="text-stone text-lg">
                Manage lead forms, track submissions, and monitor conversion rates
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
              <label className="block text-sm font-medium text-charcoal mb-2">Form Type</label>
              <select 
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {forms.map((form) => (
                  <option key={form.value} value={form.value}>
                    {form.label}
                  </option>
                ))}
              </select>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Export Data">
              Export Data
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Submissions</h3>
            <p className="text-3xl font-bold text-bronze">1,247</p>
            <p className="text-sm text-green-600">+18.5% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-bronze">23.4%</p>
            <p className="text-sm text-green-600">+2.1% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Response Time</h3>
            <p className="text-3xl font-bold text-bronze">2.3h</p>
            <p className="text-sm text-red-600">+0.5h vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Revenue Generated</h3>
            <p className="text-3xl font-bold text-bronze">$89.2K</p>
            <p className="text-sm text-green-600">+31.2% vs last month</p>
          </div>
        </div>

        {/* Form Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Form Types Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Form Performance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Hot Leads</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">45% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Pricing Inquiry</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">32% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Contact Form</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">18% conversion</span>
                  <span className="text-red-600 font-semibold">↘️</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-warm-white rounded-lg">
                <span className="font-medium text-charcoal">Location Specific</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone">28% conversion</span>
                  <span className="text-green-600 font-semibold">↗️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Converting Locations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Top Converting Locations</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-stone">Austin, TX</span>
                <span className="text-green-600 font-semibold">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Dallas, TX</span>
                <span className="text-green-600 font-semibold">58%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">Houston, TX</span>
                <span className="text-green-600 font-semibold">52%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone">San Antonio, TX</span>
                <span className="text-green-600 font-semibold">48%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Form</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Submitted</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-charcoal">{submission.name}</div>
                        <div className="text-sm text-stone">{submission.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-charcoal">{submission.company}</td>
                    <td className="py-3 px-4 text-charcoal">{submission.location}</td>
                    <td className="py-3 px-4 text-charcoal">{submission.form}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(submission.status)}`}>
                        {getStatusLabel(submission.status)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-stone">{submission.submitted}</td>
                    <td className="py-3 px-4">
                      <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="View Details">
                        View Details
                      </button>
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
