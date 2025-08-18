'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function IdahoVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Idaho',
    state: 'Idaho',
    stateAbbr: 'ID',
    population: '1.9M',
    businessCount: '70,000+',
    industries: ['Technology', 'Agriculture', 'Manufacturing', 'Healthcare', 'Tourism'],
    description: 'Idaho offers excellent opportunities for vending machine placement with its technology sector, agriculture industry, and diverse business landscape.'
  })

  const cities = [
    {
      name: 'Boise',
      slug: 'boise-idaho',
      vendorCount: '200+',
      businessCount: '250+',
      description: 'State capital with technology and healthcare',
      highlights: ['Technology', 'Healthcare', 'Government']
    },
    {
      name: 'Meridian',
      slug: 'meridian-idaho',
      vendorCount: '120+',
      businessCount: '150+',
      description: 'Growing suburban city',
      highlights: ['Healthcare', 'Retail', 'Education']
    },
    {
      name: 'Nampa',
      slug: 'nampa-idaho',
      vendorCount: '100+',
      businessCount: '130+',
      description: 'Agricultural and manufacturing center',
      highlights: ['Agriculture', 'Manufacturing', 'Healthcare']
    },
    {
      name: 'Idaho Falls',
      slug: 'idaho-falls-idaho',
      vendorCount: '90+',
      businessCount: '110+',
      description: 'Energy and healthcare hub',
      highlights: ['Energy', 'Healthcare', 'Education']
    },
    {
      name: 'Pocatello',
      slug: 'pocatello-idaho',
      vendorCount: '80+',
      businessCount: '100+',
      description: 'University town with education',
      highlights: ['Education', 'Healthcare', 'Manufacturing']
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
                Idaho Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities across Idaho. 
                Access 70,000+ businesses and the heart of America's technology and agriculture hub.
              </p>

              {/* State Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">70,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">1.9M+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">590+</div>
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
                Idaho Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Idaho is a major technology and agriculture hub in the West, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology & Innovation</h3>
                <p className="text-stone">Tech companies, startups, and innovation centers with developers, engineers, and creative professionals.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Agriculture & Manufacturing</h3>
                <p className="text-stone">Farms, food processing plants, and manufacturing facilities with workers and operational staff.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare & Education</h3>
                <p className="text-stone">Medical facilities, universities, and educational institutions with students, faculty, and patients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Major Cities Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Major Idaho Cities
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine opportunities in Idaho's most active business areas.
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
                Get Idaho Vending Machine Leads
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Access verified vending locations across Idaho with our flexible pricing options designed for vending machine entrepreneurs.
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
                Everything you need to know about vending machine opportunities in Idaho.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Idaho?
                </h3>
                <p className="text-stone">
                  Idaho offers diverse opportunities including technology companies, agricultural facilities,
                  manufacturing plants, and healthcare centers. The major technology and agriculture sectors
                  provide excellent placement opportunities.
                </p>
              </div>
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Idaho?
                </h3>
                <p className="text-stone">
                  Idaho has a moderate vending presence with significant opportunity for expansion,
                  especially in new technology developments and growing agricultural areas.
                </p>
              </div>
              <div className="bg-warm-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the best vending machine types for Idaho businesses?
                </h3>
                <p className="text-stone">
                  For Idaho technology locations, healthy snack and beverage machines work best. Agricultural facilities need durable machines, while
                  healthcare facilities prefer professional options. We provide specific recommendations for each business type.
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
                { name: 'Washington', slug: 'washington', count: '680+ leads' },
                { name: 'Oregon', slug: 'oregon', count: '580+ leads' },
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
