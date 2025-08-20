import { Metadata } from 'next'
import { generateCityStructuredData, generateCityMetadata } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = generateCityMetadata({
  city: 'Greensboro',
  state: 'North Carolina',
  stateAbbr: 'NC',
  population: '301K+',
  businessCount: '15,500+',
  industries: ['Manufacturing', 'Healthcare', 'Education', 'Textiles', 'Transportation'],
  description: 'Greensboro offers manufacturing companies, healthcare facilities, educational institutions, textile businesses, and transportation companies perfect for vending machine placement opportunities.'
})

export default function GreensboroNorthCarolinaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Greensboro',
    state: 'North Carolina',
    stateAbbr: 'NC',
    population: '301K+',
    businessCount: '15,500+',
    industries: ['Manufacturing', 'Healthcare', 'Education', 'Textiles', 'Transportation'],
    description: 'Greensboro offers manufacturing companies, healthcare facilities, educational institutions, textile businesses, and transportation companies perfect for vending machine placement opportunities.'
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
                Vending Machine Leads in Greensboro, NC
              </h1>
              <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
                Get qualified vending machine leads in Greensboro, North Carolina. Access verified business locations with contact information for successful vending machine placement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Manufacturing Hub
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Healthcare
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Textiles
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
                Greensboro Business Landscape
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Greensboro's economy is driven by manufacturing, healthcare, education, and textiles sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone text-sm">Industrial and manufacturing facilities</p>
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
                <h3 className="text-lg font-semibold text-charcoal mb-2">Textiles</h3>
                <p className="text-stone text-sm">Textile manufacturing and distribution</p>
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
                Get access to qualified vending machine leads in Greensboro with our flexible pricing options.
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
                Hot Vending Leads in Greensboro
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Access our latest verified vending machine placement opportunities in Greensboro.
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
                <h3 className="text-lg font-semibold text-charcoal mb-2">What types of businesses in Greensboro need vending machines?</h3>
                <p className="text-stone">Manufacturing companies, healthcare facilities, educational institutions, textile businesses, and transportation companies in Greensboro are excellent locations for vending machine placement.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">How do I get started with vending machine placement in Greensboro?</h3>
                <p className="text-stone">Start by accessing our verified business leads, then contact the businesses directly to discuss vending machine placement opportunities.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">What are the best areas in Greensboro for vending machines?</h3>
                <p className="text-stone">The downtown area, manufacturing districts, healthcare corridors, educational campuses, and transportation hubs offer the highest potential for vending machine success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other North Carolina Cities Section */}
        <div className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Other North Carolina Cities
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine opportunities in other major North Carolina cities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/vending-leads/charlotte-north-carolina" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Charlotte</h3>
                <p className="text-stone text-sm">Financial hub with technology and healthcare</p>
              </a>
              <a href="/vending-leads/raleigh-north-carolina" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Raleigh</h3>
                <p className="text-stone text-sm">Technology hub with healthcare and education</p>
              </a>
              <a href="/vending-leads/durham-north-carolina" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Durham</h3>
                <p className="text-stone text-sm">Research hub with technology and healthcare</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
