"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function AustinPage() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Austin Vending Machine Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access verified vending opportunities across Austin's thriving tech and business districts. 
              From Silicon Hills to downtown offices, find your next profitable location.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Verified Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$75K</div>
                <div className="text-gray-600 text-sm">Median Income</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1.2M</div>
                <div className="text-gray-600 text-sm">Workforce</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Neighborhoods</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get Austin Locations
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="bg-white">
        <PricingTable />
      </div>

      {/* Hot Leads Section */}
      <div className="bg-gray-50">
        <HotLeads />
      </div>

      {/* Vending Course Section */}
      <div className="bg-white">
        <VendingCourse />
      </div>

      {/* Austin Overview */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Why Austin for Vending?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Austin's booming tech scene and diverse economy create exceptional vending opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Industry</h3>
              <p className="text-gray-600 text-sm">
                Silicon Hills with major tech companies, startups, and innovation hubs with large workforces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Government & Education</h3>
              <p className="text-gray-600 text-sm">
                State government offices, UT Austin, and educational institutions with consistent staff traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare & Research</h3>
              <p className="text-gray-600 text-sm">
                Medical centers, research facilities, and healthcare companies with 24/7 operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Austin Neighborhoods */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Austin's Top Neighborhoods for Vending
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Target these high-traffic areas for maximum vending machine profitability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Downtown Austin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Government offices, corporate headquarters, and high-rise buildings with high foot traffic.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Government • Corporate • High-traffic
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">West Campus</h3>
              <p className="text-gray-600 text-sm mb-3">
                UT Austin campus, student housing, and educational facilities with consistent traffic.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Education • Students • Campus
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tech companies, shopping centers, and mixed-use development with growing business presence.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Tech • Retail • Mixed-use
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">East Austin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Creative agencies, tech startups, and growing business district with innovative companies.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Creative • Tech • Startups
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">South Austin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Healthcare facilities, retail locations, and diverse business environment.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Healthcare • Retail • Diverse
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">North Austin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tech companies, manufacturing, and industrial businesses with growing sectors.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Tech • Manufacturing • Industrial
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Austin Market Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key data points that make Austin an attractive vending market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2.4M</div>
              <div className="text-gray-600 text-sm">Metro Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$75K</div>
              <div className="text-gray-600 text-sm">Median Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.2M</div>
              <div className="text-gray-600 text-sm">Workforce Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$156B</div>
              <div className="text-gray-600 text-sm">Metro GDP</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about vending machine opportunities in Austin
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What types of locations are available in Austin?
                </h3>
                <p className="text-gray-600 text-sm">
                  Austin offers diverse opportunities including tech companies, government offices, 
                  healthcare facilities, educational institutions, and retail locations across various neighborhoods.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I get started with vending in Austin?
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose your package above, get access to verified locations with business details and contact information, 
                  and start contacting businesses to secure vending machine placements.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Which Austin neighborhoods are best for vending?
                </h3>
                <p className="text-gray-600 text-sm">
                  Downtown Austin, West Campus, Domain, East Austin, South Austin, and North Austin offer 
                  the highest concentration of businesses and consistent foot traffic.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are the locations pre-screened and verified?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, all locations are thoroughly verified and include business details, contact information, 
                  employee counts, operating hours, and placement opportunities.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What support do you provide for Austin vending?
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide comprehensive location data, business insights, market analysis, ongoing support, 
                  and updates on new opportunities to maximize your vending machine profitability.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How profitable is vending in Austin?
                </h3>
                <p className="text-gray-600 text-sm">
                  Austin's booming tech industry, growing workforce, and business density make it 
                  one of the most profitable vending markets in Texas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
      <Footer />
    </>
  )
}
