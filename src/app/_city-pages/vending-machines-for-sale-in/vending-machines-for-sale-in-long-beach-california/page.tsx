import { Metadata } from 'next'
import LongBeachCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Long Beach, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Long Beach, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Long Beach vending machines for sale, smart vending Long Beach CA, haha smart coolers Long Beach, vending machine business Long Beach, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-long-beach-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Long Beach, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Long Beach, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-long-beach-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Long Beach, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Long Beach, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function LongBeachCaliforniaPageWrapper() {
  return <LongBeachCaliforniaPage />
}

