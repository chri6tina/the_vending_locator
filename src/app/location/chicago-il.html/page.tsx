import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'Chicago Vending | The Vending Locator',
  description: 'Find qualified vending machine locations in Chicago, IL. Get access to verified locations with business details, contact information, and placement opportunities.',
  keywords: 'Chicago vending, Illinois vending, vending machine locations, vending opportunities, Chicago businesses',
  openGraph: {
    title: 'Chicago Vending | The Vending Locator',
    description: 'Find qualified vending machine locations in Chicago, IL. Get access to verified locations.',
    url: 'https://thevendinglocator.com/location/chicago-il.html',
  },
}

export default function ChicagoPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
              Chicago Vending Opportunities
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Discover qualified vending machine locations across Chicago. From the Loop to the suburbs, 
              find businesses ready for vending machine placement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                The Loop
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                River North
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                West Loop
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Lincoln Park
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
              <div className="text-3xl font-bold text-navy">250+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">18+</div>
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
              Why Chicago for Vending?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Chicago offers a strong business environment, diverse industries, and growing tech scene 
              perfect for vending machine placement opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Financial Services</h3>
              <p className="text-stone text-sm">
                Major banks, trading firms, and financial institutions in the Loop with thousands of employees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Manufacturing & Logistics</h3>
              <p className="text-stone text-sm">
                Industrial companies and distribution centers creating opportunities in various locations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Tech & Innovation</h3>
              <p className="text-stone text-sm">
                Growing startup scene and tech companies in West Loop and River North areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
