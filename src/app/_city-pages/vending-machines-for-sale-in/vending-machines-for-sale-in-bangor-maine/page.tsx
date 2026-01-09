import { Metadata } from 'next'
import BangorPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bangor-maine'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bangor, Maine | Smart Coolers for Eastern Maine',
  description:
    'Deploy Haha AI smart coolers across Bangor, Maine. Serve airports, hospitals, universities, and logistics hubs with contactless vending and 24/7 support.',
  keywords:
    'Bangor vending machines for sale, smart vending Bangor ME, haha smart coolers Bangor, AI vending Maine, airport vending Bangor',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bangor, Maine | Smart Coolers for Eastern Maine',
    description:
      'Bring AI-powered Haha smart coolers to Bangor International Airport, healthcare campuses, and universities with expert operator support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bangor, Maine | Smart Coolers for Eastern Maine',
    description:
      'Modernise Bangor vending with Haha AI coolers, Amazon purchasing links, and 24/7 Telegram support from The Vending Locator.'
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

export default function BangorMaineVendingPage() {
  return <BangorPage />
}

