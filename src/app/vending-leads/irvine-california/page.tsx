'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function IrvineCaliforniaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cityData = {
    name: 'Irvine',
    state: 'California',
    population: '280,000+',
    businesses: '35,000+',
    description: 'Technology and education hub in Orange County',
    majorIndustries: ['Technology', 'Education', 'Healthcare', 'Biotechnology', 'Finance', 'Professional Services', 'Manufacturing'],
    topBusinesses: ['University of California Irvine', 'Irvine Valley College', 'Irvine Company', 'Broadcom', 'Western Digital', 'Edwards Lifesciences', 'Allergan'],
    vendingOpportunities: '140+',
    businessCount: '200+'
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
        <title>Vending Machine Leads in Irvine, California | The Vending Locator</title>
        <meta name="description" content="Get verified vending machine leads in Irvine, California. Access 140+ pre-qualified locations with detailed business information and placement opportunities." />
        <meta name="keywords" content="vending machine leads, Irvine California, vending locations, business opportunities, technology, education, biotechnology" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thevendinglocator.com/vending-leads/irvine-california" />
      </Head>

      <ZipCodeModalWrapper>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header />
          
          {/* Breadcrumbs */}
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 py-3 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <span>/</span>
                <Link href="/vending-leads" className="hover:text-blue-600">Vending Leads</Link>
                <span>/</span>
                <Link href="/vending-leads/california" className="hover:text-blue-600">California</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Irvine</span>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vending Machine Leads in Irvine, California
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Access {cityData.vendingOpportunities} pre-qualified vending machine locations in Irvine's thriving technology, education, and biotechnology sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToPricing}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </button>
                <Link
                  href="#hot-leads"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Hot Leads
                </Link>
              </div>
            </div>
          </section>

          {/* Business Landscape Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Irvine Business Landscape
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Irvine is a major technology and education hub in Orange County with a strong biotechnology sector and diverse business community.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Hub</h3>
                  <p className="text-gray-700">Broadcom, Western Digital, and numerous technology companies with high employee counts and extended operating hours.</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-700">University of California Irvine, Irvine Valley College, and multiple educational institutions with large student populations.</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare & Biotech</h3>
                  <p className="text-gray-700">Edwards Lifesciences, Allergan, and numerous medical offices and biotechnology companies.</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Finance</h3>
                  <p className="text-gray-700">Financial services companies and investment firms with high employee counts and consistent traffic patterns.</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Services</h3>
                  <p className="text-gray-700">Growing professional services sector with law firms, accounting offices, and consulting companies.</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h3>
                  <p className="text-gray-700">Industrial facilities and manufacturing operations with large employee bases and extended operating hours.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hot Leads Section */}
          <section id="hot-leads" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Hot Vending Machine Leads in Irvine
                </h2>
                <p className="text-lg text-gray-600">
                  Get immediate access to high-priority vending machine locations in Irvine's top business sectors.
                </p>
              </div>
              <HotLeads />
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing-section" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Vending Machine Lead Packages
                </h2>
                <p className="text-lg text-gray-600">
                  Choose the perfect package for your vending machine business expansion in Irvine.
                </p>
              </div>
              <PricingTable />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about vending machine leads in Irvine, California.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What types of vending machine locations are available in Irvine?",
                    answer: "Irvine offers diverse vending opportunities including technology companies, educational institutions, healthcare facilities, biotechnology firms, manufacturing plants, and office buildings. Each location is pre-qualified for optimal vending machine placement."
                  },
                  {
                    question: "How quickly can I get vending machine leads for Irvine?",
                    answer: "Our Irvine vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry."
                  },
                  {
                    question: "What makes Irvine a good market for vending machines?",
                    answer: "Irvine features a strong technology sector, growing healthcare and biotechnology industries, stable education base, and diverse business community. The city's status as a technology hub creates ideal conditions for vending machine success."
                  },
                  {
                    question: "Do you provide ongoing support for Irvine locations?",
                    answer: "Yes, we offer comprehensive support including location monitoring, performance analytics, and business development assistance to ensure your vending machines thrive in Irvine."
                  },
                  {
                    question: "What industries in Irvine are best for vending machines?",
                    answer: "Technology companies, educational institutions, healthcare facilities, biotechnology firms, and office buildings in Irvine show the highest potential for vending machine success due to consistent foot traffic and captive audiences."
                  },
                  {
                    question: "How do you verify the quality of Irvine vending locations?",
                    answer: "We conduct thorough research on each Irvine location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included."
                  },
                  {
                    question: "Can I get customized vending leads for specific areas of Irvine?",
                    answer: "Absolutely! We can customize leads for specific neighborhoods, business districts, or industrial areas within Irvine based on your preferences and target market requirements."
                  },
                  {
                    question: "What's the typical ROI for vending machines in Irvine?",
                    answer: "Vending machines in Irvine typically show strong ROI due to the city's business density and consistent traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines."
                  },
                  {
                    question: "Are there any special considerations for Irvine's technology sector?",
                    answer: "Irvine's technology sector provides year-round opportunities with high employee counts and extended operating hours. Technology companies are excellent locations for vending machines due to their predictable traffic patterns."
                  },
                  {
                    question: "How does Irvine's location in Orange County affect vending opportunities?",
                    answer: "Irvine's central location in Orange County provides access to a large customer base while offering more affordable business costs than coastal cities. The city's strategic location creates excellent vending machine opportunities."
                  },
                  {
                    question: "What types of vending machines work best in Irvine?",
                    answer: "Beverage machines, snack machines, and healthy food options perform well in Irvine's healthcare and education sectors. Technology companies benefit from beverage and snack machines for employee convenience."
                  },
                  {
                    question: "Do you offer financing options for Irvine vending machine placements?",
                    answer: "Yes, we work with financing partners to help you secure the equipment and capital needed to expand your vending machine business in Irvine."
                  },
                  {
                    question: "How do you handle seasonal variations in Irvine's business sectors?",
                    answer: "We analyze seasonal patterns in Irvine's various business sectors and adjust our recommendations accordingly to ensure consistent vending machine performance throughout the year."
                  },
                  {
                    question: "What makes Irvine different from other California cities for vending?",
                    answer: "Irvine offers a unique combination of technology hub status, strong healthcare and biotechnology sectors, education presence, and strategic Orange County location that creates exceptional vending machine opportunities not found in other California cities."
                  },
                  {
                    question: "Can you help with vending machine maintenance in Irvine?",
                    answer: "Yes, we partner with local maintenance providers and can connect you with reliable service technicians to keep your Irvine vending machines operating at peak performance."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0">
                        {openFaq === index ? (
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </ZipCodeModalWrapper>
    </>
  )
}


