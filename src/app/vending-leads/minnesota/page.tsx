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

export default function MinnesotaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(12)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  const users = [
    'Sarah from Minneapolis',
    'Mike from Saint Paul',
    'Lisa from Rochester',
    'David from Duluth',
    'Jennifer from Bloomington'
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
      name: 'Minneapolis',
      slug: 'minneapolis-minnesota',
      vendorCount: '350+',
      businessCount: '420+',
      description: 'Largest city with healthcare and technology',
      highlights: ['Healthcare', 'Technology', 'Education']
    },
    {
      name: 'Saint Paul',
      slug: 'saint-paul-minnesota',
      vendorCount: '280+',
      businessCount: '340+',
      description: 'State capital with government and healthcare',
      highlights: ['Government', 'Healthcare', 'Education']
    },
    {
      name: 'Rochester',
      slug: 'rochester-minnesota',
      vendorCount: '180+',
      businessCount: '220+',
      description: 'Healthcare hub with Mayo Clinic',
      highlights: ['Healthcare', 'Education', 'Research']
    },
    {
      name: 'Duluth',
      slug: 'duluth-minnesota',
      vendorCount: '120+',
      businessCount: '150+',
      description: 'Port city with healthcare and tourism',
      highlights: ['Healthcare', 'Tourism', 'Port']
    },
    {
      name: 'Bloomington',
      slug: 'bloomington-minnesota',
      vendorCount: '150+',
      businessCount: '180+',
      description: 'Suburban city with retail and healthcare',
      highlights: ['Retail', 'Healthcare', 'Services']
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
                Minnesota Vending Machine Locations
              </motion.h1>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover premium vending machine placement opportunities across Minnesota. 
                Access 110,000+ businesses and the heart of America's healthcare and manufacturing hub.
              </motion.p>

              {/* Trust Signals */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-stone">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="w-4 h-4 text-bronze" />
                  1,200+ Verified Locations
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4 text-bronze" />
                  110,000+ Businesses
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
                Get access to Minnesota's top vending machine opportunities
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
                Minnesota Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Minnesota's diverse economy spans healthcare, manufacturing, technology, and more, 
                creating ideal opportunities for vending machine placement.
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
                <HeartIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Healthcare</h3>
                <p className="text-stone">World-renowned medical facilities and research institutions</p>
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
                <p className="text-stone">Advanced manufacturing and industrial innovation</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <AcademicCapIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Technology</h3>
                <p className="text-stone">Growing tech sector and digital innovation</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <BuildingOfficeIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Education</h3>
                <p className="text-stone">Top-tier universities and research institutions</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <SunIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Agriculture</h3>
                <p className="text-stone">Fertile farmland and agricultural innovation</p>
              </motion.div>

              <motion.div 
                className="text-center p-6 rounded-lg bg-stone-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <TruckIcon className="w-12 h-12 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Transportation</h3>
                <p className="text-stone">Major logistics and distribution hub</p>
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
                Minnesota by the Numbers
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
                <div className="text-4xl font-bold text-bronze mb-2">5.7M+</div>
                <div className="text-lg text-charcoal">Population</div>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-bronze mb-2">110,000+</div>
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
                  What makes Minnesota a good market for vending machines?
                </h3>
                <p className="text-stone">
                  Minnesota's strong healthcare sector, manufacturing industry, and educated workforce create 
                  ideal conditions for vending machine placement with high foot traffic and purchasing power.
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
                  Which cities in Minnesota have the best opportunities?
                </h3>
                <p className="text-stone">
                  Minneapolis, Saint Paul, and Rochester offer the highest concentration of businesses 
                  and healthcare facilities, making them prime locations for vending machine placement.
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
                  How do I get started with vending machines in Minnesota?
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
                Major Cities in Minnesota
              </h2>
              <p className="text-lg text-stone">
                Explore vending opportunities in Minnesota's key metropolitan areas
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
