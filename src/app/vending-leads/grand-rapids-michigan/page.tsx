'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function GrandRapidsMichiganVendingLeadsPage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section - Matching Homepage Style */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
                Grand Rapids Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in Grand Rapids, Michigan. 
                Access 30,000+ businesses in the heart of Michigan's second-largest city and business hub.
              </p>

              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">30,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">198K+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">125+</div>
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
                Grand Rapids Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Grand Rapids is Michigan's second-largest city and a major business, healthcare, and manufacturing hub, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            {/* Industry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cream/30 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BuildingOfficeIcon className="h-8 w-8 text-bronze" />
                  <h3 className="text-xl font-semibold text-charcoal">Healthcare</h3>
                </div>
                <p className="text-stone">Major healthcare hub with Spectrum Health and hospitals.</p>
              </div>

              <div className="bg-cream/30 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <CpuChipIcon className="h-8 w-8 text-bronze" />
                  <h3 className="text-xl font-semibold text-charcoal">Technology</h3>
                </div>
                <p className="text-stone">Growing tech sector with startups and established companies.</p>
              </div>

              <div className="bg-cream/30 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-bronze" />
                  <h3 className="text-xl font-semibold text-charcoal">Education</h3>
                </div>
                <p className="text-stone">Home to Grand Valley State University and colleges.</p>
              </div>

              <div className="bg-cream/30 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPinIcon className="h-8 w-8 text-bronze" />
                  <h3 className="text-xl font-semibold text-charcoal">Manufacturing</h3>
                </div>
                <p className="text-stone">Major manufacturing hub with automotive and furniture industries.</p>
              </div>

              <div className="bg-cream/30 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="h-8 w-8 text-bronze" />
                  <h3 className="text-xl font-semibold text-charcoal">Finance</h3>
                </div>
                <p className="text-stone">Growing financial services sector with banks and investment firms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <PricingTable />

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
