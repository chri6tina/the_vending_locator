import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'California Vending Opportunities | The Vending Locator',
  description: 'Find qualified vending machine locations in California. Get access to 500+ verified locations with business details, contact information, and placement opportunities.',
  keywords: 'California vending, vending machine locations, vending opportunities, California businesses, vending placement',
  openGraph: {
    title: 'California Vending Opportunities | The Vending Locator',
    description: 'Find qualified vending machine locations in California. Get access to 500+ verified locations.',
    url: 'https://thevendinglocator.com/location/california.html',
  },
}

export default function CaliforniaPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              California Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across California. From Los Angeles to San Francisco, 
              find businesses ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Los Angeles
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                San Francisco
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                San Diego
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                San Jose
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy">500+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">15+</div>
              <div className="text-stone">Major Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">4.9★</div>
              <div className="text-stone">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingTable />

      {/* Location Specific Info */}
      <div className="py-16 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-charcoal">
              Why California for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              California offers diverse business environments perfect for vending machine placement, 
              from tech companies in Silicon Valley to entertainment venues in Los Angeles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">High-Traffic Areas</h3>
              <p className="text-stone text-sm">
                Office buildings, shopping centers, and entertainment venues with consistent foot traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Diverse Demographics</h3>
              <p className="text-stone text-sm">
                Access to various customer segments across different industries and income levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Business-Friendly</h3>
              <p className="text-stone text-sm">
                Strong economy and business environment supporting vending machine partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
