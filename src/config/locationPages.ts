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
import { SVGProps } from 'react'

export type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element

export interface CityHeroConfig {
  eyebrow: {
    icon: IconType
    label: string
  }
  headline: {
    pre: string
    highlight: string
  }
  description: string
  bullets: Array<{
    icon: IconType
    text: string
  }>
  ctas: Array<{
    label: string
    href: string
    variant: 'primary' | 'secondary'
    external?: boolean
  }>
  supportLink: {
    icon: IconType
    label: string
    href: string
  }
}

export interface SidebarCallout {
  badge: {
    icon: IconType
    label: string
  }
  items: Array<{
    title: string
    description: string
  }>
}

export interface CoolerCard {
  name: string
  label: string
  price: string
  description: string
  bullets: string[]
  amazonUrl: string
  learnMoreUrl: string
  image: {
    src: string
    alt: string
  }
}

export interface SellingPoint {
  title: string
  description: string
  icon: IconType
}

export interface LogisticsItem {
  title: string
  description: string
  icon: IconType
}

export interface LocationAccordionEntry {
  state: string
  emoji: string
  tagline: string
  cities: Array<{
    name: string
    description: string
    href?: string
    comingSoon?: boolean
  }>
}

export interface CityLandingContent {
  slug: string
  city: string
  state: string
  hero: CityHeroConfig
  sidebar: SidebarCallout
  coolerLineup: CoolerCard[]
  sellingPoints: SellingPoint[]
  neighborhoods: string[]
  deliverables: string[]
  logistics: LogisticsItem[]
  faq: Array<{
    question: string
    answer: string
  }>
}

/**
 * CITY PAGE BLUEPRINT
 * -------------------
 * 1. Duplicate your existing city config in this file.
 * 2. Update hero copy, neighbourhoods, logistics, and FAQ answers with city-specific detail.
 * 3. Set Amazon referral links for the lineup (Mini / Pro / Ultra) if they differ by market.
 * 4. Create a new route folder at /vending-machines-for-sale-in-{city}-{state}/ using the template.
 * 5. Add the new slug to the accordion on /haha-coolers (locationCoverage array).
 * 6. Confirm the new path is included in /src/app/sitemap.ts.
 * 7. Review on desktop and mobile, then ship.
 */

export const jacksonvilleContent: CityLandingContent = {
  slug: 'vending-machines-for-sale-in-jacksonville-florida',
  city: 'Jacksonville',
  state: 'Florida',
  hero: {
    eyebrow: {
      icon: SparklesIcon,
      label: 'Smart Vending • Jacksonville, FL'
    },
    headline: {
      pre: 'Vending Machines for Sale in',
      highlight: 'Jacksonville, Florida'
    },
    description:
      'Launch smart vending across Jacksonville with Haha AI-powered coolers, curated placement strategies, and human support that stays with you long after delivery. We help you merchandise for Downtown offices, beach crowds, and suburban campuses across the First Coast.',
    bullets: [
      {
        icon: ShieldCheckIcon,
        text: 'Guaranteed authentic Haha vending machines with US-based warranty partners'
      },
      {
        icon: ClockIcon,
        text: 'Rapid freight into Duval, Clay, and St. Johns counties'
      },
      {
        icon: ChatBubbleOvalLeftEllipsisIcon,
        text: 'Operator-first, 24/7 Telegram support community'
      }
    ],
    ctas: [
      {
        label: 'Explore Smart Coolers',
        href: '/haha-coolers',
        variant: 'primary'
      },
      {
        label: 'Talk to Jacksonville Experts',
        href: '/contact',
        variant: 'secondary'
      }
    ],
    supportLink: {
      icon: ChatBubbleOvalLeftEllipsisIcon,
      label: 'Telegram @thevendinglocator',
      href: 'https://t.me/thevendinglocator'
    }
  },
  sidebar: {
    badge: {
      icon: MapPinIcon,
      label: 'Built for First Coast markets'
    },
    items: [
      {
        title: 'Primary verticals:',
        description: 'medical campuses, logistics hubs, universities, multi-family, and hospitality.'
      },
      {
        title: 'Power your routes:',
        description: '4G + Wi-Fi connectivity, remote planograms, and blazing fast restock analytics.'
      },
      {
        title: 'Localized onboarding:',
        description: 'Launch checklists and recommended product mixes for each Jacksonville neighbourhood.'
      },
      {
        title: 'Always-on support:',
        description: 'Telegram @thevendinglocator with real operators sharing playbooks around the clock.'
      }
    ]
  },
  coolerLineup: [
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
  ],
  sellingPoints: [
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
  ],
  neighborhoods: [
    'Downtown Jacksonville & Brooklyn',
    'Riverside & Five Points creative corridor',
    'Southside corporate campuses (JTB corridor)',
    'Baymeadows & Deerwood office parks',
    'Northside logistics hubs & JAXPORT',
    'Jacksonville Beach, Neptune Beach, Atlantic Beach',
    'St. Johns County master-planned communities',
    'University of North Florida & Jacksonville University'
  ],
  deliverables: [
    'Custom merchandising plans that match Jacksonville demographics and day-part traffic.',
    'Hands-on sourcing of fresh food partners and wholesale beverage suppliers across Northeast Florida.',
    'Community of operators swapping live performance data so you stay competitive.'
  ],
  logistics: [
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
  ],
  faq: [
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
}

export const locationAccordionDefaults: LocationAccordionEntry[] = [
  {
    state: 'Florida',
    emoji: '🏖️',
    tagline: 'First Coast, Central Florida, Gulf Coast',
    cities: [
      {
        name: 'Jacksonville, Florida',
        description:
          'AI-powered smart coolers with First Coast placement strategy, Amazon referrals, and 24/7 operator support.',
        href: '/vending-machines-for-sale-in-jacksonville-florida'
      },
      {
        name: 'Orlando, Florida',
        description: 'Theme parks, resorts, and office corridors—request early access to join the waitlist.',
        comingSoon: true
      },
      {
        name: 'Tampa, Florida',
        description: 'Downtown towers, medical campuses, and waterfront hospitality placements coming soon.',
        comingSoon: true
      }
    ]
  },
  {
    state: 'Texas',
    emoji: '🤠',
    tagline: 'Austin, Dallas–Fort Worth, Houston metros',
    cities: [
      {
        name: 'Austin, Texas',
        description: 'Tech campuses, co-working hubs, and luxury multifamily properties in the Texas capital.',
        comingSoon: true
      },
      {
        name: 'Dallas, Texas',
        description: 'Corporate parks, hospitals, and logistics hubs across the Metroplex.',
        comingSoon: true
      },
      {
        name: 'Houston, Texas',
        description: 'Energy corridor offices, medical centers, and residential towers launching soon.',
        comingSoon: true
      }
    ]
  },
  {
    state: 'Georgia',
    emoji: '🍑',
    tagline: 'Atlanta metro and coastal Georgia',
    cities: [
      {
        name: 'Atlanta, Georgia',
        description: 'Midtown offices, film studios, and Hartsfield-Jackson travel corridors under development.',
        comingSoon: true
      },
      {
        name: 'Savannah, Georgia',
        description: 'Historic district hotels and port logistics campuses coming online soon.',
        comingSoon: true
      }
    ]
  }
]

