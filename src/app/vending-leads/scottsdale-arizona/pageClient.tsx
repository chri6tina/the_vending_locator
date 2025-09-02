'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import SmartBreadcrumbs from '@/components/SmartBreadcrumbs'

const cityData = {
  name: 'Scottsdale',
  state: 'Arizona',
  population: '241,361',
  description: 'Scottsdale, Arizona is an affluent city in the Phoenix metropolitan area known for its luxury resorts, high-end shopping, and vibrant arts scene. With a strong economy driven by tourism, healthcare, and technology, Scottsdale offers excellent vending opportunities in hospitality, retail, healthcare, and corporate sectors.',
  keyIndustries: ['Tourism & Hospitality', 'Healthcare', 'Technology', 'Retail', 'Real Estate', 'Financial Services'],
  majorEmployers: ['HonorHealth', 'Scottsdale Healthcare', 'City of Scottsdale', 'Scottsdale Unified School District', 'Mayo Clinic', 'Banner Health'],
  vendingOpportunities: [
    'Luxury resorts and hotels',
    'High-end shopping centers and malls',
    'Healthcare facilities and medical centers',
    'Technology companies and business parks',
    'Corporate offices and financial institutions',
    'Entertainment venues and cultural centers',
    'Golf courses and recreational facilities'
  ],
  demographics: {
    medianAge: 45.8,
    medianHouseholdIncome: '$89,234',
    educationLevel: 'Bachelor\'s degree or higher',
    employmentRate: '68.2%'
  },
  transportation: {
    majorHighways: ['SR-101', 'SR-202', 'SR-51', 'I-10'],
    publicTransit: 'Valley Metro',
    airports: 'Phoenix Sky Harbor International Airport'
  }
}

const userNames = [
  'Michael', 'Sarah', 'David', 'Jennifer', 'Robert', 'Lisa', 'James', 'Michelle',
  'William', 'Ashley', 'Christopher', 'Amanda', 'Daniel', 'Stephanie', 'Matthew', 'Nicole'
]

export default function ScottsdaleArizonaPageClient() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newCount = prev + change
        return Math.max(18, Math.min(35, newCount))
      })
    }, 3000)

    const timer = setTimeout(() => setIsLoading(false), 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ZipCodeModalWrapper />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <SmartBreadcrumbs />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vending Machine Leads in {cityData.name}, {cityData.state}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Connect with {cityData.population} potential customers in {cityData.name}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="font-semibold">{activeUsers}</span> active users
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="font-semibold">{cityData.population}</span> population
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <span className="font-semibold">24/7</span> lead updates
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* City Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why {cityData.name}, {cityData.state}?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {cityData.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Industries</h3>
                  <ul className="space-y-2">
                    {cityData.keyIndustries.map((industry, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major Employers</h3>
                  <ul className="space-y-2">
                    {cityData.majorEmployers.map((employer, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        {employer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vending Opportunities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {cityData.vendingOpportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Demographics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                {cityData.name} Demographics
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.demographics.medianAge}</div>
                  <div className="text-gray-600">Median Age</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">{cityData.demographics.medianHouseholdIncome}</div>
                  <div className="text-gray-600">Median Income</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{cityData.demographics.educationLevel}</div>
                  <div className="text-gray-600">Education Level</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{cityData.demographics.employmentRate}</div>
                  <div className="text-gray-600">Employment Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transportation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Transportation & Access
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Major Highways</h3>
                  <ul className="space-y-2">
                    {cityData.transportation.majorHighways.map((highway, index) => (
                      <li key={index} className="text-gray-700">{highway}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Public Transit</h3>
                  <p className="text-gray-700">{cityData.transportation.publicTransit}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Airports</h3>
                  <p className="text-gray-700">{cityData.transportation.airports}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Expand Your Vending Business in {cityData.name}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join {activeUsers} other vending operators who are already finding success in {cityData.name}, {cityData.state}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Verified Leads</h3>
                  <p className="opacity-90">All leads are verified and updated daily</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
                  <p className="opacity-90">Targeted specifically for {cityData.name} area</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
                  <p className="opacity-90">Access your leads anytime, anywhere</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <PricingTable />

        {/* Hot Leads */}
        <HotLeads />

        {/* Vending Course */}
        <VendingCourse />

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What types of vending opportunities are available in {cityData.name}?
                  </h3>
                  <p className="text-gray-700">
                    {cityData.name} offers premium vending opportunities including luxury resorts, high-end shopping centers, 
                    healthcare facilities, technology companies, and corporate offices. The city's affluent demographics 
                    and strong tourism industry provide excellent potential for high-value vending machine placement.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do I get started with vending in {cityData.name}?
                  </h3>
                  <p className="text-gray-700">
                    Start by researching local businesses and institutions in {cityData.name}. 
                    Focus on areas with high foot traffic like luxury resorts, shopping centers, and business parks. 
                    Our vending leads service can help you identify the best opportunities in the area.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    What are the key factors for success in {cityData.name}?
                  </h3>
                  <p className="text-gray-700">
                    Success in {cityData.name} requires understanding the local market, building relationships with 
                    business owners, and providing reliable service. The city's affluent demographics and strong 
                    tourism and healthcare sectors offer stable, high-value vending opportunities for operators who deliver quality service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
