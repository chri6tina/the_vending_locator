'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  BuildingOfficeIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  contact_name?: string
  contact_email?: string
  contact_phone?: string
  full_address?: string
}

export default function HotLeadPageClient({ slug }: { slug: string }) {
  const router = useRouter()
  const [lead, setLead] = useState<HotLead | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [purchasing, setPurchasing] = useState(false)
  const [purchased, setPurchased] = useState(false)

  useEffect(() => {
    fetchLead()
  }, [slug])

  const fetchLead = async () => {
    try {
      const response = await fetch(`/api/hot-leads/${slug}`)
      const data = await response.json()

      if (!data.success) {
        setError(data.error || 'Lead not found')
        setLoading(false)
        return
      }

      setLead(data.lead)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching lead:', err)
      setError('Failed to load lead')
      setLoading(false)
    }
  }

  const handlePurchase = async () => {
    if (!lead) return
    
    setPurchasing(true)

    try {
      // Create Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            name: lead.title,
            price: lead.price,
            quantity: 1
          }],
          metadata: {
            leadId: lead.id,
            leadSlug: lead.slug,
            productType: 'hot-lead'
          },
          successUrl: `${window.location.origin}/hot-leads/${slug}?purchased=true&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/hot-leads/${slug}`
        }),
      })

      const { url, error: checkoutError } = await response.json()

      if (checkoutError) {
        throw new Error(checkoutError)
      }

      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error('Purchase error:', err)
      alert('Failed to initiate purchase. Please try again.')
      setPurchasing(false)
    }
  }

  // Check if user just completed a purchase
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')
    
    if (urlParams.get('purchased') === 'true' && sessionId && lead) {
      // Verify the purchase and get full lead details
      verifyPurchase(sessionId)
    }
  }, [lead])

  const verifyPurchase = async (sessionId: string) => {
    if (!lead) return

    try {
      const response = await fetch('/api/hot-leads/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leadId: lead.id,
          sessionId: sessionId
        })
      })

      const data = await response.json()

      if (data.success) {
        setPurchased(true)
        setLead(data.lead) // Update with full contact details
        
        // Clean URL
        window.history.replaceState({}, '', window.location.pathname)
      } else {
        alert('Failed to verify purchase. Please contact support.')
      }
    } catch (err) {
      console.error('Purchase verification error:', err)
      alert('Error verifying purchase. Please contact support with your order details.')
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-warm-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto"></div>
            <p className="mt-4 text-charcoal">Loading lead details...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (error || !lead) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-warm-white flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-playfair font-bold text-charcoal mb-4">Lead Not Found</h1>
            <p className="text-stone mb-8">{error || 'This lead is no longer available.'}</p>
            <Link 
              href="/hot-leads"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
            >
              View All Hot Leads
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (lead.status === 'sold' && !purchased) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-warm-white flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-stone/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-10 h-10 text-stone" />
            </div>
            <h1 className="text-3xl font-playfair font-bold text-charcoal mb-4">Lead Sold</h1>
            <p className="text-stone mb-2">{lead.title}</p>
            <p className="text-sm text-stone mb-8">{lead.city}, {lead.state}</p>
            <p className="text-stone mb-8">This lead has been purchased and is no longer available.</p>
            <Link 
              href="/hot-leads"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
            >
              View Available Leads
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {purchased && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <div className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-0.5 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Purchase Successful!</h3>
                  <p className="text-green-800">
                    You now have full access to this lead. The complete contact information is displayed below.
                    You will also receive an email with all the details.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center text-sm text-stone">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/hot-leads" className="hover:text-navy transition-colors">Hot Leads</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{lead.city}, {lead.state}</span>
          </nav>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-navy to-navy-light p-8 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  {lead.status === 'available' ? 'Available Now' : 'Pending'}
                </span>
                <span className="text-2xl font-bold">${lead.price}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">{lead.title}</h1>
              <div className="flex items-center text-white/90">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <span className="text-lg">{lead.city}, {lead.state} • {lead.zip_code}</span>
              </div>
            </div>

            {/* Lead Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-coral mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-stone mb-1">Business Type</p>
                    <p className="text-charcoal font-semibold">{lead.business_type}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UsersIcon className="w-6 h-6 text-coral mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-stone mb-1">Employee Count</p>
                    <p className="text-charcoal font-semibold">{lead.employee_count}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-coral mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-stone mb-1">Listed</p>
                    <p className="text-charcoal font-semibold">
                      {new Date(lead.created_at).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-playfair font-bold text-charcoal mb-4">Location Details</h2>
                <p className="text-stone leading-relaxed whitespace-pre-wrap">{lead.description}</p>
              </div>

              {/* Full Contact Info (Only shown after purchase) */}
              {purchased && (lead.contact_name || lead.contact_email || lead.contact_phone || lead.full_address) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8 p-6 bg-cream rounded-lg border-2 border-coral/20"
                >
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="w-6 h-6 text-coral mr-2" />
                    <h2 className="text-xl font-playfair font-bold text-charcoal">Full Lead Information</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lead.contact_name && (
                      <div className="flex items-start">
                        <UsersIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-stone mb-1">Contact Name</p>
                          <p className="text-charcoal font-semibold">{lead.contact_name}</p>
                        </div>
                      </div>
                    )}
                    
                    {lead.contact_email && (
                      <div className="flex items-start">
                        <EnvelopeIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-stone mb-1">Email Address</p>
                          <a 
                            href={`mailto:${lead.contact_email}`}
                            className="text-navy font-semibold hover:underline"
                          >
                            {lead.contact_email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {lead.contact_phone && (
                      <div className="flex items-start">
                        <PhoneIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-stone mb-1">Phone Number</p>
                          <a 
                            href={`tel:${lead.contact_phone}`}
                            className="text-navy font-semibold hover:underline"
                          >
                            {lead.contact_phone}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {lead.full_address && (
                      <div className="flex items-start md:col-span-2">
                        <HomeIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                        <div>
                          <p className="text-sm text-stone mb-1">Full Address</p>
                          <p className="text-charcoal font-semibold">{lead.full_address}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Purchase Section */}
              {!purchased && lead.status === 'available' && (
                <div className="border-t border-stone/20 pt-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-charcoal mb-2">
                        Get Full Access to This Lead
                      </h3>
                      <p className="text-stone">
                        Purchase this lead to receive complete contact information including name, phone, email, and full address.
                      </p>
                    </div>
                    <button
                      onClick={handlePurchase}
                      disabled={purchasing}
                      className="flex-shrink-0 bg-coral text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-coral-dark transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {purchasing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CurrencyDollarIcon className="w-6 h-6" />
                          Purchase for ${lead.price}
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-charcoal mb-2 flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 text-coral mr-2" />
                      Secure Purchase Guarantee
                    </h4>
                    <ul className="text-sm text-stone space-y-1">
                      <li>• Instant access to full lead information after payment</li>
                      <li>• Secure payment processing via Stripe</li>
                      <li>• Email confirmation with all details</li>
                      <li>• Exclusive access - each lead sold only once</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link 
              href="/hot-leads"
              className="inline-block text-navy hover:text-navy-light transition-colors font-semibold"
            >
              ← Back to All Hot Leads
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

