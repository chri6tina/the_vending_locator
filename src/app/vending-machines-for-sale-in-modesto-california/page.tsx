import { Metadata } from 'next'
import ModestoCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Modesto, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Modesto, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Modesto vending machines for sale, smart vending Modesto CA, haha smart coolers Modesto, vending machine business Modesto, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-modesto-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Modesto, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Modesto, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-modesto-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Modesto, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Modesto, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function ModestoCaliforniaPageWrapper() {
  return <ModestoCaliforniaPage />
}

