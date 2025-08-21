'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import Link from 'next/link'
import { MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { trackLocationSearch } from '@/lib/conversion-tracking'
import { useState } from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What is The Vending Locator?",
      answer: "The Vending Locator is your comprehensive platform for finding vending machine locations and business opportunities across all 50 states. We provide verified leads, detailed business information, and placement opportunities to help you grow your vending business."
    },
    {
      question: "How do I access vending leads?",
      answer: "Simply choose a pricing plan that fits your needs. Our plans give you access to verified business locations with contact information, business details, and placement opportunities. No long-term contracts required."
    },
    {
      question: "What types of businesses are included?",
      answer: "We cover a wide range of businesses including offices, retail stores, healthcare facilities, educational institutions, manufacturing plants, and more. Each location is verified and includes detailed information about foot traffic and business operations."
    },
    {
      question: "How current is the information?",
      answer: "Our database is updated regularly with current business information, contact details, and placement opportunities. We verify locations and maintain accuracy to ensure you get the most relevant leads."
    },
    {
      question: "Can I get leads for specific cities or states?",
      answer: "Yes! We offer location-specific leads across all 50 states. You can search by state, city, or use our zip code finder to discover opportunities in your target areas."
    },
    {
      question: "What's included in the pricing plans?",
      answer: "Our plans include access to verified business locations, detailed contact information, business insights, placement opportunities, and ongoing support. Higher-tier plans offer more leads and additional features."
    },
    {
      question: "Do you offer support for new vending businesses?",
      answer: "Absolutely! We provide resources, guides, and support to help new vending entrepreneurs get started. Our platform is designed to make it easy to find your first locations and grow your business."
    },
    {
      question: "How do I know if a location is suitable?",
      answer: "Each location includes detailed information about business type, employee count, operating hours, and foot traffic patterns. This helps you assess suitability before making contact."
    }
  ]

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <PricingTable />
      <HotLeads />
      
      {/* Enhanced Locations Section with Working Links */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Find Vending Machine Locations Near You
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed">
                Explore our comprehensive directory of vending machine locations across major cities and states.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {[
                { name: 'Texas', href: '/vending-leads/texas' },
                { name: 'California', href: '/vending-leads/california' },
                { name: 'Florida', href: '/vending-leads/florida' },
                { name: 'New York', href: '/vending-leads/new-york' },
                { name: 'Illinois', href: '/vending-leads/illinois' },
                { name: 'Arizona', href: '/vending-leads/arizona' },
                { name: 'Washington', href: '/vending-leads/washington' },
                { name: 'Pennsylvania', href: '/vending-leads/pennsylvania' }
              ].map((state, index) => (
                <Link
                  key={state.name}
                  href={state.href}
                  className="bg-cream rounded-lg p-4 hover:bg-navy/5 transition-colors cursor-pointer group"
                  onClick={() => trackLocationSearch(state.name, 'state_click')}
                >
                  <div className="text-sm sm:text-base font-medium text-chocolate group-hover:text-navy transition-colors">
                    {state.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="/vending-leads"
                style={{ backgroundColor: 'var(--color-navy)' }}
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-colors min-w-[200px] shadow-lg border-2 hover:opacity-90"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Browse All States
                <MapPinIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/vending-locations"
                style={{ backgroundColor: 'var(--color-coral)' }}
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-colors min-w-[200px] shadow-lg border-2 hover:opacity-90"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                View All Locations
                <MapPinIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive FAQ Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed">
              Everything you need to know about finding vending machine locations and growing your business
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-chocolate">{faq.question}</span>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-chocolate transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-chocolate/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-chocolate/70 mb-6">
              Still have questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
      
      <Testimonials />
      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </main>
  )
}
