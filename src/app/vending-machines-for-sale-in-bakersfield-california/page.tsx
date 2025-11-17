import { Metadata } from 'next'
import BakersfieldCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bakersfield, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Bakersfield, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Bakersfield vending machines for sale, smart vending Bakersfield CA, haha smart coolers Bakersfield, vending machine business Bakersfield, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bakersfield-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bakersfield, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Bakersfield, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bakersfield-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bakersfield, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Bakersfield, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function BakersfieldCaliforniaPageWrapper() {
  return <BakersfieldCaliforniaPage />
}

