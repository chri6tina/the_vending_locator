'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { trackLocationSearch } from '@/lib/conversion-tracking'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <PricingTable />
      <HotLeads />
      
      {/* Locations Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Find Vending Machine Locations Near You
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed">
                Explore our comprehensive directory of vending machine locations across major cities and states.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {['Texas', 'California', 'Florida', 'New York', 'Illinois', 'Arizona', 'Washington', 'Pennsylvania'].map((state, index) => (
                <div
                  key={state}
                  className="bg-cream rounded-lg p-4 hover:bg-navy/5 transition-colors cursor-pointer"
                  onClick={() => trackLocationSearch(state, 'state_click')}
                >
                  <div className="text-sm sm:text-base font-medium text-chocolate">{state}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vending-locations"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse All Locations
                <MapPinIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/vending-leads"
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View All States
                <MapPinIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Vending Leads Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Access Vending Leads Across All 50 States
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed">
                Get detailed vending machine opportunities and business leads for every state in the country.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {['Alaska', 'Hawaii', 'Maine', 'Vermont', 'New Hampshire', 'Rhode Island', 'Connecticut', 'New Jersey'].map((state, index) => (
                <div
                  key={state}
                  className="bg-white rounded-lg p-4 hover:bg-navy/5 transition-colors cursor-pointer"
                  onClick={() => trackLocationSearch(state, 'state_click')}
                >
                  <div className="text-sm sm:text-base font-medium text-chocolate">{state}</div>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/vending-leads"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                Explore All 50 States
                <MapPinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Testimonials />
      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </main>
  )
}
