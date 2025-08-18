'use client'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, HomeIcon } from '@heroicons/react/24/solid'
import { generateCityStructuredData } from '@/components/CityPageSEO'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'

export default function CapeCoralFloridaVendingLeadsPage() {
  const structuredData = generateCityStructuredData({
    city: 'Cape Coral',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '194,016',
    businessCount: '15,000+',
    industries: ['Real Estate', 'Healthcare', 'Retail', 'Tourism', 'Education'],
    description: 'Cape Coral offers excellent opportunities for vending machine placement with its growing population, healthcare sector, and diverse business landscape.'
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
                Cape Coral Vending Machine Locations
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Discover premium vending machine placement opportunities in Cape Coral, Florida.
                Access 15,000+ businesses and the fastest-growing city in Southwest Florida.
              </p>
              {/* City Stats - Matching Homepage Counter Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">15,000+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">194K+</div>
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
                Cape Coral Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Cape Coral is one of Florida's fastest-growing cities, known for its extensive canal system and diverse business opportunities across multiple thriving industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <HomeIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Real Estate & Development</h3>
                </div>
                <p className="text-stone">Growing residential and commercial development with construction companies, real estate offices, and property management firms.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <UsersIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Healthcare & Medical</h3>
                </div>
                <p className="text-stone">Medical centers, clinics, and healthcare facilities serving the growing population with staff and patient traffic.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Retail & Shopping</h3>
                </div>
                <p className="text-stone">Shopping centers, grocery stores, and retail establishments with consistent customer traffic throughout the year.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <MapPinIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Tourism & Hospitality</h3>
                </div>
                <p className="text-stone">Hotels, restaurants, and tourism-related businesses with seasonal visitor traffic and year-round local customers.</p>
              </div>
              <div className="bg-warm-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <AcademicCapIcon className="w-8 h-8 text-coral" />
                  <h3 className="text-xl font-semibold text-charcoal">Education</h3>
                </div>
                <p className="text-stone">Schools, colleges, and educational institutions with students, faculty, and staff throughout the academic year.</p>
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
                Choose Your Cape Coral Vending Leads Package
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get access to verified vending locations across Cape Coral with our flexible pricing options designed for vending machine entrepreneurs.
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
                Everything you need to know about vending machine opportunities in Cape Coral, Florida.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What types of businesses are best for vending machines in Cape Coral?
                </h3>
                <p className="text-stone">
                  Cape Coral offers diverse opportunities including healthcare facilities, retail centers,
                  professional services, and educational institutions. The growing population and business
                  development provide excellent placement opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How competitive is the vending machine market in Cape Coral?
                </h3>
                <p className="text-stone">
                  Cape Coral has a developing vending presence with significant opportunity for expansion,
                  especially in new business developments and growing commercial areas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are the best vending machine types for Cape Coral businesses?
                </h3>
                <p className="text-stone">
                  For Cape Coral healthcare locations, healthy snack and beverage machines work best.
                  Retail locations prefer traditional snack and drink machines, while professional
                  services need reliable beverage machines. We provide specific recommendations for each business type.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  How does Cape Coral's growth benefit vending opportunities?
                </h3>
                <p className="text-stone">
                  Cape Coral's rapid population growth and business development create new vending
                  opportunities. The city's canal system and tourism appeal also support year-round
                  business activity and customer traffic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  What are average commission rates in Cape Coral?
                </h3>
                <p className="text-stone">
                  Cape Coral commission rates vary by industry: healthcare facilities typically offer 25-35%,
                  retail locations 15-25%, professional services 20-30%, and educational institutions 20-30%.
                  Our leads include current commission rate information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Florida Cities Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
                Other Florida Vending Locations
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Explore vending machine leads in other major Florida cities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Miami', slug: 'miami-florida', count: '180+ leads' },
                { name: 'Orlando', slug: 'orlando-florida', count: '150+ leads' },
                { name: 'Tampa', slug: 'tampa-florida', count: '160+ leads' },
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
