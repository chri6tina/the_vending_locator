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

export default function ArkansasVendingLeadsPage() {
  // State display name
  const stateDisplayName = 'Arkansas';
  
  // State-specific data
  const stateData = {
  'name': 'Arkansas',
  'population': '3M+',
  'businesses': '250K+',
  'industries': '25-30',
  'verifiedLocations': '500+',
  'rating': '4.8/5',
  'description': 'The Natural State with diverse business opportunities and growing economy'
};
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Little Rock', 'Sarah in Fayetteville', 'David in Fort Smith', 'Lisa in Arkansas',
    'Tom in Arkansas', 'Jennifer in Arkansas', 'Robert in Arkansas', 'Amanda in Arkansas',
    'Chris in Arkansas', 'Maria in Arkansas', 'James in Arkansas', 'Emily in Arkansas'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(25, Math.min(42, newValue))
      })
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Smart rotation of user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let attempts = 0
        let nextIndex = prev
        while (attempts < 50) {
          nextIndex = (nextIndex + 1) % userNames.length
          if (!usedNames.has(nextIndex)) {
            setUsedNames(prev => new Set([...prev, nextIndex]));
            return nextIndex
          }
          attempts++
        }
        const randomIndex = Math.floor(Math.random() * userNames.length)
        setUsedNames(prev => new Set([...prev, randomIndex]));
        return randomIndex
      })
    }, 5000);
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vending-leads" className="hover:text-navy transition-colors">
                Vending Leads
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{stateDisplayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              {/* Active Users Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto mb-6"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 leading-tight"
              >
                Vending Machine Locations in{' '}
                <span className="text-navy">{stateDisplayName}</span>
              </motion.h1>

              {/* State-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations across Arkansas's diverse and growing economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto mb-8"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium text-chocolate">4.8/5 Rating</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-chocolate">Quality Research</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <button 
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing')
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                    Get Started
                  </button>

              </motion.div>

              {/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{stateData.population}</div>
                  <div className="text-sm text-stone">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{stateData.businesses}</div>
                  <div className="text-sm text-stone">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{stateData.industries}</div>
                  <div className="text-sm text-stone">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{stateData.verifiedLocations}</div>
                  <div className="text-sm text-stone">Verified Locations</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Get Access to Qualified Vending Machine Locations in {stateDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Choose the perfect plan for your vending machine business needs and start accessing qualified locations today.
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Business Landscape in {stateDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse industries and business opportunities that make {stateDisplayName} an ideal market for vending machines.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <motion.div
                key="Manufacturing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing</h3>
                <p className="text-stone leading-relaxed">Arkansas has a strong manufacturing sector including automotive, aerospace, and food processing with large employee bases and consistent traffic.</p>
              </motion.div>

              <motion.div
                key="Agriculture"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 mb-4">
                  <MapPinIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Agriculture</h3>
                <p className="text-stone leading-relaxed">Major agricultural state with poultry, rice, cotton, and soybean production providing consistent employee traffic and excellent vending opportunities.</p>
              </motion.div>

              <motion.div
                key="Healthcare"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <HeartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">UAMS Medical Center, Arkansas Children's Hospital, and numerous medical facilities providing consistent patient and staff traffic.</p>
              </motion.div>

              <motion.div
                key="Education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  <AcademicCapIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">University of Arkansas system, Arkansas State University, and numerous educational institutions with large student populations.</p>
              </motion.div>

              <motion.div
                key="Retail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 mb-4">
                  <ShoppingBagIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail</h3>
                <p className="text-stone leading-relaxed">Major retail presence including Walmart headquarters, shopping centers, and numerous retail locations with high foot traffic.</p>
              </motion.div>

              <motion.div
                key="Transportation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-teal-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-teal-600 mb-4">
                  <TruckIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Transportation</h3>
                <p className="text-stone leading-relaxed">Strategic location with major highways, railroads, and logistics companies providing consistent employee traffic and excellent vending opportunities.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HotLeads />
          </div>
        </section>

        {/* Vending Course Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone">
                Everything you need to know about vending machine leads in {stateDisplayName}.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What types of vending machine locations are available in Arkansas?",
                  answer: "Arkansas offers diverse vending opportunities including manufacturing facilities, agricultural operations, healthcare centers, educational institutions, retail locations, and transportation companies. Each location is pre-qualified for optimal vending machine placement."
                },
                {
                  question: "How quickly can I get vending machine leads for Arkansas?",
                  answer: "Our Arkansas vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry."
                },
                {
                  question: "What makes Arkansas a good market for vending machines?",
                  answer: "Arkansas features a strong manufacturing sector, major agricultural industry, growing healthcare sector, diverse educational institutions, and strategic retail presence. The state's diverse economy and consistent employment create ideal conditions for vending machine success."
                },
                {
                  question: "Do you provide ongoing support for Arkansas locations?",
                  answer: "Yes, we offer comprehensive support including location monitoring, performance analytics, and business development assistance to ensure your vending machines thrive in Arkansas."
                },
                {
                  question: "What industries in Arkansas are best for vending machines?",
                  answer: "Manufacturing operations, agricultural businesses, healthcare centers, educational institutions, retail locations, and transportation companies in Arkansas show the highest potential for vending machine success due to consistent employee traffic and captive audiences."
                },
                {
                  question: "How do you verify the quality of Arkansas vending locations?",
                  answer: "We conduct thorough research on each Arkansas location including business verification, employee count validation, industry research, and traffic pattern analysis to ensure only high-quality opportunities are included."
                },
                {
                  question: "Can I get customized vending leads for specific areas of Arkansas?",
                  answer: "Absolutely! We can customize leads for specific regions, cities, or industrial areas within Arkansas based on your preferences and target market requirements."
                },
                {
                  question: "What's the typical ROI for vending machines in Arkansas?",
                  answer: "Vending machines in Arkansas typically show strong ROI due to the state's business density and consistent employee traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines."
                },
                {
                  question: "Are there any special considerations for Arkansas's agricultural sector?",
                  answer: "Arkansas's agricultural sector creates unique opportunities with seasonal workers and processing plants. We analyze seasonal patterns and adjust our recommendations accordingly to ensure consistent vending machine performance."
                },
                {
                  question: "How does Arkansas's manufacturing presence affect vending opportunities?",
                  answer: "Arkansas's strong manufacturing sector provides excellent vending machine opportunities with large employee bases, consistent shifts, and captive audiences in industrial facilities."
                },
                {
                  question: "What types of vending machines work best in Arkansas?",
                  answer: "Beverage machines, snack machines, and healthy food options perform well in Arkansas's manufacturing, healthcare, and educational sectors. Agricultural and retail locations benefit from beverage and snack machines for employee and customer convenience."
                },
                {
                  question: "Do you offer financing options for Arkansas vending machine placements?",
                  answer: "Yes, we work with financing partners to help you secure the equipment and capital needed to expand your vending machine business in Arkansas."
                },
                {
                  question: "How do you handle seasonal variations in Arkansas's industries?",
                  answer: "We analyze seasonal patterns in Arkansas's various industries including agriculture, manufacturing, and retail and adjust our recommendations accordingly to ensure consistent vending machine performance throughout the year."
                },
                {
                  question: "What makes Arkansas different from other states for vending?",
                  answer: "Arkansas offers a unique combination of manufacturing economy, major agricultural sector, strategic retail presence, and diverse industries that creates exceptional vending machine opportunities not found in other states."
                },
                {
                  question: "Can you help with vending machine maintenance in Arkansas?",
                  answer: "Yes, we partner with local maintenance providers and can connect you with reliable service technicians to keep your Arkansas vending machines operating at peak performance."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-charcoal mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-stone leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
