import { Metadata } from 'next'
import CranstonPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-cranston-rhode-island'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Cranston, Rhode Island | AI Smart Coolers for Providence Metro',
  description:
    'Deploy Haha AI smart coolers across Cranston, Rhode Island. Serve state agencies, Garden City Center, healthcare, and hospitality with premium vending and 24/7 support.',
  keywords:
    'Cranston vending machines for sale, smart vending Cranston RI, haha smart coolers Cranston, AI vending Rhode Island, Providence vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Cranston, Rhode Island | AI Smart Coolers for Providence Metro',
    description:
      'Bring AI-powered Haha smart coolers to Cranston government campuses, retail destinations, and hospitals with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Cranston, Rhode Island | AI Smart Coolers for Providence Metro',
    description:
      'Modernise Cranston vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function CranstonRhodeIslandVendingPage() {
  return <CranstonPage />
}
