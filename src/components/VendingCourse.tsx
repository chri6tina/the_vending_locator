'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function VendingCourse() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
              Looking for a How-to-Start Guide?
            </h2>
            <p className="text-base sm:text-lg text-stone mb-8 leading-relaxed">
              Get our comprehensive guide: "How to Start a Vending Machine Company in 2025" with scripts, legal templates, and supplier discounts.
            </p>
            <a 
              href="https://vendflow.gumroad.com/l/rxbzy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
            >
              Get the Guide
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Success Graph Section */}
        <div className="mt-16 mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
              Our Success Story
            </h3>
            <p className="text-lg text-chocolate/70">
              See how we've helped vendors find locations over the years
            </p>
          </div>

          {/* Graph Container - Mobile Responsive */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="flex items-end justify-between h-48 sm:h-64 mb-6 px-2 sm:px-4 min-w-[600px] sm:min-w-0">
                {/* Graph Bars - More Realistic Data */}
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '32px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2019</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '45px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2020</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '38px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2021</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '52px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2022</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '68px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2023</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-navy to-navy-light rounded-t-lg" style={{ height: '85px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2024</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 sm:w-8 bg-gradient-to-t from-coral to-orange-500 rounded-t-lg" style={{ height: '120px' }}></div>
                  <span className="text-xs text-chocolate/70 mt-2">2025</span>
                </div>
              </div>
            </div>
            
            {/* Graph Legend */}
            <div className="text-center">
              <p className="text-sm text-chocolate/70">
                <span className="font-semibold text-navy">Growth in locations found</span> for our vending operators
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
              What Our Users Say
            </h3>
            <p className="text-lg text-chocolate/70">
              Real feedback from vending operators who found success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate">Mike R.</h4>
                  <p className="text-sm text-chocolate/70">Texas</p>
                </div>
              </div>
              <p className="text-stone leading-relaxed">
                "Found my best location in 3 days! The research was spot-on and the contact details were accurate. 
                Closed the deal within a week."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-chocolate">Sarah L.</h4>
                  <p className="text-sm text-chocolate/70">Florida</p>
                </div>
              </div>
              <p className="text-stone leading-relaxed">
                "The quality of leads is incredible. Each location was properly vetted and ready for placement. 
                Saved me weeks of research time."
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4">
              Ready to Start Your Vending Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get access to qualified locations and comprehensive business resources
            </p>
            <button
              onClick={() => {
                // Scroll to pricing section if it exists, otherwise scroll to top
                const pricingSection = document.getElementById('pricing')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center px-8 py-3 bg-white text-navy rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
