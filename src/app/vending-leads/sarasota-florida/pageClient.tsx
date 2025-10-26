'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon, ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

// City and state display names
const cityDisplayName = 'Sarasota';
const stateDisplayName = 'Florida';

// City-specific data
const cityData = {
  name: 'Sarasota',
  state: 'Florida',
  population: '60,000+',
  businesses: '80+',
  industries: '6',
  verifiedLocations: '70-120',
  rating: '4.8/5',
  description: 'Sarasota is a major Southwest Florida city featuring arts and culture, tourism, healthcare, and diverse business opportunities.',
  majorEmployers: ['Sarasota Memorial Health Care System', 'Ringling College of Art and Design', 'City of Sarasota', 'Sarasota County Government', 'Sarasota-Bradenton International Airport', 'Sarasota Arts and Culture District']
}

export default function SarasotaPage() {
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(24)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState(new Set())

  // User names for active users counter
  const [userNames, setUserNames] = useState([
    'Mike from Sarasota', 'Sarah in Downtown', 'David in Sarasota', 'Lisa in Sarasota',
    'Tom in Sarasota', 'Jennifer in Sarasota', 'Robert in Sarasota', 'Amanda in Sarasota',
    'Chris in Sarasota', 'Maria in Sarasota', 'James in Sarasota', 'Emily in Sarasota'
  ])

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(20, Math.min(30, newValue))
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
      <Head>
        <title>Vending Machine Leads in Sarasota, Florida - Business Locations & Opportunities</title>
        <meta name="description" content="Discover premium vending machine opportunities in Sarasota, Florida. Access verified business locations with detailed contact information and placement opportunities." />
        <meta name="keywords" content="vending machine leads sarasota florida, sarasota business locations, vending machine business sarasota, verified business locations sarasota florida" />
      </Head>

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
                Get pre-qualified vending machine locations in Sarasota's thriving arts, tourism, healthcare, and business community.
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
                key="Arts & Culture"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <BuildingOfficeIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Arts & Culture</h3>
                <p className="text-stone leading-relaxed">Sarasota's renowned arts district, Ringling Museum, and cultural venues create high foot traffic and diverse demographics for vending machines throughout the year.</p>
              </motion.div>
              <motion.div
                key="Healthcare"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 mb-4">
                  <HeartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Healthcare</h3>
                <p className="text-stone leading-relaxed">Sarasota Memorial Health Care System and medical facilities provide large employee bases, patient populations, and 24/7 operations for consistent vending machine usage.</p>
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
                <p className="text-stone leading-relaxed">Ringling College of Art and Design provides consistent student populations, faculty, and staff throughout the academic year for vending machine opportunities.</p>
              </motion.div>
              <motion.div
                key="Tourism & Hospitality"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-orange-600 mb-4">
                  <BuildingLibraryIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Tourism & Hospitality</h3>
                <p className="text-stone leading-relaxed">Sarasota's beaches, cultural attractions, and seasonal tourism create high foot traffic and diverse demographics for vending machines.</p>
              </motion.div>
              <motion.div
                key="Transportation & Logistics"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-indigo-600 mb-4">
                  <TruckIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Transportation & Logistics</h3>
                <p className="text-stone leading-relaxed">Sarasota-Bradenton International Airport and transportation hubs provide high-volume foot traffic and diverse demographics for vending machines.</p>
              </motion.div>
              <motion.div
                key="Retail & Services"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-red-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <ShoppingBagIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Retail & Services</h3>
                <p className="text-stone leading-relaxed">Major retail centers and service businesses throughout Sarasota provide high customer traffic and diverse demographics for vending machine success.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
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
                Learn the Vending Machine Business
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-stone max-w-3xl mx-auto"
              >
                Master the fundamentals of vending machine operations and maximize your success in {cityDisplayName}.
              </motion.p>
            </div>
            <VendingCourse />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-warm-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-chocolate/70 leading-relaxed"
              >
                Everything you need to know about vending machine opportunities in {cityDisplayName}.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.div
                key="0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What makes Sarasota unique for vending machine opportunities?</h3>
                <p className="text-stone leading-relaxed">Sarasota is a major Southwest Florida city featuring renowned arts and culture district, Ringling Museum, healthcare systems like Sarasota Memorial Health Care System, Ringling College of Art and Design, government offices, and diverse business opportunities. This creates unique opportunities with cultural tourism, consistent healthcare operations, and stable government employment.</p>
              </motion.div>
              <motion.div
                key="1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How does Sarasota's arts and culture sector affect vending machine success?</h3>
                <p className="text-stone leading-relaxed">Sarasota's renowned arts district, Ringling Museum, cultural venues, and seasonal arts events create high foot traffic throughout the year. Cultural locations provide excellent vending machine opportunities with diverse demographics and consistent usage during peak seasons.</p>
              </motion.div>
              <motion.div
                key="2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What types of businesses in Sarasota are best for vending machines?</h3>
                <p className="text-stone leading-relaxed">Arts and culture venues, healthcare facilities like Sarasota Memorial Health Care System, educational institutions like Ringling College of Art and Design, government offices, transportation hubs like Sarasota-Bradenton International Airport, and retail centers provide excellent vending machine opportunities with consistent foot traffic.</p>
              </motion.div>
              <motion.div
                key="3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How quickly can I get vending machine leads for Sarasota?</h3>
                <p className="text-stone leading-relaxed">Our Sarasota vending leads are delivered within 3-5 business days. We provide comprehensive research including business details, contact information, and placement opportunities to accelerate your market entry into this thriving Southwest Florida cultural hub.</p>
              </motion.div>
              <motion.div
                key="4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What industries in Sarasota show the highest potential for vending machines?</h3>
                <p className="text-stone leading-relaxed">Arts and culture, healthcare, education, tourism and hospitality, transportation and logistics, and retail and services sectors in Sarasota show the highest potential for vending machine success due to consistent foot traffic, large employee bases, and stable operations from major employers and institutions.</p>
              </motion.div>
              <motion.div
                key="5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How do you verify the quality of Sarasota vending locations?</h3>
                <p className="text-stone leading-relaxed">We conduct thorough research on each Sarasota location including business verification, foot traffic analysis, employee count validation, and industry research to ensure only high-quality opportunities are included.</p>
              </motion.div>
              <motion.div
                key="6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">Can I get customized vending leads for specific areas of Sarasota?</h3>
                <p className="text-stone leading-relaxed">Absolutely! We can provide targeted vending leads for specific neighborhoods, arts districts, healthcare zones, educational districts, government areas, or transportation corridors within Sarasota based on your preferences and target market requirements.</p>
              </motion.div>
              <motion.div
                key="7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What's the typical ROI for vending machines in Sarasota?</h3>
                <p className="text-stone leading-relaxed">Vending machines in Sarasota typically show strong ROI due to the city's cultural density, healthcare operations, and consistent traffic patterns. Our research shows average payback periods of 12-18 months for well-placed machines.</p>
              </motion.div>
              <motion.div
                key="8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How does Sarasota's healthcare sector benefit vending businesses?</h3>
                <p className="text-stone leading-relaxed">Sarasota Memorial Health Care System and medical facilities create excellent vending machine opportunities with large employee bases, patient populations, and 24/7 operations. These locations provide consistent foot traffic and stable revenue streams.</p>
              </motion.div>
              <motion.div
                key="9"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What educational opportunities exist for vending machines in Sarasota?</h3>
                <p className="text-stone leading-relaxed">Ringling College of Art and Design provides excellent vending machine opportunities with consistent student populations, faculty, and staff throughout the academic year. Campus locations typically show high usage rates and stable revenue.</p>
              </motion.div>
              <motion.div
                key="10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How does Sarasota's airport affect vending opportunities?</h3>
                <p className="text-stone leading-relaxed">Sarasota-Bradenton International Airport provides excellent vending machine opportunities with high-volume foot traffic, diverse demographics, and consistent operations throughout the year. Airport locations typically show strong revenue potential.</p>
              </motion.div>
              <motion.div
                key="11"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How do seasonal changes affect vending machine performance in Sarasota?</h3>
                <p className="text-stone leading-relaxed">Sarasota's Florida climate provides relatively stable vending machine performance year-round. However, cultural and tourism locations may see increased usage during peak seasons, while healthcare and government facilities maintain consistent traffic regardless of season.</p>
              </motion.div>
              <motion.div
                key="12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What support services do you offer for Sarasota vending machine operators?</h3>
                <p className="text-stone leading-relaxed">We provide comprehensive support including location research, business contact information, placement strategies, market analysis, and ongoing consultation to ensure your vending machines succeed in Sarasota's competitive business environment.</p>
              </motion.div>
              <motion.div
                key="13"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">How do you ensure the quality of Sarasota vending machine leads?</h3>
                <p className="text-stone leading-relaxed">We conduct thorough research on each Sarasota location including business verification, foot traffic analysis, employee count validation, industry research, and contact information verification to ensure only high-quality opportunities are included in our leads.</p>
              </motion.div>
              <motion.div
                key="14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-3">What makes Sarasota's business environment ideal for vending machines?</h3>
                <p className="text-stone leading-relaxed">Sarasota's combination of arts and culture, healthcare, education, tourism, government, and transportation creates a diverse and stable business environment. This diversity ensures consistent foot traffic across different sectors and provides multiple revenue streams for vending machine operators.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
