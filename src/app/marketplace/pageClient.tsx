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

  // Mock data - in real app, this would come from API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockLeads: HotLead[] = [
        {
          id: 'lead-1',
          title: 'Premium Office Complex - 500+ Employees',
          businessName: 'TechCorp Industries',
          location: '123 Business Blvd, Austin, TX 78701',
          city: 'Austin',
          state: 'TX',
          zipCode: '78701',
          contactName: 'Sarah Johnson',
          contactPhone: '(555) 123-4567',
          contactEmail: 'sarah@techcorp.com',
          employeeCount: '500-1000',
          businessType: 'office',
          description: 'Large tech company with multiple break rooms. Decision maker is facilities manager Sarah Johnson. Best approach is email first, then follow-up call. They are actively looking for vending solutions.',
          price: 299,
          status: 'available',
          createdAt: new Date('2024-01-15')
        },
        {
          id: 'lead-2',
          title: 'Manufacturing Facility - High Traffic',
          businessName: 'ABC Manufacturing',
          location: '456 Industrial Way, Dallas, TX 75201',
          city: 'Dallas',
          state: 'TX',
          zipCode: '75201',
          contactName: 'Mike Rodriguez',
          contactPhone: '(555) 987-6543',
          contactEmail: 'mike@abcmfg.com',
          employeeCount: '250-500',
          businessType: 'manufacturing',
          description: '24/7 manufacturing operation with 3 shifts. High demand for snacks and beverages. Contact Mike Rodriguez, Plant Manager. He mentioned budget approved for Q1.',
          price: 199,
          status: 'available',
          createdAt: new Date('2024-01-14')
        },
        {
          id: 'lead-3',
          title: 'Hospital Complex - Multiple Buildings',
          businessName: 'Central Medical Center',
          location: '789 Health Dr, Houston, TX 77001',
          city: 'Houston',
          state: 'TX',
          zipCode: '77001',
          contactName: 'Dr. Lisa Chen',
          contactPhone: '(555) 456-7890',
          contactEmail: 'lchen@centralmed.com',
          employeeCount: '1000+',
          businessType: 'healthcare',
          description: 'Large hospital system looking for healthy vending options. Dr. Chen is head of facilities. They want to pilot in main lobby first, then expand to other buildings.',
          price: 399,
          status: 'available',
          createdAt: new Date('2024-01-13')
        }
      ]
      setLeads(mockLeads)
      setLoading(false)
    }, 1000)
  }, [])

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
    if (selectedCategory !== 'all' && lead.businessType !== selectedCategory) return false
    
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''))
      if (priceRange.includes('+')) {
        if (lead.price < parseInt(min)) return false
      } else {
        if (lead.price < parseInt(min) || lead.price > parseInt(max)) return false
      }
    }
    
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
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">Category</label>
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
            
            <div className="ml-auto">
              <div className="text-sm text-stone">
                {filteredLeads.length} leads available
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
            <p className="text-stone">Try adjusting your category or price range</p>
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
