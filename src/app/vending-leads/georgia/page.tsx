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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, TruckIcon, FilmIcon, SunIcon, BeakerIcon, SparklesIcon, HeartIcon, CloudIcon } from '@heroicons/react/24/solid'

export default function GeorgiaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Tom from Atlanta', 'Sarah from Augusta', 'Mike from Columbus', 'Lisa from Macon',
    'David from Savannah', 'Jennifer from Athens', 'Robert from Sandy Springs', 'Amanda from Roswell',
    'Chris from Albany', 'Maria from Johns Creek', 'James from Warner Robins', 'Emily from Alpharetta'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 9
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
        {/* Enhanced Hero Section - Georgia-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Georgia vendors are choosing plans right now
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
                Vending Machine Locations<br />in Georgia
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Georgia's thriving healthcare and manufacturing economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Georgia-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">1,200+ Verified Locations</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <UsersIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">90,000+ Businesses</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <BuildingOfficeIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">6 Major Industries</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-coral hover:bg-coral/90 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View Pricing Plans
                </a>
                <a
                  href="#hot-leads"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-coral bg-cream hover:bg-cream/80 rounded-lg transition-colors duration-200 border-2 border-coral"
                >
                  See Hot Leads
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Immediately After Hero */}
        <section id="pricing" className="py-16 bg-cream/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal"
              >
                Choose Your Georgia Vending Leads Plan
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-lg text-stone max-w-2xl mx-auto"
              >
                Get access to verified vending machine locations across Georgia with our comprehensive lead packages.
              </motion.p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Georgia Business Landscape
              </h2>
              <p className="mt-4 text-lg text-stone max-w-3xl mx-auto">
                Georgia offers diverse opportunities across multiple thriving industries, making it an ideal location for vending machine placement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: HeartIcon, title: 'Healthcare', description: 'Medical centers and healthcare facilities', color: 'text-red-600' },
                { icon: TruckIcon, title: 'Manufacturing', description: 'Technology and manufacturing operations', color: 'text-green-600' },
                { icon: AcademicCapIcon, title: 'Education', description: 'Universities and educational institutions', color: 'text-indigo-600' },
                { icon: BuildingOfficeIcon, title: 'Retail', description: 'Shopping centers and retail operations', color: 'text-purple-600' },
                { icon: CpuChipIcon, title: 'Technology', description: 'Tech companies and research centers', color: 'text-blue-600' },
                { icon: SunIcon, title: 'Solar Energy', description: 'Solar power and renewable energy', color: 'text-yellow-600' }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`w-12 h-12 bg-cream rounded-lg flex items-center justify-center mb-4`}>
                    <industry.icon className={`w-6 h-6 ${industry.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{industry.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* State Stats Section */}
        <section className="py-16 bg-cream/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Georgia by the Numbers
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Population', value: '10.7M+', description: 'Residents across the state' },
                { label: 'Businesses', value: '90,000+', description: 'Companies and organizations' },
                { label: 'Major Industries', value: '6', description: 'Key economic sectors' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-coral mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-charcoal mb-1">{stat.label}</div>
                  <div className="text-stone text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <section id="hot-leads" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Hot Georgia Vending Leads
              </h2>
              <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
                Get immediate access to the most promising vending machine placement opportunities in Georgia.
              </p>
            </motion.div>
            <HotLeads />
          </div>
        </section>
        
        {/* Vending Course Section */}
        <section className="py-16 bg-cream/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "What types of businesses are available for vending machine placement in Georgia?",
                  answer: "Georgia offers diverse opportunities including healthcare facilities, manufacturing operations, educational institutions, retail businesses, technology companies, and solar energy operations. Our leads cover all major industries across the state."
                },
                {
                  question: "How quickly can I start placing vending machines in Georgia?",
                  answer: "With our verified leads, you can start contacting businesses within 24 hours of purchase. Each lead includes detailed contact information and business details to streamline your outreach process."
                },
                {
                  question: "Are the Georgia leads pre-qualified for vending machine placement?",
                  answer: "Yes, all our Georgia leads are pre-qualified businesses that have shown interest in vending machine services or have suitable locations for placement."
                },
                {
                  question: "What support do you provide for Georgia vending machine placement?",
                  answer: "We provide comprehensive support including lead verification, business contact information, placement guidance, and ongoing assistance to ensure successful vending machine placement across Georgia."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-charcoal mb-3">{faq.question}</h3>
                  <p className="text-stone leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cities in Georgia Section */}
        <section className="py-16 bg-cream/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Major Cities in Georgia
              </h2>
              <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
                Explore vending machine opportunities in Georgia's key cities and metropolitan areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Atlanta', slug: 'atlanta-georgia', description: 'Healthcare and technology center' },
                { name: 'Augusta', slug: 'augusta-georgia', description: 'Healthcare and manufacturing hub' },
                { name: 'Columbus', slug: 'columbus-georgia', description: 'Healthcare and retail center' },
                { name: 'Macon', slug: 'macon-georgia', description: 'Healthcare and education hub' },
                { name: 'Savannah', slug: 'savannah-georgia', description: 'Healthcare and tourism center' },
                { name: 'Athens', slug: 'athens-georgia', description: 'Education and healthcare hub' }
              ].map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  <Link href={`/vending-leads/${city.slug}`} className="block">
                    <h3 className="text-lg font-semibold text-coral hover:text-coral/80 transition-colors duration-200 mb-2">
                      {city.name}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">{city.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
