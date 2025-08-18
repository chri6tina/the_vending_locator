import { Metadata } from 'next'
import { generateCityStructuredData, generateCityMetadata } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = generateCityMetadata({
  city: 'Oklahoma City',
  state: 'Oklahoma',
  stateAbbr: 'OK',
  population: '680K+',
  businessCount: '12,500+',
  industries: ['Energy', 'Healthcare', 'Education', 'Manufacturing', 'Technology'],
  description: 'Oklahoma City offers energy companies, healthcare facilities, educational institutions, and manufacturing businesses perfect for vending machine placement opportunities.'
})

export default function OklahomaCityOklahomaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Oklahoma City',
    state: 'Oklahoma',
    stateAbbr: 'OK',
    population: '680K+',
    businessCount: '12,500+',
    industries: ['Energy', 'Healthcare', 'Education', 'Manufacturing', 'Technology'],
    description: 'Oklahoma City offers energy companies, healthcare facilities, educational institutions, and manufacturing businesses perfect for vending machine placement opportunities.'
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
                Vending Machine Leads in Oklahoma City, OK
              </h1>
              <p className="mt-6 text-xl leading-8 text-white/90 max-w-3xl mx-auto">
                Get qualified vending machine leads in Oklahoma City, Oklahoma. Access verified business locations with contact information for successful vending machine placement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Energy Hub
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Healthcare
                </div>
                <div className="bg-white/20 rounded-full px-6 py-2 text-white text-sm">
                  Education
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
                Oklahoma City Business Landscape
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Oklahoma City's economy is driven by energy, healthcare, education, and manufacturing sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Energy</h3>
                <p className="text-stone text-sm">Oil, gas, and renewable energy companies</p>
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
                <h3 className="text-lg font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone text-sm">Industrial and manufacturing facilities</p>
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
                Get access to qualified vending machine leads in Oklahoma City with our flexible pricing options.
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
                Hot Vending Leads in Oklahoma City
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Access our latest verified vending machine placement opportunities in Oklahoma City.
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
                <h3 className="text-lg font-semibold text-charcoal mb-2">What types of businesses in Oklahoma City need vending machines?</h3>
                <p className="text-stone">Energy companies, healthcare facilities, educational institutions, manufacturing plants, and office buildings in Oklahoma City are excellent locations for vending machine placement.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">How do I get started with vending machine placement in Oklahoma City?</h3>
                <p className="text-stone">Start by accessing our verified business leads, then contact the businesses directly to discuss vending machine placement opportunities.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-charcoal mb-2">What are the best areas in Oklahoma City for vending machines?</h3>
                <p className="text-stone">The downtown area, energy corridors, healthcare districts, educational campuses, and manufacturing zones offer the highest potential for vending machine success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Oklahoma Cities Section */}
        <div className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                Other Oklahoma Cities
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine opportunities in other major Oklahoma cities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/vending-leads/tulsa-oklahoma" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Tulsa</h3>
                <p className="text-stone text-sm">Oklahoma's second-largest city with diverse business opportunities</p>
              </a>
              <a href="/vending-leads/norman-oklahoma" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Norman</h3>
                <p className="text-stone text-sm">University town with education and research focus</p>
              </a>
              <a href="/vending-leads/edmond-oklahoma" className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-charcoal mb-2">Edmond</h3>
                <p className="text-stone text-sm">Suburban business hub with growing corporate sector</p>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
