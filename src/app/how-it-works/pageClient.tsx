'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import { CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HowItWorksPage() {
  const [activeUsers, setActiveUsers] = useState(0)

  useEffect(() => {
    const update = () => {
      const base = 12
      const fluctuation = Math.floor(Math.random() * 8) + 1
      setActiveUsers(base + fluctuation)
    }
    const interval = setInterval(update, Math.random() * 2000 + 2000)
    update()
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      {/* Hero matching homepage style */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Active Users Counter Pill */}
            <div className="mb-6 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> people are choosing plans right now
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0">
              How It Works
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-8 sm:leading-9 text-chocolate/70 px-4 sm:px-0 max-w-3xl mx-auto">
              A simple, transparent process from purchase to delivery — we research, verify, and deliver qualified vending locations.
            </p>

            {/* Trust/Feature Badges */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-chocolate">Verified Locations</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-chocolate">4.9/5 Rating</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div classNameName="flex items-center gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-chocolate">Secure & Reliable</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium text-chocolate">Quality Research</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Link
                href="#process"
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Process
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Table directly below hero */}
      <div id="pricing" className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get access to qualified vending machine locations with flexible pricing options.
            </p>
          </div>
          <PricingTable />
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:gap-10">
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">1) Choose a Plan</h3>
              <p className="mt-2 text-chocolate/70">Select the package that fits your goals and budget. No subscriptions — one-time purchase.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">2) Tell Us Your Area</h3>
              <p className="mt-2 text-chocolate/70">Share your preferred city, zip codes, or radius. We tailor research to your market.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">3) We Research & Verify</h3>
              <p className="mt-2 text-chocolate/70">Our team confirms decision-makers, hours, and foot traffic — only qualified locations make the list.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-cream/40">
              <h3 className="text-xl font-semibold text-chocolate">4) Delivery in 3–5 Business Days</h3>
              <p className="mt-2 text-chocolate/70">Receive your leads via secure delivery. We replace any bad or unavailable entries.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}


