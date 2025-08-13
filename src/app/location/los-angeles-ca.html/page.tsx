import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'Los Angeles Vending | The Vending Locator',
  description: 'Find qualified vending machine locations in Los Angeles, CA. Get access to verified locations with business details, contact information, and placement opportunities.',
  keywords: 'Los Angeles vending, LA vending, California vending, vending machine locations, vending opportunities',
  openGraph: {
    title: 'Los Angeles Vending | The Vending Locator',
    description: 'Find qualified vending machine locations in Los Angeles, CA. Get access to verified locations.',
    url: 'https://thevendinglocator.com/location/los-angeles-ca.html',
  },
}

export default function LosAngelesPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              Los Angeles Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across Los Angeles. From downtown offices to 
              entertainment venues, find businesses ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Downtown LA
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Hollywood
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Santa Monica
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Beverly Hills
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
              <div className="text-3xl font-bold text-navy">200+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">15+</div>
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
              Why Los Angeles for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Los Angeles offers diverse business environments, high-traffic areas, and multiple industries 
              perfect for vending machine placement opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Entertainment Industry</h3>
              <p className="text-stone text-sm">
                Studios, production companies, and entertainment venues with high employee traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tech & Innovation</h3>
              <p className="text-stone text-sm">
                Silicon Beach companies and startups creating modern office environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tourism & Retail</h3>
              <p className="text-stone text-sm">
                Shopping districts, hotels, and attractions with consistent visitor traffic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
