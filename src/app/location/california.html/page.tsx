import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'Get Vending Machine Leads and Locations in California | The Vending Locator',
  description: 'Get vending machine leads and locations across California. Find qualified businesses ready for vending machine placement. Access verified locations with business details and contact information.',
  keywords: 'California vending machine leads, CA vending locations, California vending opportunities, vending machine placement California, California business locations, vending leads California',
  openGraph: {
    title: 'Get Vending Machine Leads and Locations in California',
    description: 'Find qualified vending machine locations across California with verified business details and contact information.',
    url: 'https://www.thevendinglocator.com/location/california.html',
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
              Get Vending Machine Leads and Locations in California
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Find qualified vending machine placement opportunities across California. From tech hubs to entertainment, discover businesses ready for vending machine placement with verified contact information.
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
              <div className="text-3xl font-bold text-navy">1,200+</div>
              <div className="text-stone">Locations Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy">30+</div>
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

      {/* Hot Leads Section */}
      <HotLeads />

      {/* Vending Course Section */}
      <VendingCourse />

      {/* City-Specific Content */}
      <div className="py-16 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-charcoal">
              Why California for Vending Machine Placement?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              California offers a diverse business environment with technology, entertainment, healthcare, and diverse industries perfect for vending machine opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Technology & Innovation</h3>
              <p className="text-stone text-sm">
                Silicon Valley, tech startups, and innovation hubs with high-tech office environments and creative professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Entertainment & Media</h3>
              <p className="text-stone text-sm">
                Film studios, production companies, and entertainment venues with creative professionals and consistent traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Healthcare & Medical</h3>
              <p className="text-stone text-sm">
                Medical centers, hospitals, and healthcare facilities with staff, patients, and visitor traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Biotechnology</h3>
              <p className="text-stone text-sm">
                Biotech companies, research labs, and pharmaceutical firms with scientific professionals and consistent traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Education & Research</h3>
              <p className="text-stone text-sm">
                Universities, research institutions, and educational facilities with student and faculty traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Financial Services</h3>
              <p className="text-stone text-sm">
                Banking institutions, investment firms, and financial services with high-traffic office environments and professional staff.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
