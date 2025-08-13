import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'San Francisco Vending | The Vending Locator',
  description: 'Find qualified vending machine locations in San Francisco, CA. Get access to verified locations with business details, contact information, and placement opportunities.',
  keywords: 'San Francisco vending, SF vending, California vending, vending machine locations, vending opportunities',
  openGraph: {
    title: 'San Francisco Vending | The Vending Locator',
    description: 'Find qualified vending machine locations in San Francisco, CA. Get access to verified locations.',
    url: 'https://thevendinglocator.com/location/san-francisco-ca.html',
  },
}

export default function SanFranciscoPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              San Francisco Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across San Francisco. From tech companies to 
              financial services, find businesses ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Financial District
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                SoMa
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Mission Bay
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                North Beach
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
              <div className="text-3xl font-bold text-navy">180+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">10+</div>
              <div className="text-stone">Neighborhoods</div>
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
              Why San Francisco for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              San Francisco offers a world-class tech scene, financial services, and innovative companies 
              perfect for vending machine placement opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tech Innovation</h3>
              <p className="text-stone text-sm">
                Silicon Valley companies, startups, and tech giants creating modern office environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Financial Services</h3>
              <p className="text-stone text-sm">
                Banks, investment firms, and financial institutions in the Financial District.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Healthcare & Biotech</h3>
              <p className="text-stone text-sm">
                Medical centers, research facilities, and biotech companies in Mission Bay.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
