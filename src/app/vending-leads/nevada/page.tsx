'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function NevadaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Nevada',
    state: 'Nevada',
    stateAbbr: 'NV',
    population: '3.1M',
    businessCount: '80,000+',
    industries: ['Tourism', 'Gaming', 'Logistics', 'Technology', 'Healthcare'],
    description: 'Nevada offers excellent opportunities for vending machine placement with its tourism sector, gaming industry, and diverse business landscape.'
  })

  const cities = [
    {
      name: 'Las Vegas',
      slug: 'las-vegas-nevada',
      vendorCount: '450+',
      businessCount: '520+',
      description: 'Entertainment and tourism capital',
      highlights: ['Tourism', 'Gaming', 'Entertainment']
    },
    {
      name: 'Reno',
      slug: 'reno-nevada',
      vendorCount: '180+',
      businessCount: '220+',
      description: 'Technology and logistics hub',
      highlights: ['Technology', 'Logistics', 'Healthcare']
    },
    {
      name: 'Henderson',
      slug: 'henderson-nevada',
      vendorCount: '120+',
      businessCount: '150+',
      description: 'Growing suburban city',
      highlights: ['Healthcare', 'Retail', 'Education']
    },
    {
      name: 'Carson City',
      slug: 'carson-city-nevada',
      vendorCount: '80+',
      businessCount: '100+',
      description: 'State capital with government',
      highlights: ['Government', 'Healthcare', 'Education']
    },
    {
      name: 'Sparks',
      slug: 'sparks-nevada',
      vendorCount: '70+',
      businessCount: '90+',
      description: 'Industrial and logistics center',
      highlights: ['Logistics', 'Manufacturing', 'Healthcare']
    }
  ]

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
                Nevada Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities across Nevada. 
                Access 80,000+ businesses and the heart of America's tourism and gaming hub.
              </p>

              {/* State Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">80,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">3.1M+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">900+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Vending Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">5</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Major Cities</div>
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
                Nevada Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Nevada is a major tourism and gaming hub in the West, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tourism & Gaming</h3>
                <p className="text-stone">Casinos, hotels, and entertainment venues with high visitor traffic and 24/7 operational schedules.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology & Logistics</h3>
                <p className="text-stone">Tech companies, logistics centers, and distribution facilities with professionals and operational staff.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare & Government</h3>
                <p className="text-stone">Medical facilities, government offices, and educational institutions with consistent visitor traffic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Major Cities Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Major Nevada Cities
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine opportunities in Nevada's most active business areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div key={city.slug} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{city.name}</h3>
                  <p className="text-stone mb-3">{city.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.highlights.map((highlight) => (
                      <span key={highlight} className="px-2 py-1 bg-navy/10 text-navy text-xs rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-bronze font-medium">
                    <span>{city.vendorCount} vendors</span>
                    <span>{city.businessCount} businesses</span>
                  </div>
                  <a
                    href={`/vending-leads/${city.slug}`}
                    className="mt-4 inline-block bg-navy hover:bg-navy-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full text-center"
                  >
                    View Locations
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominently Displayed */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Get Nevada Vending Machine Leads
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Access verified vending locations across Nevada with our flexible pricing options designed for vending machine entrepreneurs.
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
                Everything you need to know about vending machine opportunities in Nevada.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Nevada?
                </h3>
                <p className="text-stone">
                  Nevada offers diverse opportunities including casinos, hotels, technology companies,
                  logistics facilities, and healthcare centers. The major tourism and gaming sectors
                  provide excellent placement opportunities.
                </p>
              </div>
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Nevada?
                </h3>
                <p className="text-stone">
                  Nevada has a moderate vending presence with significant opportunity for expansion,
                  especially in new tourism developments and growing technology areas.
                </p>
              </div>
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the best vending machine types for Nevada businesses?
                </h3>
                <p className="text-stone">
                  For Nevada tourism locations, beverage and snack machines work best. Technology companies need reliable machines, while
                  logistics facilities prefer durable options. We provide specific recommendations for each business type.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Western States Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Other Western Vending Locations
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine leads in other major Western states
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'California', slug: 'california', count: '1,200+ leads' },
                { name: 'Arizona', slug: 'arizona', count: '680+ leads' },
                { name: 'Utah', slug: 'utah', count: '480+ leads' },
              ].map((state) => (
                <div key={state.slug} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{state.name}</h3>
                  <p className="text-stone mb-4">{state.count}</p>
                  <a
                    href={`/vending-leads/${state.slug}`}
                    className="inline-block bg-navy hover:bg-navy-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Locations
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
