'use client'

import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'

export default function VendingCourse({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bg-gradient-to-br from-warm-white to-white ${compact ? 'py-8 sm:py-10' : 'py-12 sm:py-16'}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Guide Section - Clean but Engaging */}
        <div className={`text-center ${compact ? 'mb-6' : 'mb-10'}`}>
          <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 ${compact ? 'p-6 sm:p-8' : 'p-8 sm:p-12'} relative overflow-hidden`}>
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 rounded-full -translate-y-12 translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Subtle badge */}
              <div className={`inline-flex items-center px-3 py-1.5 bg-navy/10 text-navy rounded-full text-sm font-medium ${compact ? 'mb-4' : 'mb-6'} border border-navy/20`}>
                <StarIcon className="w-4 h-4 mr-2" />
                Bestseller Guide
              </div>
              
              <h2 className={`text-2xl sm:text-3xl font-playfair font-bold text-charcoal ${compact ? 'mb-4' : 'mb-6'}`}>
                Master Vending Machine Success in 2026
              </h2>
              
              <p className={`text-lg text-stone ${compact ? 'mb-6' : 'mb-8'} leading-relaxed max-w-2xl mx-auto`}>
                Get our comprehensive guide: <span className="font-semibold">"How to Start a Vending Machine Company in 2026"</span> with scripts, legal templates, and supplier discounts.
              </p>
              
              {/* Enhanced CTA Button */}
              <a 
                href="https://vendflow.gumroad.com/l/rxbzy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 mx-auto shadow-md hover:shadow-lg"
              >
                Get Your Guide Now
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              
              <p className={`text-sm text-stone/60 ${compact ? 'mt-3' : 'mt-4'}`}>
                Instant digital download • Lifetime access • 30-day guarantee
              </p>
            </div>
          </div>
        </div>

        

        {/* Enhanced Final CTA */}
        <div className="text-center">
          <div className={`bg-gradient-to-r from-navy to-navy-light rounded-2xl ${compact ? 'p-6' : 'p-8'} text-white shadow-lg`}>
            <h3 className={`text-2xl sm:text-3xl font-playfair font-bold ${compact ? 'mb-3' : 'mb-4'}`}>
              Ready to Start Your Vending Business?
            </h3>
            <p className={`text-lg ${compact ? 'mb-5' : 'mb-6'} opacity-90`}>
              Get access to qualified locations and comprehensive business resources
            </p>
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center px-8 py-3 bg-white text-navy rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              View Pricing Plans
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
