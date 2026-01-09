import { Metadata } from 'next'
import NorthLittleRockPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-north-little-rock-arkansas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in North Little Rock, Arkansas | Smart Coolers for Camp Robinson & Riverfront',
  description:
    'Install Haha AI smart vending machines in North Little Rock, Arkansas. Serve Camp Robinson, CHI St. Vincent, Simmons Bank Arena, and Port of Little Rock logistics with nonstop human support.',
  keywords:
    'North Little Rock vending machines for sale, smart vending North Little Rock AR, haha smart coolers Arkansas, Camp Robinson vending, Simmons Bank Arena vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in North Little Rock, Arkansas | Smart Coolers for Camp Robinson & Riverfront',
    description:
      'Deliver AI-powered Haha smart coolers to North Little Rock healthcare, military, logistics, and entertainment venues with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in North Little Rock, Arkansas | Smart Coolers for Camp Robinson & Riverfront',
    description:
      'Modernise North Little Rock vending with Haha AI smart coolers, Amazon availability, and Telegram support across central Arkansas.',
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

export default function NorthLittleRockArkansasVendingPage() {
  return <NorthLittleRockPage />
}

