'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function ColoradoPage() {
  const cities = [
    {
      name: 'Denver',
      slug: 'denver-colorado',
      vendorCount: '160+',
      businessCount: '240+',
      description: 'Technology and outdoor recreation hub',
      highlights: ['Technology', 'Healthcare', 'Outdoor Recreation']
    },
    {
      name: 'Boulder',
      slug: 'boulder-colorado',
      vendorCount: '120+',
      businessCount: '180+',
      description: 'University town with tech startups and outdoor culture',
      highlights: ['Education', 'Technology', 'Outdoor Recreation']
    },
    {
      name: 'Colorado Springs',
      slug: 'colorado-springs-colorado',
      vendorCount: '140+',
      businessCount: '200+',
      description: 'Military presence and growing tech sector',
      highlights: ['Military', 'Technology', 'Healthcare']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
              >
                Colorado Vending Machine Leads
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Access verified vending machine locations across Colorado's thriving technology, 
                healthcare, and outdoor recreation economy. Get business details and placement opportunities.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Colorado Cities with Vending Opportunities
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto leading-relaxed">
                Select a city below to access verified vending machine locations with business details, 
                contact information, and placement opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/vending-leads/${city.slug}`}
                  className="group block bg-warm-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-navy/30 overflow-hidden"
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
                        <span className="text-sm text-chocolate/60">Vending Locations:</span>
                        <span className="font-semibold text-chocolate">{city.vendorCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-chocolate/60">Businesses:</span>
                        <span className="font-semibold text-chocolate">{city.businessCount}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-block bg-navy/10 text-navy text-xs px-3 py-1 rounded-full font-medium"
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
        </div>

        {/* CTA Section */}
        <div className="bg-warm-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Ready to Expand Your Vending Business in Colorado?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get access to verified Colorado locations with business details, contact information, 
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
      </div>

      <Footer />
    </>
  )
}
