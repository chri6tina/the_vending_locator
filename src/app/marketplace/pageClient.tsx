'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  BuildingOfficeIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  EyeIcon,
  ShoppingCartIcon,
  ClockIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

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

export default function MarketplacePage() {
  const [leads, setLeads] = useState<HotLead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedState, setSelectedState] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')
  const [zipCode, setZipCode] = useState('')
  const [radius, setRadius] = useState('all')

  // Fetch leads from API
  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/hot-leads')
      const data = await response.json()
      if (data.success) {
        setLeads(data.leads.map((lead: any) => ({
          ...lead,
          createdAt: new Date(lead.createdAt)
        })))
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'office', label: 'Office Buildings' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail Centers' },
    { value: 'education', label: 'Education' }
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-199', label: 'Under $200' },
    { value: '200-299', label: '$200 - $299' },
    { value: '300-499', label: '$300 - $499' },
    { value: '500+', label: '$500+' }
  ]

  const radiusOptions = [
    { value: 'all', label: 'Any Distance' },
    { value: '25', label: 'Within 25 miles' },
    { value: '50', label: 'Within 50 miles' },
    { value: '100', label: 'Within 100 miles' },
    { value: '200', label: 'Within 200 miles' }
  ]

  // Get unique states and cities from leads
  const availableStates = Array.from(new Set(leads.map(lead => lead.state))).sort()
  const availableCities = selectedState === 'all' 
    ? Array.from(new Set(leads.map(lead => lead.city))).sort()
    : Array.from(new Set(leads.filter(lead => lead.state === selectedState).map(lead => lead.city))).sort()

  // Reset city when state changes
  useEffect(() => {
    if (selectedState !== 'all') {
      setSelectedCity('all')
    }
  }, [selectedState])

  const filteredLeads = leads.filter(lead => {
    // Category filter
    if (selectedCategory !== 'all' && !lead.businessType.toLowerCase().includes(selectedCategory)) return false
    
    // Price filter
    if (priceRange !== 'all') {
      const price = lead.price
      if (priceRange === '0-199' && price >= 200) return false
      if (priceRange === '200-299' && (price < 200 || price > 299)) return false
      if (priceRange === '300-499' && (price < 300 || price > 499)) return false
      if (priceRange === '500+' && price < 500) return false
    }

    // State filter
    if (selectedState !== 'all' && lead.state !== selectedState) return false

    // City filter
    if (selectedCity !== 'all' && lead.city !== selectedCity) return false

    // Zip code filter (exact match or starts with)
    if (zipCode && !lead.zipCode.startsWith(zipCode)) return false

    // Only show available leads
    return lead.status === 'available'
  })

  const handlePurchase = (leadId: string) => {
    // TODO: Implement Stripe checkout
    console.log('Purchase lead:', leadId)
  }

  return (
    <main className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Hot Leads Marketplace
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-stone"
            >
              Premium vending machine opportunities with verified decision-maker contacts. 
              Skip the cold calling and get straight to qualified leads ready for placement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <div className="bg-navy/10 rounded-full px-4 py-2 text-navy text-sm font-medium">
                <CheckBadgeIcon className="w-4 h-4 inline mr-2" />
                Verified Contacts
              </div>
              <div className="bg-navy/10 rounded-full px-4 py-2 text-navy text-sm font-medium">
                <ClockIcon className="w-4 h-4 inline mr-2" />
                Ready to Approach
              </div>
              <div className="bg-navy/10 rounded-full px-4 py-2 text-navy text-sm font-medium">
                <CurrencyDollarIcon className="w-4 h-4 inline mr-2" />
                One-Time Purchase
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-warm-white border-b border-stone">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap items-end gap-4">
            {/* Location Filters */}
            <div className="flex flex-wrap items-end gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold text-charcoal mb-2 w-full">📍 Location Filters</div>
              
              <div>
                <label className="block text-xs font-medium text-stone mb-1">State</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="all">All States</option>
                  {availableStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone mb-1">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
                  disabled={selectedState === 'all'}
                >
                  <option value="all">All Cities</option>
                  {availableCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter zip..."
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent w-24"
                />
              </div>
            </div>

            {/* Business & Price Filters */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Business Type</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <div>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setPriceRange('all')
                  setSelectedState('all')
                  setSelectedCity('all')
                  setZipCode('')
                  setRadius('all')
                }}
                className="px-4 py-2 text-sm text-stone hover:text-charcoal border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
            </div>
            
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {selectedState !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                  State: {selectedState}
                  <button 
                    onClick={() => setSelectedState('all')}
                    className="ml-1 hover:text-navy/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCity !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                  City: {selectedCity}
                  <button 
                    onClick={() => setSelectedCity('all')}
                    className="ml-1 hover:text-navy/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {zipCode && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                  Zip: {zipCode}
                  <button 
                    onClick={() => setZipCode('')}
                    className="ml-1 hover:text-navy/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-bronze/10 text-bronze">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className="ml-1 hover:text-bronze/70"
                  >
                    ×
                  </button>
                </span>
              )}
              {priceRange !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-bronze/10 text-bronze">
                  {priceRanges.find(p => p.value === priceRange)?.label}
                  <button 
                    onClick={() => setPriceRange('all')}
                    className="ml-1 hover:text-bronze/70"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            {/* Results Count */}
            <div className="ml-auto">
              <div className="text-sm text-stone">
                <span className="font-semibold text-navy">{filteredLeads.length}</span> leads available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-charcoal mb-2">No leads match your filters</h3>
            <p className="text-stone mb-4">
              {selectedState !== 'all' || selectedCity !== 'all' || zipCode 
                ? 'Try expanding your location search or adjusting other filters'
                : 'Try adjusting your business type or price range'
              }
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setPriceRange('all')
                setSelectedState('all')
                setSelectedCity('all')
                setZipCode('')
                setRadius('all')
              }}
              className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLeads.map((lead, index) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-charcoal line-clamp-2">
                      {lead.title}
                    </h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium ml-2">
                      Available
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-stone">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      {lead.businessName}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone">
                      <MapPinIcon className="w-4 h-4" />
                      {lead.city}, {lead.state}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone">
                      <UsersIcon className="w-4 h-4" />
                      {lead.employeeCount} employees
                    </div>
                  </div>
                  
                  <p className="text-stone text-sm mb-6 line-clamp-3">
                    {lead.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-bronze">
                      ${lead.price}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-stone hover:text-navy transition-colors">
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handlePurchase(lead.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                      >
                        <ShoppingCartIcon className="w-4 h-4" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-playfair font-bold tracking-tight text-charcoal sm:text-4xl">
              Need More Leads?
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone">
              Get access to our full database of vending machine opportunities with our subscription plans.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pricing"
                className="btn-primary"
              >
                View All Plans
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Custom Solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
