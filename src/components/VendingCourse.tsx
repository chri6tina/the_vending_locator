'use client'

import { ArrowRightIcon, CheckCircleIcon, StarIcon, ClockIcon, DocumentTextIcon, UserGroupIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function VendingCourse() {
  return (
    <div className="bg-gradient-to-br from-warm-white to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Guide Section */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-3xl shadow-2xl border border-navy/20 p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-coral rounded-full translate-y-12 -translate-x-12"></div>
            </div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-coral/20 text-coral rounded-full text-sm font-semibold mb-6 border border-coral/30">
                <StarIcon className="w-4 h-4 mr-2" />
                Bestseller Guide
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-6">
                Master Vending Machine Success in 2025
              </h2>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get our comprehensive guide: <span className="font-semibold">"How to Start a Vending Machine Company in 2025"</span> with proven scripts, legal templates, and exclusive supplier discounts.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <DocumentTextIcon className="w-8 h-8 text-coral mx-auto mb-2" />
                  <p className="text-sm font-semibold">Legal Templates</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <UserGroupIcon className="w-8 h-8 text-coral mx-auto mb-2" />
                  <p className="text-sm font-semibold">Sales Scripts</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CurrencyDollarIcon className="w-8 h-8 text-coral mx-auto mb-2" />
                  <p className="text-sm font-semibold">Supplier Discounts</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <a 
                href="https://vendflow.gumroad.com/l/rxbzy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coral hover:bg-coral/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Your Guide Now
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              
              <p className="text-sm text-white/70 mt-4">
                Instant digital download • Lifetime access • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mx-auto max-w-5xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              What's Inside Your Success Guide
            </h3>
            <p className="text-lg text-stone/70">
              Everything you need to launch and scale your vending machine business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <DocumentTextIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Complete Business Setup</h4>
                  <p className="text-stone text-sm">Step-by-step business formation, LLC setup, EIN application, and legal compliance guidance.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-coral/10 p-3 rounded-lg">
                  <UserGroupIcon className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Proven Sales Scripts</h4>
                  <p className="text-stone text-sm">Cold calling scripts, objection handling, and closing techniques that actually work.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <CurrencyDollarIcon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Exclusive Supplier Deals</h4>
                  <p className="text-stone text-sm">Negotiated discounts with vending machine suppliers and product vendors.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-coral/10 p-3 rounded-lg">
                  <SparklesIcon className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Location Strategy</h4>
                  <p className="text-stone text-sm">Advanced techniques for finding, securing, and optimizing vending machine locations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Graph Section */}
        <div className="mx-auto max-w-4xl px-4 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-charcoal mb-4">
              Our Proven Track Record
            </h3>
            <p className="text-lg text-stone/70">
              See how we've helped vendors find locations over the years
            </p>
          </div>

          {/* Enhanced Graph Container */}
          <div className="bg-gradient-to-br from-white to-warm-white rounded-3xl shadow-xl border border-gray-200 p-6 sm:p-8 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="flex items-end justify-between h-48 sm:h-64 mb-6 px-2 sm:px-4 min-w-[600px] sm:min-w-0">
                {/* Enhanced Graph Bars */}
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '32px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2019</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '45px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2020</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '38px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2021</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '52px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2022</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '68px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2023</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg shadow-md" style={{ height: '85px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium">2024</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-coral to-orange-500 rounded-t-lg shadow-lg animate-pulse" style={{ height: '120px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2 font-medium font-bold">2025</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Graph Legend */}
            <div className="text-center">
              <p className="text-sm text-chocolate/70">
                <span className="font-bold text-navy">Exponential growth in locations found</span> for our vending operators
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy via-navy-light to-navy rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-coral rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6">
                Ready to Start Your Vending Empire?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get access to qualified locations, comprehensive business resources, and our proven success guide
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing')
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' })
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
                  className="inline-flex items-center px-8 py-4 bg-coral text-white rounded-xl font-bold text-lg hover:bg-coral/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Pricing Plans
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </button>
                
                <a 
                  href="https://vendflow.gumroad.com/l/rxbzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 backdrop-blur-sm"
                >
                  Get Success Guide
                  <StarIcon className="h-5 w-5 ml-2" />
                </a>
              </div>
              
              <p className="text-sm text-white/70 mt-6">
                Join 3,000+ successful vending operators nationwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
