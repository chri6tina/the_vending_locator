import { Metadata } from 'next'
import NorwalkPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-norwalk-connecticut'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Norwalk, Connecticut | Smart Coolers for Fairfield County Corporate & Healthcare',
  description:
    'Deploy Haha AI smart vending machines across Norwalk, Connecticut. Serve Merritt 7 offices, Norwalk Hospital, SONO Collection, and commuter hubs with bilingual 24/7 support.',
  keywords:
    'Norwalk vending machines for sale, smart vending Norwalk CT, haha smart coolers Fairfield County, Merritt 7 vending, Norwalk Hospital vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Norwalk, Connecticut | Smart Coolers for Fairfield County Corporate & Healthcare',
    description:
      'Bring AI-powered Haha smart coolers to Fairfield County corporate campuses, hospitals, retail, and commuter stations with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Norwalk, Connecticut | Smart Coolers for Fairfield County Corporate & Healthcare',
    description:
      'Modernise Norwalk vending with Haha AI smart coolers, Amazon availability, and Telegram support for the Connecticut Gold Coast.',
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

export default function NorwalkConnecticutVendingPage() {
  return <NorwalkPage />
}

