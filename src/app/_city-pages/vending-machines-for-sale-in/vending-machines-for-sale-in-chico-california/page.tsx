import { Metadata } from 'next'
import ChicoCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Chico, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Chico, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Chico vending machines for sale, smart vending Chico CA, haha smart coolers Chico, vending machine business Chico, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-chico-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Chico, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Chico, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-chico-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Chico, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Chico, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function ChicoCaliforniaPageWrapper() {
  return <ChicoCaliforniaPage />
}

