import { Metadata } from 'next'
import PearlandPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-pearland-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Pearland, Texas | Smart Coolers for Texas Medical Center Commuters & Petrochemical Plants',
  description:
    'Deploy Haha AI smart vending machines across Pearland, Texas. Serve Texas Medical Center commuters, petrochemical corridors, Pearland ISD campuses, and master-planned communities with 24/7 support.',
  keywords:
    'Pearland vending machines for sale, smart vending Pearland TX, haha smart coolers Houston, Texas Medical Center vending, Pearland ISD vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Pearland, Texas | Smart Coolers for Texas Medical Center Commuters & Petrochemical Plants',
    description:
      'Deliver AI-powered Haha smart coolers to Pearland healthcare, petrochemical, education, and residential deployments with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Pearland, Texas | Smart Coolers for Texas Medical Center Commuters & Petrochemical Plants',
    description:
      'Modernise Pearland vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function PearlandTexasVendingPage() {
  return <PearlandPage />
}

