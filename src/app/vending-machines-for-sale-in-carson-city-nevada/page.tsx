import { Metadata } from 'next'
import CarsonCityPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-carson-city-nevada'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Carson City, Nevada | AI Smart Coolers for the Capitol',
  description:
    'Install Haha AI smart coolers across Carson City, Nevada. Serve state government, Tahoe hospitality, and manufacturing with premium vending and 24/7 support.',
  keywords:
    'Carson City vending machines for sale, smart vending Carson City NV, haha smart coolers Carson City, AI vending Nevada, Tahoe vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Carson City, Nevada | AI Smart Coolers for the Capitol',
    description:
      'Deliver AI-powered Haha smart coolers to Carson City government campuses, resorts, and industrial sites with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Carson City, Nevada | AI Smart Coolers for the Capitol',
    description:
      'Modernise Carson City vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function CarsonCityNevadaVendingPage() {
  return <CarsonCityPage />
}
