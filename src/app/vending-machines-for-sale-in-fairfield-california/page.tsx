import { Metadata } from 'next'
import FairfieldCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Fairfield, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Fairfield, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Fairfield vending machines for sale, smart vending Fairfield CA, haha smart coolers Fairfield, vending machine business Fairfield, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-fairfield-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Fairfield, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Fairfield, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-fairfield-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Fairfield, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Fairfield, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function FairfieldCaliforniaPageWrapper() {
  return <FairfieldCaliforniaPage />
}

