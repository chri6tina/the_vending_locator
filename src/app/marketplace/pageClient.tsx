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
  businessType: string
  employeeCount: string
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
          <div className="flex flex-wrap items-end gap-6">
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
                }}
                className="px-4 py-2 text-sm text-stone hover:text-charcoal border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
            </div>
            
            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
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
          <div className="text-center py-16">
            {leads.length === 0 ? (
              // No leads at all - production ready state
              <>
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">Marketplace Coming Soon</h3>
                <p className="text-stone mb-6 max-w-md mx-auto">
                  We're preparing premium hot leads for you. Check back soon or contact us to be notified when leads become available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                  >
                    Get Notified
                  </a>
                  <a
                    href="/hot-leads"
                    className="px-6 py-3 border border-navy text-navy rounded-lg hover:bg-navy/5 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </>
            ) : (
              // Has leads but none match filters
              <>
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">No leads match your filters</h3>
                <p className="text-stone mb-4">
                  Try adjusting your business type or price range to see more results.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all')
                    setPriceRange('all')
                  }}
                  className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </>
            )}
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
                      {lead.businessType}
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
