import { Metadata } from 'next'
import RoundRockPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-round-rock-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Round Rock, Texas | Smart Coolers for Dell Technologies & Baylor Scott & White',
  description:
    'Deploy Haha AI smart vending machines across Round Rock, Texas. Serve Dell Technologies, Baylor Scott & White, Kalahari Resorts, and Round Rock ISD campuses with nonstop support.',
  keywords:
    'Round Rock vending machines for sale, smart vending Round Rock TX, haha smart coolers Dell, Baylor Scott & White vending, Kalahari Resorts vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Round Rock, Texas | Smart Coolers for Dell Technologies & Baylor Scott & White',
    description:
      'Deliver AI-powered Haha smart coolers to Round Rock technology, healthcare, hospitality, and education deployments with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Round Rock, Texas | Smart Coolers for Dell Technologies & Baylor Scott & White',
    description:
      'Modernise Round Rock vending with Haha AI smart coolers, Amazon availability, and Telegram support across the Texas Innovation Corridor.',
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

export default function RoundRockTexasVendingPage() {
  return <RoundRockPage />
}

