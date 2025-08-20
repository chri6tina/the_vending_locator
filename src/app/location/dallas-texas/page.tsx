"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function DallasPage() {
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
              Dallas Vending Machine Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access verified vending opportunities across Dallas' diverse business districts. 
              From corporate headquarters to healthcare facilities, find your next profitable location.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">180+</div>
                <div className="text-gray-600 text-sm">Verified Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$67K</div>
                <div className="text-gray-600 text-sm">Median Income</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1.8M</div>
                <div className="text-gray-600 text-sm">Workforce</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-gray-600 text-sm">Neighborhoods</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get Dallas Locations
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

      {/* Dallas Overview */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Why Dallas for Vending?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dallas' strong business environment and diverse industries create exceptional vending opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Corporate Headquarters</h3>
              <p className="text-gray-600 text-sm">
                Major corporations, banks, and financial services with thousands of employees in office buildings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare & Medical</h3>
              <p className="text-gray-600 text-sm">
                Medical centers, hospitals, and healthcare facilities with 24/7 operations and consistent staff traffic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation & Logistics</h3>
              <p className="text-gray-600 text-sm">
                DFW Airport, logistics companies, and transportation hubs with high employee density.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dallas Neighborhoods */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Dallas's Top Neighborhoods for Vending
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Target these high-traffic areas for maximum vending machine profitability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Downtown Dallas</h3>
              <p className="text-gray-600 text-sm mb-3">
                Financial district, corporate headquarters, and high-rise office buildings with high foot traffic.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Financial • Corporate • High-traffic
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Uptown</h3>
              <p className="text-gray-600 text-sm mb-3">
                Upscale businesses, restaurants, and corporate offices with affluent workforce.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Upscale • Corporate • Affluent
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical District</h3>
              <p className="text-gray-600 text-sm mb-3">
                Hospitals, medical centers, and healthcare facilities with 24/7 operations.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Healthcare • Medical • 24/7
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deep Ellum</h3>
              <p className="text-gray-600 text-sm mb-3">
                Creative agencies, tech startups, and entertainment venues with growing business presence.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Creative • Tech • Entertainment
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Oak Lawn</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional services, retail businesses, and diverse commercial environment.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Professional • Retail • Diverse
              </div>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bishop Arts</h3>
              <p className="text-gray-600 text-sm mb-3">
                Boutique retail, restaurants, and creative businesses with trendy atmosphere.
              </p>
              <div className="text-blue-600 text-sm font-medium">
                Boutique • Creative • Trendy
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
              Dallas Market Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key data points that make Dallas an attractive vending market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">7.6M</div>
              <div className="text-gray-600 text-sm">Metro Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$67K</div>
              <div className="text-gray-600 text-sm">Median Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.8M</div>
              <div className="text-gray-600 text-sm">Workforce Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$598B</div>
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
              Common questions about vending machine opportunities in Dallas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What types of locations are available in Dallas?
                </h3>
                <p className="text-gray-600 text-sm">
                  Dallas offers diverse opportunities including corporate headquarters, healthcare facilities, 
                  financial services, retail locations, and educational institutions across various neighborhoods.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I get started with vending in Dallas?
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose your package above, get access to verified locations with business details and contact information, 
                  and start contacting businesses to secure vending machine placements.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Which Dallas neighborhoods are best for vending?
                </h3>
                <p className="text-gray-600 text-sm">
                  Downtown Dallas, Uptown, Medical District, Deep Ellum, Oak Lawn, and Bishop Arts offer 
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
                  What support do you provide for Dallas vending?
                </h3>
                <p className="text-gray-600 text-sm">
                  We provide comprehensive location data, business insights, market analysis, ongoing support, 
                  and updates on new opportunities to maximize your vending machine profitability.
                </p>
              </div>
              
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How profitable is vending in Dallas?
                </h3>
                <p className="text-gray-600 text-sm">
                  Dallas' strong business environment, large workforce, and diverse economy make it 
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
