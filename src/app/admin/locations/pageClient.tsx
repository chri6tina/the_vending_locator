'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LocationsDashboardPage() {
  const [selectedState, setSelectedState] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'tx', label: 'Texas' },
    { value: 'ca', label: 'California' },
    { value: 'fl', label: 'Florida' },
    { value: 'ny', label: 'New York' },
    { value: 'il', label: 'Illinois' }
  ]

  const statuses = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ]

  const cityPages = [
    { city: 'Austin, TX', state: 'Texas', status: 'active', visitors: 12450, conversions: 892, lastUpdated: '2 days ago' },
    { city: 'Dallas, TX', state: 'Texas', status: 'active', visitors: 11890, conversions: 756, lastUpdated: '1 week ago' },
    { city: 'Houston, TX', state: 'Texas', status: 'active', visitors: 11230, conversions: 698, lastUpdated: '3 days ago' },
    { city: 'San Antonio, TX', state: 'Texas', status: 'active', visitors: 9870, conversions: 543, lastUpdated: '5 days ago' },
    { city: 'Los Angeles, CA', state: 'California', status: 'active', visitors: 8760, conversions: 432, lastUpdated: '1 week ago' },
    { city: 'San Francisco, CA', state: 'California', status: 'active', visitors: 7650, conversions: 389, lastUpdated: '2 weeks ago' },
    { city: 'Miami, FL', state: 'Florida', status: 'active', visitors: 6980, conversions: 345, lastUpdated: '4 days ago' },
    { city: 'New York, NY', state: 'New York', status: 'active', visitors: 6540, conversions: 298, lastUpdated: '1 week ago' },
    { city: 'Chicago, IL', state: 'Illinois', status: 'active', visitors: 5430, conversions: 234, lastUpdated: '3 days ago' },
    { city: 'Phoenix, AZ', state: 'Arizona', status: 'active', visitors: 4320, conversions: 187, lastUpdated: '1 week ago' }
  ]

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
                Locations Dashboard
              </h1>
              <p className="text-stone text-lg">
                Manage city pages, track performance, and optimize location-specific content
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
              <label className="block text-sm font-medium text-charcoal mb-2">State</label>
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="border border-stone rounded-lg px-3 py-2 text-charcoal focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>
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
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" aria-label="Add New Location">
              Add New Location
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Cities</h3>
            <p className="text-3xl font-bold text-bronze">21+</p>
            <p className="text-sm text-green-600">+3 this month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Total Visitors</h3>
            <p className="text-3xl font-bold text-bronze">89.2K</p>
            <p className="text-sm text-green-600">+15.3% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Avg Conversion</h3>
            <p className="text-3xl font-bold text-bronze">2.8%</p>
            <p className="text-sm text-green-600">+0.4% vs last month</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Coverage</h3>
            <p className="text-3xl font-bold text-bronze">25+</p>
            <p className="text-sm text-green-600">States covered</p>
          </div>
        </div>

        {/* State Coverage */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">State Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">8</div>
              <div className="text-sm text-stone">Texas</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">6</div>
              <div className="text-sm text-stone">California</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">4</div>
              <div className="text-sm text-stone">Florida</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">3</div>
              <div className="text-sm text-stone">New York</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">2</div>
              <div className="text-sm text-stone">Illinois</div>
            </div>
            <div className="text-center p-4 bg-warm-white rounded-lg">
              <div className="text-2xl font-bold text-bronze mb-2">2</div>
              <div className="text-sm text-stone">Arizona</div>
            </div>
          </div>
        </div>

        {/* City Pages Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">City Pages Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-charcoal">City</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">State</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Visitors</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Conversions</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Last Updated</th>
                  <th className="text-left py-3 px-4 font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cityPages.map((cityData, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium text-charcoal">{cityData.city}</td>
                    <td className="py-3 px-4 text-charcoal">{cityData.state}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {cityData.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-charcoal">{cityData.visitors.toLocaleString()}</td>
                    <td className="py-3 px-4 text-charcoal">{cityData.conversions.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-stone">{cityData.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="Edit">
                          Edit
                        </button>
                        <button className="text-navy hover:text-navy/80 text-sm font-medium" aria-label="View">
                          View
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
