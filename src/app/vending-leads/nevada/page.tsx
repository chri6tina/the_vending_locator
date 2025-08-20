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

export default function NevadaVendingLeadsPage() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Tom from Las Vegas', 'Sarah from Reno', 'Mike from Henderson', 'Lisa from Carson City',
    'David from Sparks', 'Jennifer from Fernley', 'Robert from Elko', 'Amanda from Mesquite',
    'Chris from Boulder City', 'Maria from Fallon', 'James from Winnemucca', 'Emily from Ely'
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

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-warm-white">
        {/* Enhanced Hero Section - Nevada-Specific */}
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
                    <span className="font-bold text-coral">{activeUsers}</span> Nevada vendors are choosing plans right now
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
                Vending Machine Locations<br />in Nevada
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 text-lg sm:text-xl leading-8 text-stone max-w-4xl mx-auto"
              >
                Get pre-qualified vending machine locations in Nevada's thriving tourism and hospitality economy. 
                Access verified businesses with detailed contact information and placement opportunities.
              </motion.p>

              {/* Trust Signals - Nevada-Specific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <CheckBadgeIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">800+ Verified Locations</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <UsersIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">50,000+ Businesses</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-3 bg-cream/30 rounded-lg">
                  <BuildingOfficeIcon className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium text-chocolate">5 Major Industries</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-coral hover:bg-coral/90 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View Pricing Plans
                </a>
                <a
                  href="#hot-leads"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-coral bg-cream hover:bg-cream/80 rounded-lg transition-colors duration-200 border-2 border-coral"
                >
                  See Hot Leads
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Pricing Section - Immediately After Hero */}
        
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </>
  )
}
