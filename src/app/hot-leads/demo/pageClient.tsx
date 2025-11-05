'use client'

import { useState } from 'react'
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

export default function HotLeadDemoPageClient() {
  const [purchased, setPurchased] = useState(false)
  const [viewMode, setViewMode] = useState<'before' | 'after'>('before')

  // Mock lead data
  const lead = {
    id: 'demo-123',
    title: 'Premium Tech Campus - Downtown Austin',
    slug: 'hot-vending-lead-in-ann-arbor-michigan',
    city: 'Ann Arbor',
    state: 'Michigan',
    business_type: 'Office Building',
    employee_count: '500-1000',
    zip_code: '48104',
    description: `Premium vending opportunity at a thriving downtown office complex with 750+ employees. This modern Class A building features:

• High foot traffic throughout the day
• Professional workforce with strong purchasing power
• Multiple break rooms and common areas
• Currently no vending services (exclusive opportunity)
• Decision maker is ready to move forward
• Ideal for healthy snacks and premium beverages

The building management is actively seeking a professional vending partner. Perfect for operators looking to add a high-performing location to their portfolio.`,
    price: 299,
    status: 'available' as const,
    created_at: new Date().toISOString(),
    contact_name: 'Sarah Johnson',
    contact_email: 'sjohnson@downtownofficecomplex.com',
    contact_phone: '(734) 555-0123',
    full_address: '123 Main Street, Suite 100, Ann Arbor, MI 48104'
  }

  const handlePurchaseDemo = () => {
    alert('This is a demo page. In production, this would redirect to Stripe checkout.')
  }

  const toggleView = () => {
    setViewMode(viewMode === 'before' ? 'after' : 'before')
    setPurchased(viewMode === 'before')
  }

  return (
    <>
      <Header />
      
      {/* Demo Controls */}
      <div className="bg-yellow-50 border-b-2 border-yellow-200 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-yellow-800 font-semibold">🎭 DEMO MODE</span>
            <span className="text-sm text-yellow-700">This is a preview of how hot lead pages will look</span>
          </div>
          <button
            onClick={toggleView}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold"
          >
            Toggle: {viewMode === 'before' ? 'Show After Purchase' : 'Show Before Purchase'}
          </button>
        </div>
      </div>
      
      <div className="min-h-screen bg-warm-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          {purchased && viewMode === 'after' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6"
            >
              <div className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
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
                  Available Now
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
              {viewMode === 'after' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8 p-6 bg-cream rounded-lg border-2 border-coral/20"
                >
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="w-6 h-6 text-coral mr-2" />
                    <h2 className="text-xl font-playfair font-bold text-charcoal">Full Lead Information</h2>
                  </div>
                  
                  {/* Important Notice */}
                  <div className="mb-6 p-4 bg-navy/5 border-l-4 border-navy rounded">
                    <p className="text-sm font-semibold text-navy mb-1">
                      ⭐ Important: When Contacting This Lead
                    </p>
                    <p className="text-sm text-charcoal">
                      Please let them know you are working with <strong>The Vending Locator</strong>. 
                      This helps establish credibility and professionalism in your initial conversation.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <UsersIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                      <div>
                        <p className="text-sm text-stone mb-1">Contact Name</p>
                        <p className="text-charcoal font-semibold">{lead.contact_name}</p>
                      </div>
                    </div>
                    
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
                    
                    <div className="flex items-start md:col-span-2">
                      <HomeIcon className="w-5 h-5 text-navy mr-3 mt-1" />
                      <div>
                        <p className="text-sm text-stone mb-1">Full Address</p>
                        <p className="text-charcoal font-semibold">{lead.full_address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-stone/20">
                    <p className="text-sm text-stone italic">
                      💡 This information is exclusively yours. The lead has been marked as sold and removed from the marketplace.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Purchase Section */}
              {viewMode === 'before' && (
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
                      onClick={handlePurchaseDemo}
                      className="flex-shrink-0 bg-coral text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-coral-dark transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <CurrencyDollarIcon className="w-6 h-6" />
                      Purchase for ${lead.price}
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

          {/* Demo Instructions */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border-2 border-yellow-200">
            <h3 className="text-xl font-playfair font-bold text-charcoal mb-4">
              📋 Demo Page Instructions
            </h3>
            <div className="space-y-4 text-stone">
              <p>
                <strong className="text-charcoal">Current View:</strong> {viewMode === 'before' ? 'Before Purchase (Customer View)' : 'After Purchase (Customer View)'}
              </p>
              <p>
                <strong className="text-charcoal">Toggle Button:</strong> Click the yellow button at the top to switch between before/after purchase views.
              </p>
              <div>
                <strong className="text-charcoal">What Customers See Before Purchase:</strong>
                <ul className="ml-5 mt-2 space-y-1">
                  <li>✅ Lead title and location (Ann Arbor, Michigan)</li>
                  <li>✅ Business type, employee count, zip code</li>
                  <li>✅ Full description and opportunity details</li>
                  <li>✅ Price prominently displayed</li>
                  <li>✅ "Purchase" button with Stripe integration</li>
                  <li>❌ Contact information (hidden)</li>
                </ul>
              </div>
              <div>
                <strong className="text-charcoal">What Customers See After Purchase:</strong>
                <ul className="ml-5 mt-2 space-y-1">
                  <li>✅ Green success banner</li>
                  <li>✅ Full contact name: Sarah Johnson</li>
                  <li>✅ Phone number: (734) 555-0123 (clickable)</li>
                  <li>✅ Email: sjohnson@downtownofficecomplex.com (clickable)</li>
                  <li>✅ Full address: 123 Main Street, Suite 100</li>
                  <li>✅ Everything they need to close the deal!</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-stone/20">
                <strong className="text-charcoal">Real Example URL:</strong>
                <code className="block mt-2 p-3 bg-cream rounded text-sm text-navy">
                  /hot-leads/hot-vending-lead-in-ann-arbor-michigan
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

