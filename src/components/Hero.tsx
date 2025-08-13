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
  { icon: ShieldCheckIcon, text: 'Money-Back Guarantee', color: 'text-blue-600' },
  { icon: ClockIcon, text: '24hr Delivery', color: 'text-purple-600' },
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
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair font-bold tracking-tight text-charcoal sm:text-6xl"
          >
            Qualified Vending Location Leads
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-stone"
          >
            Get qualified vending machine locations delivered to your inbox. 
            No monthly fees, just results.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {trustSignals.map((signal, index) => (
              <div
                key={signal.text}
                className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-3 py-1.5 text-sm font-medium text-navy"
              >
                <signal.icon className="h-4 w-4" />
                {signal.text}
              </div>
            ))}
          </motion.div>

          {/* Active Users Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-bronze/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-bronze rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-bronze">
                {activeUsers} users buying leads right now
              </span>
            </div>
          </motion.div>
          
          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/hot-leads"
              className="btn-primary text-lg px-8 py-4"
            >
              Get Hot Leads
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-semibold leading-6 text-charcoal hover:text-navy transition-colors"
            >
              View Pricing <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Social Proof - No box, just text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8"
          >
            <div className="flex justify-center mb-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-charcoal border-2 border-white shadow-sm"
                  />
                ))}
              </div>
            </div>
            <div className="text-center mb-2">
              <span className="text-sm font-medium text-charcoal">Join 2,847+ vending operators</span>
            </div>
            <div className="text-center">
              <span className="text-xs text-stone">
                "Found my best location in 3 days!" - <span className="font-semibold">Mike R., Texas</span>
              </span>
            </div>
          </motion.div>

          {/* Stats Grid - More compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center">
                <div className="text-2xl font-bold text-bronze">
                  {index === 2 ? counts[index].toFixed(1) : Math.floor(counts[index])}{stat.suffix}
                </div>
                <div className="text-sm text-stone">{stat.name}</div>
              </div>
            ))}
          </motion.div>

          {/* Vending Business Guide Promo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 mb-4"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Looking for a How-to-Start Guide?
                </h3>
                <p className="text-sm text-stone mb-4">
                  Get our comprehensive guide: "How to Start a Vending Machine Company in 2025" 
                  with scripts, legal templates, and supplier discounts.
                </p>
                <a
                  href="https://vendflow.gumroad.com/l/rxbzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
