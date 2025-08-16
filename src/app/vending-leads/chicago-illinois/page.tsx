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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function ChicagoIllinoisVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Chicago', 'Sarah in Lincoln Park', 'David from River North', 'Lisa in West Loop',
    'Tom in Gold Coast', 'Jennifer in Old Town', 'Robert from Wicker Park', 'Amanda in Bucktown'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

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
        {/* Enhanced Hero Section - Chicago-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Chicago vendors are choosing plans right now
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
                Vending Machine Locations<br />in Chicago, Illinois
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Chicago's thriving financial and transportation economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Chicago-Specific */}
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
                      <span className="text-sm font-medium text-charcoal">Verified Chicago Locations</span>
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-charcoal">4.8/5 Chicago Rating</span>
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
                  Get Chicago Leads
                </Link>
                <Link
                  href="#chicago-content"
                  className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
                >
                  Learn About Chicago <span aria-hidden="true">→</span>
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
                    "Expanded to 15 Chicago locations in 6 months!" - <span className="font-semibold">David L., Chicago</span>
                  </span>
                </div>
              </motion.div>

              {/* Chicago-Specific Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">350+</div>
                  <div className="text-sm text-stone">Chicago Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">22+</div>
                  <div className="text-sm text-stone">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-bronze">4.8★</div>
                  <div className="text-sm text-stone">Chicago Rating</div>
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
                Get Chicago Vending Machine Leads
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive database of qualified Chicago vending machine locations with flexible pricing options. 
                No long-term contracts, just results that help you grow your Chicago vending business.
              </p>
            </div>
            <PricingTable />
          </div>
        </div>

        {/* Comprehensive Chicago Content Section */}
        <div id="chicago-content" className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Why Chicago is Perfect for Vending Machines
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto leading-relaxed">
                Chicago's unique combination of financial services, transportation hub, and healthcare excellence creates 
                exceptional vending machine opportunities across diverse business sectors.
              </p>
            </div>

            {/* Chicago Business Landscape */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-6">
                  Chicago's Business Landscape
                </h3>
                <div className="space-y-4 text-chocolate/80">
                  <p>
                    Chicago is home to over 400 financial services companies, including major corporations like Boeing, 
                    United Airlines, McDonald's, and Allstate, creating a massive workforce of professionals who frequent 
                    vending machines throughout the workday.
                  </p>
                  <p>
                    The University of Chicago and Northwestern University, with over 60,000 combined students and faculty, 
                    provide consistent demand for snacks and beverages across multiple campus locations and surrounding 
                    student housing areas.
                  </p>
                  <p>
                    Chicago's healthcare sector includes major facilities like Northwestern Memorial Hospital, 
                    Rush University Medical Center, and University of Chicago Medical Center, offering high-traffic 
                    areas perfect for vending machine placement.
                  </p>
                  <p>
                    As America's transportation hub, Chicago's O'Hare International Airport and major rail terminals 
                    create unique vending opportunities in high-traffic transit areas.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-6">
                  Vending Machine Opportunities in Chicago
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Financial Services</h5>
                      <p className="text-sm text-chocolate/70">High-traffic corporate environments with modern amenities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">University Campuses</h5>
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
                      <h5 className="font-semibold text-chocolate mb-1">Transportation Hubs</h5>
                      <p className="text-sm text-chocolate/70">Airports, train stations, and transit centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-chocolate mb-1">Manufacturing</h5>
                      <p className="text-sm text-chocolate/70">Industrial facilities and manufacturing plants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chicago Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">2.7M+</div>
                <div className="text-sm text-chocolate/70">Population</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">400+</div>
                <div className="text-sm text-chocolate/70">Financial Companies</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">60,000+</div>
                <div className="text-sm text-chocolate/70">University Students</div>
              </div>
              <div className="text-center p-6 bg-cream/30 rounded-xl">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <TruckIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-navy">8+</div>
                <div className="text-sm text-chocolate/70">Major Hospitals</div>
              </div>
            </div>

            {/* Chicago Business Districts */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-8 text-center">
                Chicago's Premier Business Districts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">The Loop</h4>
                  <p className="text-stone text-sm mb-3">
                    Financial district with major corporations, government buildings, and high-rise offices.
                  </p>
                  <div className="text-xs text-chocolate/60">300+ business locations</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">River North</h4>
                  <p className="text-stone text-sm mb-3">
                    Creative and tech hub with advertising agencies and startup offices.
                  </p>
                  <div className="text-xs text-chocolate/60">200+ creative companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">West Loop</h4>
                  <p className="text-stone text-sm mb-3">
                    Food and tech innovation district with corporate headquarters.
                  </p>
                  <div className="text-xs text-chocolate/60">150+ food/tech companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Medical District</h4>
                  <p className="text-stone text-sm mb-3">
                    Healthcare facilities and medical office buildings near downtown.
                  </p>
                  <div className="text-xs text-chocolate/60">50+ medical facilities</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">O'Hare Area</h4>
                  <p className="text-stone text-sm mb-3">
                    Airport and logistics hub with transportation companies.
                  </p>
                  <div className="text-xs text-chocolate/60">100+ logistics companies</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-chocolate mb-3">Hyde Park</h4>
                  <p className="text-stone text-sm mb-3">
                    University of Chicago campus area with academic buildings.
                  </p>
                  <div className="text-xs text-chocolate/60">80+ academic locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Chicago FAQ Section */}
        <div className="py-16 sm:py-24 bg-warm-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-chocolate mb-6">
                Chicago Vending Machine FAQ
              </h2>
              <p className="text-lg sm:text-xl text-chocolate/70 max-w-4xl mx-auto">
                Get answers to common questions about vending machine opportunities in Chicago, Illinois
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What types of businesses are included in Chicago vending leads?
                </h3>
                <p className="text-stone">
                  Our Chicago leads include financial services companies (Boeing, United Airlines, McDonald's), healthcare 
                  facilities (Northwestern Memorial, Rush Medical), educational institutions (UChicago, Northwestern), 
                  transportation hubs (O'Hare Airport, Union Station), and manufacturing facilities. Each location is 
                  pre-screened for vending machine compatibility and foot traffic potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How does Chicago's transportation hub status affect vending opportunities?
                </h3>
                <p className="text-stone">
                  Chicago's status as America's transportation hub creates unique vending opportunities. O'Hare International 
                  Airport, Union Station, and major transit centers provide high-traffic areas with captive audiences. 
                  These locations often have longer dwell times, making them ideal for vending machine placement with 
                  higher transaction volumes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What seasonal factors affect Chicago vending machine sales?
                </h3>
                <p className="text-stone">
                  Chicago's climate significantly affects vending patterns: harsh winters (December-March) increase hot 
                  beverage demand, summer months (June-August) boost cold drink sales, and university locations see 
                  seasonal variations with academic calendars. We provide seasonal adjustment recommendations for each 
                  Chicago location type.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do I handle maintenance and restocking for Chicago locations?
                </h3>
                <p className="text-stone">
                  Chicago's business density allows for efficient route planning. Most locations require weekly restocking 
                  and monthly maintenance. We provide contact information for local suppliers and maintenance services, 
                  plus recommendations for optimal service schedules based on each Chicago location's usage patterns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What are the best strategies for expanding in Chicago?
                </h3>
                <p className="text-stone">
                  Start with established business districts (The Loop, River North) then expand to growing areas 
                  (West Loop, Fulton Market). Focus on business types where you have success, and use our Chicago 
                  leads to identify expansion opportunities within your proven business model.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  How do Chicago business trends affect vending machine placement?
                </h3>
                <p className="text-stone">
                  Chicago's growing tech sector and food innovation scene create new opportunities in West Loop and 
                  Fulton Market. The healthcare sector provides stable, long-term placement opportunities. We track 
                  these trends and update our Chicago leads accordingly to reflect current business realities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-chocolate mb-3">
                  What support do you provide for Chicago vending operators?
                </h3>
                <p className="text-stone">
                  Beyond our Chicago leads, we provide business guidance, cold call scripts, supplier contacts, 
                  and ongoing support. We help you understand Chicago's unique business culture, navigate local 
                  regulations, and maximize your success in the Chicago vending machine market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Leads Section */}
        <HotLeads />

        {/* Vending Course Section */}
        <VendingCourse />

        {/* Related Chicago Locations */}
        <div className="bg-warm-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-chocolate mb-4">
                Other Illinois Vending Locations
              </h2>
              <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
                Explore vending machine leads in other major Illinois cities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Springfield', slug: 'springfield-massachusetts', count: '110+ leads' },
                { name: 'Peoria', slug: 'peoria-illinois', count: '90+ leads' },
                { name: 'Rockford', slug: 'rockford-illinois', count: '85+ leads' },
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
                    <h3 className="text-lg font-bold text-chocolate">{city.name}, IL</h3>
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
