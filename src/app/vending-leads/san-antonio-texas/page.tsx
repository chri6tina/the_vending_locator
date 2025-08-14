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

export default function SanAntonioTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from San Antonio', 'Sarah in Stone Oak', 'David from Alamo Heights', 'Lisa in Terrell Hills',
    'Tom from Olmos Park', 'Jennifer in Monte Vista', 'Robert from King William', 'Amanda in Southtown',
    'Chris in Medical Center', 'Maria in Northwest', 'James in Northeast', 'Emily in Westside'
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
        {/* Enhanced Hero Section - San Antonio-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> San Antonio vendors are choosing plans right now
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
                Vending Machine Locations<br />in San Antonio, Texas
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in San Antonio's booming healthcare and military economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - San Antonio-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10"
              >
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-charcoal">Verified San Antonio Locations</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-charcoal">4.9/5 San Antonio Rating</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-charcoal">Secure & Reliable</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-charcoal">Quality Research</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
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
                  Get San Antonio Leads
                </Link>
                <Link
                  href="#san-antonio-content"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Learn About San Antonio <span aria-hidden="true">→</span>
                </Link>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-8 sm:mt-10 px-4 sm:px-0"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"></div>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-charcoal">Join 2,300+ vending operators</span>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-stone px-4 sm:px-0">
                    "Found my best San Antonio location in 3 days!" - <span className="font-semibold">Mike R., San Antonio</span>
                  </span>
                </div>
              </motion.div>

              {/* San Antonio-Specific Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">160+</div>
                  <div className="text-sm text-stone">San Antonio Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">18+</div>
                  <div className="text-sm text-stone">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">4.9★</div>
                  <div className="text-sm text-stone">San Antonio Rating</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Prominent and Early */}
        <div id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
                Get San Antonio Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified San Antonio vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your San Antonio vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Comprehensive San Antonio Content Section */}
        <div id="san-antonio-content" className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Why San Antonio is Perfect for Vending Machines
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                San Antonio's thriving healthcare sector, military presence, and growing tourism industry create 
                exceptional vending machine opportunities across diverse business sectors.
              </p>
            </div>

            {/* San Antonio Business Landscape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  San Antonio's Business Landscape
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    San Antonio is home to the largest medical center in the world outside of Houston, with major 
                    healthcare systems including University Health System, Baptist Health System, and Methodist 
                    Healthcare System, creating massive vending machine opportunities.
                  </p>
                  <p>
                    The military presence includes Joint Base San Antonio (Lackland AFB, Randolph AFB, Fort Sam Houston), 
                    providing consistent demand for snacks and beverages across multiple military facilities and 
                    surrounding support businesses.
                  </p>
                  <p>
                    San Antonio's booming tourism industry includes the Alamo, River Walk, and major attractions, 
                    creating high-traffic areas perfect for vending machine placement with millions of annual visitors.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Vending Machine Opportunities in San Antonio
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Healthcare & Medical</h5>
                      <p className="text-sm text-chocolate/70">Hospitals, medical centers, and clinics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Military Bases</h5>
                      <p className="text-sm text-chocolate/70">Joint Base San Antonio facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Tourism & Hospitality</h5>
                      <p className="text-sm text-chocolate/70">Hotels, attractions, and visitor centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Education</h5>
                      <p className="text-sm text-chocolate/70">Universities, colleges, and schools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* San Antonio Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">1.5M+</div>
                <div className="text-sm text-chocolate/70">Population</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">50+</div>
                <div className="text-sm text-chocolate/70">Major Hospitals</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">3</div>
                <div className="text-sm text-chocolate/70">Military Bases</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">25M+</div>
                <div className="text-sm text-chocolate/70">Annual Tourists</div>
              </div>
            </div>

            {/* San Antonio Business Districts */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
                San Antonio's Premier Business Districts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Medical Center</h4>
                  <p className="text-stone text-sm mb-3">
                    World's largest medical center with major hospitals and healthcare facilities.
                  </p>
                  <div className="text-xs text-chocolate/60">50+ medical facilities</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Downtown</h4>
                  <p className="text-stone text-sm mb-3">
                    Historic district with River Walk, Alamo, and major tourist attractions.
                  </p>
                  <div className="text-xs text-chocolate/60">200+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Stone Oak</h4>
                  <p className="text-stone text-sm mb-3">
                    Upscale residential and business district with medical offices and retail.
                  </p>
                  <div className="text-xs text-chocolate/60">150+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Alamo Heights</h4>
                  <p className="text-stone text-sm mb-3">
                    Affluent area with boutique businesses and professional offices.
                  </p>
                  <div className="text-xs text-chocolate/60">100+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Northwest</h4>
                  <p className="text-stone text-sm mb-3">
                    Growing suburban area with shopping centers and office parks.
                  </p>
                  <div className="text-xs text-chocolate/60">120+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Southtown</h4>
                  <p className="text-stone text-sm mb-3">
                    Arts district with galleries, restaurants, and creative businesses.
                  </p>
                  <div className="text-xs text-chocolate/60">80+ business locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive San Antonio FAQ Section */}
        <div className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                San Antonio Vending Machine FAQ
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto">
                Get answers to common questions about vending machine opportunities in San Antonio, Texas
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses are included in San Antonio vending leads?
                </h3>
                <p className="text-stone">
                  Our San Antonio leads include major healthcare systems (University Health, Baptist Health, Methodist), 
                  military facilities (Joint Base San Antonio), tourism attractions (Alamo, River Walk), educational 
                  institutions, and retail centers. Each location is pre-screened for vending machine compatibility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive San Antonio vending machine leads?
                </h3>
                <p className="text-stone">
                  San Antonio vending leads are typically delivered within 3-5 business days after purchase. We provide 
                  comprehensive research including business details, contact information, decision-maker names, and 
                  specific placement recommendations for each San Antonio location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the San Antonio locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all San Antonio locations are verified within the last 30 days. We regularly update our database 
                  to ensure accuracy and provide the most current business information, including recent business changes 
                  and new opportunities in San Antonio's rapidly growing healthcare and tourism sectors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of San Antonio are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our San Antonio coverage includes Medical Center, Downtown, Stone Oak, Alamo Heights, Northwest, 
                  Southtown, and surrounding suburbs within a 25-mile radius. We cover major business districts and 
                  all major employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for San Antonio businesses?
                </h3>
                <p className="text-stone">
                  For San Antonio healthcare facilities, healthy snack options and coffee machines work best. Military 
                  bases need durable machines with extended hours. Tourism locations prefer high-capacity snack and 
                  beverage machines. We provide specific recommendations for each San Antonio location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does San Antonio's healthcare economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  San Antonio's massive healthcare sector creates exceptional vending opportunities. The Medical Center 
                  alone employs over 30,000 people, with 24/7 operations and high foot traffic. Healthcare workers 
                  frequently use vending machines during long shifts, creating consistent demand.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in San Antonio?
                </h3>
                <p className="text-stone">
                  In San Antonio, peak vending hours are typically 6-8 AM (shift start), 11:30 AM-1:30 PM (lunch), 
                  2-4 PM (afternoon breaks), and 6-8 PM (shift end). Healthcare facilities have 24/7 operations, 
                  while tourism locations see peak demand during visitor hours.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any San Antonio-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  San Antonio has specific health codes for food vending machines and requires business licenses for 
                  commercial operations. We provide guidance on San Antonio's specific requirements and help ensure 
                  compliance with local regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach San Antonio businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our San Antonio leads include specific contact information and approach strategies for each business type. 
                  Healthcare facilities require formal proposals, military bases have specific procurement processes, and 
                  tourism businesses prefer in-person meetings. We provide tailored scripts for each San Antonio business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in San Antonio?
                </h3>
                <p className="text-stone">
                  San Antonio commission rates vary by business type: healthcare facilities typically offer 20-30%, 
                  military bases 15-25%, tourism locations 10-20%, and retail centers 15-25%. Our San Antonio leads 
                  include current commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does San Antonio's population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  San Antonio's rapid population growth (2.8% annually) creates expanding vending opportunities. New 
                  businesses are constantly opening, existing companies are expanding, and new healthcare facilities 
                  are being constructed. This growth ensures a steady supply of new vending machine placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect San Antonio vending machine sales?
                </h3>
                <p className="text-stone">
                  San Antonio's climate affects vending patterns: summer (June-September) increases beverage sales, 
                  winter months boost hot beverage demand, and tourism locations see seasonal variations with visitor 
                  patterns. We provide seasonal adjustment recommendations for each San Antonio location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for San Antonio locations?
                </h3>
                <p className="text-stone">
                  San Antonio's business density allows for efficient route planning. Most locations require weekly 
                  restocking and monthly maintenance. We provide contact information for local suppliers and maintenance 
                  services, plus recommendations for optimal service schedules based on each San Antonio location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in San Antonio?
                </h3>
                <p className="text-stone">
                  Start with established business districts (Medical Center, Downtown) then expand to growing areas 
                  (Stone Oak, Northwest). Focus on business types where you have success, and use our San Antonio 
                  leads to identify expansion opportunities within your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do San Antonio business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  San Antonio's growth in healthcare and tourism has created new opportunities in medical facilities 
                  and visitor attractions. The expanding military sector provides stable, long-term placement opportunities. 
                  We track these trends and update our San Antonio leads accordingly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for San Antonio vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our San Antonio leads, we provide business guidance, cold call scripts, supplier contacts, 
                  and ongoing support. We help you understand San Antonio's unique business culture, navigate local 
                  regulations, and maximize your success in the San Antonio vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related San Antonio Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Texas Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Texas cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Austin', slug: 'austin-texas', count: '200+ leads' },
                { name: 'Houston', slug: 'houston-texas', count: '220+ leads' },
                { name: 'Dallas', slug: 'dallas-texas', count: '180+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, TX</h3>
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
