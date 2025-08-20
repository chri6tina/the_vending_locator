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

export default function PlanoTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Plano', 'Sarah in West Plano', 'David in East Plano', 'Lisa in Central Plano',
    'Tom in Legacy West', 'Jennifer in Willow Bend', 'Robert in Shops at Legacy', 'Amanda in Downtown Plano',
    'Chris in Preston Road', 'Maria in Frisco Border', 'James in Allen Border', 'Emily in Richardson Border'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
      const fluctuation = Math.floor(Math.random() * 4) + 1
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
        {/* Enhanced Hero Section - Plano-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Plano vendors are choosing plans right now
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
                Vending Machine Locations<br />in Plano, Texas
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Plano's thriving corporate and technology economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Plano-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-chocolate">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span>285K+ Verified Locations</span>
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
                  Get Plano Leads Now
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
                Plano Vending Leads Pricing
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-3xl mx-auto">
                Choose the perfect plan for your Plano vending machine business growth
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
                Plano Business Landscape
              </motion.h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Plano is a major corporate headquarters hub in the Dallas-Fort Worth metroplex, offering diverse vending opportunities across multiple thriving industries and Fortune 500 companies.
              </p>
            </div>

            {/* Industry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: BuildingOfficeIcon,
                  title: 'Corporate HQ',
                  description: 'Home to major corporate headquarters including Toyota North America, JCPenney, and Frito-Lay.'
                },
                {
                  icon: CpuChipIcon,
                  title: 'Technology',
                  description: 'Major tech sector with software companies, telecommunications, and IT services.'
                },
                {
                  icon: UsersIcon,
                  title: 'Healthcare',
                  description: 'Growing healthcare sector with medical centers and specialized healthcare facilities.'
                },
                {
                  icon: AcademicCapIcon,
                  title: 'Education',
                  description: 'Excellent school districts and educational facilities serving the metroplex.'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Finance',
                  description: 'Major financial services companies and banking institutions with regional headquarters.'
                },
                {
                  icon: MapPinIcon,
                  title: 'Retail',
                  description: 'Legacy West and Shops at Legacy providing major retail and entertainment destinations.'
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
                Plano by the Numbers
              </motion.h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Understanding Plano's business environment and market potential for your vending machine operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">285,494</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Population</div>
                <div className="text-sm text-chocolate/70">Making Plano the 9th largest city in Texas</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">40,000+</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Businesses</div>
                <div className="text-sm text-chocolate/70">Including Fortune 500 headquarters and tech companies</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-coral mb-2">6</div>
                <div className="text-lg font-semibold text-chocolate mb-2">Major Industries</div>
                <div className="text-sm text-chocolate/70">Corporate, Technology, Healthcare, Education, Finance, Retail</div>
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
                Frequently Asked Questions - Plano
              </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What makes Plano ideal for vending machines?",
                  answer: "Plano's concentration of Fortune 500 corporate headquarters, thriving business districts like Legacy West, and high-income demographics create excellent opportunities for premium vending machine placements with consistent foot traffic."
                },
                {
                  question: "How many businesses are included in Plano leads?",
                  answer: "Our Plano database includes over 40,000 businesses across various industries including corporate headquarters, technology companies, healthcare facilities, educational institutions, and retail centers."
                },
                {
                  question: "Are Plano vending locations pre-qualified?",
                  answer: "Yes, all Plano locations undergo our comprehensive qualification process, including business verification, foot traffic analysis, and placement feasibility assessment to ensure profitable vending opportunities."
                },
                {
                  question: "What types of businesses work best in Plano?",
                  answer: "Plano's economy supports various vending opportunities, with particularly strong performance in corporate offices, technology companies, medical centers, educational facilities, and upscale retail locations in Legacy West and Shops at Legacy."
                },
                {
                  question: "How current is the Plano business data?",
                  answer: "Our Plano database is updated monthly with real-time business information, ensuring you receive current contact details, business status, and location accuracy for successful vending machine placements."
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

        {/* Other Cities in Texas Section */}
        <div className="bg-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-playfair font-bold text-chocolate mb-4"
              >
                Other Cities in Texas
              </motion.h2>
              <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                Explore vending machine opportunities in other Texas markets
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {[
                { name: 'Dallas', slug: 'dallas-texas', description: 'Major metropolitan hub' },
                { name: 'Irving', slug: 'irving-texas', description: 'Corporate headquarters' },
                { name: 'Fort Worth', slug: 'fort-worth-texas', description: 'Cultural district' },
                { name: 'Houston', slug: 'houston-texas', description: 'Energy capital' },
                { name: 'Austin', slug: 'austin-texas', description: 'Tech innovation center' },
                { name: 'San Antonio', slug: 'san-antonio-texas', description: 'Military and tourism' },
                { name: 'Arlington', slug: 'arlington-texas', description: 'Entertainment district' },
                { name: 'Frisco', slug: 'frisco-texas', description: 'Fastest growing suburb' }
              ].map((city, index) => (
                <Link
                  key={city.slug}
                  href={`/vending-leads/${city.slug}`}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-chocolate">{city.name}</h3>
                  <p className="text-sm text-chocolate/70">{city.description}</p>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}