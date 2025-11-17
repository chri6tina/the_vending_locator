import { Metadata } from 'next'
import SanDiegoCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in San Diego, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in San Diego, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'San Diego vending machines for sale, smart vending San Diego CA, haha smart coolers San Diego, vending machine business San Diego, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-san-diego-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in San Diego, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for San Diego, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-san-diego-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in San Diego, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for San Diego, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SanDiegoCaliforniaPageWrapper() {
  return <SanDiegoCaliforniaPage />
}

