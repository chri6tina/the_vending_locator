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

export default function LongBeachCaliforniaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Tom from Long Beach', 'Sarah from Los Angeles', 'Mike from Anaheim', 'Lisa from Santa Ana',
    'David from Irvine', 'Jennifer from Huntington Beach', 'Robert from Garden Grove', 'Amanda from Santa Clarita',
    'Chris from Glendale', 'Maria from Pomona', 'James from Torrance', 'Emily from Pasadena'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 18
      const fluctuation = Math.floor(Math.random() * 5) + 1
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
        {/* Enhanced Hero Section - Long Beach-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> California vendors are choosing plans right now
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
                Vending Machine Locations<br />in Long Beach, California
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Long Beach's thriving port and manufacturing economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Long Beach-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
              >
                {[
                  { icon: CheckBadgeIcon, text: '100+ Verified Locations' },
                  { icon: StarIcon, text: '24/7 Support' },
                  { icon: ShieldCheckIcon, text: 'Money-Back Guarantee' },
                  { icon: ClockIcon, text: 'Instant Access' }
                ].map((signal, index) => (
                  <motion.div
                    key={signal.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <signal.icon className="w-8 h-8 text-coral mb-2" />
                    <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  href="#pricing"
                  className="w-full sm:w-auto bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Long Beach Leads
                </Link>
                <Link
                  href="#learn-more"
                  className="w-full sm:w-auto text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-4"
                >
                  Learn About Long Beach <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Table Section */}
        <div id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Get Long Beach Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Long Beach vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Long Beach vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Business Landscape Section */}
        <section id="learn-more" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Long Beach's Business Landscape
              </h2>
              <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
                Discover the diverse industries and opportunities that make Long Beach perfect for vending machine placement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: TruckIcon, title: 'Port & Logistics', description: 'Major port facilities, logistics companies, and transportation hubs' },
                { icon: BuildingOfficeIcon, title: 'Manufacturing & Industry', description: 'Industrial facilities and manufacturing companies' },
                { icon: HeartIcon, title: 'Healthcare & Medical', description: 'Hospitals, medical centers, and healthcare facilities' },
                { icon: AcademicCapIcon, title: 'Education & Research', description: 'Universities, colleges, and research institutions' },
                { icon: UsersIcon, title: 'Office & Professional Services', description: 'Corporate offices, professional services, and business centers' },
                { icon: CpuChipIcon, title: 'Technology & Innovation', description: 'Growing tech sector and innovation companies' }
              ].map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <industry.icon className="w-12 h-12 text-coral mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{industry.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* City Stats Section */}
        <section className="py-16 bg-cream/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Long Beach at a Glance
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Population', value: '466,000+', description: 'Major port city in Southern California' },
                { label: 'Businesses', value: '28,000+', description: 'Diverse business ecosystem' },
                { label: 'Major Industries', value: '6+', description: 'Port, logistics, manufacturing, healthcare, education, office, technology' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-3xl font-bold text-coral mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-charcoal mb-2">{stat.label}</div>
                  <p className="text-stone text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

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
                  question: "What types of businesses are available for vending machine placement in Long Beach?",
                  answer: "Long Beach offers diverse opportunities including port facilities, logistics companies, manufacturing plants, healthcare institutions, educational campuses, corporate offices, and technology firms. Our leads cover all major industries across the city."
                },
                {
                  question: "How quickly can I start placing vending machines in Long Beach?",
                  answer: "With our verified leads, you can start contacting businesses within 24 hours of purchase. Each lead includes detailed contact information and business details to streamline your outreach process."
                },
                {
                  question: "Are the Long Beach leads pre-qualified for vending machine placement?",
                  answer: "Yes, all our Long Beach leads are pre-qualified businesses that have shown interest in vending machine services or have suitable locations for placement."
                },
                {
                  question: "What support do you provide for Long Beach vending machine placement?",
                  answer: "We provide comprehensive support including lead verification, business contact information, placement guidance, and ongoing assistance to ensure successful vending machine placement across Long Beach."
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

        {/* Other Cities in California Section */}
        <section className="py-16 bg-cream/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">
                Other Cities in California
              </h2>
              <p className="mt-4 text-lg text-stone max-w-2xl mx-auto">
                Explore vending machine opportunities in California's other major cities and metropolitan areas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Los Angeles', slug: 'los-angeles-california', description: 'Major metropolitan area with diverse industries' },
                { name: 'Anaheim', slug: 'anaheim-california', description: 'Tourism and manufacturing hub' },
                { name: 'Santa Ana', slug: 'santa-ana-california', description: 'Government and business center' },
                { name: 'Irvine', slug: 'irvine-california', description: 'Technology and corporate hub' },
                { name: 'Huntington Beach', slug: 'huntington-beach-california', description: 'Coastal business center' },
                { name: 'Garden Grove', slug: 'garden-grove-california', description: 'Manufacturing and retail hub' }
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
