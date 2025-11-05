'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  BuildingOfficeIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'

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
}

export default function HotLeadsMarketplace() {
  const [leads, setLeads] = useState<HotLead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest')

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/hot-leads')
      const data = await response.json()
      if (data.success) {
        // Only show available leads
        const availableLeads = (data.leads || []).filter((lead: HotLead) => lead.status === 'available')
        setLeads(availableLeads)
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get unique states and cities for filters
  const states = useMemo(() => {
    const uniqueStates = [...new Set(leads.map(lead => lead.state))].sort()
    return uniqueStates
  }, [leads])

  const cities = useMemo(() => {
    if (!selectedState) return []
    const citiesInState = leads
      .filter(lead => lead.state === selectedState)
      .map(lead => lead.city)
    return [...new Set(citiesInState)].sort()
  }, [leads, selectedState])

  // Filter and sort leads
  const filteredLeads = useMemo(() => {
    let filtered = leads

    // Search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(lead => 
        lead.title.toLowerCase().includes(search) ||
        lead.city.toLowerCase().includes(search) ||
        lead.state.toLowerCase().includes(search) ||
        lead.business_type.toLowerCase().includes(search) ||
        lead.description.toLowerCase().includes(search)
      )
    }

    // State filter
    if (selectedState) {
      filtered = filtered.filter(lead => lead.state === selectedState)
    }

    // City filter
    if (selectedCity) {
      filtered = filtered.filter(lead => lead.city === selectedCity)
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'newest':
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
    })

    return sorted
  }, [leads, searchTerm, selectedState, selectedCity, sortBy])

  // Reset city when state changes
  useEffect(() => {
    setSelectedCity('')
  }, [selectedState])

  return (
    <div id="marketplace" className="bg-warm-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
          >
            Premium Leads Marketplace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone max-w-2xl mx-auto"
          >
            Exclusive, ready-to-contact vending machine location opportunities. Each lead sold only once.
          </motion.p>
        </div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <FunnelIcon className="w-5 h-5 text-navy" />
            <h3 className="text-lg font-semibold text-charcoal">Filter & Search Leads</h3>
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
                  placeholder="Search by city, business type, or keywords..."
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
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort & Results Count */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-stone">
                Showing <span className="font-semibold text-charcoal">{filteredLeads.length}</span> lead{filteredLeads.length !== 1 ? 's' : ''}
              </span>
              {(searchTerm || selectedState || selectedCity) && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedState('')
                    setSelectedCity('')
                  }}
                  className="text-xs text-navy hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm text-stone">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Leads Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto"></div>
            <p className="mt-4 text-stone">Loading available leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              {searchTerm || selectedState || selectedCity ? 'No leads match your filters' : 'No leads available yet'}
            </h3>
            <p className="text-stone mb-6">
              {searchTerm || selectedState || selectedCity 
                ? 'Try adjusting your search or filters to see more results.'
                : 'New premium leads are added regularly. Check back soon!'}
            </p>
            {(searchTerm || selectedState || selectedCity) && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedState('')
                  setSelectedCity('')
                }}
                className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/hot-leads/${lead.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-navy/30 transition-all duration-200 cursor-pointer group h-full flex flex-col">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-navy to-navy-light p-4 text-white">
                      <div className="flex items-start justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                          Available
                        </span>
                        <span className="text-xl font-bold">${lead.price}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-white/90 transition-colors line-clamp-2">
                        {lead.title}
                      </h3>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Location */}
                      <div className="flex items-center text-sm text-navy mb-3">
                        <MapPinIcon className="w-4 h-4 mr-1.5" />
                        <span className="font-semibold">{lead.city}, {lead.state}</span>
                        <span className="mx-2 text-stone">•</span>
                        <span className="text-stone">{lead.zip_code}</span>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-start gap-2">
                          <BuildingOfficeIcon className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-stone">Business</p>
                            <p className="text-sm font-medium text-charcoal line-clamp-1">{lead.business_type}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <UsersIcon className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-stone">Employees</p>
                            <p className="text-sm font-medium text-charcoal">{lead.employee_count}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description Preview */}
                      <p className="text-sm text-stone line-clamp-3 mb-4 flex-1">
                        {lead.description}
                      </p>

                      {/* View Details Button */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-xs text-stone">
                            Listed {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span className="text-navy font-semibold group-hover:underline">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State with CTA */}
        {!loading && leads.length === 0 && (
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <p className="text-stone mb-4">
                Want to list your own premium leads? Contact our team.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-coral/10 to-navy/10 rounded-xl border border-coral/20"
        >
          <div className="flex items-start gap-4">
            <SparklesIcon className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Premium Lead Guarantee
              </h3>
              <ul className="text-sm text-stone space-y-2">
                <li>✅ <strong>Exclusive Access</strong> - Each lead sold only once</li>
                <li>✅ <strong>Full Contact Information</strong> - Name, phone, email, and address revealed after purchase</li>
                <li>✅ <strong>Instant Delivery</strong> - Access lead details immediately after payment</li>
                <li>✅ <strong>Verified Opportunities</strong> - All locations researched and pre-qualified</li>
                <li>✅ <strong>Secure Payment</strong> - Protected by Stripe with money-back guarantee</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

