import { Metadata } from 'next'
import { generateCityStructuredData, generateCityMetadata } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = generateCityMetadata({
  city: 'Memphis',
  state: 'Tennessee',
  stateAbbr: 'TN',
  population: '651K+',
  businessCount: '28,500+',
  industries: ['Transportation', 'Healthcare', 'Education', 'Manufacturing', 'Logistics'],
  description: 'Memphis offers transportation companies, healthcare facilities, educational institutions, manufacturing businesses, and logistics firms perfect for vending machine placement opportunities.'
})

export default function MemphisTennesseeVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Memphis',
    state: 'Tennessee',
    stateAbbr: 'TN',
    population: '651K+',
    businessCount: '28,500+',
    industries: ['Transportation', 'Healthcare', 'Education', 'Manufacturing', 'Logistics'],
    description: 'Memphis offers transportation companies, healthcare facilities, educational institutions, manufacturing businesses, and logistics firms perfect for vending machine placement opportunities.'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-navy to-charcoal py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-6xl">
                Vending Machine Leads in Memphis, TN
              </h1>
              <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
                Get qualified vending machine leads in Memphis, Tennessee. Access verified business locations with contact information for successful vending machine placement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Transportation Hub
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Healthcare
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Logistics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Landscape Section */}
        <div className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Memphis Business Landscape
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Memphis's economy is driven by transportation, healthcare, education, and logistics sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Transportation</h3>
                <p className="text-stone text-sm">Airports, ports, and shipping companies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone text-sm">Hospitals, clinics, and medical facilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Education</h3>
                <p className="text-stone text-sm">Universities, colleges, and schools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Logistics</h3>
                <p className="text-stone text-sm">Distribution centers and logistics companies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Vending Machine Lead Pricing
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Get access to qualified vending machine leads in Memphis with our flexible pricing options.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <div className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Hot Vending Leads in Memphis
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Access our latest verified vending machine placement opportunities in Memphis.
              </p>
            </div>
            <HotLeads />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">What types of businesses in Memphis need vending machines?</h3>
                <p className="text-stone">Transportation companies, healthcare facilities, educational institutions, manufacturing businesses, and logistics firms in Memphis are excellent locations for vending machine placement.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">How do I get started with vending machine placement in Memphis?</h3>
                <p className="text-stone">Start by accessing our verified business leads, then contact the businesses directly to discuss vending machine placement opportunities.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">What are the best areas in Memphis for vending machines?</h3>
                <p className="text-stone">The downtown area, transportation hubs, healthcare districts, educational campuses, and logistics centers offer the highest potential for vending machine success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Tennessee Cities Section */}
        <div className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Other Tennessee Cities
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine opportunities in other major Tennessee cities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/vending-leads/nashville-tennessee" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Nashville</h3>
                <p className="text-stone text-sm">Music hub with healthcare and education</p>
              </a>
              <a href="/vending-leads/knoxville-tennessee" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Knoxville</h3>
                <p className="text-stone text-sm">Education hub with technology and healthcare</p>
              </a>
              <a href="/vending-leads/chattanooga-tennessee" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Chattanooga</h3>
                <p className="text-stone text-sm">Technology hub with manufacturing and tourism</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
