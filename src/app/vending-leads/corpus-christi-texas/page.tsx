'use client'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, AnchorIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function CorpusChristiTexasVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Corpus Christi',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '326,586',
    businessCount: '22,000+',
    industries: ['Port & Shipping', 'Energy', 'Healthcare', 'Tourism', 'Manufacturing'],
    description: 'Corpus Christi offers excellent opportunities for vending machine placement with its major port operations, energy sector, and diverse business landscape.'
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
                Corpus Christi Vending Machine Locations
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in Corpus Christi, Texas.
                Access 22,000+ businesses and the heart of Texas' Gulf Coast port and energy hub.
              </p>
              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">22,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">327K+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">160+</div>
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
                <div className="flex items-center gap-2 text-sm text-sm text-stone">
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
                Corpus Christi Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Corpus Christi is a major Gulf Coast port city and energy hub, offering diverse vending opportunities across multiple thriving industries including shipping, energy, and healthcare.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <AnchorIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Port & Shipping</h3>
                </div>
                <p className="text-stone">Major port operations, shipping companies, and logistics firms with high employee density and 24/7 operational hours.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Energy & Oil</h3>
                </div>
                <p className="text-stone">Oil refineries, energy companies, and industrial facilities with consistent employee traffic and shift workers.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Healthcare & Medical</h3>
                </div>
                <p className="text-stone">Medical centers, hospitals, and healthcare facilities with staff, patients, and visitor traffic throughout the year.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPinIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Tourism & Hospitality</h3>
                </div>
                <p className="text-stone">Beach resorts, hotels, restaurants, and tourism-related businesses with seasonal visitor traffic and year-round local customers.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Manufacturing</h3>
                </div>
                <p className="text-stone">Industrial facilities and manufacturing plants with consistent employee traffic and operational hours.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Professional Services</h3>
                </div>
                <p className="text-stone">Law firms, accounting offices, and professional service companies with consistent client and employee traffic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Choose Your Corpus Christi Vending Leads Package
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get access to verified vending locations across Corpus Christi with our flexible pricing options designed for vending machine entrepreneurs.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Hot Leads Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HotLeads />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone">
                Everything you need to know about vending machine opportunities in Corpus Christi, Texas.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Corpus Christi?
                </h3>
                <p className="text-stone">
                  Corpus Christi offers diverse opportunities including port operations, energy facilities,
                  healthcare centers, and manufacturing plants. The major port and energy sectors
                  provide excellent placement opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Corpus Christi?
                </h3>
                <p className="text-stone">
                  Corpus Christi has a moderate vending presence with significant opportunity for expansion,
                  especially in new industrial developments and growing commercial areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the best vending machine types for Corpus Christi businesses?
                </h3>
                <p className="text-stone">
                  For Corpus Christi port and energy locations, industrial-grade beverage and snack
                  machines work best. Healthcare facilities prefer healthy snack options, while
                  manufacturing plants need reliable machines. We provide specific recommendations for each business type.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How does Corpus Christi's port industry benefit vending opportunities?
                </h3>
                <p className="text-stone">
                  Corpus Christi's port operations create 24/7 business activity with shift workers
                  and high employee density. The energy sector also provides stable customer bases
                  for vending machines throughout the year.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are average commission rates in Corpus Christi?
                </h3>
                <p className="text-stone">
                  Corpus Christi commission rates vary by industry: port and energy facilities typically
                  offer 20-30%, healthcare facilities 25-35%, manufacturing 20-30%, and retail
                  locations 15-25%. Our leads include current commission rate information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Texas Cities Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Other Texas Vending Locations
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine leads in other major Texas cities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Houston', slug: 'houston-texas', count: '250+ leads' },
                { name: 'Dallas', slug: 'dallas-texas', count: '200+ leads' },
                { name: 'Austin', slug: 'austin-texas', count: '180+ leads' },
              ].map((city) => (
                <div key={city.slug} className="bg-warm-white p-6 rounded-lg border border-gray-200 text-center">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{city.name}</h3>
                  <p className="text-stone mb-4">{city.count}</p>
                  <a
                    href={`/vending-leads/${city.slug}`}
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
