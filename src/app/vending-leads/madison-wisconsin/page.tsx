'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function MadisonWisconsinVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Madison',
    state: 'Wisconsin',
    stateAbbr: 'WI',
    population: '258,366',
    businessCount: '18,000+',
    industries: ['Education', 'Government', 'Healthcare', 'Technology', 'Research'],
    description: 'Madison offers excellent opportunities for vending machine placement with its major university presence, state government offices, and growing technology sector.'
  })

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section - Matching Homepage Style */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
                Madison Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in Madison, Wisconsin. 
                Access 18,000+ businesses and the heart of Wisconsin's education and government hub.
              </p>

              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">18,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">258K+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">120+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Vending Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">5</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Major Industries</div>
                </div>
              </div>

              {/* Trust Signals - Matching Homepage Style */}
              <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-sm text-stone">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span>Verified Locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span>Quality Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Landscape Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Madison Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Madison is Wisconsin's capital and a major university town, offering diverse vending opportunities across education, government, and technology sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education Hub</h3>
                <p className="text-stone">
                  Home to the University of Wisconsin-Madison, one of the largest public universities, 
                  providing opportunities in student centers, libraries, and campus facilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Government Center</h3>
                <p className="text-stone">
                  State capital with numerous government offices and administrative buildings, 
                  offering stable placement opportunities in government facilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <CpuChipIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology Innovation</h3>
                <p className="text-stone">
                  Growing tech sector with startups and established companies, 
                  providing opportunities in office buildings and tech campuses.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <MapPinIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare Excellence</h3>
                <p className="text-stone">
                  Major medical centers including UW Health, 
                  offering placement in hospitals, clinics, and medical office buildings.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Research & Development</h3>
                <p className="text-stone">
                  Strong R&D presence with university research facilities and private labs, 
                  providing unique opportunities in research buildings and innovation centers.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Professional Services</h3>
                <p className="text-stone">
                  Law firms, consulting companies, and professional service providers, 
                  offering placement in office buildings and business centers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominently Displayed */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Get Madison Vending Machine Leads
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Choose the plan that fits your business needs and start receiving qualified vending machine location leads in Madison.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HotLeads />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone">
                Everything you need to know about vending machine opportunities in Madison.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Madison?
                </h3>
                <p className="text-stone">
                  Madison offers diverse opportunities including educational institutions, government offices, 
                  healthcare facilities, and technology companies. The major university presence and state government 
                  provide excellent placement opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Madison?
                </h3>
                <p className="text-stone">
                  Madison has a growing vending presence, but there's still significant opportunity 
                  for expansion, especially in new government buildings and university facilities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the peak business hours for vending in Madison?
                </h3>
                <p className="text-stone">
                  Madison businesses typically operate from 8 AM to 6 PM, with peak vending activity 
                  during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM).
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Are there seasonal considerations for vending in Madison?
                </h3>
                <p className="text-stone">
                  Yes, Madison experiences four distinct seasons with cold winters. Indoor locations 
                  are preferred year-round, but spring and fall offer comfortable outdoor opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What permits are required for vending machines in Madison?
                </h3>
                <p className="text-stone">
                  You'll need a business license from the City of Madison and potentially health permits 
                  for food vending. Specific requirements depend on your machine type and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
