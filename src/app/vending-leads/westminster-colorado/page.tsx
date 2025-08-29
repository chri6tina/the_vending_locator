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

export default function WestminsterColoradoVendingLeadsPage() {
  // City and state display names
  const cityDisplayName = 'Westminster';
  const stateDisplayName = 'Colorado';
  
  // City-specific data
  const cityData = {
  'name': 'Westminster',
  'state': 'Colorado',
  'population': '116K+',
  'businesses': '4K+',
  'industries': '8-12',
  'verifiedLocations': '90+',
  'rating': '4.8/5',
  'description': 'Growing suburban city with technology and healthcare economy'
};
  
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Westminster', 'Sarah in Westminster', 'David in Westminster', 'Lisa in Westminster',
    'Tom in Westminster', 'Jennifer in Westminster', 'Robert in Westminster', 'Amanda in Westminster',
    'Chris in Westminster', 'Maria in Westminster', 'James in Westminster', 'Emily in Westminster'
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
              <Link href={`/vending-leads/${stateDisplayName.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-navy transition-colors">
                {stateDisplayName}
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityDisplayName}</span>
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
                <span className="text-navy">{cityDisplayName}, {stateDisplayName}</span>
              </motion.h1>

              {/* City-Specific Value Proposition */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-stone mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Get pre-qualified vending machine locations in Westminster's growing technology and healthcare economy. 
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
                <Link 
                  href="/hot-leads"
                  className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
                >
                  View Hot Leads →
                </Link>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.population}</div>
                  <div className="text-sm text-stone">Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.businesses}</div>
                  <div className="text-sm text-stone">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.industries}</div>
                  <div className="text-sm text-stone">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">{cityData.verifiedLocations}</div>
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
                Get Access to Qualified Vending Machine Locations in {cityDisplayName}
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
                Business Landscape in {cityDisplayName}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Discover the diverse industries and business opportunities that make {cityDisplayName} an ideal market for vending machines.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <motion.div
                key="Technology"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <CpuChipIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Technology</h3>
                <p className="text-stone leading-relaxed">Software companies, tech startups, and IT services providing modern office environments and consistent employee traffic.</p>
              </motion.div>

              <motion.div
                key="Healthcare"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <HeartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Medical offices, dental practices, and healthcare facilities providing consistent patient and staff traffic.</p>
              </motion.div>

              <motion.div
                key="Education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-purple-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-purple-600 mb-4">
                  <AcademicCapIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Education</h3>
                <p className="text-stone leading-relaxed">School districts, community colleges, and training centers providing large student populations and consistent foot traffic.</p>
              </motion.div>

              <motion.div
                key="Retail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 mb-4">
                  <ShoppingBagIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail</h3>
                <p className="text-stone leading-relaxed">Shopping centers, restaurants, and retail businesses with high foot traffic and diverse customer bases.</p>
              </motion.div>

              <motion.div
                key="Professional Services"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Professional Services</h3>
                <p className="text-stone leading-relaxed">Financial, legal, and consulting firms with office buildings and professional environments suitable for vending machines.</p>
              </motion.div>

              <motion.div
                key="Manufacturing"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-teal-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-teal-600 mb-4">
                  <BuildingLibraryIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Manufacturing</h3>
                <p className="text-stone leading-relaxed">Light manufacturing, assembly operations, and industrial facilities providing consistent employee traffic and vending opportunities.</p>
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
                Everything you need to know about vending machine leads in {cityDisplayName}, {stateDisplayName}.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What types of vending machine locations are available in Westminster?",
                  answer: "Westminster offers diverse vending opportunities including technology companies, healthcare facilities, educational institutions, retail locations, professional services, and light manufacturing. Each location is pre-qualified for optimal vending machine placement."
                },
                {
                  question: "How quickly can I get vending machine leads for Westminster?",
                  answer: "Our Westminster vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry."
                },
                {
                  question: "What makes Westminster a good market for vending machines?",
                  answer: "Westminster features a growing technology sector, strong healthcare presence, excellent educational institutions, and diverse business community. The city's suburban location and business-friendly environment create ideal conditions for vending machine success."
                },
                {
                  question: "Do you provide ongoing support for Westminster locations?",
                  answer: "Yes, we offer comprehensive support including location monitoring, performance analytics, and business development assistance to ensure your vending machines thrive in Westminster."
                },
                {
                  question: "What industries in Westminster are best for vending machines?",
                  answer: "Technology companies, healthcare facilities, educational institutions, retail locations, and professional services in Westminster show the highest potential for vending machine success due to consistent employee traffic and captive audiences."
                },
                {
                  question: "How do you verify the quality of Westminster vending locations?",
                  answer: "We conduct thorough research on each Westminster location including business verification, employee count validation, industry research, and traffic pattern analysis to ensure only high-quality opportunities are included."
                },
                {
                  question: "Can I get customized vending leads for specific areas of Westminster?",
                  answer: "Absolutely! We can customize leads for specific neighborhoods, business districts, industrial areas, or retail zones within Westminster based on your preferences and target market requirements."
                },
                {
                  question: "What's the typical ROI for vending machines in Westminster?",
                  answer: "Vending machines in Westminster typically show strong ROI due to the city's business density and consistent employee traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines."
                },
                {
                  question: "Are there any special considerations for Westminster's technology sector?",
                  answer: "Westminster's technology sector creates unique opportunities with modern office environments, consistent schedules, and tech-savvy employees. Technology companies often provide excellent vending machine placement opportunities due to consistent traffic."
                },
                {
                  question: "How does Westminster's suburban location affect vending opportunities?",
                  answer: "Westminster's suburban location provides access to a growing business community while offering strategic access to the Denver metro area. The city's planned development and business-friendly environment create excellent vending machine opportunities."
                },
                {
                  question: "What types of vending machines work best in Westminster?",
                  answer: "Beverage machines, snack machines, and healthy food options perform well in Westminster's technology, healthcare, and education sectors. Professional services and retail locations benefit from beverage and snack machines for employee and customer convenience."
                },
                {
                  question: "Do you offer financing options for Westminster vending machine placements?",
                  answer: "Yes, we work with financing partners to help you secure the equipment and capital needed to expand your vending machine business in Westminster."
                },
                {
                  question: "How do you handle seasonal variations in Westminster's industries?",
                  answer: "We analyze seasonal patterns in Westminster's various industries including technology, healthcare, and retail and adjust our recommendations accordingly to ensure consistent vending machine performance throughout the year."
                },
                {
                  question: "What makes Westminster different from other Colorado cities for vending?",
                  answer: "Westminster offers a unique combination of growing technology sector, suburban business environment, strategic Denver metro location, and diverse industries that creates exceptional vending machine opportunities not found in other Colorado cities."
                },
                {
                  question: "Can you help with vending machine maintenance in Westminster?",
                  answer: "Yes, we partner with local maintenance providers and can connect you with reliable service technicians to keep your Westminster vending machines operating at peak performance."
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
