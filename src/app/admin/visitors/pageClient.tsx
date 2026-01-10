'use client'

import { useState, useEffect } from 'react'
import AdminNav from '@/components/AdminNav'
import { 
  UserIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

interface Visitor {
  id: string
  email: string
  city: string | null
  state: string | null
  source: string
  consent: boolean
  last_source?: string
  created_at: string
  updated_at: string
}

export default function VisitorsAdminPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [stateFilter, setStateFilter] = useState('')
  const [cityFilter, setCityFilter] = useState('')
  const [sourceFilter, setSourceFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const itemsPerPage = 50

  useEffect(() => {
    fetchVisitors()
  }, [currentPage, stateFilter, cityFilter, sourceFilter])

  const fetchVisitors = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams({
        limit: itemsPerPage.toString(),
        offset: ((currentPage - 1) * itemsPerPage).toString()
      })
      
      if (stateFilter) params.append('state', stateFilter)
      if (cityFilter) params.append('city', cityFilter)

      const response = await fetch(`/api/visitors?${params}`)
      const data = await response.json()
      
      if (data.success) {
        setVisitors(data.visitors || [])
        setTotal(data.total || 0)
      } else {
        setError(data.error || 'Failed to load visitors')
      }
    } catch (err) {
      console.error('Failed to fetch visitors:', err)
      setError('Network error - Failed to fetch visitors')
    } finally {
      setLoading(false)
    }
  }

  const filteredVisitors = visitors.filter(visitor => {
    const matchesSearch = 
      visitor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (visitor.city && visitor.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (visitor.state && visitor.state.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesSource = !sourceFilter || visitor.source === sourceFilter
    
    return matchesSearch && matchesSource
  })

  const stats = {
    total: total,
    withLocation: visitors.filter(v => v.city && v.state).length,
    withConsent: visitors.filter(v => v.consent).length,
    uniqueStates: new Set(visitors.filter(v => v.state).map(v => v.state)).size
  }

  const uniqueSources = Array.from(new Set(visitors.map(v => v.source))).sort()
  const uniqueStates = Array.from(new Set(visitors.filter(v => v.state).map(v => v.state))).sort()

  const exportToCSV = () => {
    const headers = ['Email', 'City', 'State', 'Source', 'Consent', 'Created At']
    const rows = filteredVisitors.map(v => [
      v.email,
      v.city || '',
      v.state || '',
      v.source,
      v.consent ? 'Yes' : 'No',
      new Date(v.created_at).toLocaleDateString()
    ])
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `visitors-export-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const totalPages = Math.ceil(total / itemsPerPage)

  return (
    <div className="min-h-screen bg-warm-white">
      <AdminNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-charcoal mb-2">
            Visitor Database
          </h1>
          <p className="text-stone">
            View and manage all website visitors and leads. Use this database to send leads to interested operators.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Total Visitors</p>
            <p className="text-3xl font-bold text-charcoal">{stats.total.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">With Location</p>
            <p className="text-3xl font-bold text-green-600">{stats.withLocation.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Consented</p>
            <p className="text-3xl font-bold text-blue-600">{stats.withConsent.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <p className="text-sm text-stone mb-1">Unique States</p>
            <p className="text-3xl font-bold text-coral">{stats.uniqueStates}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FunnelIcon className="w-5 h-5 text-navy" />
            <h3 className="text-lg font-semibold text-charcoal">Filter & Search</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Search
              </label>
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone" />
                <input
                  type="text"
                  placeholder="Search by email, city, or state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                />
              </div>
            </div>

            {/* State Filter */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                State
              </label>
              <select
                value={stateFilter}
                onChange={(e) => {
                  setStateFilter(e.target.value)
                  setCityFilter('')
                  setCurrentPage(1)
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">All States</option>
                {uniqueStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Source Filter */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Source
              </label>
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">All Sources</option>
                {uniqueSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={exportToCSV}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Export to CSV
            </button>
          </div>
        </div>

        {/* Visitors Table */}
        {loading ? (
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto"></div>
            <p className="mt-4 text-stone">Loading visitors...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800">{error}</p>
            <button
              onClick={fetchVisitors}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        ) : filteredVisitors.length === 0 ? (
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <p className="text-stone">No visitors found.</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Source
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Consent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Signed Up
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredVisitors.map((visitor) => (
                      <tr key={visitor.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-navy/10 rounded-full flex items-center justify-center">
                              <EnvelopeIcon className="h-5 w-5 text-navy" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-charcoal">{visitor.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {visitor.city && visitor.state ? (
                            <div className="text-sm text-charcoal flex items-center gap-1">
                              <MapPinIcon className="h-4 w-4 text-coral" />
                              {visitor.city}, {visitor.state}
                            </div>
                          ) : (
                            <span className="text-sm text-stone/60">Not provided</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-stone">{visitor.source || 'unknown'}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            visitor.consent 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {visitor.consent ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone">
                          {new Date(visitor.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-stone">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, total)} of {total} visitors
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Use this database to send leads to interested operators. You can filter by location to find 
            visitors in specific areas and export the data for email campaigns.
          </p>
        </div>
      </div>
    </div>
  )
}
