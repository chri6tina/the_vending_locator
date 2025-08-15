'use client'

import { useEffect, useState } from 'react'
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
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal leading-tight">
            Qualified Vending Location Leads
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-stone px-2 sm:px-0">
            Get pre-qualified vending machine locations delivered to your inbox. 
            No monthly fees, just results that help you grow your vending business.
          </p>

          {/* Active Users Counter */}
          <div className="mt-6 sm:mt-8 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-chocolate">
                <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
              </span>
            </div>
            <div className="mt-2 text-xs text-chocolate/70">
              Including {userNames[currentUserIndex]}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            {trustSignals.map((signal, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <signal.icon className={`h-5 w-5 ${signal.color}`} />
                  <span className="text-sm font-medium text-chocolate">{signal.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/hot-leads"
              className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
            >
              View Hot Leads →
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">M</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">S</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">D</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">L</span>
                </div>
              </div>
              <span className="text-sm text-chocolate/70">Join 2,847+ vending operators</span>
            </div>
            <p className="text-sm text-chocolate/60">
              "Found my best location in 3 days!" - <span className="font-semibold">Mike R., Texas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl sm:text-4xl font-bold text-bronze">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm sm:text-base text-chocolate/70 mt-2">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
