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

export default function AustinTexasVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Austin', 'Sarah in Round Rock', 'David from Cedar Park', 'Lisa in Georgetown',
    'Tom from Leander', 'Jennifer in Pflugerville', 'Robert from Kyle', 'Amanda in Buda',
    'Chris in San Marcos', 'Maria in New Braunfels', 'James in San Antonio', 'Emily in Houston'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
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
        {/* Enhanced Hero Section - Austin-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Austin vendors are choosing plans right now
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
                Vending Machine Locations<br />in Austin, Texas
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Austin's booming tech economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Austin-Specific */}
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
                      <span className="text-sm font-medium text-charcoal">Verified Austin Locations</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-charcoal">4.9/5 Austin Rating</span>
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
                  Get Austin Leads
                </Link>
                <Link
                  href="#austin-content"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Learn About Austin <span aria-hidden="true">→</span>
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
                  <span className="text-sm sm:text-base font-medium text-charcoal">Join 2,847+ vending operators</span>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-stone px-4 sm:px-0">
                    "Found my best Austin location in 3 days!" - <span className="font-semibold">Mike R., Austin</span>
                  </span>
                </div>
              </motion.div>

              {/* Austin-Specific Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">200+</div>
                  <div className="text-sm text-stone">Austin Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">15+</div>
                  <div className="text-sm text-stone">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">4.9★</div>
                  <div className="text-sm text-stone">Austin Rating</div>
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
                Get Austin Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Austin vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Austin vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Comprehensive Austin Content Section */}
        <div id="austin-content" className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Why Austin is Perfect for Vending Machines
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                Austin's unique combination of tech innovation, educational excellence, and healthcare growth creates 
                exceptional vending machine opportunities across diverse business sectors.
              </p>
            </div>

            {/* Austin Business Landscape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  Austin's Business Landscape
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    Austin is home to over 5,000 technology companies, including major corporations like Dell, 
                    IBM, and Apple, creating a massive workforce of tech professionals who frequent vending machines 
                    throughout the workday.
                  </p>
                  <p>
                    The University of Texas at Austin, with over 50,000 students and 3,000 faculty members, 
                    provides consistent demand for snacks and beverages across multiple campus locations and 
                    surrounding student housing areas.
                  </p>
                  <p>
                    Austin's healthcare sector includes major facilities like St. David's Medical Center, 
                    Seton Medical Center, and Dell Children's Medical Center, offering high-traffic areas 
                    perfect for vending machine placement.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Vending Machine Opportunities in Austin
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Tech Company Offices</h5>
                      <p className="text-sm text-chocolate/70">High-traffic corporate environments with modern amenities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">University Campus</h5>
                      <p className="text-sm text-chocolate/70">Student centers, libraries, and academic buildings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Healthcare Facilities</h5>
                      <p className="text-sm text-chocolate/70">Hospitals, clinics, and medical office buildings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Government Buildings</h5>
                      <p className="text-sm text-chocolate/70">State capitol complex and municipal offices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Austin Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">978,000+</div>
                <div className="text-sm text-chocolate/70">Population</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">5,000+</div>
                <div className="text-sm text-chocolate/70">Tech Companies</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">50,000+</div>
                <div className="text-sm text-chocolate/70">UT Students</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">15+</div>
                <div className="text-sm text-chocolate/70">Major Hospitals</div>
              </div>
            </div>

            {/* Austin Business Districts */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
                Austin's Premier Business Districts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Downtown Austin</h4>
                  <p className="text-stone text-sm mb-3">
                    Financial district with major corporations, government buildings, and high-rise offices.
                  </p>
                  <div className="text-xs text-chocolate/60">200+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">University District</h4>
                  <p className="text-stone text-sm mb-3">
                    UT campus area with student centers, libraries, and academic buildings.
                  </p>
                  <div className="text-xs text-chocolate/60">150+ campus locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Tech Corridor</h4>
                  <p className="text-stone text-sm mb-3">
                    North Austin tech hub with major corporations and startup offices.
                  </p>
                  <div className="text-xs text-chocolate/60">300+ tech companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Medical District</h4>
                  <p className="text-stone text-sm mb-3">
                    Healthcare facilities and medical office buildings in central Austin.
                  </p>
                  <div className="text-xs text-chocolate/60">50+ medical facilities</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">East Austin</h4>
                  <p className="text-stone text-sm mb-3">
                    Growing business district with manufacturing and industrial facilities.
                  </p>
                  <div className="text-xs text-chocolate/60">100+ industrial locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">South Austin</h4>
                  <p className="text-stone text-sm mb-3">
                    Retail and entertainment district with shopping centers and restaurants.
                  </p>
                  <div className="text-xs text-chocolate/60">120+ retail locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Austin FAQ Section */}
        <div className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Austin Vending Machine FAQ
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto">
                Get answers to common questions about vending machine opportunities in Austin, Texas
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses are included in Austin vending leads?
                </h3>
                <p className="text-stone">
                  Our Austin leads include tech companies (Dell, IBM, Apple), healthcare facilities (St. David's, Seton), 
                  educational institutions (UT Austin), government buildings (State Capitol), retail centers, and manufacturing 
                  facilities. Each location is pre-screened for vending machine compatibility and foot traffic potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive Austin vending machine leads?
                </h3>
                <p className="text-stone">
                  Austin vending leads are typically delivered within 3-5 business days after purchase. We provide comprehensive 
                  research including business details, contact information, decision-maker names, and specific placement recommendations 
                  for each Austin location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the Austin locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all Austin locations are verified within the last 30 days. We regularly update our database to ensure 
                  accuracy and provide the most current business information, including recent business changes and new opportunities 
                  in Austin's rapidly growing economy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of Austin are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our Austin coverage includes Downtown, East Austin, North Austin, South Austin, West Austin, and surrounding 
                  suburbs within a 20-mile radius. We cover major business districts like the Tech Corridor, Medical District, 
                  University District, and all major employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Austin businesses?
                </h3>
                <p className="text-stone">
                  For Austin tech companies, snack and beverage machines work best. Healthcare facilities prefer healthy snack 
                  options and coffee machines. University locations need high-capacity snack and drink machines. We provide 
                  specific recommendations for each Austin location based on business type and employee demographics.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Austin's tech economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Austin's booming tech economy creates exceptional vending opportunities. Tech companies have high employee 
                  counts, modern office spaces, and employees who frequently use vending machines. Many tech companies also 
                  have multiple office locations across Austin, providing multiple placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in Austin?
                </h3>
                <p className="text-stone">
                  In Austin, peak vending hours are typically 8-10 AM (coffee/breakfast), 11:30 AM-1:30 PM (lunch), 
                  2-4 PM (afternoon snacks), and 5-7 PM (evening). Tech companies often have 24/7 operations, while 
                  healthcare facilities have consistent demand throughout the day and night.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any Austin-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  Austin has specific health codes for food vending machines and requires business licenses for commercial 
                  operations. We provide guidance on Austin's specific requirements and help ensure compliance with local 
                  regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Austin businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our Austin leads include specific contact information and approach strategies for each business type. 
                  Tech companies prefer email communication, healthcare facilities require formal proposals, and retail 
                  locations respond well to in-person visits. We provide tailored scripts for each Austin business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in Austin?
                </h3>
                <p className="text-stone">
                  Austin commission rates vary by business type: tech companies typically offer 15-25%, healthcare 
                  facilities 20-30%, retail locations 10-20%, and educational institutions 15-25%. Our Austin leads 
                  include current commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Austin's population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Austin's rapid population growth (3% annually) creates expanding vending opportunities. New businesses 
                  are constantly opening, existing companies are expanding, and new office buildings are being constructed. 
                  This growth ensures a steady supply of new vending machine placement opportunities in Austin.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Austin vending machine sales?
                </h3>
                <p className="text-stone">
                  Austin's climate affects vending patterns: summer (May-September) increases beverage sales, winter 
                  months boost hot beverage demand, and university locations see seasonal variations with academic 
                  calendars. We provide seasonal adjustment recommendations for each Austin location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Austin locations?
                </h3>
                <p className="text-stone">
                  Austin's business density allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, 
                  plus recommendations for optimal service schedules based on each Austin location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Austin?
                </h3>
                <p className="text-stone">
                  Start with established business districts (Downtown, Tech Corridor) then expand to growing areas 
                  (East Austin, South Austin). Focus on business types where you have success, and use our Austin 
                  leads to identify expansion opportunities within your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Austin business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Austin's shift toward remote work has created new opportunities in suburban office parks and 
                  co-working spaces. The growing healthcare sector provides stable, long-term placement opportunities. 
                  We track these trends and update our Austin leads accordingly to reflect current business realities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Austin vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Austin leads, we provide business guidance, cold call scripts, supplier contacts, 
                  and ongoing support. We help you understand Austin's unique business culture, navigate local 
                  regulations, and maximize your success in the Austin vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Austin Locations */}
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
                { name: 'Dallas', slug: 'dallas-texas', count: '180+ leads' },
                { name: 'Houston', slug: 'houston-texas', count: '200+ leads' },
                { name: 'San Antonio', slug: 'san-antonio-texas', count: '120+ leads' },
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
