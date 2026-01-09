import { Metadata } from 'next'
import RenoPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-reno-nevada'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Reno, Nevada | Smart Coolers for TRIC, UNR & Casino Resorts',
  description:
    'Deploy Haha AI smart vending machines across Reno, Nevada. Serve Tahoe-Reno Industrial Center, University of Nevada Reno, Renown Health, and casino resorts with 24/7 support.',
  keywords:
    'Reno vending machines for sale, smart vending Reno NV, haha smart coolers Reno, TRIC vending, UNR vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Reno, Nevada | Smart Coolers for TRIC, UNR & Casino Resorts',
    description:
      'Deliver AI-powered Haha smart coolers to Reno manufacturing, healthcare, education, and hospitality venues with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Reno, Nevada | Smart Coolers for TRIC, UNR & Casino Resorts',
    description:
      'Modernise Reno vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support across the Truckee Meadows.',
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

export default function RenoNevadaVendingPage() {
  return <RenoPage />
}

