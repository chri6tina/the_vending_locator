'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function CheyenneWyomingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const cityData = {
    name: 'Cheyenne',
    state: 'Wyoming',
    population: '65,000+',
    businesses: '8,000+',
    description: 'State capital with government and healthcare',
    majorIndustries: ['Government', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Professional Services', 'Transportation'],
    topBusinesses: ['Wyoming State Capitol', 'Cheyenne Regional Medical Center', 'Laramie County Community College', 'Cheyenne Regional Airport', 'Cheyenne Frontier Days', 'Union Pacific Railroad', 'Wyoming Department of Transportation'],
    vendingOpportunities: '80+',
    businessCount: '100+'
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
        <title>Vending Machine Leads in Cheyenne, Wyoming | The Vending Locator</title>
        <meta name="description" content="Get verified vending machine leads in Cheyenne, Wyoming. Access 80+ pre-qualified locations with detailed business information and placement opportunities." />
        <meta name="keywords" content="vending machine leads, Cheyenne Wyoming, vending locations, business opportunities, government, healthcare, state capital" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thevendinglocator.com/vending-leads/cheyenne-wyoming" />
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
                <Link href="/vending-leads/wyoming" className="hover:text-blue-600">Wyoming</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Cheyenne</span>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vending Machine Leads in Cheyenne, Wyoming
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Access {cityData.vendingOpportunities} pre-qualified vending machine locations in Cheyenne's thriving government, healthcare, and business sectors.
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
                  Cheyenne Business Landscape
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cheyenne is the state capital of Wyoming with a strong government presence, healthcare sector, and diverse business community.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Center</h3>
                  <p className="text-gray-700">Wyoming State Capitol, Department of Transportation, and numerous government offices providing stable employment and consistent foot traffic.</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
                  <p className="text-gray-700">Cheyenne Regional Medical Center and numerous medical offices and clinics providing consistent patient and staff traffic.</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-700">Laramie County Community College and multiple educational institutions with large student populations and consistent traffic.</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transportation</h3>
                  <p className="text-gray-700">Cheyenne Regional Airport, Union Pacific Railroad, and transportation facilities with large employee bases and extended operating hours.</p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h3>
                  <p className="text-gray-700">Industrial facilities and manufacturing operations with large employee bases and consistent traffic patterns.</p>
                </div>
                
                <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail & Tourism</h3>
                  <p className="text-gray-700">Cheyenne Frontier Days, retail centers, and tourism venues creating high foot traffic and visitor populations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hot Leads Section */}
          <section id="hot-leads" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Hot Vending Machine Leads in Cheyenne
                </h2>
                <p className="text-lg text-gray-600">
                  Get immediate access to high-priority vending machine locations in Cheyenne's top business sectors.
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
                  Choose the perfect package for your vending machine business expansion in Cheyenne.
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
                  Everything you need to know about vending machine leads in Cheyenne, Wyoming.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What types of vending machine locations are available in Cheyenne?",
                    answer: "Cheyenne offers diverse vending opportunities including government facilities, healthcare centers, educational institutions, transportation hubs, manufacturing plants, and retail locations. Each location is pre-qualified for optimal vending machine placement."
                  },
                  {
                    question: "How quickly can I get vending machine leads for Cheyenne?",
                    answer: "Our Cheyenne vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry."
                  },
                  {
                    question: "What makes Cheyenne a good market for vending machines?",
                    answer: "Cheyenne features a strong government presence, growing healthcare sector, stable education base, and diverse business community. The city's status as Wyoming's state capital creates ideal conditions for vending machine success."
                  },
                  {
                    question: "Do you provide ongoing support for Cheyenne locations?",
                    answer: "Yes, we offer comprehensive support including location monitoring, performance analytics, and business development assistance to ensure your vending machines thrive in Cheyenne."
                  },
                  {
                    question: "What industries in Cheyenne are best for vending machines?",
                    answer: "Government facilities, healthcare centers, educational institutions, transportation hubs, and manufacturing plants in Cheyenne show the highest potential for vending machine success due to consistent foot traffic and captive audiences."
                  },
                  {
                    question: "How do you verify the quality of Cheyenne vending locations?",
                    answer: "We conduct thorough research on each Cheyenne location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included."
                  },
                  {
                    question: "Can I get customized vending leads for specific areas of Cheyenne?",
                    answer: "Absolutely! We can customize leads for specific neighborhoods, business districts, or industrial areas within Cheyenne based on your preferences and target market requirements."
                  },
                  {
                    question: "What's the typical ROI for vending machines in Cheyenne?",
                    answer: "Vending machines in Cheyenne typically show strong ROI due to the city's business density and consistent traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines."
                  },
                  {
                    question: "Are there any special considerations for Cheyenne's government sector?",
                    answer: "Cheyenne's government sector provides year-round opportunities with stable employment and consistent foot traffic. Government facilities are excellent locations for vending machines due to their predictable operating hours."
                  },
                  {
                    question: "How does Cheyenne's location in Wyoming affect vending opportunities?",
                    answer: "Cheyenne's central location in Wyoming provides access to a large customer base while offering more affordable business costs than larger cities. The city's strategic location creates excellent vending machine opportunities."
                  },
                  {
                    question: "What types of vending machines work best in Cheyenne?",
                    answer: "Beverage machines, snack machines, and healthy food options perform well in Cheyenne's healthcare and education sectors. Government and transportation facilities benefit from beverage and snack machines for employee convenience."
                  },
                  {
                    question: "Do you offer financing options for Cheyenne vending machine placements?",
                    answer: "Yes, we work with financing partners to help you secure the equipment and capital needed to expand your vending machine business in Cheyenne."
                  },
                  {
                    question: "How do you handle seasonal variations in Cheyenne's business sectors?",
                    answer: "We analyze seasonal patterns in Cheyenne's various business sectors and adjust our recommendations accordingly to ensure consistent vending machine performance throughout the year."
                  },
                  {
                    question: "What makes Cheyenne different from other Wyoming cities for vending?",
                    answer: "Cheyenne offers a unique combination of state capital status, strong healthcare sector, transportation hub presence, and strategic Wyoming location that creates exceptional vending machine opportunities not found in other Wyoming cities."
                  },
                  {
                    question: "Can you help with vending machine maintenance in Cheyenne?",
                    answer: "Yes, we partner with local maintenance providers and can connect you with reliable service technicians to keep your Cheyenne vending machines operating at peak performance."
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


