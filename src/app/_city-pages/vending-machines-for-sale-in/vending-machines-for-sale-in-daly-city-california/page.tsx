import { Metadata } from 'next'
import DalyCityCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Daly City, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Daly City, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Daly City vending machines for sale, smart vending Daly City CA, haha smart coolers Daly City, vending machine business Daly City, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-daly-city-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Daly City, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Daly City, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-daly-city-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Daly City, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Daly City, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function DalyCityCaliforniaPageWrapper() {
  return <DalyCityCaliforniaPage />
}

