'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function NewOrleansLouisianaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'New Orleans',
    state: 'Louisiana',
    stateAbbr: 'LA',
    population: '383,997',
    businessCount: '20,000+',
    industries: ['Tourism', 'Healthcare', 'Education', 'Manufacturing', 'Technology'],
    description: 'New Orleans offers excellent opportunities for vending machine placement with its major tourism sector, healthcare industry, and diverse business landscape.'
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
                New Orleans Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in New Orleans, Louisiana. 
                Access 20,000+ businesses and the heart of Louisiana's tourism and healthcare hub.
              </p>

              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">20,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">384K+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">140+</div>
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
                New Orleans Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                New Orleans is Louisiana's largest city and a major tourism and healthcare center, offering diverse vending opportunities across hospitality, healthcare, and business sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <UsersIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tourism & Hospitality</h3>
                <p className="text-stone">
                  Major hotels, restaurants, and entertainment venues, 
                  providing opportunities in tourist areas and hospitality facilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare Excellence</h3>
                <p className="text-stone">
                  Major medical centers including Ochsner Health and Tulane Medical Center, 
                  offering placement in hospitals, clinics, and medical office buildings.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education Hub</h3>
                <p className="text-stone">
                  Tulane University, Loyola University, and other educational institutions, 
                  providing opportunities in student centers and campus facilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <CpuChipIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone">
                  Strong manufacturing presence including petrochemical and shipbuilding, 
                  offering placement in factories and industrial facilities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mb-4">
                  <MapPinIcon className="w-8 h-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology Innovation</h3>
                <p className="text-stone">
                  Growing tech sector with startups and established companies, 
                  providing opportunities in office buildings and tech campuses.
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
                Get New Orleans Vending Machine Leads
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Choose the plan that fits your business needs and start receiving qualified vending machine location leads in New Orleans.
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
                Everything you need to know about vending machine opportunities in New Orleans.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in New Orleans?
                </h3>
                <p className="text-stone">
                  New Orleans offers diverse opportunities including hotels, restaurants, healthcare facilities, 
                  educational institutions, and manufacturing plants. The major tourism sector and healthcare industry 
                  provide excellent placement opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in New Orleans?
                </h3>
                <p className="text-stone">
                  New Orleans has a growing vending presence, but there's still significant opportunity 
                  for expansion, especially in new tourism facilities and healthcare buildings.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the peak business hours for vending in New Orleans?
                </h3>
                <p className="text-stone">
                  New Orleans businesses typically operate from 8 AM to 6 PM, with peak vending activity 
                  during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM).
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  Are there seasonal considerations for vending in New Orleans?
                </h3>
                <p className="text-stone">
                  Yes, New Orleans experiences hot summers and mild winters. Indoor locations 
                  are preferred year-round, but spring and fall offer comfortable outdoor opportunities.
                </p>
              </div>

              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What permits are required for vending machines in New Orleans?
                </h3>
                <p className="text-stone">
                  You'll need a business license from the City of New Orleans and potentially health permits 
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
