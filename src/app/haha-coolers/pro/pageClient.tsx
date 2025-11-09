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

const highlightFeatures = [
  {
    title: 'Stacked Merchandising',
    description:
      'Five beverage shelves plus two can layers (378 bottles total) keep cold products organised while maximising revenue per square foot.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Vision + Electromagnetic Security',
    description:
      'Computer vision recognises selected products while the door lock and camera system secure the transaction with 99% accuracy.',
    icon: CpuChipIcon
  },
  {
    title: 'Cashless & Contactless',
    description:
      'EMV-ready payment terminal supports tap, swipe, chip, and mobile wallets so customers can pay however they like—no friction.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Pro Management App',
    description:
      'Monitor real-time inventory, sales velocity, machine health, and restocking tasks across your entire fleet from one dashboard.',
    icon: CloudIcon
  },
  {
    title: 'Data for Scale',
    description:
      'Export sales summaries, track profit by SKU, and identify ideal planograms when you are rolling out multi-site deployments.',
    icon: ChartBarIcon
  },
  {
    title: 'Built for Business',
    description:
      'Commercial refrigeration, ETL compliance, standard 110V power, and a 1-year parts warranty so operators can plug in with confidence.',
    icon: BoltIcon
  }
]

const specs = [
  ['Model', 'US1200CT Pro vision cooler'],
  ['Capacity', '378 bottles (5 bottle shelves + 2 can shelves)'],
  ['Temperature Control', 'Commercial-grade refrigeration with double-glazed anti-fog glass'],
  ['Connectivity', 'Wi-Fi + optional 4G module for always-on reporting'],
  ['Payments', 'Credit/debit, NFC wallets, QR-enabled acceptance'],
  ['Power', 'Standard 110V / 60Hz outlet'],
  ['Security', 'AI camera array + electromagnetic lock with event recording'],
  ['Dimensions', 'Designed for lobbies, cafeterias, and high-traffic corridors']
]

const faqs = [
  {
    question: 'Where does the Haha Pro fit best?',
    answer:
      'Mid-sized campuses, office towers, residential buildings, factories, healthcare facilities, and any site that needs higher capacity than the Mini without stepping up to a full unattended store.'
  },
  {
    question: 'How long does deployment take?',
    answer:
      'Most operators complete delivery, placement, app configuration, and product loading in a single day. Our team provides best practices for merchandising and launch promotions.'
  },
  {
    question: 'Can I run multiple Pro machines from one account?',
    answer:
      'Yes. The Haha mobile dashboard is built for fleets. Switch between locations, push new pricing, and resolve support tickets from any device.'
  },
  {
    question: 'What support do I get after purchase?',
    answer:
      'Join our Telegram community @thevendinglocator for rapid peer help, best practices, and direct access to The Vending Locator team for escalation.'
  }
]

const deploymentIdeas = [
  'Large corporate campuses',
  'Industrial & manufacturing sites',
  'Hospitals and healthcare waiting rooms',
  'Airports and transit hubs',
  'University residence halls',
  'Hotels and resort corridors',
  'Mixed-use residential lobbies'
]

export default function HahaProPageClient() {
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
                Haha Pro AI Smart Vending
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                  Haha Pro<br />
                  <span className="text-navy">AI Smart</span> Vending Machine
                </h1>

                <p className="mt-6 text-lg leading-8 text-stone">
                  A next-generation combo vending platform that merges fridge space, smart shelving, and computer vision so customers shop naturally
                  and operators monetise premium products without staffing.
                </p>

                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-charcoal">$4,999</span>
                  <div className="text-stone">
                    <div className="text-sm">Single unit pricing</div>
                    <div className="text-xs">Enterprise-grade hardware</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://amzn.to/3LtSLRq"
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
                    <span>378 bottle capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Vision + electromagnetic security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Fleet-ready mobile app</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
                  <img
                    src="/haha-coolers/haha-pro-black.png"
                    alt="Haha Pro AI Smart Vending Machine"
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
              Built for serious vending operators
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlightFeatures.map((feature) => (
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
              {specs.map(([label, value]) => (
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
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">Ideal deployment environments</h2>
                <p className="text-lg text-stone leading-relaxed mb-6">
                  The Haha Pro is a high-capacity solution that thrives in locations where traffic is constant and product variety matters. Keep bottled
                  drinks, fresh food, and snacks moving without staffing a market.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-stone">
                  {deploymentIdeas.map((location) => (
                    <span key={location} className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-blue-800">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Support & Community</h3>
                <p className="text-stone leading-relaxed mb-4">
                  Gain access to our Telegram operator community for deployment checklists, planogram advice, and real-time troubleshooting directly
                  from other Haha Pro owners and The Vending Locator team.
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
              {faqs.map((item) => (
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
              Ready to roll out Haha Pro across your network?
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              The Vending Locator can assist with site sourcing, machine deployment, planogram design, and long-term performance monitoring so your
              AI-powered vending program scales smoothly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule a Strategy Call
              </Link>
              <a
                href="https://amzn.to/3LtSLRq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Purchase on Amazon →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ZipCodeModalWrapper />
    </div>
  )
}
