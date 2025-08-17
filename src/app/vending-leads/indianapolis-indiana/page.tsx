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

export default function IndianapolisIndianaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Indianapolis', 'Sarah in Carmel', 'David from Fishers', 'Lisa in Noblesville',
    'Tom in Greenwood', 'Jennifer in Avon', 'Robert from Plainfield', 'Amanda in Zionsville',
    'Chris in Brownsburg', 'Maria in Westfield', 'James in Lawrence', 'Emily in Speedway'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 7
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
        {/* Enhanced Hero Section - Indianapolis-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Indianapolis vendors are choosing plans right now
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
                Vending Machine Locations<br />in Indianapolis, Indiana
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Indianapolis' fastest-growing Midwest economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Indianapolis-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <CheckBadgeIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">160+ Verified Locations</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <StarIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Tech & Healthcare Hub</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Indiana Compliant</span>
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
                  Get Indianapolis Vending Leads
                </Link>
                <Link
                  href="#indianapolis-faq"
                  className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Learn More About Indianapolis
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
                Get Indianapolis Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Indianapolis vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Indianapolis vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Indianapolis-Specific Stats */}
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
                Indianapolis Vending Machine Market Overview
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Discover why Indianapolis is a prime location for vending machine businesses
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
                <h3 className="text-lg font-bold text-chocolate mb-2">160+ Businesses</h3>
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
                <h3 className="text-lg font-bold text-chocolate mb-2">220+ Employees</h3>
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
                <h3 className="text-lg font-bold text-chocolate mb-2">Sports Capital</h3>
                <p className="text-stone text-sm">Major sports venues and entertainment districts</p>
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
                <p className="text-stone text-sm">Healthcare and logistics facilities with round-the-clock access</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indianapolis Business Landscape */}
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
                Indianapolis Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Understanding Indianapolis' unique business environment for vending machine success
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
                <h3 className="text-2xl font-bold text-chocolate mb-6">Major Industries in Indianapolis</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Technology & Innovation</h4>
                      <p className="text-stone text-sm">Growing tech sector with major companies and startups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Healthcare & Life Sciences</h4>
                      <p className="text-stone text-sm">Eli Lilly, IU Health, and major medical centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Sports & Entertainment</h4>
                      <p className="text-stone text-sm">Colts, Pacers, and major sports venues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Logistics & Distribution</h4>
                      <p className="text-stone text-sm">Major shipping hub and distribution centers</p>
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
                <h3 className="text-2xl font-bold text-chocolate mb-6">Indianapolis Business Demographics</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Population Growth</h4>
                      <p className="text-stone text-sm">Fastest-growing major city in the Midwest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Tech Professionals</h4>
                      <p className="text-stone text-sm">Growing tech workforce with modern office spaces</p>
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
                      <h4 className="font-semibold text-chocolate">Sports & Entertainment</h4>
                      <p className="text-stone text-sm">Event staff and venue operations personnel</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indianapolis Business Districts */}
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
                Indianapolis Business Districts
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key areas in Indianapolis with high vending machine potential
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
                <h3 className="text-xl font-bold text-chocolate mb-4">Downtown & Tech District</h3>
                <p className="text-stone text-sm mb-4">
                  Major tech companies, corporate offices, and modern business facilities with high employee density.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Tech offices, corporate buildings, co-working spaces, retail areas
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
                  Major healthcare facilities with 24/7 operations and high staff counts.
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
                <h3 className="text-xl font-bold text-chocolate mb-4">Sports & Entertainment District</h3>
                <p className="text-stone text-sm mb-4">
                  Major sports venues, entertainment facilities, and event spaces with high visitor traffic.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Stadiums, arenas, event centers, entertainment venues
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Comprehensive Indianapolis FAQ Section */}
        <div className="bg-cream py-16" id="indianapolis-faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Indianapolis Vending Machine FAQ
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get answers to common questions about vending machine opportunities in Indianapolis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive Indianapolis vending machine leads?
                </h3>
                <p className="text-stone">
                  Indianapolis vending leads are typically delivered within 3-5 business days after purchase. We provide comprehensive 
                  research including business details, contact information, decision-maker names, and specific placement recommendations 
                  for each Indianapolis location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the Indianapolis locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all Indianapolis locations are verified within the last 30 days. We regularly update our database to ensure 
                  accuracy and provide the most current business information, including recent business changes and new opportunities 
                  in Indianapolis' growing economy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of Indianapolis are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our Indianapolis coverage includes Downtown, Midtown, Broad Ripple, Carmel, Fishers, and surrounding suburbs 
                  within a 25-mile radius. We cover major business districts, tech companies, medical facilities, and all major 
                  employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Indianapolis businesses?
                </h3>
                <p className="text-stone">
                  For tech companies, healthy snack and beverage machines work best. Healthcare facilities prefer healthy snack 
                  options and coffee machines. Sports venues need high-capacity machines. We provide specific recommendations 
                  for each Indianapolis location based on business type and employee demographics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Indianapolis' tech economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Indianapolis' growing tech economy creates exceptional vending opportunities. Tech companies have modern office 
                  spaces, high employee counts, and employees who frequently use vending machines. The tech sector continues to 
                  expand, providing new placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in Indianapolis?
                </h3>
                <p className="text-stone">
                  In Indianapolis, peak vending hours are typically 8-10 AM (coffee/breakfast), 11:30 AM-1:30 PM (lunch), 
                  2-4 PM (afternoon snacks), and 5-7 PM (evening). Tech companies have consistent business hours, while 
                  healthcare facilities have 24/7 operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any Indianapolis-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  Indianapolis follows Indiana state regulations for vending machines, requiring food service permits and health 
                  department inspections. We provide guidance on Indiana-specific requirements and help ensure compliance with 
                  local regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Indianapolis businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our Indianapolis leads include specific contact information and approach strategies for each business type. 
                  Tech companies prefer email communication, healthcare facilities require formal proposals, and sports venues 
                  respond well to in-person visits. We provide tailored scripts for each Indianapolis business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in Indianapolis?
                </h3>
                <p className="text-stone">
                  Indianapolis commission rates vary by business type: tech companies typically offer 15-25%, healthcare 
                  facilities 20-30%, sports venues 10-20%, and corporate offices 15-25%. Our Indianapolis leads include current 
                  commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Indianapolis' population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Indianapolis' rapid population growth (fastest in Midwest) creates expanding vending opportunities. New businesses 
                  are constantly opening, existing companies are expanding, and new office buildings are being constructed. This 
                  growth ensures a steady supply of new vending machine placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Indianapolis vending machine sales?
                </h3>
                <p className="text-stone">
                  Indianapolis' climate affects vending patterns: summer (June-August) increases beverage sales, winter months 
                  boost hot beverage demand, and sports venues see seasonal variations with event schedules. We provide seasonal 
                  adjustment recommendations for each Indianapolis location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Indianapolis locations?
                </h3>
                <p className="text-stone">
                  Indianapolis' business density allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, plus 
                  recommendations for optimal service schedules based on each Indianapolis location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Indianapolis?
                </h3>
                <p className="text-stone">
                  Start with the Downtown Tech District and Medical District, then expand to surrounding suburbs. Focus on 
                  business types where you have success, and use our Indianapolis leads to identify expansion opportunities 
                  within your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Indianapolis business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Indianapolis' growing tech sector and expanding healthcare industry provide stable, long-term placement opportunities. 
                  The sports and entertainment sector continues to grow, creating new vending locations. We track these trends and 
                  update our Indianapolis leads accordingly to reflect current business realities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Indianapolis vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Indianapolis leads, we provide business guidance, cold call scripts, supplier contacts, and ongoing support. 
                  We help you understand Indianapolis' unique business culture, navigate local regulations, and maximize your success 
                  in the Indianapolis vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Indianapolis Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Indiana Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Indiana cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Fort Wayne', slug: 'fort-wayne-indiana', count: '100+ leads' },
                { name: 'Evansville', slug: 'evansville-indiana', count: '80+ leads' },
                { name: 'South Bend', slug: 'south-bend-indiana', count: '90+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, IN</h3>
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
