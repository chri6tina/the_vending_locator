import { Metadata } from 'next'
import PalmBeachGardensFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Palm Beach Gardens, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Palm Beach Gardens, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Palm Beach Gardens vending machines for sale, smart vending Palm Beach Gardens FL, haha smart coolers Palm Beach Gardens, vending machine business Palm Beach Gardens, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-beach-gardens-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Palm Beach Gardens, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Palm Beach Gardens, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-beach-gardens-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Palm Beach Gardens, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Palm Beach Gardens, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PalmBeachGardensFloridaPageWrapper() {
  return <PalmBeachGardensFloridaPage />
}

