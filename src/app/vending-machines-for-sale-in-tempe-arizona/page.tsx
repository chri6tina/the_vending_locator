import { Metadata } from 'next'
import TempeArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Tempe, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Tempe, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Tempe vending machines for sale, smart vending Tempe AZ, haha smart coolers Tempe, vending machine business Tempe, AI vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-tempe-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Tempe, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Tempe, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-tempe-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Tempe, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Tempe, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function TempeArizonaPageWrapper() {
  return <TempeArizonaPage />
}

