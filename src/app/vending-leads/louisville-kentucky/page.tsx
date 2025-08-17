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

export default function LouisvilleKentuckyVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Louisville', 'Sarah in Jeffersonville', 'David from New Albany', 'Lisa in Clarksville',
    'Tom in Shelbyville', 'Jennifer in La Grange', 'Robert from Bardstown', 'Amanda in Elizabethtown',
    'Chris in Shepherdsville', 'Maria in Mount Washington', 'James in Prospect', 'Emily in Goshen'
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
        {/* Enhanced Hero Section - Louisville-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Louisville vendors are choosing plans right now
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
                Vending Machine Locations<br />in Louisville, Kentucky
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Louisville's thriving healthcare and logistics economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Louisville-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <CheckBadgeIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">140+ Verified Locations</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <StarIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Healthcare & Logistics Hub</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <ShieldCheckIcon className="h-6 w-6 text-coral" />
                    <span className="text-sm font-medium text-chocolate">Kentucky Compliant</span>
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
                  Get Louisville Vending Leads
                </Link>
                <Link
                  href="#louisville-faq"
                  className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
                >
                  Learn More About Louisville
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
                Get Louisville Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Louisville vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Louisville vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Louisville-Specific Stats */}
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
                Louisville Vending Machine Market Overview
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Discover why Louisville is a prime location for vending machine businesses
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
                <h3 className="text-lg font-bold text-chocolate mb-2">140+ Businesses</h3>
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
                <h3 className="text-lg font-bold text-chocolate mb-2">200+ Employees</h3>
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
                <h3 className="text-lg font-bold text-chocolate mb-2">Medical District</h3>
                <p className="text-stone text-sm">Major healthcare facilities and medical centers</p>
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

        {/* Louisville Business Landscape */}
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
                Louisville Business Landscape
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Understanding Louisville's unique business environment for vending machine success
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
                <h3 className="text-2xl font-bold text-chocolate mb-6">Major Industries in Louisville</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Healthcare & Medical</h4>
                      <p className="text-stone text-sm">Norton Healthcare, Baptist Health, and major medical centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Logistics & Distribution</h4>
                      <p className="text-stone text-sm">UPS Worldport and major distribution centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Manufacturing</h4>
                      <p className="text-stone text-sm">Ford plants and industrial manufacturing facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Bourbon Industry</h4>
                      <p className="text-stone text-sm">Major bourbon distilleries and tourism facilities</p>
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
                <h3 className="text-2xl font-bold text-chocolate mb-6">Louisville Business Demographics</h3>
                <div className="space-y-4">
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
                      <h4 className="font-semibold text-chocolate">Logistics Personnel</h4>
                      <p className="text-stone text-sm">UPS Worldport and distribution center employees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Manufacturing Workers</h4>
                      <p className="text-stone text-sm">Ford plants and industrial facility employees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-chocolate">Tourism & Hospitality</h4>
                      <p className="text-stone text-sm">Bourbon tourism and hospitality industry workers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Louisville Business Districts */}
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
                Louisville Business Districts
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Key areas in Louisville with high vending machine potential
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
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Logistics & Distribution</h3>
                <p className="text-stone text-sm mb-4">
                  UPS Worldport and major distribution centers with large workforces.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Distribution centers, logistics facilities, employee break rooms
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold text-chocolate mb-4">Downtown & Business District</h3>
                <p className="text-stone text-sm mb-4">
                  Corporate offices, government buildings, and professional services with consistent business hours.
                </p>
                <div className="text-sm text-chocolate">
                  <strong>Vending Opportunities:</strong> Office buildings, government centers, professional services, retail areas
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Comprehensive Louisville FAQ Section */}
        <div className="bg-cream py-16" id="louisville-faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
                Louisville Vending Machine FAQ
              </h2>
              <p className="text-lg text-stone max-w-3xl mx-auto">
                Get answers to common questions about vending machine opportunities in Louisville
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive Louisville vending machine leads?
                </h3>
                <p className="text-stone">
                  Louisville vending leads are typically delivered within 3-5 business days after purchase. We provide comprehensive 
                  research including business details, contact information, decision-maker names, and specific placement recommendations 
                  for each Louisville location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the Louisville locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all Louisville locations are verified within the last 30 days. We regularly update our database to ensure 
                  accuracy and provide the most current business information, including recent business changes and new opportunities 
                  in Louisville's growing economy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of Louisville are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our Louisville coverage includes Downtown, Highlands, St. Matthews, Middletown, and surrounding suburbs within 
                  a 20-mile radius. We cover major business districts, medical facilities, distribution centers, and all major 
                  employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Louisville businesses?
                </h3>
                <p className="text-stone">
                  For healthcare facilities, healthy snack and coffee machines work best. Distribution centers need high-capacity 
                  snack and beverage machines. Corporate offices prefer reliable snack and drink machines. We provide specific 
                  recommendations for each Louisville location based on business type and employee demographics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Louisville's healthcare economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Louisville's healthcare economy creates exceptional vending opportunities. Major medical centers have large 
                  workforces, 24/7 operations, and high demand for vending services. The healthcare sector continues to expand, 
                  providing stable, long-term placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in Louisville?
                </h3>
                <p className="text-stone">
                  In Louisville, peak vending hours are typically 6-8 AM (first shift), 11:30 AM-1:30 PM (lunch), 2-4 PM 
                  (afternoon snacks), and 6-8 PM (second shift). Healthcare facilities have 24/7 operations, while distribution 
                  centers have multiple shifts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any Louisville-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  Louisville follows Kentucky state regulations for vending machines, requiring food service permits and health 
                  department inspections. We provide guidance on Kentucky-specific requirements and help ensure compliance with 
                  local regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Louisville businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our Louisville leads include specific contact information and approach strategies for each business type. 
                  Healthcare facilities require formal proposals, distribution centers prefer in-person visits, and corporate 
                  offices respond well to professional presentations. We provide tailored scripts for each Louisville business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in Louisville?
                </h3>
                <p className="text-stone">
                  Louisville commission rates vary by business type: healthcare facilities typically offer 25-35%, distribution 
                  centers 15-25%, manufacturing plants 20-30%, and corporate offices 15-25%. Our Louisville leads include current 
                  commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Louisville's population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Louisville's steady population growth creates expanding vending opportunities. New businesses are opening, 
                  existing companies are expanding, and the healthcare and logistics sectors continue to grow. This growth ensures 
                  a steady supply of new vending machine placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Louisville vending machine sales?
                </h3>
                <p className="text-stone">
                  Louisville's climate affects vending patterns: summer (June-August) increases beverage sales, winter months 
                  boost hot beverage demand, and healthcare facilities see consistent usage year-round. We provide seasonal 
                  adjustment recommendations for each Louisville location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Louisville locations?
                </h3>
                <p className="text-stone">
                  Louisville's business density allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, plus 
                  recommendations for optimal service schedules based on each Louisville location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Louisville?
                </h3>
                <p className="text-stone">
                  Start with the Medical District and Logistics District, then expand to Downtown and surrounding suburbs. 
                  Focus on business types where you have success, and use our Louisville leads to identify expansion opportunities 
                  within your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Louisville business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Louisville's growing healthcare sector and expanding logistics industry provide stable, long-term placement opportunities. 
                  The bourbon tourism sector continues to grow, creating new vending locations. We track these trends and update 
                  our Louisville leads accordingly to reflect current business realities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Louisville vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Louisville leads, we provide business guidance, cold call scripts, supplier contacts, and ongoing support. 
                  We help you understand Louisville's unique business culture, navigate local regulations, and maximize your success 
                  in the Louisville vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Louisville Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Kentucky Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Kentucky cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Lexington', slug: 'lexington-kentucky', count: '120+ leads' },
                { name: 'Bowling Green', slug: 'bowling-green-kentucky', count: '80+ leads' },
                { name: 'Owensboro', slug: 'owensboro-kentucky', count: '70+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, KY</h3>
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
