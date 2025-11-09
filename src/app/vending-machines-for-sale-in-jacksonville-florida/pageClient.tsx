'use client'

import { LocationPageTemplate } from '@/components/location/LocationPageTemplate'
import { jacksonvilleContent } from '@/config/locationPages'

export default function JacksonvillePage() {
  return <LocationPageTemplate content={jacksonvilleContent} />
}
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'
import {
  BuildingOfficeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  CubeIcon,
  LifebuoyIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

const coolerLineup = [
  {
    name: 'Haha US360 Mini',
    label: 'Mini',
    price: '$2,999',
    description:
      'Compact, 99% accurate vision-based cooler that fits corporate offices, gyms, and premium residential amenities across Jacksonville.',
    bullets: ['Ideal for high-traffic breakrooms', 'Cashless tap-to-open checkout', 'Remote inventory visibility'],
    amazonUrl: 'https://amzn.to/43aTe10',
    learnMoreUrl: '/haha-coolers/mini',
    image: {
      src: '/haha-coolers/haha-us360-mini-black.png',
      alt: 'Haha US360 Mini smart cooler - black finish'
    }
  },
  {
    name: 'Haha US360 Pro',
    label: 'Pro',
    price: '$4,999',
    description:
      'Full-height smart cooler with 378 bottle capacity, perfect for enterprise campuses, hospitals, and university venues in Duval County.',
    bullets: ['4G + Wi-Fi connectivity', 'Vision AI prevents shrinkage', 'Built for multi-item shopping'],
    amazonUrl: 'https://amzn.to/3LtSLRq',
    learnMoreUrl: '/haha-coolers/pro',
    image: {
      src: '/haha-coolers/haha-pro-black.png',
      alt: 'Haha US360 Pro smart cooler - black finish'
    }
  },
  {
    name: 'Haha US1200 Ultra',
    label: 'Ultra',
    price: '$7,299',
    description:
      'Flagship AI vending cooler with maximum capacity and customizable branding to anchor micro market footprints across North Florida.',
    bullets: ['ETL-certified commercial refrigeration', 'App-driven restock automation', 'Supports full meal prep assortments'],
    amazonUrl: 'https://amzn.to/3LwEbIO',
    learnMoreUrl: '/haha-coolers/ultra',
    image: {
      src: '/haha-coolers/haha-ultra-black.png',
      alt: 'Haha US1200 Ultra smart cooler - black finish'
    }
  }
]

const sellingPoints = [
  {
    title: 'Jacksonville-first placement strategy',
    description:
      'We help you prioritise Downtown, St. Johns Town Center, Riverside, and Southside corporate parks with real data on foot traffic and demand.',
    icon: MapPinIcon
  },
  {
    title: 'Inventory plans matched to neighbourhoods',
    description:
      'From Navy installations to Mayo Clinic and UNF dorms, our launch playbooks recommend SKUs that are proven to sell in each micro market.',
    icon: CubeIcon
  },
  {
    title: '24/7 operator support on Telegram',
    description:
      'Skip manufacturer queues. Tap into @thevendinglocator any time you need troubleshooting, restock recommendations, or launch coaching.',
    icon: ChatBubbleOvalLeftEllipsisIcon
  },
  {
    title: 'Hands-on onboarding',
    description:
      'We walk your team through activation, cashless configuration, first-time merchandising, and route optimisation so you go live fast.',
    icon: LifebuoyIcon
  }
]

const neighbourhoods = [
  'Downtown Jacksonville & Brooklyn',
  'Riverside & Five Points creative corridor',
  'Southside corporate campuses (JTB corridor)',
  'Baymeadows & Deerwood office parks',
  'Northside logistics hubs & JAXPORT',
  'Jacksonville Beach, Neptune Beach, Atlantic Beach',
  'St. Johns County master-planned communities',
  'University of North Florida & Jacksonville University'
]

const logisticsSupport = [
  {
    title: 'Managed delivery',
    description:
      'We coordinate white-glove freight into Duval, Clay, and St. Johns counties with carriers familiar with smart vending equipment.',
    icon: TruckIcon
  },
  {
    title: 'Warranty & compliance',
    description:
      'All Haha coolers are ETL listed, meet Florida health code requirements, and include a 1-year parts warranty backed by our partner network.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Launch readiness checklist',
    description:
      'Receive plug-and-play setup guides, planograms, and marketing assets branded for Jacksonville operators.',
    icon: SparklesIcon
  },
  {
    title: 'Always-on messaging',
    description:
      '24/7 support via Telegram, plus weekly operator office hours covering merchandising, pricing, and route planning.',
    icon: ClockIcon
  }
]

const faqItems = [
  {
    question: 'How quickly can I receive a smart cooler in Jacksonville?',
    answer:
      'Most Haha units ship within 7–10 business days. We arrange freight into Jacksonville and surrounding suburbs, then schedule delivery windows that match building dock hours.'
  },
  {
    question: 'Can you help me find locations around Jacksonville?',
    answer:
      'Yes. The Vending Locator sources placements across corporate offices, medical centres, multifamily towers, and military facilities throughout Northeast Florida.'
  },
  {
    question: 'Do the machines handle beach humidity and Florida heat?',
    answer:
      'Absolutely. Double-glazed doors with internal desiccant keep condensation under control, and the commercial refrigeration system is engineered for humid coastal climates.'
  },
  {
    question: 'What payment methods do Jacksonville customers prefer?',
    answer:
      'Tap-to-pay dominates. Every Haha cooler accepts EMV chips, Apple Pay, Google Pay, Samsung Pay, and NFC wallets so you can capture tourists and office staff alike.'
  },
  {
    question: 'Where can I learn more about each model?',
    answer:
      'Explore the full lineup on our Haha Coolers page for deep dives, spec sheets, and operator resources tailored to each model.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Vending Machines for Sale in Jacksonville, Florida',
  description:
    'Smart vending machines and AI-powered coolers available in Jacksonville, Florida with 24/7 operator support from The Vending Locator.',
  brand: {
    '@type': 'Organization',
    name: 'The Vending Locator'
  },
  areaServed: {
    '@type': 'Place',
    name: 'Jacksonville, Florida'
  },
  url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-jacksonville-florida',
  offers: coolerLineup.map((cooler) => ({
    '@type': 'Offer',
    name: cooler.name,
    price: cooler.price.replace(/[^0-9.]/g, ''),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: cooler.amazonUrl
  })),
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'US',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 30
  }
}

export default function JacksonvillePage() {
  return (
    <div className="bg-warm-white min-h-screen text-charcoal">
      <Header />

      <main>
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-stone mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 font-semibold text-navy">
                <SparklesIcon className="h-4 w-4" />
                Smart Vending • Jacksonville, FL
              </div>
              <span className="inline-flex items-center gap-2 text-navy font-semibold">
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                24/7 Support:{' '}
                <a
                  href="https://t.me/thevendinglocator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Telegram @thevendinglocator
                </a>
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-charcoal mb-6">
                  Vending Machines for Sale in{' '}
                  <span className="text-navy">Jacksonville, Florida</span>
                </h1>
                <p className="text-lg leading-8 text-stone mb-6">
                  Launch smart vending across Jacksonville with Haha AI-powered coolers, curated placement strategies, and human support that stays with you long after delivery. We help you merchandise for Downtown offices, beach crowds, and suburban campuses across the First Coast.
                </p>
                <div className="space-y-3 text-sm text-stone mb-8">
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                    <span>Guaranteed authentic Haha vending machines with US-based warranty partners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-green-600" />
                    <span>Rapid freight into Duval, Clay, and St. Johns counties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-green-600" />
                    <span>Operator-first, 24/7 Telegram support community</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/haha-coolers"
                    className="w-full sm:w-auto bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition-colors"
                  >
                    Explore Smart Coolers
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-navy hover:text-white transition-colors"
                  >
                    Talk to Jacksonville Experts
                  </Link>
                </div>
              </div>
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
                <div className="bg-blue-50 text-navy text-sm font-semibold inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4">
                  <MapPinIcon className="h-4 w-4" />
                  Built for First Coast markets
                </div>
                <ul className="space-y-4 text-stone leading-relaxed">
                  <li>
                    <strong className="text-charcoal">Primary verticals:</strong> medical campuses, logistics hubs, universities, multi-family, and hospitality.
                  </li>
                  <li>
                    <strong className="text-charcoal">Power your routes:</strong> 4G + Wi-Fi connectivity, remote planograms, and blazing fast restock analytics.
                  </li>
                  <li>
                    <strong className="text-charcoal">Localized onboarding:</strong> Launch checklists and recommended product mixes for each Jacksonville neighbourhood.
                  </li>
                  <li>
                    <strong className="text-charcoal">Always-on support:</strong>{' '}
                    <a
                      href="https://t.me/thevendinglocator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy font-semibold hover:underline"
                    >
                      Telegram @thevendinglocator
                    </a>{' '}
                    with real operators sharing playbooks around the clock.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal">Best-selling smart coolers for Jacksonville</h2>
                <p className="mt-3 text-stone leading-relaxed">
                  Pair the right Haha cooler with your placement strategy. We keep inventory in rotation so you can scale new routes without delays.
                </p>
              </div>
              <Link
                href="/haha-coolers"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:underline"
              >
                View the full Haha Coolers lineup →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coolerLineup.map((cooler) => (
                <div key={cooler.name} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
                  <img
                    src={cooler.image.src}
                    alt={cooler.image.alt}
                    className="w-full h-44 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal">{cooler.name}</h3>
                    <p className="mt-2 text-lg font-bold text-navy">{cooler.price}</p>
                    <p className="mt-3 text-stone leading-relaxed">{cooler.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-stone">
                    {cooler.bullets.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <SparklesIcon className="h-4 w-4 text-navy mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-3">
                    <a
                      href={cooler.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-lg font-semibold text-center transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <Link href={cooler.learnMoreUrl} className="text-navy font-semibold text-center hover:underline">
                      Learn more about {cooler.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {sellingPoints.map((point) => (
                <div key={point.title} className="bg-warm-white border border-gray-200 rounded-2xl p-8 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                    <point.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{point.title}</h3>
                    <p className="text-stone leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-10">
              Jacksonville coverage playbook
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 inline-flex items-center gap-2">
                  <BuildingOfficeIcon className="h-5 w-5 text-navy" />
                  Priority neighbourhoods
                </h3>
                <ul className="space-y-3 text-stone leading-relaxed">
                  {neighbourhoods.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <MapPinIcon className="h-5 w-5 text-navy mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-charcoal mb-4 inline-flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-navy" />
                  What we deliver
                </h3>
                <ul className="space-y-3 text-stone leading-relaxed">
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="h-5 w-5 text-navy mt-0.5" />
                    <span>Custom merchandising plans that match Jacksonville demographics and day-part traffic.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="h-5 w-5 text-navy mt-0.5" />
                    <span>Hands-on sourcing of fresh food partners and wholesale beverage suppliers across Northeast Florida.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="h-5 w-5 text-navy mt-0.5" />
                    <span>Community of operators swapping live performance data so you stay competitive.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logisticsSupport.map((item) => (
                <div key={item.title} className="bg-warm-white border border-gray-200 rounded-2xl p-8 flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10">
                    <item.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-stone leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-warm-white border-b border-gray-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
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

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-charcoal mb-6">Ready to launch in Jacksonville?</h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Partner with The Vending Locator to secure high-performing placements, smart vending machines, and the 24/7 support team every Jacksonville operator needs. We stay in the trenches with you from shipment to your first profitable route—and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule a Jacksonville Strategy Call
              </Link>
              <a
                href="https://t.me/thevendinglocator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy border-2 border-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Chat with Support 24/7
              </a>
            </div>
            <p className="mt-6 text-sm text-stone">
              Prefer to browse? Visit our{' '}
              <Link href="/haha-coolers" className="text-navy font-semibold hover:underline">
                smart cooler showroom
              </Link>{' '}
              for in-depth specs, placements, and Amazon purchase links.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <Script
        id="jacksonville-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

