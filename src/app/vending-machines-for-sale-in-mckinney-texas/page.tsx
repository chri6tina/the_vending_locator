import { Metadata } from 'next'
import McKinneyPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-mckinney-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in McKinney, Texas | Smart Coolers for Corporate Campuses & Aviation',
  description:
    'Deploy Haha AI smart vending machines across McKinney, Texas. Serve corporate relocations, McKinney National Airport, Medical City McKinney, and luxury residential communities with nonstop support.',
  keywords:
    'McKinney vending machines for sale, smart vending McKinney TX, haha smart coolers Collin County, McKinney National Airport vending, Medical City McKinney vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in McKinney, Texas | Smart Coolers for Corporate Campuses & Aviation',
    description:
      'Bring AI-powered Haha smart coolers to McKinney corporate centers, aviation campuses, healthcare, and luxury residential amenities.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in McKinney, Texas | Smart Coolers for Corporate Campuses & Aviation',
    description:
      'Modernise McKinney vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function McKinneyTexasVendingPage() {
  return <McKinneyPage />
}

