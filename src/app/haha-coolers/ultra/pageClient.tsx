'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import Link from 'next/link'
import {
  CheckCircleIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const ultraHighlights = [
  {
    title: 'End-to-End Grab & Go Retail',
    description:
      'Supports multi-item shopping like a micro-market. Customers open the door, mix snacks, drinks, and meals, then walk away—billing is automatic with 99% accurate AI vision.',
    icon: CpuChipIcon
  },
  {
    title: 'Enterprise-Grade Capacity',
    description:
      'Expanded cabinet provides deep shelving, allowing large SKU counts for hospitals, airports, campuses, and other high-volume placements.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Industry-Leading Vision System',
    description:
      'Enhanced camera array records every interaction and pairs with electromagnetic locks to secure inventory while keeping the experience frictionless.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Advanced Fleet Tools',
    description:
      'Remote diagnostics, over-the-air updates, live inventory, automated restock orders, and escalation workflows keep large deployments running smoothly.',
    icon: CloudIcon
  },
  {
    title: 'Actionable Analytics',
    description:
      'Track sales velocity, basket size, buyer behaviour, and merchandising success so you can continuously optimise product mix.',
    icon: ChartBarIcon
  },
  {
    title: 'Always-On Reliability',
    description:
      'Commercial refrigeration with customizable lightboxes/panels, double-glazed anti-fog glass, ETL certification, and robust hardware designed for 24/7 unmanned retail.',
    icon: BoltIcon
  }
]

const salesBenefits = [
  'Higher sales per vending machine thanks to expanded product categories and stacked merchandising for heavier foot traffic locations.',
  'Camera-assisted, multi-item checkout mimics supermarket shopping and encourages larger baskets with every visit.',
  'Powerful professional app with Wi-Fi/4G handles remote device control, data statistics, replenishment orders, and customer feedback.',
  'Electromagnetic lock plus camera visual recognition ensure secure transactions while customers help themselves.',
  'Customizable lightboxes and side panels let you promote a brand, property, or merchants with eye-catching vinyl wraps.'
]

const ultraSpecs = [
  ['Model', 'Haha AI Ultra (US1200CT - Black)'],
  ['Pricing', '$7,299 USD (single unit)'],
  ['Capacity', 'High-volume combination vending with stacked merchandising'],
  ['Security', 'AI camera monitoring + electromagnetic door lock + audit trail'],
  ['Connectivity', 'Native Wi-Fi with optional 4G failover'],
  ['Payments', 'EMV card terminal, mobile wallets, QR-enabled acceptance'],
  ['Power', 'Standard 110V / 60Hz power requirements'],
  ['Warranty', '1-year parts coverage with extended options for fleets']
]

const ultraFAQs = [
  {
    question: 'Who is the Haha Ultra designed for?',
    answer:
      'Operators running large residential portfolios, hospitals, airports, universities, or corporate campuses who need continuous uptime, deep product variety, and real-time oversight.'
  },
  {
    question: 'How does restocking work at scale?',
    answer:
      'The management platform generates automatic restock orders and pick lists. Operators can assign routes, acknowledge replenishment in the app, and track service-level compliance.'
  },
  {
    question: 'Can the Ultra integrate with my existing systems?',
    answer:
      'The Haha backend exposes APIs and reporting exports so enterprise teams can plug data into BI dashboards or inventory software. Reach out to our team to scope integrations.'
  },
  {
    question: 'What kind of support do I receive?',
    answer:
      'The Vending Locator offers onboarding assistance, site rollout guidance, and access to our Telegram community for rapid peer-to-peer support and escalation.'
  }
]

const premiumPlacements = [
  'Commercial & office towers',
  'Manufacturing & factory spaces',
  'Universities & college campuses',
  'Hospitals & healthcare environments',
  'Hospitality, hotels, and B&Bs',
  'Residential buildings & mixed-use developments',
  'Airports, shopping malls, and transportation hubs',
  'Gyms and fitness clubs'
]

const galleryImages = [
  {
    src: '/haha-coolers/haha-ultra-info-1.png',
    alt: 'Haha Ultra AI smart vending marketing graphic'
  }
]

export default function HahaUltraPageClient() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-stone mb-8">
              <Link href="/haha-coolers" className="text-navy hover:underline">
                ← Back to Smart Cooler lineup
              </Link>
              <span className="inline-flex items-center rounded-full bg-navy/10 px-4 py-1 font-medium text-navy">
                Haha Ultra AI Smart Vending
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                  Haha Ultra<br />
                  <span className="text-navy">AI Smart</span> Vending Machine
                </h1>

                <p className="mt-6 text-lg leading-8 text-stone">
                  The flagship Haha platform engineered for high-traffic, unattended retail. Ultra delivers frictionless shopping, bulletproof security,
                  and operational tools to keep thousands of SKUs stocked around the clock while shoppers enjoy a supermarket-style experience.
                </p>

                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-charcoal">$7,299</span>
                  <div className="text-stone">
                    <div className="text-sm">Single unit pricing</div>
                    <div className="text-xs">Enterprise support available</div>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800">
                  <span>💬 24/7 Support:</span>
                  <a
                    href="https://t.me/thevendinglocator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:underline"
                  >
                    Telegram @thevendinglocator
                  </a>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://amzn.to/3LwEbIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg text-center"
                  >
                    Buy Now on Amazon →
                  </a>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors text-center"
                  >
                    Talk to Sales
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>High-volume combo merchandising</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Camera-verified checkout security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Professional fleet management tools</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
                  <img
                    src="/haha-coolers/haha-ultra-black.png"
                    alt="Haha Ultra AI Smart Vending Machine"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">
              Designed for mission-critical vending deployments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ultraHighlights.map((feature) => (
                <div key={feature.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10">
                      <feature.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal">{feature.title}</h3>
                  </div>
                  <p className="text-stone leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">Technical specifications</h2>
            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200">
              {ultraSpecs.map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5">
                  <span className="text-sm font-semibold text-charcoal uppercase tracking-wide">{label}</span>
                  <span className="text-base text-stone leading-relaxed sm:max-w-xl">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">Premium placements, proven ROI</h2>
                <p className="text-lg text-stone leading-relaxed mb-6">
                  Ultra was built for locations where uptime, merchandising flexibility, and real-time analytics directly impact occupant experience. Use
                  it to deliver healthy meals, premium beverages, and everyday essentials without staffing a store.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-stone">
                  {premiumPlacements.map((location) => (
                    <span key={location} className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-blue-800">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Support & Community</h3>
                <p className="text-stone leading-relaxed mb-4">
                  Collaborate with other enterprise operators in our Telegram community and lean on The Vending Locator team for deployment roadmaps,
                  site sourcing, merchandising strategies, ongoing optimisation, and lifetime free technical support.
                </p>
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:underline"
                >
                  📱 Telegram: @thevendinglocator
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-6">
              {ultraFAQs.map((item) => (
                <details key={item.question} className="group border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow">
                  <summary className="text-lg font-semibold text-charcoal cursor-pointer flex items-center justify-between">
                    {item.question}
                    <span className="ml-4 text-navy group-open:rotate-90 transition-transform">›</span>
                  </summary>
                  <p className="mt-3 text-stone leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">
              Launch the Haha Ultra with The Vending Locator
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              From site acquisition to merchandising and ongoing optimisation, our team helps enterprise operators deploy the Haha Ultra at scale while
              maintaining white-glove customer experience. Comprehensive pre-sales consulting, 1-year warranty, and lifetime free technical support are
              available for every installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Enterprise Pricing
              </Link>
              <a
                href="https://amzn.to/3LwEbIO"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Secure Units on Amazon →
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg text-sm font-medium text-blue-800 justify-center">
              <span>💬 24/7 Support:</span>
              <a
                href="https://t.me/thevendinglocator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:underline"
              >
                Telegram @thevendinglocator
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">Product gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image) => (
                <div key={image.src} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <img src={image.src} alt={image.alt} className="w-full h-auto rounded-xl" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ZipCodeModalWrapper />
    </div>
  )
}
