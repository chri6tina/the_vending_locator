import { Metadata } from 'next'
import PeoriaPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-peoria-illinois'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Peoria, Illinois | Smart Coolers for Caterpillar & OSF HealthCare',
  description:
    'Install Haha AI smart vending machines across Peoria, Illinois. Serve Caterpillar headquarters, OSF HealthCare, UnityPoint Health, and Bradley University with nonstop support.',
  keywords:
    'Peoria vending machines for sale, smart vending Peoria IL, haha smart coolers Caterpillar, OSF HealthCare vending, Bradley University vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Peoria, Illinois | Smart Coolers for Caterpillar & OSF HealthCare',
    description:
      'Deliver AI-powered Haha smart coolers to Peoria manufacturing, healthcare, and campus deployments with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Peoria, Illinois | Smart Coolers for Caterpillar & OSF HealthCare',
    description:
      'Modernise Peoria vending with Haha AI smart coolers, Amazon availability, and Telegram support across central Illinois.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const revalidate = 3600

export default function PeoriaIllinoisVendingPage() {
  return <PeoriaPage />
}

