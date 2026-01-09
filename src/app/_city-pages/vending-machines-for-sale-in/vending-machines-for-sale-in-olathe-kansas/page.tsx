import { Metadata } from 'next'
import OlathePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-olathe-kansas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Olathe, Kansas | Smart Coolers for Garmin HQ & Johnson County Logistics',
  description:
    'Install Haha AI smart vending machines in Olathe, Kansas. Serve Garmin headquarters, Olathe Health, Johnson County Community College, and New Century AirCenter with nonstop support.',
  keywords:
    'Olathe vending machines for sale, smart vending Olathe KS, haha smart coolers Johnson County, Garmin vending machines, Olathe Health vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Olathe, Kansas | Smart Coolers for Garmin HQ & Johnson County Logistics',
    description:
      'Deliver AI-powered Haha smart coolers to Olathe aerospace, healthcare, education, and municipal deployments with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Olathe, Kansas | Smart Coolers for Garmin HQ & Johnson County Logistics',
    description:
      'Modernise Olathe vending with Haha AI smart coolers, Amazon availability, and Telegram support across Johnson County.',
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

export default function OlatheKansasVendingPage() {
  return <OlathePage />
}

