'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { generateCityMetadata, generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export const metadata = generateCityMetadata({
  city: 'Orlando',
  state: 'Florida',
  stateAbbr: 'FL',
  population: '307,573',
  businessCount: '32,000+',
  industries: ['Tourism', 'Entertainment', 'Healthcare', 'Technology', 'Hospitality'],
  description: 'Orlando offers excellent opportunities for vending machine placement with its major tourism industry, entertainment sector, and diverse business landscape.'
})

export default function OrlandoFloridaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Orlando',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '307,573',
    businessCount: '32,000+',
    industries: ['Tourism', 'Entertainment', 'Healthcare', 'Technology', 'Hospitality'],
    description: 'Orlando offers excellent opportunities for vending machine placement with its major tourism industry, entertainment sector, and diverse business landscape.'
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
                Orlando Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in Orlando, Florida. 
                Access 32,000+ businesses and the heart of Florida's entertainment and tourism hub.
              </p>

              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">32,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">308K+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">130+</div>
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
                Orlando Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Orlando is Florida's theme park capital and a major business hub, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Entertainment</h3>
                <p className="text-stone">World-famous theme parks and attractions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tourism</h3>
                <p className="text-stone">Major hotels, resorts, and tourism businesses</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">Medical centers and healthcare facilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Business Districts */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Key Business Districts
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Strategic vending machine placement opportunities in Orlando's most active business areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Downtown Orlando</h3>
                <p className="text-stone mb-3">Financial district, corporate headquarters, and government offices</p>
                <div className="text-sm text-bronze font-medium">220+ businesses</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">International Drive</h3>
                <p className="text-stone mb-3">Tourism, hotels, restaurants, and entertainment venues</p>
                <div className="text-sm text-bronze font-medium">200+ businesses</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Lake Buena Vista</h3>
                <p className="text-stone mb-3">Disney area, hotels, and tourism businesses</p>
                <div className="text-sm text-bronze font-medium">180+ businesses</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Kissimmee</h3>
                <p className="text-stone mb-3">Tourism, hospitality, and retail centers</p>
                <div className="text-sm text-bronze font-medium">160+ businesses</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Winter Park</h3>
                <p className="text-stone mb-3">Professional services, healthcare, and retail</p>
                <div className="text-sm text-bronze font-medium">140+ businesses</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-charcoal mb-3">Airport Area</h3>
                <p className="text-stone mb-3">Logistics, transportation, and hospitality businesses</p>
                <div className="text-sm text-bronze font-medium">120+ businesses</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominently Displayed */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Get Orlando Vending Machine Leads
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Choose the plan that fits your business needs and start receiving qualified vending machine location leads in Orlando.
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
                Everything you need to know about vending machine opportunities in Orlando.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Orlando?
                </h3>
                <p className="text-stone">
                  Orlando offers diverse opportunities including hotels, theme parks, office buildings, 
                  healthcare facilities, and retail centers. The major tourism and entertainment industry 
                  provides excellent placement opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Orlando?
                </h3>
                <p className="text-stone">
                  Orlando has a well-established vending presence, but there's still significant opportunity 
                  for expansion, especially in new business developments and emerging neighborhoods.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the peak business hours for vending in Orlando?
                </h3>
                <p className="text-stone">
                  Orlando businesses operate extended hours due to tourism, with peak vending activity 
                  during tourist hours (9 AM - 10 PM) and standard business hours (8 AM - 6 PM) for corporate locations.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Are there seasonal considerations for vending in Orlando?
                </h3>
                <p className="text-stone">
                  Yes, Orlando experiences hot, humid summers and mild winters. Indoor locations 
                  with climate control are preferred year-round, but spring and fall offer comfortable 
                  outdoor placement opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What permits are required for vending machines in Orlando?
                </h3>
                <p className="text-stone">
                  You'll need a business license from the City of Orlando and potentially health permits 
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
