import { Metadata } from 'next'
import HuntingtonBeachCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Huntington Beach, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Huntington Beach, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Huntington Beach vending machines for sale, smart vending Huntington Beach CA, haha smart coolers Huntington Beach, vending machine business Huntington Beach, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-huntington-beach-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Huntington Beach, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Huntington Beach, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-huntington-beach-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Huntington Beach, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Huntington Beach, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function HuntingtonBeachCaliforniaPageWrapper() {
  return <HuntingtonBeachCaliforniaPage />
}

