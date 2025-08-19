'use client'

import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, TruckIcon, FilmIcon, SunIcon, BeakerIcon, SparklesIcon, HeartIcon, CloudIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function NebraskaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(8)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  const users = [
    'Tom from Omaha',
    'Sarah from Lincoln',
    'Mike from Bellevue',
    'Lisa from Grand Island',
    'David from Kearney'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % users.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [users.length])

  const cities = [
    {
      name: 'Omaha',
      slug: 'omaha-nebraska',
      vendorCount: '140+',
      businessCount: '180+',
      description: 'Largest city with finance and healthcare',
      highlights: ['Finance', 'Healthcare', 'Manufacturing']
    },
    {
      name: 'Lincoln',
      slug: 'lincoln-nebraska',
      vendorCount: '100+',
      businessCount: '130+',
      description: 'State capital with government and education',
      highlights: ['Government', 'Education', 'Healthcare']
    },
    {
      name: 'Bellevue',
      slug: 'bellevue-nebraska',
      vendorCount: '70+',
      businessCount: '90+',
      description: 'Suburban Omaha area',
      highlights: ['Healthcare', 'Retail', 'Manufacturing']
    },
    {
      name: 'Grand Island',
      slug: 'grand-island-nebraska',
      vendorCount: '50+',
      businessCount: '70+',
      description: 'Agricultural and manufacturing center',
      highlights: ['Agriculture', 'Manufacturing', 'Healthcare']
    },
    {
      name: 'Kearney',
      slug: 'kearney-nebraska',
      vendorCount: '40+',
      businessCount: '60+',
      description: 'University and healthcare hub',
      highlights: ['Education', 'Healthcare', 'Retail']
    }
  ]

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <div className="bg-warm-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              {/* Active Users Counter */}
              <div className="inline-flex items-center gap-2 bg-bronze/10 text-bronze px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-bronze rounded-full animate-pulse"></div>
                {activeUsers} active users right now
              </div>

              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Nebraska Vending Machine Locations
              </motion.h1>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover premium vending machine placement opportunities across Nebraska. 
                Access 70,000+ businesses and the heart of America's agricultural and manufacturing hub.
              </motion.p>

              {/* Trust Signals */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-bronze" />
                  400+ Verified Locations
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4 text-bronze" />
                  70,000+ Businesses
                </div>
                <div className="flex items-center gap-2">
                  <BuildingOfficeIcon className="w-4 h-4 text-bronze" />
                  5 Major Industries
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bronze hover:bg-bronze/90 transition-colors"
                >
                  View Pricing
                </Link>
                <Link
                  href="#hot-leads"
                  className="inline-flex items-center justify-center px-6 py-3 border border-bronze text-base font-medium rounded-md text-bronze bg-transparent hover:bg-bronze/10 transition-colors"
                >
                  Hot Leads
                </Link>
              </div>

              {/* Current User */}
              <div className="mt-6 text-sm text-stone">
                <span className="text-bronze font-medium">{users[currentUserIndex]}</span> just viewed this page
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-stone">
                Get access to Nebraska's top vending machine opportunities
              </p>
            </div>
            <PricingTable />
          </div>
        </section>

        {/* Business Landscape */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Nebraska Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Nebraska is a major agricultural and manufacturing hub in the Midwest, offering diverse vending 
                opportunities across multiple thriving industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <SunIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Agriculture</h3>
                <p className="text-stone">Leading agricultural and food processing state</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CpuChipIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Manufacturing</h3>
                <p className="text-stone">Strong manufacturing and industrial base</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <HeartIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">Growing healthcare sector with medical facilities</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <TruckIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Transportation</h3>
                <p className="text-stone">Major logistics and distribution hub</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <AcademicCapIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education</h3>
                <p className="text-stone">Top universities and research institutions</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <BuildingOfficeIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Finance</h3>
                <p className="text-stone">Major financial services hub in Omaha</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* State Stats */}
        <section className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Nebraska by the Numbers
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">2.0M+</div>
                <div className="text-lg text-charcoal">Population</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">70,000+</div>
                <div className="text-lg text-charcoal">Businesses</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">6</div>
                <div className="text-lg text-charcoal">Major Industries</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <section id="hot-leads" className="py-16 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HotLeads />
          </div>
        </section>

        {/* Vending Course Section */}
        <section className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  What makes Nebraska a good market for vending machines?
                </h3>
                <p className="text-stone">
                  Nebraska's strong agricultural sector, manufacturing industry, and growing healthcare 
                  sector create ideal conditions for vending machine placement with consistent foot traffic.
                </p>
              </motion.div>

              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Which cities in Nebraska have the best opportunities?
                </h3>
                <p className="text-stone">
                  Omaha and Lincoln offer the highest concentration of businesses 
                  and manufacturing facilities, making them prime locations for vending machine placement.
                </p>
              </motion.div>

              <motion.div 
                className="bg-stone-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  How do I get started with vending machines in Nebraska?
                </h3>
                <p className="text-stone">
                  Start by accessing our verified business leads, then contact locations that match your 
                  criteria. Our platform provides all the information you need to make successful placements.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Major Cities Section */}
        <section className="py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Major Cities in Nebraska
              </h2>
              <p className="text-lg text-stone">
                Explore vending opportunities in Nebraska's key metropolitan areas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  className="bg-warm-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{city.name}</h3>
                  <p className="text-stone mb-4">{city.description}</p>
                  <div className="flex justify-between text-sm text-stone mb-4">
                    <span>{city.vendorCount} vendors</span>
                    <span>{city.businessCount} businesses</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-bronze/10 text-bronze text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/vending-leads/${city.slug}`}
                    className="mt-4 inline-block text-bronze hover:text-bronze/80 font-medium"
                  >
                    View Details →
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
