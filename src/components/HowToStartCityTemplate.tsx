'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  ChartBarIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VendingCourse from '@/components/VendingCourse'
import Testimonials from '@/components/Testimonials'
import { cityInfo } from '@/data/cityInfo'

const stateAbbrMap: Record<string, string> = {
  Alabama: 'AL',
  Alaska: 'AK',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Delaware: 'DE',
  Florida: 'FL',
  Georgia: 'GA',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Pennsylvania: 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY',
  'District of Columbia': 'DC'
}

type HowToStartCityTemplateProps = {
  citySlug: string
  cityDisplayName: string
  stateDisplayName: string
  stateSlug: string
}

export default function HowToStartCityTemplate({
  citySlug,
  cityDisplayName,
  stateDisplayName,
  stateSlug
}: HowToStartCityTemplateProps) {
  const cityStateDisplay = `${cityDisplayName}, ${stateDisplayName}`
  const stateAbbr = stateAbbrMap[stateDisplayName]
  const cityBaseSlug = citySlug.replace(`-${stateSlug}`, '')
  const cityInfoKey = cityInfo[citySlug] ? citySlug : stateAbbr ? `${cityBaseSlug}-${stateAbbr.toLowerCase()}` : citySlug
  const cityData = cityInfo[cityInfoKey] ?? {}

  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [subscriptionFormData, setSubscriptionFormData] = useState({
    name: '',
    email: '',
    city: '',
    state: '',
    agreedToTerms: false
  })
  const [isSubmittingSubscription, setIsSubmittingSubscription] = useState(false)

  const permitInfo = {
    salesTax: `${stateDisplayName} requires a sales tax permit for vending sales. Register with your state tax authority and collect/remit the appropriate state and local taxes.`,
    healthPermit: `If selling food or beverages, confirm requirements with your county health department before placing machines in ${cityDisplayName}.`,
    businessLicense: `Register your LLC with ${stateDisplayName} and obtain any required local business tax receipt or license for ${cityDisplayName}.`,
    additionalNotes: cityData.permitNotes ||
      'Certain locations (government buildings, airports, ports, or schools) may have additional facility-specific requirements.'
  }

  const demandDrivers = cityData.demandDrivers || [
    'Healthcare systems and hospital campuses',
    'Logistics, distribution, and industrial parks',
    'Downtown offices and corporate campuses',
    'Higher education and student housing',
    'Municipal buildings and public facilities',
    'Retail centers and mixed-use developments',
    'Gyms and recreation facilities',
    'Hotels and hospitality districts'
  ]

  const neighborhoods = cityData.neighborhoods || [
    'Downtown core',
    'Business parks',
    'Medical districts',
    'Industrial corridors',
    'University areas',
    'Retail hubs',
    'Suburban office clusters',
    'Transit corridors'
  ]

  const startupCosts = [
    { item: 'Refurbished snack/soda machine', cost: '$1,500 - $3,500 each' },
    { item: 'Card reader & telemetry', cost: '$200 - $400 per machine' },
    { item: 'Initial inventory (snacks, drinks)', cost: '$300 - $800' },
    { item: 'Transport & installation', cost: '$150 - $500' },
    { item: 'Business registration & permits', cost: '$200 - $500' },
    { item: 'Insurance (liability)', cost: '$500 - $1,200/year' }
  ]

  const steps = [
    {
      title: '1. Business Setup & Registration',
      description: `Register your LLC, obtain an EIN, and get your sales tax permit for ${stateDisplayName}. Confirm any ${cityDisplayName} business license requirements.`,
      icon: BuildingOffice2Icon
    },
    {
      title: '2. Permits & Licensing',
      description: `If selling food/beverages, confirm county health permits and any facility-specific rules before install.`,
      icon: DocumentTextIcon
    },
    {
      title: '3. Choose Your Machines',
      description: 'Start with reliable snack/soda or combo machines. Add card readers and remote monitoring for higher conversion.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      title: '4. Find High-Traffic Locations',
      description: `Target offices, healthcare, logistics, gyms, and municipal facilities across ${cityStateDisplay}. Prioritize 50+ employee sites.`,
      icon: MapPinIcon
    },
    {
      title: '5. Negotiate Placement Agreements',
      description: 'Lead with value: convenience, service cadence, and optional commissions. Use professional contracts.',
      icon: UserGroupIcon
    },
    {
      title: '6. Install, Stock & Optimize',
      description: 'Launch, restock on a weekly/biweekly cadence, and optimize product mix with sales data.',
      icon: ChartBarIcon
    }
  ]

  const faqs = [
    {
      q: `What permits do I need to start a vending machine business in ${cityDisplayName}?`,
      a: (
        <>
          You'll need a <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link>, a local business license if required, and if selling food/beverages, a county health permit. Also <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">register your LLC</Link> with the state.
        </>
      )
    },
    {
      q: 'How much does it cost to start a vending machine business?',
      a: 'Initial startup costs typically range from $3,000-$6,000 per machine, including the machine, card reader, inventory, permits, and installation. You can start with 1-2 machines and scale up.'
    },
    {
      q: `What are the best locations for vending machines in ${cityDisplayName}?`,
      a: `High-traffic areas like offices, healthcare campuses, manufacturing/logistics centers, colleges, and municipal facilities across ${cityDisplayName}.`
    },
    {
      q: 'How much profit can I make?',
      a: `Well-placed machines in ${cityDisplayName} can generate $250-$800+ per machine per month. After costs, profit margins typically range from 20-35%. ROI often happens within 10-18 months.`
    },
    {
      q: 'Do I need a special license to operate vending machines?',
      a: (
        <>
          You need a local business license if required, a <Link href="/tax-services" className="text-coral hover:text-navy underline font-semibold">sales tax permit</Link>, and health permits if selling food. No special vending-specific license is required beyond standard <Link href="/ein-llc" className="text-coral hover:text-navy underline font-semibold">business registration</Link>.
        </>
      )
    },
    {
      q: 'Can I run a vending machine business part-time?',
      a: 'Yes! Many operators start part-time with 2-5 machines. Plan for 4-8 hours per week for restocking, maintenance, and administrative tasks.'
    },
    {
      q: 'What products should I stock?',
      a: `Popular items in ${stateDisplayName} include cold beverages, salty snacks, candy bars, crackers, and healthy options. Adjust based on location demographics and telemetry data.`
    },
    {
      q: 'How do I find vending machine locations?',
      a: 'Use our platform to access pre-qualified leads, cold call offices and gyms, network at business events, or partner with commercial real estate agents. Target businesses with 50+ employees for best results.'
    },
    {
      q: 'What insurance do I need for vending machines?',
      a: 'Most locations require general liability insurance. A typical policy ranges from $500-$1,200/year depending on coverage and number of machines.'
    },
    {
      q: `How often should I service machines in ${cityDisplayName}?`,
      a: 'Most operators service weekly or biweekly depending on sales volume. High-traffic locations may need more frequent restocking.'
    },
    ...((cityData.extraFaqs || []) as { q: string; a: string }[])
  ]

  return (
    <>
      <Header />

      <div className="min-h-screen bg-warm-white">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-stone">
              <Link href="/" className="hover:text-navy transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/guide" className="hover:text-navy transition-colors">
                Guides
              </Link>
              <span>/</span>
              <Link href="/guide/how-to-start-a-vending-machine-business" className="hover:text-navy transition-colors">
                How to Start
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{cityStateDisplay}</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-14 bg-white text-charcoal border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-stone uppercase tracking-[0.25em] mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral"></span>
                  2026 Guide
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-[44px] font-playfair font-semibold mb-4 leading-[1.15] text-charcoal">
                  How to Start a Vending Machine Business in{' '}
                  <span className="text-navy">{cityStateDisplay}</span>
                </h1>
                <p className="text-base md:text-[17px] mb-5 text-charcoal/70 leading-relaxed">
                  Step-by-step guide for licensing, permits, startup costs, locations, and launch strategy in {cityDisplayName}.
                </p>
                <div className="flex flex-wrap gap-2 justify-center text-xs font-semibold text-charcoal/70 mb-7">
                  <span className="px-3 py-1 rounded-full bg-cream/60 border border-stone/20">Read time ~7 min</span>
                  <span className="px-3 py-1 rounded-full bg-cream/60 border border-stone/20">Updated 2026</span>
                  <span className="px-3 py-1 rounded-full bg-cream/60 border border-stone/20">Local permits</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://vendflow.gumroad.com/l/rxbzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <AcademicCapIcon className="h-5 w-5 mr-2" />
                    Get the Vending Course
                  </a>
                  <Link
                    href={`/ein-llc/${stateSlug}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg transition-colors duration-200 border border-navy/20 hover:border-navy/40"
                  >
                    Get Your {stateDisplayName} LLC + EIN
                  </Link>
                </div>
                <div className="mt-3 text-sm text-charcoal/70">
                  Want locations first? <Link href="#lead-capture" className="underline hover:text-navy">Get lead alerts</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Actions */}
        <section className="py-10 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-cream/60 border border-stone/20 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-navy mb-2">What matters most on this page</h2>
                <p className="text-sm text-charcoal/70 mb-4">
                  Use these three sections to take action fast.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <Link href="#steps" className="rounded-lg border border-stone/20 bg-white px-4 py-3 hover:border-navy/30">
                    <span className="block font-semibold text-charcoal">Step-by-step plan</span>
                    <span className="text-charcoal/70">Exact launch checklist</span>
                  </Link>
                  <Link href="#costs" className="rounded-lg border border-stone/20 bg-white px-4 py-3 hover:border-navy/30">
                    <span className="block font-semibold text-charcoal">Costs & ROI</span>
                    <span className="text-charcoal/70">Budget & payback</span>
                  </Link>
                  <Link href="#lead-capture" className="rounded-lg border border-stone/20 bg-white px-4 py-3 hover:border-navy/30">
                    <span className="block font-semibold text-charcoal">Lead alerts</span>
                    <span className="text-charcoal/70">Get notified first</span>
                  </Link>
                </div>
              </div>
              <div className="bg-white border border-stone/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-3">Quick actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://vendflow.gumroad.com/l/rxbzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-navy text-white rounded-lg font-semibold hover:bg-navy-light transition-colors"
                  >
                    Get the Vending Course
                  </a>
                  <Link
                    href={`/vending-leads/${citySlug}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-navy/30 text-navy rounded-lg font-semibold hover:bg-navy/5 transition-colors"
                  >
                    Browse {cityDisplayName} Leads
                  </Link>
                  <Link
                    href="#faq"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-stone/30 text-charcoal rounded-lg font-semibold hover:bg-stone/5 transition-colors"
                  >
                    Jump to FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Leads Subscription */}
        <section id="lead-capture" className="py-14 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-navy/10 text-navy px-3 py-1 text-xs font-semibold border border-navy/20">
                  Hot Leads Subscription
                </span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mt-4 mb-4">
                  Get first access to premium vending locations in {cityDisplayName}.
                </h2>
                <p className="text-lg text-charcoal/70 mb-6">
                  Subscribers get notified before leads go public and receive exclusive access to newly verified locations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-charcoal/80">
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>First access before public listings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>Exclusive subscriber pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>Verified, decision-maker contacts</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setShowSubscriptionModal(true)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
                  >
                    Subscribe for $20/month
                  </button>
                  <Link
                    href="/hot-leads#marketplace"
                    className="inline-flex items-center justify-center px-6 py-3 border border-navy/20 text-navy font-semibold rounded-lg hover:border-navy/40 transition-colors"
                  >
                    Browse Available Leads
                  </Link>
                </div>
              </div>
              <div className="bg-cream/60 border border-stone/20 rounded-2xl p-8">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-navy">$20</span>
                  <span className="text-sm text-charcoal/70">/month</span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">Hot Leads Premium</h3>
                <p className="text-sm text-charcoal/70 mb-6">
                  Get first access to newly verified vending locations in {cityStateDisplay}.
                </p>
                <ul className="space-y-3 text-sm text-charcoal/80 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>First notification when new leads arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>Leads are sold only once</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>Priority support for subscribers</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={() => setShowSubscriptionModal(true)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors"
                >
                  Join Hot Leads Premium
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <CurrencyDollarIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">$3K-$6K</div>
                  <div className="text-sm text-charcoal/70">Startup Cost Per Machine</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ChartBarIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">$250-$800+</div>
                  <div className="text-sm text-charcoal/70">Monthly Revenue Per Machine</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <ClipboardDocumentCheckIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">10-18 Months</div>
                  <div className="text-sm text-charcoal/70">Typical ROI Timeline</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <UserGroupIcon className="h-10 w-10 text-coral mx-auto mb-3" />
                  <div className="text-2xl font-bold text-navy mb-1">50+ Employees</div>
                  <div className="text-sm text-charcoal/70">Ideal Location Size</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section id="steps" className="py-16 bg-warm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  6 Steps to Launch Your Vending Business in {cityDisplayName}
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Follow this proven process to start and scale your vending machine business in {stateDisplayName}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-8 rounded-xl shadow-md border border-stone/20 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-coral" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                          <div className="text-charcoal/80 leading-relaxed">{step.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Permits & Compliance */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Permits & Compliance in {cityStateDisplay}
                </h2>
                <p className="text-lg text-charcoal/70">
                  Essential licensing and regulatory requirements for your vending business
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Sales Tax Permit
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.salesTax}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Health Permits
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.healthPermit}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-cream p-6 rounded-xl border border-stone/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-2 text-coral" />
                    Business Registration
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.businessLicense}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-navy/5 p-6 rounded-xl border border-navy/20"
                >
                  <h3 className="text-lg font-semibold text-navy mb-3 flex items-center">
                    <LightBulbIcon className="h-5 w-5 mr-2 text-coral" />
                    Additional Considerations
                  </h3>
                  <p className="text-charcoal/80">{permitInfo.additionalNotes}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Startup Costs */}
        <section id="costs" className="py-16 bg-warm-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Startup Costs Breakdown
                </h2>
                <p className="text-lg text-charcoal/70">
                  Typical investment needed to launch your first vending machine
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg border border-stone/20 overflow-hidden"
              >
                <div className="divide-y divide-stone/20">
                  {startupCosts.map((cost, index) => (
                    <div key={index} className="p-5 flex items-center justify-between hover:bg-cream/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CurrencyDollarIcon className="h-5 w-5 text-coral flex-shrink-0" />
                        <span className="text-charcoal font-medium">{cost.item}</span>
                      </div>
                      <span className="text-navy font-semibold">{cost.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-navy/10 p-5 border-t-2 border-navy">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-charcoal">Total Estimated Range</span>
                    <span className="text-2xl font-bold text-navy">$3,000 - $6,500</span>
                  </div>
                  <p className="text-sm text-charcoal/70 mt-2">Per machine. Start with 1-2 machines and scale based on performance.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Best Locations */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Best Locations in {cityDisplayName}
                </h2>
                <p className="text-lg text-charcoal/70">
                  High-demand areas and target markets for your vending machines
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-cream p-8 rounded-xl border border-stone/20"
                >
                  <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
                    <BuildingOffice2Icon className="h-6 w-6 mr-3 text-coral" />
                    High-Demand Target Markets
                  </h3>
                  <ul className="space-y-3">
                    {demandDrivers.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-cream p-8 rounded-xl border border-stone/20"
                >
                  <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
                    <MapPinIcon className="h-6 w-6 mr-3 text-coral" />
                    Key Areas & Neighborhoods
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {neighborhoods.map((neighborhood, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-lg text-charcoal border border-stone/20 text-sm font-medium"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                  {cityData.seasonalNote && (
                    <div className="mt-6 p-4 bg-navy/5 rounded-lg border border-navy/10">
                      <p className="text-sm text-charcoal/80">
                        <strong className="text-navy">Pro Tip:</strong> {cityData.seasonalNote}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Vending Course Section */}
        <section id="vending-course" className="py-16 bg-gradient-to-br from-warm-white to-cream border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Master the Vending Machine Business
                </h2>
                <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
                  Get our comprehensive course with scripts, templates, supplier contacts, and everything you need to succeed in {cityStateDisplay}
                </p>
              </motion.div>

              <VendingCourse />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-charcoal/70">
                  Common questions about starting a vending business in {cityStateDisplay}
                </p>
              </motion.div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-cream p-6 rounded-xl border border-stone/20"
                  >
                    <h3 className="text-lg font-semibold text-navy mb-3">{faq.q}</h3>
                    <div className="text-charcoal/80 leading-relaxed">{faq.a}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <Testimonials compact />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-navy to-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Start Your Vending Business in {cityDisplayName}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get access to premium vending locations and our comprehensive business course
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://vendflow.gumroad.com/l/rxbzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  Get the Vending Course
                </a>
                <Link
                  href={`/vending-leads/${citySlug}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 border border-white/30"
                >
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  Browse {cityDisplayName} Locations
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Hot Leads Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/50 transition-opacity"
              onClick={() => {
                setShowSubscriptionModal(false)
                setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
              }}
            />

            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6 mx-4">
              <button
                onClick={() => {
                  setShowSubscriptionModal(false)
                  setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
                }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 z-10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="mb-4 pb-4 border-b border-gray-200 pr-8">
                <h2 className="text-xl sm:text-2xl font-playfair font-bold text-chocolate mb-1">
                  Hot Leads Premium Subscription
                </h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-navy">
                    $20
                  </span>
                  <span className="text-stone text-sm sm:text-base">/month</span>
                </div>
                <p className="text-xs sm:text-sm text-stone mt-2">
                  Get first access to premium vending leads with subscriber discounts
                </p>
              </div>
              <p className="text-sm sm:text-base text-stone mb-6">
                Please provide your information to continue to checkout.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault()

                  if (!subscriptionFormData.agreedToTerms) {
                    alert('Please agree to the Terms of Service to continue.')
                    return
                  }

                  setIsSubmittingSubscription(true)

                  try {
                    const formspreeResponse = await fetch('https://formspree.io/f/mykdgypa', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name: subscriptionFormData.name,
                        email: subscriptionFormData.email,
                        city: subscriptionFormData.city,
                        state: subscriptionFormData.state,
                        subscription: 'Hot Leads Premium Subscription',
                        monthlyPrice: '$20/month',
                        _subject: 'Hot Leads Premium Subscription Signup',
                        _replyto: subscriptionFormData.email,
                      }),
                    })

                    if (!formspreeResponse.ok) {
                      throw new Error('Formspree submission failed')
                    }

                    try {
                      await fetch('/api/hot-leads-subscriptions', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          name: subscriptionFormData.name,
                          email: subscriptionFormData.email,
                          city: subscriptionFormData.city,
                          state: subscriptionFormData.state,
                          subscriptionType: 'hot-leads-premium',
                          monthlyPrice: 20,
                          status: 'pending',
                        }),
                      })
                    } catch (apiError) {
                      console.log('Subscription API submission failed (non-critical):', apiError)
                    }

                    const stripeResponse = await fetch('/api/hot-leads-subscription-checkout', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        email: subscriptionFormData.email,
                      }),
                    })

                    const data = await stripeResponse.json()

                    if (data.success && data.url) {
                      window.location.href = data.url
                    } else {
                      alert('Error creating checkout session. Please try again.')
                      setIsSubmittingSubscription(false)
                    }
                  } catch (error) {
                    console.error('Checkout error:', error)
                    alert('Error processing your request. Please try again.')
                    setIsSubmittingSubscription(false)
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="subscription-name" className="block text-sm font-medium text-chocolate mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="subscription-name"
                    name="name"
                    required
                    value={subscriptionFormData.name}
                    onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="subscription-email" className="block text-sm font-medium text-chocolate mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="subscription-email"
                    name="email"
                    required
                    value={subscriptionFormData.email}
                    onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="subscription-city" className="block text-sm font-medium text-chocolate mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="subscription-city"
                      name="city"
                      required
                      value={subscriptionFormData.city}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="subscription-state" className="block text-sm font-medium text-chocolate mb-2">
                      State *
                    </label>
                    <select
                      id="subscription-state"
                      name="state"
                      required
                      value={subscriptionFormData.state}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, state: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral focus:border-coral"
                    >
                      <option value="">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={subscriptionFormData.agreedToTerms}
                      onChange={(e) => setSubscriptionFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                      className="mt-1 h-4 w-4 text-coral focus:ring-coral border-gray-300 rounded"
                    />
                    <span className="text-sm text-stone">
                      I agree to the{' '}
                      <Link href="/terms-of-service" target="_blank" className="text-coral hover:text-coral/80 underline">
                        Terms of Service
                      </Link>
                      {' '}and understand that leads availability may vary by month.
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSubscriptionModal(false)
                      setSubscriptionFormData({ name: '', email: '', city: '', state: '', agreedToTerms: false })
                    }}
                    className="w-full sm:flex-1 px-4 py-2.5 border-2 border-gray-300 text-chocolate rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingSubscription}
                    className="w-full sm:flex-1 px-4 py-2.5 bg-coral hover:bg-coral/90 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmittingSubscription ? 'Processing...' : 'Continue to Checkout'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
