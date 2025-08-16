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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CloudIcon, MapIcon } from '@heroicons/react/24/outline'

export default function BoulderColoradoVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Boulder', 'Sarah in Pearl Street', 'David in University Hill', 'Lisa in Chautauqua',
    'Tom in North Boulder', 'Jennifer in South Boulder', 'Robert in East Boulder', 'Amanda in West Boulder'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Active users effect
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

  // Rotating names effect
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
        {/* Enhanced Hero Section - Boulder-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Boulder vendors are choosing plans right now
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
                Vending Machine Locations<br />in Boulder, Colorado
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Boulder's thriving university and outdoor recreation economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Boulder-Specific */}
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
                      <span className="text-sm font-medium text-charcoal">Verified Boulder Locations</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-charcoal">4.9/5 Boulder Rating</span>
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
                  Get Boulder Leads
                </Link>
                <Link
                  href="#boulder-content"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Learn About Boulder <span aria-hidden="true">→</span>
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
                  <span className="text-sm sm:text-base font-medium text-charcoal">Join 1,800+ vending operators</span>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-stone px-4 sm:px-0">
                    "Boulder's outdoor culture creates perfect vending opportunities!" - <span className="font-semibold">Sarah M., Boulder</span>
                  </span>
                </div>
              </motion.div>

              {/* Boulder-Specific Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">180+</div>
                  <div className="text-sm text-stone">Boulder Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">12+</div>
                  <div className="text-sm text-stone">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">4.9★</div>
                  <div className="text-sm text-stone">Boulder Rating</div>
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
                Get Boulder Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Boulder vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Boulder vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Comprehensive Boulder Content Section */}
        <div id="boulder-content" className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Why Boulder is Perfect for Vending Machines
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                Boulder's unique combination of university excellence, outdoor recreation culture, and technology innovation 
                creates exceptional vending machine opportunities across diverse business sectors.
              </p>
            </div>

            {/* Boulder Business Landscape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  Boulder's Business Landscape
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    The University of Colorado Boulder, with over 35,000 students and 2,000 faculty members, 
                    provides consistent demand for snacks and beverages across multiple campus locations, student 
                    housing areas, and research facilities.
                  </p>
                  <p>
                    Boulder is home to over 200 technology companies and research institutions, including major 
                    corporations like Google, IBM, and Ball Aerospace, creating a workforce of tech professionals 
                    who frequent vending machines throughout the workday.
                  </p>
                  <p>
                    Boulder's outdoor recreation industry includes major companies like REI and 
                    Patagonia, offering unique vending opportunities in high-traffic 
                    retail and corporate environments.
                  </p>
                  <p>
                    The city's focus on sustainability and healthy living creates demand for organic and 
                    health-conscious vending options, opening new market opportunities for innovative vending operators.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Vending Machine Opportunities in Boulder
                </h4>
                <div className="space-y-4">
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
                      <h5 className="font-semibold text-chocolate mb-1">Tech Companies</h5>
                      <p className="text-sm text-chocolate/70">High-traffic corporate environments with modern amenities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Outdoor Recreation</h5>
                      <p className="text-sm text-chocolate/70">Retail stores and corporate offices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Research Facilities</h5>
                      <p className="text-sm text-chocolate/70">Laboratories and scientific institutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Tourist Areas</h5>
                      <p className="text-sm text-chocolate/70">Pearl Street Mall and outdoor attractions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Boulder Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">108,000+</div>
                <div className="text-sm text-chocolate/70">Population</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">200+</div>
                <div className="text-sm text-chocolate/70">Tech Companies</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">35,000+</div>
                <div className="text-sm text-chocolate/70">CU Students</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">300+</div>
                <div className="text-sm text-chocolate/70">Trail Miles</div>
              </div>
            </div>

            {/* Boulder Business Districts */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
                Boulder's Premier Business Districts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Pearl Street Mall</h4>
                  <p className="text-stone text-sm mb-3">
                    Historic pedestrian mall with retail, restaurants, and tourist attractions.
                  </p>
                  <div className="text-xs text-chocolate/60">150+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">University Hill</h4>
                  <p className="text-stone text-sm mb-3">
                    CU Boulder campus area with student centers and academic buildings.
                  </p>
                  <div className="text-xs text-chocolate/60">80+ campus locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Boulder Tech Center</h4>
                  <p className="text-stone text-sm mb-3">
                    Technology hub with major corporations and startup offices.
                  </p>
                  <div className="text-xs text-chocolate/60">120+ tech companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">East Boulder</h4>
                  <p className="text-stone text-sm mb-3">
                    Industrial and manufacturing facilities with research institutions.
                  </p>
                  <div className="text-xs text-chocolate/60">60+ industrial locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">North Boulder</h4>
                  <p className="text-stone text-sm mb-3">
                    Growing business district with retail and office complexes.
                  </p>
                  <div className="text-xs text-chocolate/60">90+ retail locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">South Boulder</h4>
                  <p className="text-stone text-sm mb-3">
                    Residential and commercial mix with shopping centers.
                  </p>
                  <div className="text-xs text-chocolate/60">70+ commercial locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Boulder FAQ Section */}
        <div className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Boulder Vending Machine FAQ
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto">
                Get answers to common questions about vending machine opportunities in Boulder, Colorado
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses are included in Boulder vending leads?
                </h3>
                <p className="text-stone">
                  Our Boulder leads include the University of Colorado Boulder campus, technology companies (Google, IBM, 
                  Ball Aerospace), outdoor recreation companies (REI, Patagonia), research institutions, retail locations 
                  on Pearl Street Mall, and manufacturing facilities. Each location is pre-screened for vending machine 
                  compatibility and foot traffic potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Boulder's outdoor culture affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Boulder's outdoor recreation culture creates unique vending opportunities. Companies like REI and 
                  Patagonia have high-traffic retail locations, while the city's focus on health and wellness creates 
                  demand for organic and healthy vending options. Trailheads and outdoor attractions also provide 
                  seasonal vending opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Boulder vending machine sales?
                </h3>
                <p className="text-stone">
                  Boulder's mountain climate affects vending patterns: winter months (November-March) increase hot 
                  beverage demand, summer months (June-August) boost cold drink sales, and university locations see 
                  seasonal variations with academic calendars. Outdoor locations see increased traffic during peak 
                  hiking and climbing seasons.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Boulder locations?
                </h3>
                <p className="text-stone">
                  Boulder's compact size allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, 
                  plus recommendations for optimal service schedules based on each Boulder location's usage patterns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Boulder?
                </h3>
                <p className="text-stone">
                  Start with established areas (Pearl Street Mall, University Hill) then expand to growing districts 
                  (North Boulder, East Boulder). Focus on business types where you have success, and use our Boulder 
                  leads to identify expansion opportunities within your proven business model.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Boulder business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Boulder's growing tech sector and focus on sustainability create new opportunities. The city's 
                  commitment to healthy living opens markets for organic and health-conscious vending options. We track 
                  these trends and update our Boulder leads accordingly to reflect current business realities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Boulder vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Boulder leads, we provide business guidance, cold call scripts, supplier contacts, 
                  and ongoing support. We help you understand Boulder's unique business culture, navigate local 
                  regulations, and maximize your success in the Boulder vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Boulder Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Colorado Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Colorado cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Denver', slug: 'denver-colorado', count: '240+ leads' },
                { name: 'Colorado Springs', slug: 'colorado-springs-colorado', count: '200+ leads' },
                { name: 'Fort Collins', slug: 'fort-collins-colorado', count: '160+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, CO</h3>
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
