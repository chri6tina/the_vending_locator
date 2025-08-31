'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function RockfordIllinoisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cityData = {
    name: 'Rockford',
    state: 'Illinois',
    population: '150,000+',
    businesses: '25,000+',
    description: 'Third largest city in Illinois with manufacturing and healthcare hub',
    majorIndustries: ['Manufacturing', 'Healthcare', 'Aerospace', 'Automotive', 'Food Processing', 'Logistics', 'Education'],
    topBusinesses: ['Rockford Health System', 'SwedishAmerican Hospital', 'Collins Aerospace', 'UTC Aerospace Systems', 'Chrysler Assembly Plant', 'Rockford Public Schools', 'Rock Valley College'],
    vendingOpportunities: '180+',
    businessCount: '250+'
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToPricing = () => {
    document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Vending Machine Leads in Rockford, Illinois | The Vending Locator</title>
        <meta name="description" content="Find verified vending machine opportunities in Rockford, Illinois. Access 180+ locations with business details, contact information, and placement opportunities." />
        <meta name="keywords" content="vending machine leads, Rockford Illinois, vending opportunities, business locations, vending machine business, Rockford vending" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thevendinglocator.com/vending-leads/rockford-illinois" />
      </Head>

      <Header />

      <div className="min-h-screen bg-cream">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/" className="text-gray-400 hover:text-gray-500">
                      <svg className="flex-shrink-0 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <Link href="/vending-leads" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Vending Leads
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <Link href="/vending-leads/illinois" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Illinois
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-4 text-sm font-medium text-gray-500">Rockford</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section - Matching Home Page Design */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
                Vending Machine Leads in Rockford, Illinois
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Access {cityData.vendingOpportunities} verified vending opportunities in Rockford's thriving manufacturing and healthcare landscape.
                From aerospace to automotive, discover profitable vending machine placements.
              </p>

              {/* Key Stats - Matching Home Page Style */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{cityData.vendingOpportunities}</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Vending Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{cityData.businessCount}</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{cityData.population}</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bronze">{cityData.businesses}</div>
                  <div className="text-xs sm:text-sm text-stone leading-tight">Total Businesses</div>
                </div>
              </div>

              {/* CTA Buttons - Matching Home Page Style */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
                <button
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Get Started
                </button>
                <Link
                  href="#hot-leads"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  View Hot Leads <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Business Landscape Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Rockford's Thriving Business Landscape
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Rockford is a major manufacturing and healthcare hub with diverse industries offering exceptional vending opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Manufacturing</h3>
                <p className="text-chocolate/70">
                  Aerospace, automotive, and machinery manufacturing with large employee bases
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Healthcare</h3>
                <p className="text-chocolate/70">
                  Major hospital systems, medical centers, and healthcare facilities
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Aerospace</h3>
                <p className="text-chocolate/70">
                  Collins Aerospace and UTC Aerospace Systems with high-tech operations
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Automotive</h3>
                <p className="text-chocolate/70">
                  Chrysler assembly plant and automotive supply chain companies
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Education</h3>
                <p className="text-chocolate/70">
                  Rock Valley College, Rockford Public Schools, and private institutions
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Logistics</h3>
                <p className="text-chocolate/70">
                  Transportation and distribution centers serving the Midwest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <div id="hot-leads" className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Hot Vending Leads in Rockford
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Premium vending opportunities with high-traffic locations and proven profitability
              </p>
            </div>
            <HotLeads />
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing-section" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Vending Leads Pricing
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Choose the perfect plan to access Rockford's vending opportunities
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-cream py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70">
                Everything you need to know about vending machine opportunities in Rockford
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What types of businesses in Rockford need vending machines?",
                  answer: "Rockford businesses including manufacturing plants, hospitals, schools, office buildings, shopping centers, and logistics centers all need vending machines to serve employees, customers, and visitors."
                },
                {
                  question: "How competitive is the vending market in Rockford?",
                  answer: "Rockford has a competitive but growing vending market. With the city's strong manufacturing sector and healthcare industry, there are opportunities for new vending operators to establish profitable routes."
                },
                {
                  question: "What are the best locations for vending machines in Rockford?",
                  answer: "Prime locations include Rockford Health System facilities, SwedishAmerican Hospital, Collins Aerospace, UTC Aerospace Systems, Chrysler Assembly Plant, Rock Valley College, and major manufacturing facilities."
                },
                {
                  question: "How much can I expect to earn from vending machines in Rockford?",
                  answer: "Vending machine earnings in Rockford typically range from $200-$600 per month per machine, depending on location, product selection, and foot traffic. Manufacturing facilities can generate significantly more revenue."
                },
                {
                  question: "What permits do I need to operate vending machines in Rockford?",
                  answer: "You'll need a business license from the City of Rockford, an Illinois vending machine license, and potentially health permits for food vending. Some locations may require additional permits."
                },
                {
                  question: "Are there seasonal fluctuations in Rockford's vending business?",
                  answer: "Yes, Rockford experiences seasonal fluctuations with manufacturing schedules and weather patterns. However, healthcare facilities and educational institutions provide consistent year-round opportunities."
                },
                {
                  question: "What products sell best in Rockford vending machines?",
                  answer: "In Rockford, beverages, snacks, healthy options, and convenience items sell well. Consider the manufacturing workforce and healthcare staff preferences when selecting products."
                },
                {
                  question: "How do I find business owners interested in vending machines?",
                  answer: "Network with facility managers, attend manufacturing and healthcare events, contact plant managers directly, and use our verified leads database to connect with businesses actively seeking vending machine services."
                },
                {
                  question: "What are the startup costs for a vending machine business in Rockford?",
                  answer: "Startup costs typically range from $5,000-$25,000, including machine purchases ($2,000-$8,000 each), initial inventory, permits, insurance, and transportation. Financing options are available."
                },
                {
                  question: "How do I handle maintenance and restocking in Rockford?",
                  answer: "Establish regular routes for restocking and maintenance. Consider manufacturing shift schedules and plan visits during appropriate times. Many operators hire local staff or use route optimization software."
                },
                {
                  question: "What insurance do I need for vending machines in Rockford?",
                  answer: "You'll need general liability insurance, property insurance for your machines, and potentially workers' compensation if you have employees. Insurance costs typically range from $500-$2,000 annually."
                },
                {
                  question: "How do I compete with established vending companies in Rockford?",
                  answer: "Focus on excellent service, modern payment options, quality products, and building strong relationships with facility managers. Consider specializing in manufacturing or healthcare facilities."
                },
                {
                  question: "What are the growth opportunities in Rockford's vending market?",
                  answer: "Rockford offers growth through expanding to new manufacturing facilities, adding more machines to successful locations, diversifying product offerings, and potentially expanding to nearby cities like Belvidere and Freeport."
                },
                {
                  question: "How do I handle the diverse workforce in Rockford?",
                  answer: "Stock products that appeal to Rockford's diverse manufacturing and healthcare workforce. Consider offering both traditional snacks and healthier options, as well as products suitable for different shift schedules."
                },
                {
                  question: "What technology should I use for vending machines in Rockford?",
                  answer: "Modern vending machines with cashless payment options, remote monitoring systems, and inventory management software are essential in Rockford's industrial environment. Consider machines with energy-efficient features."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-chocolate">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-navy transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-chocolate/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Ready to Start Your Vending Business in Rockford?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto mb-10">
              Get access to {cityData.vendingOpportunities} verified locations with business details,
              contact information, and placement opportunities in Rockford's thriving business community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToPricing}
                className="inline-block bg-navy hover:bg-navy-light text-white px-10 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                View Pricing & Get Started
              </button>
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
      <ZipCodeModalWrapper />
    </>
  )
}

