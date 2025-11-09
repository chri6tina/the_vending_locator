'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ZipCodeModalWrapper from '@/components/ZipCodeModalWrapper'
import Link from 'next/link'
import { useState } from 'react'
import {
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const coreFeatures = [
  {
    title: 'Vision Checkout (99% Accuracy)',
    description:
      'Camera-driven AI recognises every item removed from the cooler and automatically charges the customer, eliminating shrinkage and mistakes.',
    icon: CpuChipIcon
  },
  {
    title: 'Cashless from Day One',
    description:
      'Accepts credit/debit cards plus Apple Pay, Google Pay, Samsung Pay, and every NFC tap so you never worry about coin jams again.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Fresh Product Friendly',
    description:
      'No drop mechanism. Stack fragile drinks, bottled water, salads, yogurts, or meal prep items with confidence—nothing gets shaken or broken.',
    icon: ShieldCheckIcon
  },
  {
    title: 'App Smart Management',
    description:
      'Monitor stock levels, see sales in real-time, push price updates, and auto-generate replenishment orders from the mobile dashboard.',
    icon: CloudIcon
  },
  {
    title: 'Route Optimised Analytics',
    description:
      'Track top-performing SKUs, identify low performers, and plan routes with the data you need to keep fridges full and profitable.',
    icon: ChartBarIcon
  },
  {
    title: 'ETL Certified & Reliable',
    description:
      'Runs on standard 110V/60Hz power, includes a 1-year parts warranty, and ships ready for commercial environments.',
    icon: BoltIcon
  }
]

const salesBenefits = [
  'Higher sales per location thanks to a wider mix of fresh food, snacks, and drinks accessible in one cooler.',
  'Self-serve, multi-item shopping experience that feels like a micro market instead of a traditional vending machine.',
  'App smart management lets you control inventory, pricing, and customer feedback in real time—even on the go.',
  'AI vision technology prevents spills and broken bottles, protecting premium beverages and delicate food items.',
  'Cashless payments eliminate coin jams, reduce service calls, and keep routes profitable with tap & go convenience.'
]

const specificationRows = [
  ['Exterior Finish', 'Black or Yellow high-visibility enclosure'],
  ['Capacity', 'Up to 200+ assorted beverages/snacks (no-drop design)'],
  ['Cooling', 'Commercial-grade compressor with auto defrost'],
  ['Dimensions', 'US360 footprint optimised for tight lobbies and breakrooms'],
  ['Connectivity', '4G (optional) + Wi-Fi, cloud synced'],
  ['Power', 'Standard 110V / 60Hz outlet'],
  ['Payments', 'EMV card reader, NFC wallet support, optional QR'],
  ['Included', 'Vision module, cashless terminal, smart app, 1-year warranty']
]

const faqItems = [
  {
    question: 'How does the grab & go experience work?',
    answer:
      'Customers tap a card or phone to unlock the door. They pick any combination of items and simply close the cooler. The vision system records the transaction and bills the card instantly.'
  },
  {
    question: 'Can I manage multiple Mini coolers remotely?',
    answer:
      'Yes. Use the Haha management app to view cooler health, sales trends, and stock levels for every unit. The platform generates pick sheets so replenishment is fast and accurate.'
  },
  {
    question: 'What products do operators usually sell?',
    answer:
      'Energy drinks, sodas, bottled water, protein shakes, yogurts, salads, sandwiches, and grab-and-go meals. Anything fragile performs better because it is never dropped.'
  },
  {
    question: 'Is installation complicated?',
    answer:
      'Plug into a standard outlet, connect the cooler to Wi-Fi (or insert a carrier SIM for 4G), load products, and activate the machine in the app. Most operators go live in under an hour.'
  }
]

const useCases = [
  'Corporate offices & breakrooms',
  'Residential towers & amenity spaces',
  'Colleges and universities',
  'Fitness centres & boutique gyms',
  'Hospitals & medical waiting rooms',
  'Co-working hubs & flexible workspaces',
  'Small-format retail & micro markets'
]

const marketplaceFacts = [
  ['Manufacturer', 'HAHA Vending'],
  ['ASIN', 'B0F9P9KLX6'],
  ['Date First Available', 'May 23, 2025'],
  ['Best Sellers Rank', '#72,826 in Industrial & Scientific • #14 in Commercial Vending Machines']
]

const galleryImages = [
  {
    src: '/haha-coolers/haha-mini-info-1.png',
    alt: 'Haha US360 Mini smart cooler interior overview'
  },
  {
    src: '/haha-coolers/haha-mini-info-2.png',
    alt: 'Haha US360 Mini AI vending feature highlights'
  }
]

export default function HahaMiniPageClient() {
  const [selectedColor, setSelectedColor] = useState<'black' | 'yellow'>('black')

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-stone mb-8">
              <div className="flex items-center gap-2">
                <Link href="/haha-coolers" className="text-navy hover:underline">
                  ← Back to Smart Cooler lineup
                </Link>
              </div>
              <span className="inline-flex items-center rounded-full bg-navy/10 px-4 py-1 font-medium text-navy">
                Haha US360 Mini
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                  Haha US360 Mini<br />
                  <span className="text-navy">Grab &amp; Go</span> Smart Cooler
                </h1>

                <p className="mt-6 text-lg leading-8 text-stone">
                  Deliver a premium micro-market experience in the footprint of a single cooler. With 99% accurate AI checkout, customers simply open
                  the door, grab what they want, and walk away—no buttons, no drop mechanisms, no broken bottles.
                </p>

                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-5xl font-bold text-charcoal">$2,999</span>
                  <div className="text-stone">
                    <div className="text-sm">One-time purchase</div>
                    <div className="text-xs">Ships ready to activate</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://amzn.to/43aTe10"
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

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold text-charcoal mb-3">Choose Your Color</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedColor('black')}
                      className={`flex items-center gap-2 bg-white border-2 rounded-lg px-4 py-2 transition-colors ${
                        selectedColor === 'black'
                          ? 'border-navy ring-2 ring-navy/20'
                          : 'border-gray-300 hover:border-navy'
                      }`}
                    >
                      <div className="w-6 h-6 bg-black rounded-full border border-gray-300"></div>
                      <span className="text-sm font-medium text-charcoal">Black</span>
                    </button>
                    <button
                      onClick={() => setSelectedColor('yellow')}
                      className={`flex items-center gap-2 bg-white border-2 rounded-lg px-4 py-2 transition-colors ${
                        selectedColor === 'yellow'
                          ? 'border-navy ring-2 ring-navy/20'
                          : 'border-gray-300 hover:border-navy'
                      }`}
                    >
                      <div className="w-6 h-6 bg-yellow-400 rounded-full border border-gray-300"></div>
                      <span className="text-sm font-medium text-charcoal">Yellow</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-stone">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>99% accurate vision checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>Cashless payment terminal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    <span>App-based remote management</span>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
                  <img
                    src={`/haha-coolers/haha-us360-mini-${selectedColor}.png`}
                    alt={`Haha US360 Mini Smart Vending Machine - ${selectedColor}`}
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
              Why operators trust the Haha US360 Mini
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
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
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">
              What the Haha Mini does for your revenue
            </h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <ul className="space-y-4 text-stone leading-relaxed">
                {salesBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">
              Technical Specifications
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200">
              {specificationRows.map(([label, value]) => (
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
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">Designed for modern placements</h2>
                <p className="text-lg text-stone leading-relaxed mb-6">
                  The US360 Mini is built for spaces where a traditional vending machine would feel dated or disruptive. With a minimal footprint and
                  silent operation, you can offer premium products without sacrificing ambience.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-stone">
                  {useCases.map((location) => (
                    <span key={location} className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-blue-800">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Support & Community</h3>
                <p className="text-stone leading-relaxed mb-4">
                  Every purchase includes access to our operator community. Swap best practices, get real-world launch advice, and access rapid
                  troubleshooting when you need it most.
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
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">Marketplace details</h2>
            <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200">
              {marketplaceFacts.map(([label, value]) => (
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

        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-md transition-shadow duration-300"
                >
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
              Ready to launch a smart cooler at your location?
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Partner with The Vending Locator to secure high-performing placements, proven planograms, and a support team that understands modern smart
              vending operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Connect With Our Team
              </Link>
              <a
                href="https://amzn.to/43aTe10"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Order Direct on Amazon →
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
