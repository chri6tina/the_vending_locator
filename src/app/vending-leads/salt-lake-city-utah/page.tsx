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

export default function SaltLakeCityUtahVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Salt Lake City', 'Sarah in Downtown', 'David in Capitol Hill', 'Lisa in The Avenues',
    'Tom in Sugar House', 'Jennifer in East Central', 'Robert in Glendale', 'Amanda in Rose Park',
    'Chris in Liberty Wells', 'Maria in Marmalade District', 'James in Central City', 'Emily in Westpointe'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 6
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
        {/* Enhanced Hero Section - Salt Lake City-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Salt Lake City vendors are choosing plans right now
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
                Vending Machine Locations<br />in Salt Lake City, Utah
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Salt Lake City's thriving technology and healthcare economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Salt Lake City-Specific */}
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
                  Get Salt Lake City Leads Now
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
                Salt Lake City Vending Leads Pricing
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Choose the perfect plan for your Salt Lake City vending machine business growth
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
                Salt Lake City Business Landscape
              </motion.h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Salt Lake City is Utah's capital and largest city, a major technology and healthcare hub known as "Silicon Slopes," offering diverse vending opportunities across multiple thriving industries.
              </p>
            </div>

            {/* Industry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: CpuChipIcon,
                  title: 'Technology',
                  description: 'Major tech hub "Silicon Slopes" with software companies and tech startups.'
                },
                {
                  icon: BuildingOfficeIcon,
                  title: 'Healthcare',
                  description: 'Healthcare facilities, hospitals, and medical research centers.'
                },
                {
                  icon: AcademicCapIcon,
                  title: 'Education',
                  description: 'University of Utah and other educational institutions throughout the city.'
                },
                {
                  icon: MapPinIcon,
                  title: 'Financial Services',
                  description: 'Financial institutions and professional service companies.'
                },
                {
                  icon: UsersIcon,
                  title: 'Government',
                  description: 'State capital with government offices and administrative buildings.'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream/30 p-6 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="h-8 w-8 text-bronze" />
                    <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                  </div>
                  <p className="text-stone">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* City Stats Section */}
        <div className="bg-warm-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-charcoal mb-4"
              >
                Salt Lake City Vending Market at a Glance
              </motion.h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key statistics highlighting the potential for vending machine businesses in Salt Lake City.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Population', value: '199K+', icon: UsersIcon },
                { label: 'Businesses', value: '14,000+', icon: BuildingOfficeIcon },
                { label: 'Major Industries', value: '5+', icon: CpuChipIcon },
                { label: 'Vending Locations', value: '105+', icon: MapPinIcon },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream/30 p-6 rounded-xl border border-gray-200 flex flex-col items-center justify-center"
                >
                  <stat.icon className="h-10 w-10 text-bronze mb-3" />
                  <div className="text-3xl font-bold text-chocolate">{stat.value}</div>
                  <div className="text-md text-stone">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

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
                Frequently Asked Questions about Vending in Salt Lake City
              </motion.h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Find answers to common questions about securing vending machine locations in Salt Lake City.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: 'What types of businesses are good for vending machines in Salt Lake City?',
                  answer: 'Salt Lake City\'s diverse economy means opportunities in technology companies in Silicon Slopes, healthcare facilities, educational institutions like the University of Utah, financial services, and government offices throughout the city.'
                },
                {
                  question: 'How are vending machine locations in Salt Lake City identified?',
                  answer: 'We use advanced data analytics and local market research to identify high-traffic businesses with a need for vending services, ensuring optimal placement for your machines.'
                },
                {
                  question: 'Do you provide support after I get a location in Salt Lake City?',
                  answer: 'Yes, our support extends beyond lead generation. We offer resources and guidance to help you succeed in managing your vending machine business in Salt Lake City.'
                },
                {
                  question: 'What makes Salt Lake City a good market for vending machines?',
                  answer: 'Salt Lake City\'s booming tech sector, major healthcare presence, growing university community, state government operations, and significant daily workforce traffic create a high demand for convenient food and beverage options, making it an excellent market for vending machines.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-6 p-6 bg-cream/30 rounded-xl border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-stone">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Zip Code Modal Wrapper */}
        <ZipCodeModalWrapper />
      </div>
      <Footer />
    </>
  )
}