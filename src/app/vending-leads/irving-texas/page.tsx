'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/solid'

export default function IrvingTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Irving', 'Sarah in Las Colinas', 'David in Valley Ranch', 'Lisa in North Irving',
    'Tom in South Irving', 'Jennifer in East Irving', 'Robert in West Irving', 'Amanda in Central Irving',
    'Chris in North Lake', 'Maria in Hackberry Creek', 'James in Four Corners', 'Emily in Cottonwood Valley'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 7
      const fluctuation = Math.floor(Math.random() * 3) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 2000 + 2000)

    updateActiveUsers()
    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [userNames.length])

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Irving-Specific */}
        <div className="bg-warm-white py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Active Users Counter Pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-chocolate">
                    <span className="font-bold text-coral">{activeUsers}</span> Irving vendors are choosing plans right now
                  </span>
                </div>
                <div
                  key={currentUserIndex}
                  className="mt-2 text-xs text-chocolate/70"
                >
                  Including {userNames[currentUserIndex]}
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
              >
                Vending Machine Locations<br />in Irving, Texas
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Irving's thriving corporate and business economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Irving-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span>239K+ Verified Locations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-chocolate">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>4.9/5 Business Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-chocolate">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span>Pre-Qualified Leads</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-chocolate">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
              >
                <Link
                  href="#pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Get Irving Leads Now
                </Link>
                <Link
                  href="#hot-leads"
                  className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  View Sample Locations
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Table Section */}
        <div id="pricing" className="bg-cream py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
                Irving Vending Leads Pricing
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Choose the perfect plan for your Irving vending machine business growth
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Business Landscape Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-charcoal mb-4"
              >
                Irving Business Landscape
              </motion.h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Irving is a major business and transportation hub in the Dallas-Fort Worth metroplex, offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            {/* Industry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BuildingOfficeIcon,
                  title: 'Corporate HQ',
                  description: 'Home to major corporate headquarters including ExxonMobil and other Fortune 500 companies.'
                },
                {
                  icon: CpuChipIcon,
                  title: 'Technology',
                  description: 'Major tech sector with software companies and IT services.'
                },
                {
                  icon: AcademicCapIcon,
                  title: 'Education',
                  description: 'Home to University of Dallas and multiple colleges with thousands of students.'
                },
                {
                  icon: MapPinIcon,
                  title: 'Transportation',
                  description: 'Major logistics hub with DFW Airport and extensive highway connections.'
                },
                {
                  icon: UsersIcon,
                  title: 'Healthcare',
                  description: 'Growing healthcare sector with hospitals and medical centers serving the metroplex.'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Entertainment',
                  description: 'Las Colinas entertainment district with sports venues and convention centers.'
                }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-cream/30 p-6 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <industry.icon className="h-8 w-8 text-bronze" />
                    <h3 className="text-xl font-semibold text-charcoal">{industry.title}</h3>
                  </div>
                  <p className="text-stone">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* City Stats Section */}
        <div className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-4"
              >
                Irving by the Numbers
              </motion.h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Understanding Irving's business environment and market potential for your vending machine operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">239,798</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Population</div>
                <div className="text-sm text-chocolate/70">Making Irving the 13th largest city in Texas</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">38,000+</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Businesses</div>
                <div className="text-sm text-chocolate/70">Including Fortune 500 headquarters and SMBs</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">6</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Major Industries</div>
                <div className="text-sm text-chocolate/70">Corporate, Tech, Healthcare, Education, Transportation, Entertainment</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <div id="hot-leads">
          <HotLeads />
        </div>

        {/* Vending Course Section */}
        <VendingCourse />

        {/* FAQ Section */}
        <div className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-charcoal mb-4"
              >
                Frequently Asked Questions - Irving
              </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What makes Irving ideal for vending machines?",
                  answer: "Irving's strategic location in the Dallas-Fort Worth metroplex, combined with major corporate headquarters like ExxonMobil, creates a thriving business environment with consistent foot traffic and high demand for convenient vending services."
                },
                {
                  question: "How many businesses are included in Irving leads?",
                  answer: "Our Irving database includes over 38,000 businesses across various industries including corporate headquarters, technology companies, healthcare facilities, educational institutions, and entertainment venues."
                },
                {
                  question: "Are Irving vending locations pre-qualified?",
                  answer: "Yes, all Irving locations undergo our comprehensive qualification process, including business verification, foot traffic analysis, and placement feasibility assessment to ensure profitable vending opportunities."
                },
                {
                  question: "What types of businesses work best in Irving?",
                  answer: "Irving's diverse economy supports various vending opportunities, with particularly strong performance in corporate offices, medical centers, educational facilities, Las Colinas entertainment district, and transportation hubs near DFW Airport."
                },
                {
                  question: "How current is the Irving business data?",
                  answer: "Our Irving database is updated monthly with real-time business information, ensuring you receive current contact details, business status, and location accuracy for successful vending machine placements."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-cream/30 p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-stone">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}