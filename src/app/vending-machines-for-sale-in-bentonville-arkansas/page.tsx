import { Metadata } from 'next'
import BentonvillePage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bentonville-arkansas'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bentonville, Arkansas | AI Smart Coolers for Walmart HQ',
  description:
    'Launch Haha AI smart coolers across Bentonville, Arkansas. Serve Walmart HQ, Crystal Bridges, and luxury multifamily with premium vending and 24/7 support.',
  keywords:
    'Bentonville vending machines for sale, smart vending Bentonville AR, haha smart coolers Bentonville, AI vending Northwest Arkansas, Walmart HQ vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bentonville, Arkansas | AI Smart Coolers for Walmart HQ',
    description:
      'Deliver AI-powered Haha smart coolers to Bentonville corporate campuses, museums, and residential communities with operator-first support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bentonville, Arkansas | AI Smart Coolers for Walmart HQ',
    description:
      'Modernise Bentonville vending with Haha AI coolers, Amazon referrals, and 24/7 Telegram support from The Vending Locator.'
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

export default function BentonvilleArkansasVendingPage() {
  return <BentonvillePage />
}

