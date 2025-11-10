import { Metadata } from 'next'
import BellevuePage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bellevue-nebraska'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bellevue, Nebraska | Smart Coolers for Offutt & Sarpy County',
  description:
    'Install Haha AI smart coolers across Bellevue, Nebraska. Serve Offutt AFB, Bellevue University, and CHI Health with cashless vending and 24/7 support.',
  keywords:
    'Bellevue vending machines for sale, smart vending Bellevue NE, haha smart coolers Bellevue, AI vending Omaha metro, Offutt Air Force Base vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bellevue, Nebraska | Smart Coolers for Offutt & Sarpy County',
    description:
      'Deliver AI-powered Haha smart coolers to Bellevue military, healthcare, and education campuses with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bellevue, Nebraska | Smart Coolers for Offutt & Sarpy County',
    description:
      'Modernise Bellevue vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function BellevueNebraskaVendingPage() {
  return <BellevuePage />
}

