import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function VendingLeadsPage() {
  const states = [
    {
      name: 'Texas',
      slug: 'texas',
      cities: [
        { name: 'Mansfield', slug: 'mansfield-texas', vendorCount: '110+', businessCount: '150+', description: 'Growing suburban city with retail and healthcare' },
        { name: 'Grand Prairie', slug: 'grand-prairie-texas', vendorCount: '120+', businessCount: '160+', description: 'Major transportation and manufacturing hub' },
        { name: 'El Paso', slug: 'el-paso-texas', vendorCount: '180+', businessCount: '250+', description: 'Military presence and international trade hub' },
        { name: 'Corpus Christi', slug: 'corpus-christi-texas', vendorCount: '160+', businessCount: '220+', description: 'Major Gulf Coast port and energy hub' },
        { name: 'Lubbock', slug: 'lubbock-texas', vendorCount: '130+', businessCount: '180+', description: 'University and healthcare center' },
        { name: 'Amarillo', slug: 'amarillo-texas', vendorCount: '110+', businessCount: '150+', description: 'Transportation and energy hub' },
      ]
    },
    {
      name: 'Florida',
      slug: 'florida',
      cities: [
        { name: 'Hialeah', slug: 'hialeah-florida', vendorCount: '140+', businessCount: '180+', description: 'Major retail and healthcare hub' },
        { name: 'Cape Coral', slug: 'cape-coral-florida', vendorCount: '120+', businessCount: '150+', description: 'Fastest-growing city in Southwest Florida' },
        { name: 'Gainesville', slug: 'gainesville-florida', vendorCount: '100+', businessCount: '120+', description: 'University and research hub' },
        { name: 'Clearwater', slug: 'clearwater-florida', vendorCount: '90+', businessCount: '100+', description: 'Gulf Coast tourism destination' },
      ]
    },
    {
      name: 'California',
      slug: 'california',
      cities: [
        { name: 'Fresno', slug: 'fresno-california', vendorCount: '160+', businessCount: '220+', description: 'Agricultural and healthcare hub' },
        { name: 'Long Beach', slug: 'long-beach-california', vendorCount: '200+', businessCount: '280+', description: 'Major port and aerospace hub' },
        { name: 'Bakersfield', slug: 'bakersfield-california', vendorCount: '180+', businessCount: '250+', description: 'Energy and agricultural center' },
        { name: 'Anaheim', slug: 'anaheim-california', vendorCount: '150+', businessCount: '200+', description: 'Tourism and entertainment hub' },
      ]
    },
    {
      name: 'Colorado',
      slug: 'colorado',
      cities: [
        { name: 'Aurora', slug: 'aurora-colorado', vendorCount: '160+', businessCount: '240+', description: 'Growing suburban city with healthcare and aerospace' },
        { name: 'Arvada', slug: 'arvada-colorado', vendorCount: '120+', businessCount: '180+', description: 'Suburban city with retail and healthcare' },
        { name: 'Lakewood', slug: 'lakewood-colorado', vendorCount: '140+', businessCount: '200+', description: 'Major suburban city with diverse economy' },
        { name: 'Fort Collins', slug: 'fort-collins-colorado', vendorCount: '130+', businessCount: '190+', description: 'University town with technology and healthcare' },
      ]
    },
    {
      name: 'Maryland',
      slug: 'maryland',
      cities: [
        { name: 'Silver Spring', slug: 'silver-spring-maryland', vendorCount: '140+', businessCount: '200+', description: 'Major suburban city with government and healthcare' },
        { name: 'Columbia', slug: 'columbia-maryland', vendorCount: '120+', businessCount: '180+', description: 'Planned community with healthcare and education' },
        { name: 'Gaithersburg', slug: 'gaithersburg-maryland', vendorCount: '110+', businessCount: '160+', description: 'Technology and healthcare hub' },
        { name: 'New Haven', slug: 'new-haven-connecticut', vendorCount: '100+', businessCount: '140+', description: 'University town with healthcare and education' },
        { name: 'Bridgeport', slug: 'bridgeport-connecticut', vendorCount: '90+', businessCount: '130+', description: 'Major port city with manufacturing and healthcare' },
        { name: 'Rockville', slug: 'rockville-maryland', vendorCount: '130+', businessCount: '190+', description: 'State capital with government and healthcare' },
        { name: 'Frederick', slug: 'frederick-maryland', vendorCount: '100+', businessCount: '150+', description: 'Historic city with healthcare and manufacturing' },
        { name: 'Annapolis', slug: 'annapolis-maryland', vendorCount: '80+', businessCount: '120+', description: 'State capital with government and tourism' },
      ]
    },
    {
      name: 'Michigan',
      slug: 'michigan',
      cities: [
        { name: 'Saginaw', slug: 'saginaw-michigan', vendorCount: '90+', businessCount: '130+', description: 'Manufacturing and healthcare center' },
        { name: 'Flint', slug: 'flint-michigan', vendorCount: '80+', businessCount: '110+', description: 'Manufacturing and healthcare hub' },
        { name: 'Kalamazoo', slug: 'kalamazoo-michigan', vendorCount: '100+', businessCount: '140+', description: 'University town with healthcare and manufacturing' },
        { name: 'Ann Arbor', slug: 'ann-arbor-michigan', vendorCount: '120+', businessCount: '160+', description: 'University town with healthcare and technology' },
        { name: 'Lansing', slug: 'lansing-michigan', vendorCount: '110+', businessCount: '150+', description: 'State capital with government and education' },
      ]
    },
    {
      name: 'Iowa',
      slug: 'iowa',
      cities: [
        { name: 'Iowa City', slug: 'iowa-city-iowa', vendorCount: '70+', businessCount: '90+', description: 'University and healthcare center' },
        { name: 'Ames', slug: 'ames-iowa', vendorCount: '60+', businessCount: '80+', description: 'University town with research and healthcare' },
        { name: 'Waterloo', slug: 'waterloo-iowa', vendorCount: '70+', businessCount: '90+', description: 'Manufacturing and healthcare hub' },
        { name: 'Sioux City', slug: 'sioux-city-iowa', vendorCount: '80+', businessCount: '100+', description: 'Food processing and manufacturing' },
        { name: 'Cedar Rapids', slug: 'cedar-rapids-iowa', vendorCount: '100+', businessCount: '130+', description: 'Manufacturing and aerospace hub' },
        { name: 'Davenport', slug: 'davenport-iowa', vendorCount: '90+', businessCount: '110+', description: 'Quad Cities manufacturing center' },
        { name: 'Des Moines', slug: 'des-moines-iowa', vendorCount: '140+', businessCount: '180+', description: 'State capital with insurance and healthcare' },
      ]
    },
    {
      name: 'Ohio',
      slug: 'ohio',
      cities: [
        { name: 'Dayton', slug: 'dayton-ohio', vendorCount: '120+', businessCount: '160+', description: 'Manufacturing and aerospace hub' },
        { name: 'Youngstown', slug: 'youngstown-ohio', vendorCount: '90+', businessCount: '120+', description: 'Manufacturing and healthcare center' },
        { name: 'Akron', slug: 'akron-ohio', vendorCount: '110+', businessCount: '150+', description: 'Manufacturing and healthcare hub' },
      ]
    },
    {
      name: 'North Carolina',
      slug: 'north-carolina',
      cities: [
        { name: 'Cary', slug: 'cary-north-carolina', vendorCount: '130+', businessCount: '180+', description: 'Growing suburban city with technology' },
        { name: 'Durham', slug: 'durham-north-carolina', vendorCount: '120+', businessCount: '160+', description: 'University town with healthcare and technology' },
        { name: 'Fayetteville', slug: 'fayetteville-north-carolina', vendorCount: '100+', businessCount: '140+', description: 'Military presence and healthcare' },
        { name: 'Winston Salem', slug: 'winston-salem-north-carolina', vendorCount: '110+', businessCount: '150+', description: 'Healthcare and manufacturing hub' },
      ]
    },
    {
      name: 'Massachusetts',
      slug: 'massachusetts',
      cities: [
        { name: 'Cambridge', slug: 'cambridge-massachusetts', vendorCount: '140+', businessCount: '200+', description: 'University town with technology and healthcare' },
        { name: 'Fall River', slug: 'fall-river-massachusetts', vendorCount: '80+', businessCount: '110+', description: 'Manufacturing and healthcare center' },
      ]
    },
    {
      name: 'Idaho',
      slug: 'idaho',
      cities: [
        { name: 'Twin Falls', slug: 'twin-falls-idaho', vendorCount: '70+', businessCount: '90+', description: 'Agricultural and healthcare hub' },
        { name: 'Coeur d\'Alene', slug: 'coeur-dalene-idaho', vendorCount: '60+', businessCount: '80+', description: 'Tourism and healthcare center' },
        { name: 'Pocatello', slug: 'pocatello-idaho', vendorCount: '80+', businessCount: '100+', description: 'University town with education' },
        { name: 'Idaho Falls', slug: 'idaho-falls-idaho', vendorCount: '90+', businessCount: '110+', description: 'Energy and healthcare hub' },
        { name: 'Nampa', slug: 'nampa-idaho', vendorCount: '100+', businessCount: '130+', description: 'Agricultural and manufacturing center' },
        { name: 'Meridian', slug: 'meridian-idaho', vendorCount: '120+', businessCount: '150+', description: 'Growing suburban city' },
      ]
    },
    {
      name: 'Alabama',
      slug: 'alabama',
      cities: [
        { name: 'Auburn', slug: 'auburn-alabama', vendorCount: '80+', businessCount: '110+', description: 'University town with healthcare and education' },
        { name: 'Dothan', slug: 'dothan-alabama', vendorCount: '70+', businessCount: '90+', description: 'Healthcare and retail hub' },
        { name: 'Mobile', slug: 'mobile-alabama', vendorCount: '100+', businessCount: '130+', description: 'Port city with healthcare and manufacturing' },
        { name: 'Tuscaloosa', slug: 'tuscaloosa-alabama', vendorCount: '90+', businessCount: '120+', description: 'University town with healthcare and education' },
        { name: 'Montgomery', slug: 'montgomery-alabama', vendorCount: '110+', businessCount: '150+', description: 'State capital with government and healthcare' },
      ]
    },
    {
      name: 'Louisiana',
      slug: 'louisiana',
      cities: [
        { name: 'New Orleans', slug: 'new-orleans-louisiana', vendorCount: '150+', businessCount: '200+', description: 'Tourism and healthcare hub' },
      ]
    },
    {
      name: 'Kansas',
      slug: 'kansas',
      cities: [
        { name: 'Wichita', slug: 'wichita-kansas', vendorCount: '120+', businessCount: '160+', description: 'Aerospace and manufacturing hub' },
      ]
    },
    {
      name: 'Oklahoma',
      slug: 'oklahoma',
      cities: [
        { name: 'Tulsa', slug: 'tulsa-oklahoma', vendorCount: '140+', businessCount: '180+', description: 'Energy and healthcare hub' },
        { name: 'Oklahoma City', slug: 'oklahoma-city-oklahoma', vendorCount: '160+', businessCount: '220+', description: 'State capital with energy and healthcare' },
      ]
    },
    {
      name: 'Minnesota',
      slug: 'minnesota',
      cities: [
        { name: 'Rochester', slug: 'rochester-minnesota', vendorCount: '180+', businessCount: '220+', description: 'Healthcare hub with Mayo Clinic' },
        { name: 'Saint Paul', slug: 'saint-paul-minnesota', vendorCount: '280+', businessCount: '340+', description: 'State capital with government and healthcare' },
      ]
    },
    {
      name: 'South Carolina',
      slug: 'south-carolina',
      cities: [
        { name: 'Columbia', slug: 'columbia-south-carolina', vendorCount: '120+', businessCount: '160+', description: 'State capital with government and healthcare' },
      ]
    }
  ]

  // Calculate total counts
  const totalCities = states.reduce((sum, state) => sum + state.cities.length, 0)
  const totalLocations = states.reduce((sum, state) => 
    sum + state.cities.reduce((citySum, city) => 
      citySum + parseInt(city.vendorCount.replace('+', '')), 0
    ), 0
  )
  const totalBusinesses = states.reduce((sum, state) => 
    sum + state.cities.reduce((citySum, city) => 
      citySum + parseInt(city.businessCount.replace('+', '')), 0
    ), 0
  )

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
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{totalLocations.toLocaleString()}+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Total Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{totalCities}+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Major Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{states.length}</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">States</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{totalBusinesses.toLocaleString()}+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
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

        {/* Pricing Table Section */}
        <div className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Vending Leads Pricing
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Choose the perfect plan for your vending machine business growth
              </p>
            </div>
            <PricingTable />
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
      <ZipCodeModalWrapper />
    </>
  )
}
