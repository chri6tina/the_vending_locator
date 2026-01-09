import { Metadata } from 'next'
import GulfportPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-gulfport-mississippi'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Gulfport, Mississippi | Smart Coolers for Casinos & Port Logistics',
  description:
    'Install Haha AI smart vending machines across Gulfport, Mississippi. Serve casinos, Port of Gulfport logistics, Keesler AFB housing, and Gulf Coast tourism venues with humidity-ready smart coolers.',
  keywords:
    'Gulfport vending machines for sale, smart vending Gulf Coast, haha smart coolers Mississippi, casino vending Gulfport, Port of Gulfport vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Gulfport, Mississippi | Smart Coolers for Casinos & Port Logistics',
    description:
      'Bring AI-powered Haha smart coolers to Gulf Coast casinos, port warehouses, and military housing with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Gulfport, Mississippi | Smart Coolers for Casinos & Port Logistics',
    description:
      'Modernise Gulfport vending with Haha AI smart coolers, Amazon availability, and coastal-ready support.',
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

export default function GulfportMississippiVendingPage() {
  return <GulfportPage />
}

