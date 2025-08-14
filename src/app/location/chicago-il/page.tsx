import { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export const metadata: Metadata = {
  title: 'Get Vending Machine Leads and Locations in Chicago, IL | The Vending Locator',
  description: 'Get vending machine leads and locations in Chicago, Illinois. Find qualified businesses ready for vending machine placement. Access verified locations with business details and contact information.',
  keywords: 'Chicago vending machine leads, Illinois vending locations, Chicago vending opportunities, vending machine placement Chicago, Chicago business locations, vending leads Illinois',
  openGraph: {
    title: 'Get Vending Machine Leads and Locations in Chicago, IL',
    description: 'Find qualified vending machine locations in Chicago, Illinois with verified business details and contact information.',
    url: 'https://thevendinglocator.com/location/chicago-il',
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
              Get Vending Machine Leads and Locations in Chicago, IL
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
              Find qualified vending machine placement opportunities across Chicago. From financial services to manufacturing, discover businesses ready for vending machine placement with verified contact information.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                Downtown Chicago
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                The Loop
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                River North
              </div>
              <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                West Loop
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
              <div className="text-stone">Business Districts</div>
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
              Why Chicago for Vending Machine Placement?
            </h2>
            <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
              Chicago offers a robust business environment with diverse industries, major corporate headquarters, and high-traffic locations perfect for vending machine opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Financial Services</h3>
              <p className="text-stone text-sm">
                Major banks, investment firms, and financial institutions with high-traffic office environments and professional staff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Manufacturing & Industrial</h3>
              <p className="text-stone text-sm">
                Industrial facilities, manufacturing plants, and logistics centers with shift workers and consistent traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Healthcare & Medical</h3>
              <p className="text-stone text-sm">
                Medical centers, hospitals, and healthcare facilities with staff, patients, and visitor traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Technology & Innovation</h3>
              <p className="text-stone text-sm">
                Tech companies, startups, and innovation hubs with high-tech office environments and creative professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Education & Research</h3>
              <p className="text-stone text-sm">
                Universities, research institutions, and educational facilities with student and faculty traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Retail & Entertainment</h3>
              <p className="text-stone text-sm">
                Shopping districts, entertainment venues, and retail centers with high customer traffic and tourist engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
    </div>
  )
}
