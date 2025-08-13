import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'San Diego Vending | The Vending Locator',
  description: 'Find qualified vending machine locations in San Diego, CA. Get access to verified locations with business details, contact information, and placement opportunities.',
  keywords: 'San Diego vending, California vending, vending machine locations, vending opportunities, San Diego businesses',
  openGraph: {
    title: 'San Diego Vending | The Vending Locator',
    description: 'Find qualified vending machine locations in San Diego, CA. Get access to verified locations.',
    url: 'https://thevendinglocator.com/location/san-diego-ca.html',
  },
}

export default function SanDiegoPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              San Diego Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across San Diego. From biotech companies to 
              military bases, find businesses ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Downtown San Diego
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                La Jolla
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Sorrento Valley
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Point Loma
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
              <div className="text-3xl font-bold text-navy">120+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">8+</div>
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
              Why San Diego for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              San Diego offers biotech innovation, military presence, and growing business sectors 
              perfect for vending machine placement opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Biotech & Healthcare</h3>
              <p className="text-stone text-sm">
                Research institutions, pharmaceutical companies, and medical centers in La Jolla and Sorrento Valley.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Military & Defense</h3>
              <p className="text-stone text-sm">
                Naval bases, defense contractors, and military installations creating opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tourism & Hospitality</h3>
              <p className="text-stone text-sm">
                Hotels, resorts, and attractions with year-round visitor traffic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
