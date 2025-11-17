import { Metadata } from 'next'
import LewisvillePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-lewisville-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Lewisville, Texas | Smart Coolers for Logistics, Healthcare & Lakeside Living',
  description:
    'Install Haha AI smart vending machines across Lewisville, Texas. Serve logistics parks, Medical City Lewisville, Lewisville ISD campuses, and Lake Lewisville amenities with 24/7 supported smart coolers.',
  keywords:
    'Lewisville vending machines for sale, smart vending Lewisville TX, haha smart coolers North Dallas, logistics vending Lewisville, Medical City Lewisville vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Lewisville, Texas | Smart Coolers for Logistics, Healthcare & Lakeside Living',
    description:
      'Deliver AI-powered Haha smart coolers to Lewisville warehouses, hospitals, schools, and lakeside communities with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Lewisville, Texas | Smart Coolers for Logistics, Healthcare & Lakeside Living',
    description:
      'Modernise Lewisville vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function LewisvilleTexasVendingPage() {
  return <LewisvillePage />
}

