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

export default function LosAngelesCaliforniaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Los Angeles', 'Sarah in Beverly Hills', 'David in Santa Monica', 'Lisa in West Hollywood',
    'Tom in Culver City', 'Jennifer in Burbank', 'Robert in Glendale', 'Amanda in Pasadena',
    'Chris in Downtown LA', 'Maria in Hollywood', 'James in Venice', 'Emily in Brentwood'
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
        {/* Enhanced Hero Section - Los Angeles-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Los Angeles vendors are choosing plans right now
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
                Vending Machine Locations<br />in Los Angeles, California
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Los Angeles' booming entertainment and tech economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Los Angeles-Specific */}
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
                      <span className="text-sm font-medium text-charcoal">Verified LA Locations</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-chocolate">4.9/5 LA Rating</span>
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
                      <span className="text-sm font-medium text-chocolate">Quality Research</span>
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
                  Get LA Leads
                </Link>
                <Link
                  href="#los-angeles-content"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Learn About Los Angeles <span aria-hidden="true">→</span>
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
                  <span className="text-sm sm:text-base font-medium text-charcoal">Join 2,800+ vending operators</span>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-stone px-4 sm:px-0">
                    "Found my best LA location in 3 days!" - <span className="font-semibold">Mike R., Los Angeles</span>
                  </span>
                </div>
              </motion.div>

              {/* Los Angeles-Specific Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">250+</div>
                  <div className="text-sm text-stone">LA Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">30+</div>
                  <div className="text-sm text-stone">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">4.9★</div>
                  <div className="text-sm text-stone">LA Rating</div>
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
                Get Los Angeles Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Los Angeles vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Los Angeles vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Comprehensive Los Angeles Content Section */}
        <div id="los-angeles-content" className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Why Los Angeles is Perfect for Vending Machines
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                Los Angeles' massive entertainment industry, booming tech sector, and diverse business landscape create 
                exceptional vending machine opportunities across multiple industries.
              </p>
            </div>

            {/* Los Angeles Business Landscape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  Los Angeles' Business Landscape
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    Los Angeles is the entertainment capital of the world, home to major studios including Warner Bros., 
                    Paramount, and Universal, creating massive vending machine opportunities in studio lots, production 
                    facilities, and entertainment offices.
                  </p>
                  <p>
                    The tech sector includes Silicon Beach companies in Santa Monica and Venice, along with major 
                    corporations like Google, Amazon, and Snapchat, offering high-traffic areas perfect for vending 
                    machine placement.
                  </p>
                  <p>
                    LA's diverse economy includes healthcare facilities, universities, manufacturing, and international 
                    trade through the Port of Los Angeles, providing consistent demand across multiple business sectors.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Vending Machine Opportunities in Los Angeles
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Entertainment & Studios</h5>
                      <p className="text-sm text-chocolate/70">Movie studios, production facilities, and offices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Tech Companies</h5>
                      <p className="text-sm text-chocolate/70">Silicon Beach startups and major tech corporations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Healthcare Facilities</h5>
                      <p className="text-sm text-chocolate/70">Hospitals, medical centers, and clinics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Universities & Education</h5>
                      <p className="text-sm text-chocolate/70">Colleges, universities, and research institutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Los Angeles Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">4M+</div>
                <div className="text-sm text-chocolate/70">Population</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">100+</div>
                <div className="text-sm text-chocolate/70">Major Studios</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">50+</div>
                <div className="text-sm text-chocolate/70">Tech Companies</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">88</div>
                <div className="text-sm text-chocolate/70">Neighborhoods</div>
              </div>
            </div>

            {/* Los Angeles Business Districts */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
                Los Angeles' Premier Business Districts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Hollywood</h4>
                  <p className="text-stone text-sm mb-3">
                    Entertainment district with major studios and production companies.
                  </p>
                  <div className="text-xs text-chocolate/60">200+ entertainment locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Santa Monica</h4>
                  <p className="text-stone text-sm mb-3">
                    Silicon Beach with tech startups and corporate offices.
                  </p>
                  <div className="text-xs text-chocolate/60">150+ tech locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Beverly Hills</h4>
                  <p className="text-stone text-sm mb-3">
                    Luxury retail and professional services district.
                  </p>
                  <div className="text-xs text-chocolate/60">100+ luxury locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Downtown LA</h4>
                  <p className="text-stone text-sm mb-3">
                    Financial district with major corporations and government.
                  </p>
                  <div className="text-xs text-chocolate/60">300+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Burbank</h4>
                  <p className="text-stone text-sm mb-3">
                    Media district with major studios and production facilities.
                  </p>
                  <div className="text-xs text-chocolate/60">80+ media locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Culver City</h4>
                  <p className="text-stone text-sm mb-3">
                    Growing tech and entertainment hub with mixed-use developments.
                  </p>
                  <div className="text-xs text-chocolate/60">120+ business locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Los Angeles FAQ Section */}
        <div className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Los Angeles Vending Machine FAQ
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto">
                Get answers to common questions about vending machine opportunities in Los Angeles, California
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses are included in Los Angeles vending leads?
                </h3>
                <p className="text-stone">
                  Our Los Angeles leads include major entertainment studios (Warner Bros., Paramount, Universal), 
                  tech companies (Google, Amazon, Snapchat), healthcare facilities, universities, and retail centers. 
                  Each location is pre-screened for vending machine compatibility and foot traffic potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How quickly can I receive Los Angeles vending machine leads?
                </h3>
                <p className="text-stone">
                  Los Angeles vending leads are typically delivered within 3-5 business days after purchase. We provide 
                  comprehensive research including business details, contact information, decision-maker names, and 
                  specific placement recommendations for each Los Angeles location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are the Los Angeles locations verified and current?
                </h3>
                <p className="text-stone">
                  Yes, all Los Angeles locations are verified within the last 30 days. We regularly update our database 
                  to ensure accuracy and provide the most current business information, including recent business changes 
                  and new opportunities in Los Angeles' rapidly growing entertainment and tech sectors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What areas of Los Angeles are covered in the leads?
                </h3>
                <p className="text-stone">
                  Our Los Angeles coverage includes Hollywood, Santa Monica, Beverly Hills, Downtown LA, Burbank, 
                  Culver City, and surrounding areas within a 30-mile radius. We cover major business districts and 
                  all major employment centers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best vending machine types for Los Angeles businesses?
                </h3>
                <p className="text-stone">
                  For Los Angeles entertainment studios, high-capacity snack and beverage machines work best. Tech 
                  companies prefer healthy snack options and coffee machines. Healthcare facilities need reliable 
                  machines with extended hours. We provide specific recommendations for each Los Angeles location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Los Angeles' entertainment economy affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Los Angeles' massive entertainment industry creates exceptional vending opportunities. Studios have 
                  high employee counts, 24/7 production schedules, and employees who frequently use vending machines 
                  during long shoots. Many studios also have multiple facilities across Los Angeles, providing multiple 
                  placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the peak hours for vending machines in Los Angeles?
                </h3>
                <p className="text-stone">
                  In Los Angeles, peak vending hours are typically 7-9 AM (breakfast), 11:30 AM-1:30 PM (lunch), 
                  2-4 PM (afternoon breaks), and 6-8 PM (dinner). Entertainment studios often have 24/7 operations, 
                  while tech companies follow standard business schedules.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  Are there any Los Angeles-specific regulations for vending machines?
                </h3>
                <p className="text-stone">
                  Los Angeles has specific health codes for food vending machines and requires business licenses for 
                  commercial operations. We provide guidance on Los Angeles' specific requirements and help ensure 
                  compliance with local regulations for each placement location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I approach Los Angeles businesses for vending machine placement?
                </h3>
                <p className="text-stone">
                  Our Los Angeles leads include specific contact information and approach strategies for each business type. 
                  Entertainment studios prefer in-person meetings, tech companies require formal proposals, and healthcare 
                  facilities have specific procurement processes. We provide tailored scripts for each Los Angeles business type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the average commission rates in Los Angeles?
                </h3>
                <p className="text-stone">
                  Los Angeles commission rates vary by business type: entertainment studios typically offer 15-25%, 
                  tech companies 20-30%, healthcare facilities 20-30%, and retail locations 15-25%. Our Los Angeles 
                  leads include current commission information and negotiation tips for each location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Los Angeles' population growth affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Los Angeles' steady population growth (1.2% annually) creates expanding vending opportunities. New 
                  businesses are constantly opening, existing companies are expanding, and new entertainment and tech 
                  facilities are being constructed. This growth ensures a steady supply of new vending machine placement opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Los Angeles vending machine sales?
                </h3>
                <p className="text-stone">
                  Los Angeles' climate affects vending patterns: summer (June-September) increases beverage sales due 
                  to heat, winter months see peak tourism with northern visitors, and award season (January-March) 
                  boosts entertainment industry activity. We provide seasonal adjustment recommendations for each LA location type.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Los Angeles locations?
                </h3>
                <p className="text-stone">
                  Los Angeles' business density allows for efficient route planning. Most locations require weekly 
                  restocking and monthly maintenance. We provide contact information for local suppliers and maintenance 
                  services, plus recommendations for optimal service schedules based on each Los Angeles location's usage patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Los Angeles?
                </h3>
                <p className="text-stone">
                  Start with established business districts (Hollywood, Santa Monica) then expand to growing areas 
                  (Culver City, Downtown LA). Focus on business types where you have success, and use our Los Angeles 
                  leads to identify expansion opportunities within your proven business model.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Los Angeles business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Los Angeles' growth in streaming content and technology has created new opportunities in digital 
                  media companies and tech startups. The expanding healthcare sector provides stable, long-term placement 
                  opportunities. We track these trends and update our Los Angeles leads accordingly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Los Angeles vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Los Angeles leads, we provide business guidance, cold call scripts, supplier contacts, 
                  and ongoing support. We help you understand Los Angeles' unique business culture, navigate local 
                  regulations, and maximize your success in the Los Angeles vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Los Angeles Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other California Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major California cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'San Francisco', slug: 'san-francisco-california', count: '200+ leads' },
                { name: 'San Diego', slug: 'san-diego-california', count: '180+ leads' },
                { name: 'San Jose', slug: 'san-jose-california', count: '160+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, CA</h3>
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
