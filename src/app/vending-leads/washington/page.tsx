import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WashingtonPage() {
  const cities = [
    { 
      name: 'Seattle', 
      slug: 'seattle-washington', 
      vendorCount: '170+', 
      businessCount: '260+', 
      description: 'Tech companies and aerospace industry',
      highlights: ['Tech Companies', 'Aerospace', 'Healthcare']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-cream">
        {/* Hero Section */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
                Washington Vending Machine Locations
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Access verified vending opportunities across Washington's major cities. 
                From tech hubs to aerospace centers, find your next profitable location.
              </p>
              
              {/* Key Stats */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">170+</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Total Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">1</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Major City</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">$78K</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Avg Income</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">7.7M</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Pricing & Get Started
                </Link>
                <Link
                  href="/vending-leads"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Back to All States <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Washington Cities with Vending Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
              Select a city below to access verified vending machine locations with business details, 
              contact information, and placement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/vending-leads/${city.slug}`}
                className="group block bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-navy/30 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-chocolate group-hover:text-navy transition-colors">
                      {city.name}
                    </h3>
                    <div className="text-navy opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-chocolate/70 text-base mb-6 leading-relaxed">
                    {city.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-chocolate/60">Locations:</span>
                      <span className="font-semibold text-chocolate">{city.vendorCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-chocolate/60">Businesses:</span>
                      <span className="font-semibold text-chocolate">{city.businessCount}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-block bg-navy/10 text-navy text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Ready to Start Your Vending Business in Washington?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get access to verified locations with business details, contact information, 
              and placement opportunities across the Evergreen State.
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
      </div>

      <Footer />
    </>
  )
}
