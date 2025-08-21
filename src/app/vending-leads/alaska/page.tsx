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
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon, MapPinIcon, UsersIcon, BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, TruckIcon, FilmIcon, SunIcon, BeakerIcon, SparklesIcon, HeartIcon, CloudIcon } from '@heroicons/react/24/solid'

export default function AlaskaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Anchorage', 'Sarah in Fairbanks', 'David in Juneau', 'Lisa in Sitka',
    'Tom in Ketchikan', 'Jennifer in Palmer', 'Robert in Wasilla', 'Amanda in Kenai',
    'Chris in Kodiak', 'Maria in Bethel', 'James in Homer', 'Emily in Seward'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 8
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

  const cities = []

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Alaska-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Alaska vendors are choosing plans right now
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
                Vending Machine Locations<br />in Alaska
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations across Alaska's unique energy and tourism economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Alaska-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                 <div className="flex items-center gap-2 text-sm text-stone">
                   <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                   <span>800+ Verified Locations</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-stone">
                   <StarIcon className="h-5 w-5 text-yellow-500" />
                   <span>4.9/5 Rating</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-stone">
                   <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                   <span>25,000+ Businesses</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-stone">
                   <ClockIcon className="h-5 w-5 text-purple-600" />
                   <span>5 Major Industries</span>
                 </div>
               </motion.div>

               {/* CTA Buttons */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.8 }}
                 className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
               >
                 <a
                   href="#pricing"
                   className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                 >
                   View Pricing Plans
                 </a>
                 <a
                   href="#hot-leads"
                   className="w-full sm:w-auto bg-cream hover:bg-cream-light text-navy px-8 py-3 rounded-lg font-semibold transition-colors border-2 border-navy"
                 >
                   See Hot Leads
                 </a>
               </motion.div>
             </div>
           </div>
         </div>

         {/* Pricing Section - Immediately After Hero */}
         <section id="pricing" className="py-16 bg-cream">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-navy mb-4">
                 Choose Your Plan
               </h2>
               <p className="text-lg text-chocolate/70">
                 Get access to Alaska's top vending machine opportunities
               </p>
             </div>
             <PricingTable />
           </div>
         </section>

         {/* Business Landscape */}
         <section className="py-16 bg-warm-white">
           <div className="container mx-auto px-4">
             <motion.div 
               className="text-center mb-12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl font-bold text-navy mb-4">
                 Alaska Business Landscape
               </h2>
               <p className="text-lg text-chocolate/70 max-w-3xl mx-auto">
                 Alaska's unique economy spans energy, tourism, fishing, healthcare, and more, 
                 creating ideal opportunities for vending machine placement.
               </p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 viewport={{ once: true }}
               >
                 <SunIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Energy</h3>
                 <p className="text-chocolate/70">Major oil and gas operations with high employee counts</p>
               </motion.div>

               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <FilmIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Tourism</h3>
                 <p className="text-chocolate/70">Growing tourism industry with seasonal businesses</p>
               </motion.div>

               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 viewport={{ once: true }}
               >
                 <BeakerIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Healthcare</h3>
                 <p className="text-chocolate/70">Healthcare facilities serving remote communities</p>
               </motion.div>

               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
               >
                 <AcademicCapIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Education</h3>
                 <p className="text-chocolate/70">Universities and educational institutions</p>
               </motion.div>

               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 viewport={{ once: true }}
               >
                 <TruckIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Transportation</h3>
                 <p className="text-chocolate/70">Logistics and transportation hubs</p>
               </motion.div>

               <motion.div 
                 className="text-center p-6 rounded-lg bg-cream/30"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 viewport={{ once: true }}
               >
                 <CloudIcon className="w-12 h-12 text-navy mx-auto mb-4" />
                 <h3 className="text-xl font-semibold text-navy mb-2">Fishing</h3>
                 <p className="text-chocolate/70">Commercial fishing and seafood processing</p>
               </motion.div>
             </div>
           </div>
         </section>

         {/* State Stats */}
         <section className="py-16 bg-cream">
           <div className="container mx-auto px-4">
             <motion.div 
               className="text-center mb-12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl font-bold text-navy mb-4">
                 Alaska by the Numbers
               </h2>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <motion.div 
                 className="text-center"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 viewport={{ once: true }}
               >
                 <div className="text-4xl font-bold text-navy mb-2">730K+</div>
                 <div className="text-lg text-chocolate/70">Population</div>
               </motion.div>

               <motion.div 
                 className="text-center"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <div className="text-4xl font-bold text-navy mb-2">25,000+</div>
                 <div className="text-lg text-chocolate/70">Businesses</div>
               </motion.div>

               <motion.div 
                 className="text-center"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 viewport={{ once: true }}
               >
                 <div className="text-4xl font-bold text-navy mb-2">6</div>
                 <div className="text-lg text-chocolate/70">Major Industries</div>
               </motion.div>
             </div>
           </div>
         </section>

         {/* Hot Leads Section */}
         <section id="hot-leads" className="py-16 bg-warm-white">
           <div className="container mx-auto px-4">
             <HotLeads />
           </div>
         </section>

         {/* Vending Course Section */}
         <section className="py-16 bg-cream">
           <div className="container mx-auto px-4">
             <VendingCourse />
           </div>
         </section>

         {/* FAQ Section */}
         <section className="py-16 bg-warm-white">
           <div className="container mx-auto px-4">
             <motion.div 
               className="text-center mb-12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl font-bold text-navy mb-4">
                 Frequently Asked Questions
               </h2>
             </motion.div>

             <div className="space-y-6">
               <motion.div 
                 className="bg-cream/30 rounded-lg p-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 viewport={{ once: true }}
               >
                 <h3 className="text-lg font-semibold text-navy mb-2">
                   What makes Alaska a good market for vending machines?
                 </h3>
                 <p className="text-chocolate/70">
                   Alaska's unique economy with energy operations, tourism, and healthcare facilities 
                   creates ideal conditions for vending machine placement with high foot traffic.
                 </p>
               </motion.div>

               <motion.div 
                 className="bg-cream/30 rounded-lg p-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
               >
                 <h3 className="text-lg font-semibold text-navy mb-2">
                   Which areas in Alaska have the best opportunities?
                 </h3>
                 <p className="text-chocolate/70">
                   Anchorage, Fairbanks, and Juneau offer the highest concentration of businesses 
                   and healthcare facilities, making them prime locations for vending machine placement.
                 </p>
               </motion.div>

               <motion.div 
                 className="bg-cream/30 rounded-lg p-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 viewport={{ once: true }}
               >
                 <h3 className="text-lg font-semibold text-navy mb-2">
                   How do I get started with vending machines in Alaska?
                 </h3>
                 <p className="text-chocolate/70">
                   Start by accessing our verified business leads, then contact locations that match your 
                   criteria. Our platform provides all the information you need to make successful placements.
                 </p>
               </motion.div>
             </div>
           </div>
         </section>
       </div>
       
       <Footer />
       
       {/* Zip Code Modal */}
       <ZipCodeModalWrapper />
     </>
   )
}
