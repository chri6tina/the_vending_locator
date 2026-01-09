import { Metadata } from 'next'
import LeagueCityPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-league-city-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in League City, Texas | Smart Coolers for NASA & Coastal Healthcare',
  description:
    'Deploy Haha AI smart vending machines throughout League City, Texas. Serve NASA contractors, UTMB Health clinics, HCA hospitals, and master-planned communities with 24/7 supported smart coolers.',
  keywords:
    'League City vending machines for sale, smart vending League City TX, haha smart coolers Houston Space Coast, NASA vending, UTMB Health vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in League City, Texas | Smart Coolers for NASA & Coastal Healthcare',
    description:
      'Bring AI-powered Haha smart coolers to NASA Johnson Space Center vendors, hospitals, and master-planned communities.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in League City, Texas | Smart Coolers for NASA & Coastal Healthcare',
    description:
      'Modernise League City vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function LeagueCityTexasVendingPage() {
  return <LeagueCityPage />
}

