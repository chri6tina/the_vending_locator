'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckBadgeIcon, StarIcon, ShieldCheckIcon, ClockIcon,
  BuildingOfficeIcon, AcademicCapIcon, CpuChipIcon, HeartIcon,
  ShoppingBagIcon, TruckIcon, BuildingLibraryIcon, UsersIcon,
  MapPinIcon, CurrencyDollarIcon, SparklesIcon, MusicalNoteIcon
} from '@heroicons/react/24/solid'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingTable from '@/components/PricingTable'
import HotLeads from '@/components/HotLeads'
import VendingCourse from '@/components/VendingCourse'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'

export default function PhiladelphiaPennsylvaniaVendingLeadsPage() {
  // Active users counter
  const [activeUsers, setActiveUsers] = useState(28)
  const [currentUserIndex, setCurrentUserIndex] = useState(0)
  const [usedNames, setUsedNames] = useState<Set<number>>(new Set())
  
  // Recent purchases
  const [currentPurchaseIndex, setCurrentPurchaseIndex] = useState(0)
  const [usedPurchases, setUsedPurchases] = useState<Set<number>>(new Set())
  
  // User names array (expand with 1000+ names)
  const [userNames, setUserNames] = useState([
    'Mike from Pennsylvania', 'Sarah in Philadelphia', 'John from Bucks County',
    'Lisa in Montgomery County', 'David from Delaware County', 'Maria in Chester County',
    'Tom from Camden County', 'Jennifer in Gloucester County', 'Robert from Burlington County',
    'Amanda in Mercer County', 'James from Berks County', 'Michelle in Lancaster County',
    'Christopher from York County', 'Nicole in Dauphin County', 'Michael from Lehigh County',
    'Stephanie from Northampton County', 'Daniel from Luzerne County', 'Ashley from Lackawanna County',
    'Matthew from Monroe County', 'Jessica from Pike County', 'Andrew from Wayne County',
    'Rebecca from Susquehanna County', 'Joshua from Wyoming County', 'Amber from Sullivan County',
    'Ryan from Bradford County', 'Melissa from Tioga County', 'Brandon from Potter County',
    'Heather from McKean County', 'Tyler from Warren County', 'Samantha from Forest County',
    'Nathan from Venango County', 'Rachel from Clarion County', 'Adam from Jefferson County',
    'Lauren from Armstrong County', 'Kevin from Butler County', 'Megan from Beaver County',
    'Justin from Lawrence County', 'Brittany from Mercer County', 'Eric from Crawford County',
    'Danielle from Erie County', 'Steven from Warren County', 'Katherine from McKean County',
    'Timothy from Potter County', 'Stephanie from Forest County', 'Mark from Venango County',
    'Nicole from Clarion County', 'Brian from Jefferson County', 'Amanda from Armstrong County',
    'Jason from Butler County', 'Melissa from Beaver County', 'Ryan from Lawrence County',
    'Heather from Mercer County', 'Christopher from Crawford County', 'Jennifer from Erie County'
  ])
  
  // Recent purchases array
  const [recentPurchases, setRecentPurchases] = useState([
    { name: 'Mike R.', location: 'Philadelphia', plan: 'Pro Plan', time: '2 minutes ago' },
    { name: 'Sarah L.', location: 'Bucks County', plan: 'Start Plan', time: '5 minutes ago' },
    { name: 'John D.', location: 'Montgomery County', plan: 'Gold Plan', time: '8 minutes ago' },
    { name: 'Lisa M.', location: 'Delaware County', plan: 'Pro Plan', time: '12 minutes ago' },
    { name: 'David K.', location: 'Chester County', plan: 'Start Plan', time: '15 minutes ago' },
    { name: 'Maria S.', location: 'Camden County', plan: 'Pro Plan', time: '18 minutes ago' },
    { name: 'Tom W.', location: 'Gloucester County', plan: 'Gold Plan', time: '22 minutes ago' },
    { name: 'Jennifer H.', location: 'Burlington County', plan: 'Start Plan', time: '25 minutes ago' },
    { name: 'Robert L.', location: 'Mercer County', plan: 'Pro Plan', time: '28 minutes ago' },
    { name: 'Amanda P.', location: 'Berks County', plan: 'Gold Plan', time: '32 minutes ago' }
  ])

  // City-specific data
  const cityData = {
    name: 'Philadelphia',
    state: 'Pennsylvania',
    population: '1.6M+',
    businessCount: '45,000+',
    verifiedLocations: '280+',
    vendorCount: '320+',
    metroPopulation: '6.2M+',
    majorIndustries: 'Healthcare, Education, Finance, Manufacturing, Technology',
    businessDistricts: 'Center City, University City, Navy Yard, Fishtown, Northern Liberties'
  }

  // Active users counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        const newValue = prev + change
        return Math.max(25, Math.min(42, newValue))
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // User names rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUserIndex(prev => {
        if (usedNames.size > userNames.length * 0.8) {
          setUsedNames(new Set())
        }
        let nextIndex = (prev + 1) % userNames.length
        let attempts = 0
        while (usedNames.has(nextIndex) && attempts < 50) {
          nextIndex = Math.floor(Math.random() * userNames.length)
          attempts++
        }
        setUsedNames(prevUsed => new Set([...prevUsed, nextIndex]))
        return nextIndex
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [userNames.length, usedNames])

  // Recent purchases rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPurchaseIndex(prev => {
        if (usedPurchases.size > recentPurchases.length * 0.8) {
          setUsedPurchases(new Set())
        }
        let nextIndex = (prev + 1) % recentPurchases.length
        let attempts = 0
        while (usedPurchases.has(nextIndex) && attempts < 20) {
          nextIndex = Math.floor(Math.random() * recentPurchases.length)
          attempts++
        }
        setUsedPurchases(prevUsed => new Set([...prevUsed, nextIndex]))
        return nextIndex
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [recentPurchases.length, usedPurchases])

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-cream py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-stone">
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/vending-leads" className="hover:text-navy transition-colors">
              Vending Leads
            </Link>
            <span>/</span>
            <Link href="/vending-leads/pennsylvania" className="hover:text-navy transition-colors">
              Pennsylvania
            </Link>
            <span>/</span>
            <span className="text-chocolate font-medium">Philadelphia</span>
          </nav>
        </div>
      </div>
      
      {/* Hero Section - MUST match home page background (warm-white, NOT harsh blue) */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Active Users Counter Pill */}
            <div className="mb-6 p-4 bg-cream/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-chocolate">
                  <span className="font-bold text-coral">{activeUsers}</span> Philadelphia vendors are choosing plans right now
                </span>
              </div>
              <div className="mt-2 text-xs text-chocolate/70">
                Including {userNames[currentUserIndex]}
              </div>
            </div>

            {/* Recent Purchase Notification */}
            <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg shadow-sm max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-medium">
                  <span className="font-semibold">{recentPurchases[currentPurchaseIndex].name}</span> from {recentPurchases[currentPurchaseIndex].location} just purchased the{' '}
                  <span className="font-bold text-green-700">{recentPurchases[currentPurchaseIndex].plan}</span>
                </span>
              </div>
              <div className="mt-1 text-xs text-green-600 text-center">
                {recentPurchases[currentPurchaseIndex].time}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-chocolate px-4 sm:px-0">
              Vending Machine Locations<br />in Philadelphia, Pennsylvania
            </h1>
            
            {/* City-Specific Value Proposition */}
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-8 sm:leading-9 text-chocolate/70 px-4 sm:px-0 max-w-3xl mx-auto">
              Get pre-qualified vending machine locations in Philadelphia's diverse and growing business economy. Access verified businesses with detailed contact information and placement opportunities across the City of Brotherly Love.
            </p>

            {/* Trust/Feature Badges */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-chocolate">{cityData.verifiedLocations}+ Verified Locations</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-chocolate">4.9/5 Rating</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3">
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
                href="/hot-leads"
                className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Hot Leads
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto bg-transparent text-chocolate border-2 border-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-chocolate hover:text-white transition-colors"
              >
                View Pricing →
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">M</span>
                  </div>
                  <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">S</span>
                  </div>
                  <div className="w-8 h-8 bg-navy-light rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">J</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">L</span>
                  </div>
                </div>
                <span className="text-sm text-chocolate/70">
                  Trusted by {cityData.vendorCount}+ vending operators in Philadelphia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section - MUST appear immediately after hero */}
      <div id="pricing" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get access to qualified vending machine locations in Philadelphia with flexible pricing options. No long-term contracts, just results that help you grow your business.
            </p>
          </div>
          
          {/* Use PricingTable component */}
          <PricingTable />
        </div>
      </div>

      {/* Business Landscape Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Philadelphia Business Landscape
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Philadelphia is a major East Coast business hub offering vending opportunities across multiple thriving industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry Cards - Use Heroicons */}
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Healthcare</h3>
              <p className="text-stone text-sm">
                Major hospitals, medical centers, and healthcare facilities with 24/7 operations.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Education</h3>
              <p className="text-stone text-sm">
                Universities, colleges, and research institutions with large student populations.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Finance</h3>
              <p className="text-stone text-sm">
                Banking, insurance, and financial services with corporate headquarters.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Manufacturing</h3>
              <p className="text-stone text-sm">
                Industrial facilities, factories, and manufacturing plants with shift workers.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Technology</h3>
              <p className="text-stone text-sm">
                Tech companies, startups, and innovation hubs with modern office environments.
              </p>
            </div>
            
            <div className="bg-cream rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingLibraryIcon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-chocolate mb-3">Government</h3>
              <p className="text-stone text-sm">
                Federal, state, and local government offices with stable operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hot Leads Section */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Hot Location Leads
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get immediate access to pre-verified vending machine locations. These are ready-to-place locations that have been personally researched and verified.
            </p>
          </div>
          
          {/* Use HotLeads component */}
          <HotLeads />
        </div>
      </div>

      {/* Vending Course Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Looking for a How-to-Start Guide?
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get our comprehensive guide: "How to Start a Vending Machine Company in 2025" with scripts, legal templates, and supplier discounts.
            </p>
          </div>
          
          {/* Use VendingCourse component */}
          <VendingCourse />
        </div>
      </div>

      {/* FAQ Section (Location-Specific) */}
      <div className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-chocolate mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-chocolate/70 leading-relaxed max-w-3xl mx-auto">
              Get answers to common questions about vending machine opportunities in Philadelphia.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                What types of businesses are best for vending machines in Philadelphia?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia offers diverse opportunities including healthcare facilities, universities, corporate offices, manufacturing plants, and government buildings. The city's diverse business environment and large workforce provide excellent placement opportunities.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                How competitive is the vending machine market in Philadelphia?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia has a well-established vending presence, but there's significant opportunity for expansion, especially in new business developments, healthcare facilities, and educational institutions.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                What are the peak business hours for vending in Philadelphia?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia businesses typically operate from 8 AM to 6 PM, with peak vending activity during lunch hours (12 PM - 2 PM) and afternoon breaks (3 PM - 4 PM). Healthcare facilities offer 24/7 opportunities.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                Are there any specific regulations for vending machines in Philadelphia?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia has standard vending regulations including health permits, business licenses, and compliance with local health codes. Our team can help you navigate all regulatory requirements.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                What are the best areas in Philadelphia for vending machine placement?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Prime areas include Center City, University City, Navy Yard, Fishtown, and Northern Liberties. These districts have high foot traffic, major employers, and growing business communities.
              </p>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                How does Philadelphia's seasonal weather affect vending machine business?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia experiences all four seasons, with hot summers and cold winters. Indoor locations in office buildings, hospitals, and universities provide year-round stability regardless of weather conditions.
              </p>
            </div>
            
            {/* FAQ Item 7 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                What support services do you provide for Philadelphia vending operators?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                We provide comprehensive support including location research, lead qualification, market analysis, regulatory guidance, and ongoing business development assistance specific to the Philadelphia market.
              </p>
            </div>
            
            {/* FAQ Item 8 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-chocolate mb-3">
                How can I expand my vending business from Philadelphia to surrounding areas?
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                Philadelphia's strategic location provides easy access to markets in Bucks, Montgomery, Delaware, and Chester counties. We can help you identify expansion opportunities in these growing suburban areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ZipCodeModalWrapper />
    </main>
  )
}
