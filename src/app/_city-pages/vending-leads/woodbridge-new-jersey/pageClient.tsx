'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import CityPageSEO from '@/components/CityPageSEO'

export default function WoodbridgeNewJerseyVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'Woodbridge';const stateDisplayName = 'New Jersey';
  
  // City-specific data
  const cityData = {
    'name': 'Woodbridge',
    'state': 'New Jersey',
    'population': '100K-110K',
    'businesses': '2K-3K',
    'industries': '5-8',
    'verifiedLocations': '50-100',
    'rating': '4.5/5',
    'description': 'Major suburban center in New Jersey'
  };
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(20)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Woodbridge', 'Sarah in Downtown', 'David in Woodbridge', 'Lisa in Woodbridge',
    'Tom in Woodbridge', 'Jennifer in Woodbridge', 'Robert in Woodbridge', 'Amanda in Woodbridge',
    'Chris in Woodbridge', 'Maria in Woodbridge', 'James in Woodbridge', 'Emily in Woodbridge'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(16, Math.min(28, newValue))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // User name rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        let nextIndex
        do {
          nextIndex = Math.floor(Math.random() * userNames.length)
        } while (usedNames.has(nextIndex) && usedNames.size < userNames.length)
        
        if (usedNames.size >= userNames.length) {
          setUsedNames(new Set())
        }
        
        setUsedNames(prev => new Set([...prev, nextIndex]))
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Vending Machine Leads in{' '}
              <span className="text-blue-600">{cityDisplayName}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find verified vending machine locations and qualified businesses in {cityDisplayName}, {stateDisplayName}. 
              Get access to our database of {cityData.verifiedLocations}+ verified locations ready for vending machine placement.
            </motion.p>

            {/* Active Users Counter */}
            <motion.div 
              className="flex items-center justify-center space-x-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {userNames[currentUserIndex]?.charAt(0) || 'U'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">{activeUsers}</span> people viewing {cityDisplayName} leads right now
              </div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Verified Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <StarIcon className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">{cityData.rating} Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">Secure Access</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link 
                href="#pricing" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get {cityDisplayName} Leads</span>
                <SparklesIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="#business-landscape" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                View Business Landscape
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.population}</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.businesses}</div>
              <div className="text-gray-600">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.industries}</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{cityData.verifiedLocations}</div>
              <div className="text-gray-600">Verified Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* Business Landscape */}
      <section id="business-landscape" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {cityDisplayName} Business Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the thriving business environment in {cityDisplayName}, {stateDisplayName} and find the perfect locations for your vending machines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Corporate Offices</h3>
              </div>
              <p className="text-gray-600">
                Modern office buildings and business parks in {cityDisplayName} provide excellent opportunities for corporate vending machine placement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <ShoppingBagIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Shopping Centers</h3>
              </div>
              <p className="text-gray-600">
                Major shopping centers and retail districts throughout {cityDisplayName} offer high-traffic vending machine opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Educational Facilities</h3>
              </div>
              <p className="text-gray-600">
                Schools, colleges, and training centers in {cityDisplayName} provide consistent foot traffic and reliable vending machine revenue.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <HeartIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Healthcare Centers</h3>
              </div>
              <p className="text-gray-600">
                Medical facilities, clinics, and healthcare centers in {cityDisplayName} offer steady vending machine traffic throughout the day.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BuildingLibraryIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Government Facilities</h3>
              </div>
              <p className="text-gray-600">
                Municipal offices and government buildings in {cityDisplayName} provide stable, long-term vending machine partnerships.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TruckIcon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Industrial Areas</h3>
              </div>
              <p className="text-gray-600">
                Industrial parks and manufacturing facilities in {cityDisplayName} offer opportunities for employee-focused vending machine placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Leads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HotLeads />
        </div>
      </section>

      {/* Vending Course */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VendingCourse />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - {cityDisplayName} Vending Leads
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about vending machine opportunities in {cityDisplayName}, {stateDisplayName}.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What types of businesses in {cityDisplayName} are best for vending machines?
              </h3>
              <p className="text-gray-600">
                {cityDisplayName} offers excellent opportunities in corporate offices, shopping centers, schools, healthcare facilities, and government buildings. The city's suburban location provides diverse business environments for vending machine placement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How many verified vending locations are available in {cityDisplayName}?
              </h3>
              <p className="text-gray-600">
                We currently have {cityData.verifiedLocations}+ verified locations in {cityDisplayName} that are ready for vending machine placement. These locations have been pre-qualified and are actively seeking vending machine partnerships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is the average revenue potential for vending machines in {cityDisplayName}?
              </h3>
              <p className="text-gray-600">
                Vending machine revenue in {cityDisplayName} varies by location type, but our verified locations typically generate $120-500+ per month per machine. Shopping centers and corporate offices tend to perform best due to consistent foot traffic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Are there any specific regulations for vending machines in {cityDisplayName}?
              </h3>
              <p className="text-gray-600">
                {cityDisplayName} follows New Jersey state regulations for vending machines. Our leads include businesses that are already compliant with local requirements, making the setup process smoother for vending machine operators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can I start placing vending machines in {cityDisplayName}?
              </h3>
              <p className="text-gray-600">
                With our verified leads, you can typically start placing vending machines in {cityDisplayName} within 1-2 weeks of purchasing our leads. The businesses are pre-qualified and ready to partner with vending machine operators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What support do you provide for vending machine operators in {cityDisplayName}?
              </h3>
              <p className="text-gray-600">
                We provide comprehensive support including location verification, business contact information, placement guidelines, and ongoing assistance to help you succeed in the {cityDisplayName} vending machine market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Structured Data */}


      <CityPageSEO


        city="Woodbridge"


        state="New Jersey"


        stateAbbr="JERSEY"


        description="Get verified vending machine leads and locations in Woodbridge, New Jersey. Find qualified businesses for vending machine placement."
        faqs={[
          {
            question: "Corporate Offices",
            answer: "Modern office buildings and business parks in {cityDisplayName} provide excellent opportunities for corporate vending machine placement."
          },
          {
            question: "Shopping Centers",
            answer: "Major shopping centers and retail districts throughout {cityDisplayName} offer high-traffic vending machine opportunities."
          },
          {
            question: "Educational Facilities",
            answer: "Schools, colleges, and training centers in {cityDisplayName} provide consistent foot traffic and reliable vending machine revenue."
          },
          {
            question: "Healthcare Centers",
            answer: "Medical facilities, clinics, and healthcare centers in {cityDisplayName} offer steady vending machine traffic throughout the day."
          },
          {
            question: "Government Facilities",
            answer: "Municipal offices and government buildings in {cityDisplayName} provide stable, long-term vending machine partnerships."
          },
          {
            question: "Industrial Areas",
            answer: "Industrial parks and manufacturing facilities in {cityDisplayName} offer opportunities for employee-focused vending machine placement."
          },
          {
            question: "What types of businesses in {cityDisplayName} are best for vending machines?",
            answer: "{cityDisplayName} offers excellent opportunities in corporate offices, shopping centers, schools, healthcare facilities, and government buildings. The city's suburban location provides diverse business environments for vending machine placement."
          },
          {
            question: "How many verified vending locations are available in {cityDisplayName}?",
            answer: "We currently have {cityData.verifiedLocations}+ verified locations in {cityDisplayName} that are ready for vending machine placement. These locations have been pre-qualified and are actively seeking vending machine partnerships."
          },
          {
            question: "What is the average revenue potential for vending machines in {cityDisplayName}?",
            answer: "Vending machine revenue in {cityDisplayName} varies by location type, but our verified locations typically generate 

      20-500+ per month per machine. Shopping centers and corporate offices tend to perform best due to consistent foot traffic."
          },
          {
            question: "Are there any specific regulations for vending machines in {cityDisplayName}?",
            answer: "{cityDisplayName} follows New Jersey state regulations for vending machines. Our leads include businesses that are already compliant with local requirements, making the setup process smoother for vending machine operators."
          },
          {
            question: "How quickly can I start placing vending machines in {cityDisplayName}?",
            answer: "With our verified leads, you can typically start placing vending machines in {cityDisplayName} within 1-2 weeks of purchasing our leads. The businesses are pre-qualified and ready to partner with vending machine operators."
          },
          {
            question: "What support do you provide for vending machine operators in {cityDisplayName}?",
            answer: "We provide comprehensive support including location verification, business contact information, placement guidelines, and ongoing assistance to help you succeed in the {cityDisplayName} vending machine market."
          }
        ]}


      />


      


      <Footer />
      <ZipCodeModalWrapper />
    </div>
  )
}
