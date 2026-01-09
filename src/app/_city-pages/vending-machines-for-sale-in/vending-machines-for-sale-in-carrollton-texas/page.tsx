import { Metadata } from 'next'
import CarrolltonPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-carrollton-texas'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Carrollton, Texas | AI Smart Coolers for North Dallas Offices',
  description:
    'Deploy Haha AI smart coolers across Carrollton, Texas. Serve corporate HQs, data centres, hospitality, and luxury multifamily with premium vending and 24/7 support.',
  keywords:
    'Carrollton vending machines for sale, smart vending Carrollton TX, haha smart coolers Carrollton, AI vending Dallas, North Dallas vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Carrollton, Texas | AI Smart Coolers for North Dallas Offices',
    description:
      'Bring AI-powered Haha smart coolers to Carrollton corporate campuses, data centres, and retail districts with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Carrollton, Texas | AI Smart Coolers for North Dallas Offices',
    description:
      'Modernise Carrollton vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function CarrolltonTexasVendingPage() {
  return <CarrolltonPage />
}
