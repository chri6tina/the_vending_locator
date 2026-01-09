import { Metadata } from 'next'
import AntiochCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Antioch, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Antioch, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Antioch vending machines for sale, smart vending Antioch CA, haha smart coolers Antioch, vending machine business Antioch, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-antioch-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Antioch, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Antioch, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-antioch-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Antioch, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Antioch, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function AntiochCaliforniaPageWrapper() {
  return <AntiochCaliforniaPage />
}

