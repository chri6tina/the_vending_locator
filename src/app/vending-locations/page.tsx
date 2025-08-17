'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPinIcon, BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const states = [
  {
    name: 'Texas',
    slug: 'texas',
    cities: [
      { name: 'Austin', slug: 'austin-tx' },
      { name: 'Dallas', slug: 'dallas-tx' },
      { name: 'Houston', slug: 'houston-tx' },
      { name: 'San Antonio', slug: 'san-antonio-tx' },
    ]
  },
  {
    name: 'Florida',
    slug: 'florida',
    cities: [
      { name: 'Miami', slug: 'miami-fl' },
      { name: 'Jacksonville', slug: 'jacksonville-fl' },
    ]
  },
  {
    name: 'California',
    slug: 'california',
    cities: [
      { name: 'Los Angeles', slug: 'los-angeles-ca' },
      { name: 'San Francisco', slug: 'san-francisco-ca' },
      { name: 'San Diego', slug: 'san-diego-ca' },
      { name: 'San Jose', slug: 'san-jose-ca' },
    ]
  },
  {
    name: 'Illinois',
    slug: 'illinois',
    cities: [
      { name: 'Chicago', slug: 'chicago-il' },
    ]
  },
  {
    name: 'New York',
    slug: 'new-york',
    cities: [
      { name: 'New York City', slug: 'new-york-ny' },
    ]
  },
  {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    cities: [
      { name: 'Philadelphia', slug: 'philadelphia-pa' },
    ]
  },
  {
    name: 'Arizona',
    slug: 'arizona',
    cities: [
      { name: 'Phoenix', slug: 'phoenix-az' },
    ]
  },
  {
    name: 'Washington',
    slug: 'washington',
    cities: [
      { name: 'Seattle', slug: 'seattle-wa' },
    ]
  }
]

export default function VendingLocationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-charcoal">
              Vending Machine Locations Directory
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-stone max-w-3xl mx-auto">
              Find vending machine leads or connect with businesses looking for vending companies in your area
            </p>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <div className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Choose Your Service
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Whether you're a vending operator looking for leads or a business seeking vending companies, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Vendors */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <BuildingStorefrontIcon className="h-16 w-16 text-navy mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  For Vending Operators
                </h3>
                <p className="text-stone">
                  Find qualified vending machine leads in your target area
                </p>
              </div>
              <ul className="text-sm text-stone space-y-2 mb-6">
                <li>• Pre-qualified business locations</li>
                <li>• Contact information for decision makers</li>
                <li>• Location research and analysis</li>
                <li>• Contract templates and scripts</li>
              </ul>
              <Link
                href="/pricing"
                className="w-full bg-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-navy-light transition-colors text-center block"
              >
                Get Vending Machine Leads
              </Link>
            </div>

            {/* For Businesses */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <UserGroupIcon className="h-16 w-16 text-coral mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-2">
                  For Businesses
                </h3>
                <p className="text-stone">
                  Find reliable vending machine companies for your location
                </p>
              </div>
              <ul className="text-sm text-stone space-y-2 mb-6">
                <li>• Verified vending machine companies</li>
                <li>• Machine variety and options</li>
                <li>• Revenue sharing opportunities</li>
                <li>• Professional service providers</li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-stone font-medium">
                  Coming Soon - Vending Company Directory
                </p>
                <p className="text-xs text-stone/70 mt-1">
                  We're building a directory to connect businesses with vending companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* States Directory */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Browse Vending Locations by State
            </h2>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Select your state to find vending machine leads and business opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {states.map((state, stateIdx) => (
              <div
                key={state.slug}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-navy/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-navy/10 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{state.name}</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {state.cities.map((city) => (
                    <div key={city.slug}>
                      {/* Vending Leads Link */}
                      <Link
                        href={`/vending-leads/${city.slug}`}
                        className="block p-4 bg-gradient-to-r from-navy/5 to-navy/10 rounded-xl hover:from-navy/10 hover:to-navy/15 transition-all duration-300 border border-navy/20 hover:border-navy/30 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-charcoal group-hover:text-navy transition-colors">
                            {city.name} Vending Leads
                          </span>
                          <div className="w-2 h-2 bg-navy rounded-full group-hover:scale-125 transition-transform"></div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={`/vending-leads/${state.slug}`}
                    className="inline-flex items-center gap-2 text-navy hover:text-navy-light font-semibold hover:underline transition-colors"
                  >
                    View all {state.name} locations
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-4">
            Ready to Find Your Next Vending Machine Location?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with our vending machine leads service and find qualified businesses in your target area
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Vending Leads Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-coral transition-colors font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
