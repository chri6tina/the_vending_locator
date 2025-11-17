import { Metadata } from 'next'
import SanMateoCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in San Mateo, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in San Mateo, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'San Mateo vending machines for sale, smart vending San Mateo CA, haha smart coolers San Mateo, vending machine business San Mateo, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-san-mateo-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in San Mateo, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for San Mateo, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-san-mateo-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in San Mateo, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for San Mateo, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SanMateoCaliforniaPageWrapper() {
  return <SanMateoCaliforniaPage />
}

