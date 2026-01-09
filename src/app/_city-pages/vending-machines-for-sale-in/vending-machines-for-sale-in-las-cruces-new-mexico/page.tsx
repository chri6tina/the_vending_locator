import { Metadata } from 'next'
import LasCrucesPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-las-cruces-new-mexico'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Las Cruces, New Mexico | Smart Coolers for NMSU & White Sands',
  description:
    'Install Haha AI smart vending machines throughout Las Cruces, New Mexico. Serve New Mexico State University, NASA White Sands Test Facility, healthcare campuses, and agricultural hubs with desert-ready support.',
  keywords:
    'Las Cruces vending machines for sale, smart vending Las Cruces NM, haha smart coolers New Mexico, NMSU vending, White Sands vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Las Cruces, New Mexico | Smart Coolers for NMSU & White Sands',
    description:
      'Deliver AI-powered Haha smart coolers to NMSU, White Sands, and Mesilla Valley healthcare with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Las Cruces, New Mexico | Smart Coolers for NMSU & White Sands',
    description:
      'Modernise Las Cruces vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function LasCrucesNewMexicoVendingPage() {
  return <LasCrucesPage />
}

