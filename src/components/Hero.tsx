'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

const stats = [
  { id: 1, name: 'Locations Found', value: '500K+', suffix: '+' },
  { id: 2, name: 'Deals Closed', value: '15K+', suffix: '+' },
  { id: 3, name: 'Rating', value: '4.9', suffix: '★' },
]

const trustSignals = [
  { icon: CheckBadgeIcon, text: 'Verified Locations', color: 'text-green-600' },
  { icon: StarIcon, text: '4.9/5 Rating', color: 'text-yellow-500' },
  { icon: ShieldCheckIcon, text: 'Secure & Reliable', color: 'text-blue-600' },
  { icon: ClockIcon, text: 'Quality Research', color: 'text-purple-600' },
]

export default function Hero() {
  const [counts, setCounts] = useState([0, 0, 0])
  const [activeUsers, setActiveUsers] = useState(0)
  const [userNames, setUserNames] = useState([
    'Mike from Texas',
    'Sarah in Florida',
    'David from California',
    'Lisa in New York',
    'Tom from Illinois',
    'Jennifer in Ohio',
    'Robert from Georgia',
    'Amanda in Michigan'
  ])
  const [currentUserIndex, setCurrentUserIndex] = useState(0)

  useEffect(() => {
    const targetCounts = [500, 15, 4.9]
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounts(prev => prev.map((count, index) => {
        const target = targetCounts[index]
        const increment = target / steps
        if (count < target) {
          return Math.min(count + increment, target)
        }
        return target
      }))
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  // Fluctuating active users counter
  useEffect(() => {
    const updateActiveUsers = () => {
      const baseUsers = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(baseUsers + fluctuation)
    }

    // Update every 3-7 seconds for natural fluctuation
    const interval = setInterval(() => {
      updateActiveUsers()
    }, Math.random() * 4000 + 3000)

    updateActiveUsers() // Initial update

    return () => clearInterval(interval)
  }, [])

  // Rotating user names
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => (prev + 1) % userNames.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [userNames.length])

  return (
    <div className="bg-warm-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight"
          >
            Qualified Vending Location Leads
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0"
          >
            Get pre-qualified vending machine locations delivered to your inbox. 
            No monthly fees, just results that help you grow your vending business.
          </motion.p>

          {/* Trust Signals - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
              {trustSignals.map((signal, index) => (
                <div key={signal.text} className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50">
                  <signal.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${signal.color} flex-shrink-0`} />
                  <span className="text-xs sm:text-sm font-medium text-charcoal text-center leading-tight">
                    {signal.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0"
          >
            <Link
              href="/hot-leads"
              className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
            >
              Get Hot Leads
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-base sm:text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors text-center py-3 sm:py-4"
            >
              View Pricing <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Social Proof - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-10 px-4 sm:px-0"
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"
                  />
                ))}
              </div>
            </div>
            <div className="text-center mb-2 sm:mb-3">
              <span className="text-sm sm:text-base font-medium text-charcoal">Join 2,847+ vending operators</span>
            </div>
            <div className="text-center">
              <span className="text-xs sm:text-sm text-stone px-4 sm:px-0">
                &ldquo;Found my best location in 3 days!&rdquo; - <span className="font-semibold">Mike R., Texas</span>
              </span>
            </div>
          </motion.div>

          {/* Stats Grid - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0"
          >
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-bronze">
                  {index === 2 ? counts[index].toFixed(1) : Math.floor(counts[index])}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-stone leading-tight">{stat.name}</div>
              </div>
            ))}
          </motion.div>

          {/* Vending Business Guide Promo - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 sm:mt-16 mb-4 px-4 sm:px-0"
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-charcoal mb-2 sm:mb-3">
                  Looking for a How-to-Start Guide?
                </h3>
                <p className="text-sm text-stone mb-4 leading-relaxed">
                  Get our comprehensive guide: &ldquo;How to Start a Vending Machine Company in 2025&rdquo; 
                  with scripts, legal templates, and supplier discounts.
                </p>
                <a
                  href="https://vendflow.gumroad.com/l/rxbzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto justify-center"
                >
                  <span>Get the Guide</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
