import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VendingLeadsPage() {
  const states = [
    {
      name: 'Texas',
      slug: 'texas',
      cities: [
        { name: 'Austin', slug: 'austin-texas', vendorCount: '150+', businessCount: '200+', description: 'Tech hub with major corporations and startups' },
        { name: 'Dallas', slug: 'dallas-texas', vendorCount: '180+', businessCount: '250+', description: 'Financial district and corporate headquarters' },
        { name: 'Houston', slug: 'houston-texas', vendorCount: '200+', businessCount: '300+', description: 'Energy industry and medical center hub' },
        { name: 'San Antonio', slug: 'san-antonio-texas', vendorCount: '120+', businessCount: '180+', description: 'Military bases and healthcare facilities' },
      ]
    },
    {
      name: 'Florida',
      slug: 'florida',
      cities: [
        { name: 'Miami', slug: 'miami-florida', vendorCount: '160+', businessCount: '220+', description: 'International business and tourism center' },
        { name: 'Jacksonville', slug: 'jacksonville-florida', vendorCount: '140+', businessCount: '190+', description: 'Port city with logistics and healthcare' },
        { name: 'Orlando', slug: 'orlando-florida', vendorCount: '150+', businessCount: '200+', description: 'Theme parks and technology innovation hub' },
      ]
    },
    {
      name: 'California',
      slug: 'california',
      cities: [
        { name: 'Los Angeles', slug: 'los-angeles-california', vendorCount: '250+', businessCount: '400+', description: 'Entertainment and tech industry hub' },
        { name: 'San Francisco', slug: 'san-francisco-california', vendorCount: '180+', businessCount: '280+', description: 'Tech startups and financial services' },
        { name: 'San Diego', slug: 'san-diego-california', vendorCount: '160+', businessCount: '240+', description: 'Biotech and military presence' },
        { name: 'San Jose', slug: 'san-jose-california', vendorCount: '140+', businessCount: '200+', description: 'Silicon Valley tech companies' },
      ]
    },
    {
      name: 'New York',
      slug: 'new-york',
      cities: [
        { name: 'New York City', slug: 'new-york-new-york', vendorCount: '300+', businessCount: '500+', description: 'Financial capital and corporate headquarters' },
      ]
    },
    {
      name: 'Illinois',
      slug: 'illinois',
      cities: [
        { name: 'Chicago', slug: 'chicago-illinois', vendorCount: '220+', businessCount: '350+', description: 'Midwest business and transportation hub' },
      ]
    },
    {
      name: 'Washington',
      slug: 'washington',
      cities: [
        { name: 'Seattle', slug: 'seattle-washington', vendorCount: '170+', businessCount: '260+', description: 'Tech companies and aerospace industry' },
      ]
    },
    {
      name: 'Arizona',
      slug: 'arizona',
      cities: [
        { name: 'Phoenix', slug: 'phoenix-arizona', vendorCount: '150+', businessCount: '220+', description: 'Growing tech and healthcare sector' },
      ]
    },
    {
      name: 'Pennsylvania',
      slug: 'pennsylvania',
      cities: [
        { name: 'Philadelphia', slug: 'philadelphia-pennsylvania', vendorCount: '160+', businessCount: '240+', description: 'Healthcare and education hub' },
        { name: 'Pittsburgh', slug: 'pittsburgh-pennsylvania', vendorCount: '140+', businessCount: '200+', description: 'Technology and healthcare innovation' },
      ]
    },
    {
      name: 'Colorado',
      slug: 'colorado',
      cities: [
        { name: 'Denver', slug: 'denver-colorado', vendorCount: '160+', businessCount: '240+', description: 'Technology and outdoor recreation hub' },
        { name: 'Boulder', slug: 'boulder-colorado', vendorCount: '120+', businessCount: '180+', description: 'University town with tech startups and outdoor culture' },
        { name: 'Colorado Springs', slug: 'colorado-springs-colorado', vendorCount: '140+', businessCount: '200+', description: 'Military presence and growing tech sector' }
      ]
    },
    {
      name: 'Georgia',
      slug: 'georgia',
      cities: [
        { name: 'Atlanta', slug: 'atlanta-georgia', vendorCount: '180+', businessCount: '280+', description: 'Entertainment and transportation hub' },
      ]
    },
    {
      name: 'Massachusetts',
      slug: 'massachusetts',
      cities: [
        { name: 'Boston', slug: 'boston-massachusetts', vendorCount: '170+', businessCount: '260+', description: 'Education and healthcare excellence' },
        { name: 'Worcester', slug: 'worcester-massachusetts', vendorCount: '120+', businessCount: '180+', description: 'Manufacturing and healthcare hub' },
        { name: 'Springfield', slug: 'springfield-massachusetts', vendorCount: '110+', businessCount: '160+', description: 'Transportation and healthcare excellence' }
      ]
    },
    {
      name: 'Nevada',
      slug: 'nevada',
      cities: [
        { name: 'Las Vegas', slug: 'las-vegas-nevada', vendorCount: '140+', businessCount: '200+', description: 'Hospitality and entertainment hub' },
      ]
    },
    {
      name: 'Tennessee',
      slug: 'tennessee',
      cities: [
        { name: 'Nashville', slug: 'nashville-tennessee', vendorCount: '150+', businessCount: '220+', description: 'Music industry and healthcare excellence' },
        { name: 'Memphis', slug: 'memphis-tennessee', vendorCount: '140+', businessCount: '200+', description: 'Logistics hub and healthcare excellence' },
        { name: 'Knoxville', slug: 'knoxville-tennessee', vendorCount: '120+', businessCount: '180+', description: 'University town with technology innovation' }
      ]
    },
    {
      name: 'Oregon',
      slug: 'oregon',
      cities: [
        { name: 'Portland', slug: 'portland-oregon', vendorCount: '140+', businessCount: '200+', description: 'Technology and sustainability focus' },
      ]
    },
    {
      name: 'North Carolina',
      slug: 'north-carolina',
      cities: [
        { name: 'Charlotte', slug: 'charlotte-north-carolina', vendorCount: '160+', businessCount: '240+', description: 'Banking and finance excellence' },
        { name: 'Raleigh', slug: 'raleigh-north-carolina', vendorCount: '140+', businessCount: '200+', description: 'Technology and research hub' },
        { name: 'Greensboro', slug: 'greensboro-north-carolina', vendorCount: '120+', businessCount: '180+', description: 'Manufacturing and logistics excellence' }
      ]
    },
    {
      name: 'Missouri',
      slug: 'missouri',
      cities: [
        { name: 'Kansas City', slug: 'kansas-city-missouri', vendorCount: '130+', businessCount: '180+', description: 'Logistics and healthcare hub' },
      ]
    },
    {
      name: 'Minnesota',
      slug: 'minnesota',
      cities: [
        { name: 'Minneapolis', slug: 'minneapolis-minnesota', vendorCount: '150+', businessCount: '220+', description: 'Healthcare and corporate excellence' },
      ]
    },
    {
      name: 'Ohio',
      slug: 'ohio',
      cities: [
        { name: 'Cleveland', slug: 'cleveland-ohio', vendorCount: '140+', businessCount: '200+', description: 'Healthcare and manufacturing hub' },
        { name: 'Columbus', slug: 'columbus-ohio', vendorCount: '150+', businessCount: '220+', description: 'Technology and education excellence' },
        { name: 'Cincinnati', slug: 'cincinnati-ohio', vendorCount: '130+', businessCount: '190+', description: 'Manufacturing and logistics hub' }
      ]
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-cream">
        {/* Hero Section - Matching Home Page Design */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
                Vending Machine Leads & Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Access verified vending opportunities across major cities and states. 
                Get business details, contact information, and placement opportunities 
                to grow your vending machine business.
              </p>
              
              {/* Key Stats - Matching Home Page Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">4,100+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Total Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">37+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Major Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">18</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">States</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">100%</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Verified</div>
                </div>
              </div>

              {/* CTA Buttons - Matching Home Page Style */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Pricing & Get Started
                </Link>
                <Link
                  href="/hot-leads"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  View Hot Leads <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Cities by State Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Browse Vending Opportunities by Location
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
              Select a city below to access verified vending machine locations with business details, 
              contact information, and placement opportunities.
            </p>
          </div>

          {states.map((state, stateIndex) => (
            <div key={state.slug} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate">{state.name}</h3>
                  <p className="text-chocolate/70 mt-2">{state.cities.length} cities available</p>
                </div>
                <Link
                  href={`/vending-leads/${state.slug}`}
                  className="text-navy hover:text-navy-light font-semibold hover:underline text-lg flex items-center gap-2"
                >
                  View all {state.name} locations
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {state.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/vending-leads/${city.slug}`}
                    className="group block bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-navy/30 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-chocolate group-hover:text-navy transition-colors">
                          {city.name}
                        </h4>
                        <div className="text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-chocolate/70 text-sm mb-4 leading-relaxed">
                        {city.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-chocolate/60">Locations:</span>
                          <span className="font-semibold text-chocolate">{city.vendorCount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-chocolate/60">Businesses:</span>
                          <span className="font-semibold text-chocolate">{city.businessCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section - Matching Home Page Colors */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Ready to Start Your Vending Business?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get access to verified locations with business details, contact information, 
              and placement opportunities. Start growing your vending machine empire today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block bg-navy hover:bg-navy-light text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View Pricing & Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent text-navy px-10 py-4 rounded-lg font-semibold border-2 border-navy hover:bg-navy hover:text-white transition-colors text-lg"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section - Matching Home Page Colors */}
        <div className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Why Choose Our Vending Leads?
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                We provide the most comprehensive and verified vending machine opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-chocolate mb-4">100% Verified</h3>
                <p className="text-chocolate/70">
                  Every location is thoroughly verified with business details, contact information, and placement opportunities.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-chocolate mb-4">Real-Time Updates</h3>
                <p className="text-chocolate/70">
                  Get access to the latest opportunities with real-time updates and new location additions.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-chocolate mb-4">Comprehensive Support</h3>
                <p className="text-chocolate/70">
                  Our team provides ongoing support to help you maximize your vending machine profitability.
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
