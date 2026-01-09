import { Metadata } from 'next'
import PalmSpringsCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Palm Springs, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Palm Springs, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Palm Springs vending machines for sale, smart vending Palm Springs CA, haha smart coolers Palm Springs, vending machine business Palm Springs, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-springs-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Palm Springs, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Palm Springs, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-springs-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Palm Springs, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Palm Springs, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PalmSpringsCaliforniaPageWrapper() {
  return <PalmSpringsCaliforniaPage />
}

