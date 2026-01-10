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
  SparklesIcon,
  XMarkIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid'
import LeadCaptureForm from './LeadCaptureForm'

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
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [subscriptionFormData, setSubscriptionFormData] = useState({ 
    name: '', 
    email: '', 
    city: '', 
    state: '',
    agreedToTerms: false 
  })
  const [isSubmittingSubscription, setIsSubmittingSubscription] = useState(false)

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

        {/* Subscription Offer - Show when no leads available */}
        {!loading && leads.length === 0 && !searchTerm && !selectedState && !selectedCity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 bg-gradient-to-br from-coral/10 to-navy/10 rounded-xl border-2 border-coral/30 p-6 sm:p-8"
          >
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-charcoal mb-3">
                No Leads Available Right Now
              </h3>
              <p className="text-base sm:text-lg text-stone mb-6">
                New premium leads are added regularly, but <span className="font-semibold text-coral">subscribers get first access</span> before they're listed publicly.
              </p>
              
              {/* Subscription Benefits */}
              <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-navy mb-4">Subscribe for First Access</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-4">
                  <div className="flex items-start gap-2">
                    <StarIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">First Access</p>
                      <p className="text-xs text-stone">Get notified before leads go public</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <StarIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Subscriber Discount</p>
                      <p className="text-xs text-stone">Exclusive pricing on all leads</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <StarIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Priority Support</p>
                      <p className="text-xs text-stone">Dedicated subscriber assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <StarIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Cancel Anytime</p>
                      <p className="text-xs text-stone">No long-term commitment</p>
                    </div>
                  </div>
                </div>
                <div className="bg-coral/10 rounded-lg p-3 mb-4">
                  <p className="text-xs text-stone text-left">
                    <span className="font-semibold text-coral">How it works:</span> When new leads come in, subscribers get first notification and exclusive access. Only leads that subscribers don't purchase become available to the public marketplace.
                  </p>
                </div>
                <button
                  onClick={() => setShowSubscriptionModal(true)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-coral hover:bg-coral/90 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto text-sm sm:text-base"
                >
                  Subscribe for $20/month
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Leads Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto"></div>
            <p className="mt-4 text-stone">Loading available leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          // Filters applied but no matches
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              No leads match your filters
            </h3>
            <p className="text-stone mb-6">
              Try adjusting your search or filters to see more results.
            </p>
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

        {/* Lead Capture Form - Always show to capture all visitors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <LeadCaptureForm
            title="Get Notified About New Leads"
            description="Even if you don't subscribe, we'll notify you when new vending machine locations become available in your area."
            source="hot-leads-page"
            showCityState={true}
          />
        </motion.div>
      </div>

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => {
                setShowSubscriptionModal(false)
                setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
              }}
            />
            
            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6 mx-4">
              <button
                onClick={() => {
                  setShowSubscriptionModal(false)
                  setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
                }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="mb-4 pb-4 border-b border-gray-200 pr-8">
                <h2 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-1">
                  Hot Leads Premium Subscription
                </h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-navy">
                    $20
                  </span>
                  <span className="text-stone text-sm sm:text-base">/month</span>
                </div>
                <p className="text-xs sm:text-sm text-stone mt-2">
                  Get first access to premium vending leads with subscriber discounts
                </p>
              </div>
              <p className="text-sm sm:text-base text-stone mb-6">
                Please provide your information to continue to checkout.
              </p>

              <form onSubmit={async (e) => {
                e.preventDefault()
                
                if (!subscriptionFormData.agreedToTerms) {
                  alert('Please agree to the Terms of Service to continue.')
                  return
                }

                setIsSubmittingSubscription(true)

                try {
                  // First, submit to Formspree
                  const formspreeResponse = await fetch('https://formspree.io/f/mjggbwdw', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: subscriptionFormData.name,
                      email: subscriptionFormData.email,
                      city: subscriptionFormData.city,
                      state: subscriptionFormData.state,
                      subscription: 'Hot Leads Premium Subscription',
                      monthlyPrice: '$20/month',
                      _subject: 'Hot Leads Premium Subscription Signup',
                      _replyto: subscriptionFormData.email,
                    }),
                  })

                  if (!formspreeResponse.ok) {
                    throw new Error('Formspree submission failed')
                  }

                  // Store subscription data for dashboard
                  try {
                    await fetch('/api/hot-leads-subscriptions', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name: subscriptionFormData.name,
                        email: subscriptionFormData.email,
                        city: subscriptionFormData.city,
                        state: subscriptionFormData.state,
                        subscriptionType: 'hot-leads-premium',
                        monthlyPrice: 20,
                        status: 'pending',
                      }),
                    })
                  } catch (apiError) {
                    console.log('Subscription API submission failed (non-critical):', apiError)
                  }

                  // Then, create Stripe checkout session
                  const stripeResponse = await fetch('/api/hot-leads-subscription-checkout', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      email: subscriptionFormData.email,
                    }),
                  })

                  const data = await stripeResponse.json()

                  if (data.success && data.url) {
                    window.location.href = data.url
                  } else {
                    alert('Error creating checkout session. Please try again.')
                    setIsSubmittingSubscription(false)
                  }
                } catch (error) {
                  console.error('Checkout error:', error)
                  alert('Error processing your request. Please try again.')
                  setIsSubmittingSubscription(false)
                }
              }} className="space-y-4">
                <div>
                  <label htmlFor="subscription-name" className="block text-sm font-medium text-chocolate mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="subscription-name"
                    name="name"
                    required
                    value={subscriptionFormData.name}
                    onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="subscription-email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="subscription-email"
                    name="email"
                    required
                    value={subscriptionFormData.email}
                    onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subscription-city" className="block text-sm font-medium text-chocolate mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="subscription-city"
                      name="city"
                      required
                      value={subscriptionFormData.city}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="subscription-state" className="block text-sm font-medium text-chocolate mb-2">
                      State *
                    </label>
                    <select
                      id="subscription-state"
                      name="state"
                      required
                      value={subscriptionFormData.state}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={subscriptionFormData.agreedToTerms}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                      className="mt-1 h-4 w-4 text-coral focus:ring-coral border-gray-300 rounded"
                    />
                    <span className="text-sm text-stone">
                      I agree to the{' '}
                      <Link href="/terms-of-service" target="_blank" className="text-coral hover:text-coral/80 underline">
                        Terms of Service
                      </Link>
                      {' '}and understand that leads availability may vary by month.
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSubscriptionModal(false)
                      setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
                    }}
                    className="w-full sm:flex-1 px-4 py-2.5 border-2 border-gray-300 text-chocolate rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingSubscription}
                    className="w-full sm:flex-1 px-4 py-2.5 bg-coral hover:bg-coral/90 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmittingSubscription ? 'Processing...' : 'Continue to Checkout'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

