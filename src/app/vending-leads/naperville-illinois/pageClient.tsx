'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function NapervilleIllinoisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cityData = {
    name: 'Naperville',
    state: 'Illinois',
    population: '150,000+',
    businesses: '22,000+',
    description: 'Major suburban business hub with technology and healthcare',
    majorIndustries: ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Professional Services'],
    topBusinesses: ['Naperville School District 203', 'Edward Hospital', 'Naperville Community Unit School District 204', 'Naperville Park District', 'Technology Companies', 'Financial Services', 'Retail Centers'],
    vendingOpportunities: '160+',
    businessCount: '220+'
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
        <title>Vending Machine Leads in Naperville, Illinois | The Vending Locator</title>
        <meta name="description" content="Find verified vending machine opportunities in Naperville, Illinois. Access 160+ locations with business details, contact information, and placement opportunities." />
        <meta name="keywords" content="vending machine leads, Naperville Illinois, vending opportunities, business locations, vending machine business, Naperville vending" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.thevendinglocator.com/vending-leads/naperville-illinois" />
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
                    <span className="ml-4 text-sm font-medium text-gray-500">Naperville</span>
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
                Vending Machine Leads in Naperville, Illinois
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
                Access {cityData.vendingOpportunities} verified vending opportunities in Naperville's thriving suburban business landscape.
                From technology to healthcare, discover profitable vending machine placements.
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

              </div>
            </div>
          </div>
        </div>

        {/* Business Landscape Section */}
        <div className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Naperville's Thriving Business Landscape
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Naperville is a major suburban business hub with diverse industries offering exceptional vending opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Technology</h3>
                <p className="text-chocolate/70">
                  Software companies, IT services, and technology startups with modern office environments
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Healthcare</h3>
                <p className="text-chocolate/70">
                  Edward Hospital, medical centers, and healthcare facilities throughout the city
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Education</h3>
                <p className="text-chocolate/70">
                  School District 203, School District 204, and higher education institutions
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Finance</h3>
                <p className="text-chocolate/70">
                  Financial services, banking, and investment firms with professional offices
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Retail</h3>
                <p className="text-chocolate/70">
                  Shopping centers, malls, and retail establishments with high customer traffic
                </p>
              </div>

              <div className="text-center p-6 bg-cream rounded-xl">
                <h3 className="text-xl font-bold text-chocolate mb-4">Professional Services</h3>
                <p className="text-chocolate/70">
                  Law firms, consulting companies, and professional service providers
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
                Hot Vending Leads in Naperville
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
                Choose the perfect plan to access Naperville's vending opportunities
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
                Everything you need to know about vending machine opportunities in Naperville
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What types of businesses in Naperville need vending machines?",
                  answer: "Naperville businesses including schools, hospitals, office buildings, shopping centers, technology companies, and professional service firms all need vending machines to serve employees, customers, and visitors."
                },
                {
                  question: "How competitive is the vending market in Naperville?",
                  answer: "Naperville has a competitive but growing vending market. With the city's strong business sector and growing population, there are opportunities for new vending operators to establish profitable routes."
                },
                {
                  question: "What are the best locations for vending machines in Naperville?",
                  answer: "Prime locations include Edward Hospital, School District 203 and 204 facilities, technology company offices, shopping centers like Naperville Mall, and professional office buildings throughout the city."
                },
                {
                  question: "How much can I expect to earn from vending machines in Naperville?",
                  answer: "Vending machine earnings in Naperville typically range from $250-$700 per month per machine, depending on location, product selection, and foot traffic. High-traffic areas can generate significantly more revenue."
                },
                {
                  question: "What permits do I need to operate vending machines in Naperville?",
                  answer: "You'll need a business license from the City of Naperville, an Illinois vending machine license, and potentially health permits for food vending. Some locations may require additional permits."
                },
                {
                  question: "Are there seasonal fluctuations in Naperville's vending business?",
                  answer: "Yes, Naperville experiences some seasonal fluctuations with school schedules and weather patterns. However, healthcare facilities and office buildings provide consistent year-round opportunities."
                },
                {
                  question: "What products sell best in Naperville vending machines?",
                  answer: "In Naperville, beverages, healthy snacks, convenience items, and premium products sell well. Consider the educated workforce and family-oriented community when selecting products."
                },
                {
                  question: "How do I find business owners interested in vending machines?",
                  answer: "Network with facility managers, attend business events, contact school administrators directly, and use our verified leads database to connect with businesses actively seeking vending machine services."
                },
                {
                  question: "What are the startup costs for a vending machine business in Naperville?",
                  answer: "Startup costs typically range from $5,000-$25,000, including machine purchases ($2,000-$8,000 each), initial inventory, permits, insurance, and transportation. Financing options are available."
                },
                {
                  question: "How do I handle maintenance and restocking in Naperville?",
                  answer: "Establish regular routes for restocking and maintenance. Consider school schedules and business hours when planning visits. Many operators hire local staff or use route optimization software."
                },
                {
                  question: "What insurance do I need for vending machines in Naperville?",
                  answer: "You'll need general liability insurance, property insurance for your machines, and potentially workers' compensation if you have employees. Insurance costs typically range from $500-$2,000 annually."
                },
                {
                  question: "How do I compete with established vending companies in Naperville?",
                  answer: "Focus on excellent service, modern payment options, quality products, and building strong relationships with facility managers. Consider specializing in schools or healthcare facilities."
                },
                {
                  question: "What are the growth opportunities in Naperville's vending market?",
                  answer: "Naperville offers growth through expanding to new business districts, adding more machines to successful locations, diversifying product offerings, and potentially expanding to nearby cities like Aurora and Lisle."
                },
                {
                  question: "How do I handle the diverse workforce in Naperville?",
                  answer: "Stock products that appeal to Naperville's diverse and educated workforce. Consider offering both traditional snacks and healthier options, as well as products suitable for different age groups and preferences."
                },
                {
                  question: "What technology should I use for vending machines in Naperville?",
                  answer: "Modern vending machines with cashless payment options, remote monitoring systems, and inventory management software are essential in Naperville's tech-forward business environment. Consider machines with energy-efficient features."
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
              Ready to Start Your Vending Business in Naperville?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto mb-10">
              Get access to {cityData.vendingOpportunities} verified locations with business details,
              contact information, and placement opportunities in Naperville's thriving business community.
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

