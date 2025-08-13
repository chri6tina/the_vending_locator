import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'Miami Vending | The Vending Locator',
  description: 'Find qualified vending machine locations in Miami, FL. Get access to verified locations with business details, contact information, and placement opportunities.',
  keywords: 'Miami vending, Florida vending, vending machine locations, vending opportunities, Miami businesses',
  openGraph: {
    title: 'Miami Vending | The Vending Locator',
    description: 'Find qualified vending machine locations in Miami, FL. Get access to verified locations.',
    url: 'https://thevendinglocator.com/location/miami-fl.html',
  },
}

export default function MiamiPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              Miami Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across Miami. From downtown offices to 
              beachfront businesses, find locations ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Downtown Miami
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Miami Beach
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Brickell
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Coral Gables
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
              <div className="text-3xl font-bold text-navy">150+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">12+</div>
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
              Why Miami for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Miami offers international business connections, tourism, and growing tech sectors 
              perfect for vending machine placement opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">International Business</h3>
              <p className="text-stone text-sm">
                Gateway to Latin America with multinational corporations and trade offices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tourism & Hospitality</h3>
              <p className="text-stone text-sm">
                Hotels, resorts, and attractions with year-round visitor traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tech & Finance</h3>
              <p className="text-stone text-sm">
                Growing fintech sector and financial services creating modern office environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
