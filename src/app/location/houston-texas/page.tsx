"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function HoustonPage() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Houston Vending Machine Locations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access verified vending opportunities across Houston's diverse business districts. 
              From energy companies to healthcare facilities, find your next profitable location.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600 text-sm">Verified Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$65K</div>
                <div className="text-gray-600 text-sm">Median Income</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">2.1M</div>
                <div className="text-gray-600 text-sm">Workforce</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Neighborhoods</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToPricing}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
             aria-label="Get Houston Locations">
              Get Houston Locations
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

      {/* Houston Overview */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Why Houston for Vending?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Houston's energy industry and diverse economy create exceptional vending opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy Industry</h3>
              <p className="text-gray-600 text-sm">
                Major oil and gas companies, energy headquarters, and industrial facilities with large workforces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare & Medical</h3>
              <p className="text-gray-600 text-sm">
                Texas Medical Center, hospitals, and healthcare facilities with 24/7 operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Port & Logistics</h3>
              <p className="text-gray-600 text-sm">
                Port of Houston, logistics companies, and transportation hubs with high employee density.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Data */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Houston Market Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key data points that make Houston an attractive vending market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">7.1M</div>
              <div className="text-gray-600 text-sm">Metro Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$65K</div>
              <div className="text-gray-600 text-sm">Median Income</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2.1M</div>
              <div className="text-gray-600 text-sm">Workforce Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$537B</div>
              <div className="text-gray-600 text-sm">Metro GDP</div>
            </div>
          </div>
        </div>
      </div>

      <ZipCodeModalWrapper />
      <Footer />
    </>
  )
}
