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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function SaltLakeCityUtahVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Salt Lake City', 'Sarah in West Valley', 'David from Sandy', 'Lisa in West Jordan',
    'Tom in Murray', 'Jennifer in Draper', 'Robert from South Jordan', 'Amanda in Riverton',
    'Chris in Herriman', 'Maria in Taylorsville', 'James in Kearns', 'Emily in Magna'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 5
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
                Get pre-qualified vending machine locations in Salt Lake City's booming technology and healthcare economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Salt Lake City-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <CheckBadgeIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">110+ Verified Locations</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <StarIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Tech & Healthcare Hub</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Utah Compliant</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Get Salt Lake City Vending Leads
                </Link>
                <Link
                  href="#salt-lake-city-faq"
                  className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Learn More About Salt Lake City
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominent and Early */}
        <div className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Get Salt Lake City Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Salt Lake City vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Salt Lake City vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Salt Lake City-Specific Stats */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Salt Lake City Vending Machine Market Overview
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Discover why Salt Lake City is a prime location for vending machine businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-2">110+ Businesses</h3>
                <p className="text-stone text-sm">Pre-qualified locations ready for vending machines</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-2">160+ Employees</h3>
                <p className="text-stone text-sm">Average business size with high vending demand</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-2">Silicon Slopes</h3>
                <p className="text-stone text-sm">Tech corridor with 8,000+ tech companies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-lg font-bold text-chocolate mb-2">24/7 Operations</h3>
                <p className="text-stone text-sm">Healthcare and tech facilities with round-the-clock access</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Salt Lake City Business Landscape */}
        <div className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Salt Lake City Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Understanding Salt Lake City's unique business environment for vending machine success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-chocolate mb-6">Major Industries in Salt Lake City</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Technology & Software</h4>
                      <p className="text-stone text-sm">Silicon Slopes with Adobe, Qualtrics, and 8,000+ tech companies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Healthcare & Medical</h4>
                      <p className="text-stone text-sm">Intermountain Healthcare, University of Utah Health, and specialty clinics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Financial Services</h4>
                      <p className="text-stone text-sm">Goldman Sachs, Zions Bank, and regional financial institutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Education & Research</h4>
                      <p className="text-stone text-sm">University of Utah, Westminster College, and research institutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-chocolate mb-6">Salt Lake City Business Demographics</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Population Growth</h4>
                      <p className="text-stone text-sm">Rapid 3-4% annual growth with expanding business districts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Tech Workforce</h4>
                      <p className="text-stone text-sm">50,000+ tech professionals with high disposable income</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Healthcare Workers</h4>
                      <p className="text-stone text-sm">Large medical community with 24/7 operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Young Professionals</h4>
                      <p className="text-stone text-sm">Growing population of 25-40 year olds with high vending usage</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Salt Lake City Business Districts */}
        <div className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Salt Lake City Business Districts
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key areas in Salt Lake City with high vending machine potential
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Silicon Slopes</h3>
                <p className="text-stone text-sm mb-4">
                  Tech corridor with 8,000+ companies including Adobe, Qualtrics, and startups with high employee density.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Tech campuses, office buildings, startup spaces, innovation centers
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Medical District</h3>
                <p className="text-stone text-sm mb-4">
                  University of Utah Health and Intermountain Healthcare facilities with 24/7 operations and high staff counts.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Hospitals, medical offices, research facilities, staff lounges
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Downtown & Financial District</h3>
                <p className="text-stone text-sm mb-4">
                  Corporate offices, financial institutions, and government buildings with consistent business hours.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Office buildings, banks, government centers, professional services
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Comprehensive Salt Lake City FAQ Section */}
        <div className="bg-cream py-16" id="salt-lake-city-faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Salt Lake City Vending Machine FAQ
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get answers to common questions about vending machine opportunities in Salt Lake City
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive Salt Lake City vending machine leads?
                </h3>
                <p className="text-stone">
                  Salt Lake City vending leads are typically delivered within 3-5 business days after purchase. We provide comprehensive 
                  research including business details, contact information, decision-maker names, and specific placement recommendations 
                  for each Salt Lake City location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the Salt Lake City locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all Salt Lake City locations are verified within the last 30 days. We regularly update our database to ensure 
                  accuracy and provide the most current business information, including recent business changes and new opportunities 
                  in Salt Lake City's growing economy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of Salt Lake City are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our Salt Lake City coverage includes Downtown, Silicon Slopes, Medical District, Sugar House, Cottonwood Heights, 
                  and surrounding suburbs within a 20-mile radius. We cover major business districts, tech campuses, medical facilities, 
                  and all major employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Salt Lake City businesses?
                </h3>
                <p className="text-stone">
                  For tech companies, high-capacity snack and beverage machines work best. Healthcare facilities prefer healthy snack 
                  options and coffee machines. Financial institutions need reliable snack and drink machines. We provide specific 
                  recommendations for each Salt Lake City location based on business type and employee demographics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Salt Lake City's tech economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Salt Lake City's tech economy creates exceptional vending opportunities. Silicon Slopes has 8,000+ tech companies 
                  with 50,000+ employees, creating high demand for vending services. Tech companies operate with flexible hours and 
                  high employee density, providing stable, long-term vending opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in Salt Lake City?
                </h3>
                <p className="text-stone">
                  In Salt Lake City, peak vending hours are typically 7-9 AM (coffee/breakfast), 11:30 AM-1:30 PM (lunch), 
                  2-4 PM (afternoon snacks), and 5-7 PM (evening). Tech companies have extended hours, while 
                  healthcare facilities have consistent demand throughout the day and night.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any Salt Lake City-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  Salt Lake City follows Utah state regulations for vending machines, requiring food service permits and health 
                  department inspections. We provide guidance on Utah-specific requirements and help ensure compliance with 
                  local regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Salt Lake City businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our Salt Lake City leads include specific contact information and approach strategies for each business type. 
                  Tech companies prefer email communication, healthcare facilities require formal proposals, and financial institutions 
                  respond well to professional presentations. We provide tailored scripts for each Salt Lake City business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in Salt Lake City?
                </h3>
                <p className="text-stone">
                  Salt Lake City commission rates vary by business type: tech companies typically offer 15-25%, healthcare 
                  facilities 20-30%, financial institutions 15-25%, and retail locations 10-20%. Our Salt Lake City leads include current 
                  commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Salt Lake City's population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Salt Lake City's rapid population growth (3-4% annually) creates expanding vending opportunities. The tech sector 
                  continues to grow, new healthcare facilities are opening, and the financial sector is expanding. This growth ensures 
                  a steady supply of new vending machine placement opportunities in Salt Lake City.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Salt Lake City vending machine sales?
                </h3>
                <p className="text-stone">
                  Salt Lake City's climate affects vending patterns: summer (June-August) increases beverage sales, winter months 
                  boost hot beverage demand, and tech companies see consistent usage year-round. We provide 
                  seasonal adjustment recommendations for each Salt Lake City location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Salt Lake City locations?
                </h3>
                <p className="text-stone">
                  Salt Lake City's business density allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, plus 
                  recommendations for optimal service schedules based on each Salt Lake City location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Salt Lake City?
                </h3>
                <p className="text-sm">
                  Start with Silicon Slopes and the Medical District, then expand to Downtown and surrounding suburbs. Focus on 
                  business types where you have success, and use our Salt Lake City leads to identify expansion opportunities within 
                  your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Salt Lake City business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Salt Lake City's growing tech sector and expanding healthcare industry provide stable, long-term placement opportunities. 
                  The financial sector continues to grow, creating new vending locations. We track these trends and update our Salt Lake City 
                  leads accordingly to reflect current business realities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Salt Lake City vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Salt Lake City leads, we provide business guidance, cold call scripts, supplier contacts, and ongoing support. 
                  We help you understand Salt Lake City's unique business culture, navigate local regulations, and maximize your success 
                  in the Salt Lake City vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Salt Lake City Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Utah Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Utah cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Provo', slug: 'provo-utah', count: '80+ leads' },
                { name: 'West Valley City', slug: 'west-valley-city-utah', count: '70+ leads' },
                { name: 'Sandy', slug: 'sandy-utah', count: '60+ leads' },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/vending-leads/${city.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-navy/30 transition-colors hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, UT</h3>
                  </div>
                  <p className="text-stone mb-4">{city.count} available</p>
                  <div className="text-navy hover:text-navy-light font-medium">
                    View {city.name} vending leads →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Zip Code Modal */}
      <ZipCodeModalWrapper />
    </>
  )
}
