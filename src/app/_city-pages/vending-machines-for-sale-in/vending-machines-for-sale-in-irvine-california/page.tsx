import { Metadata } from 'next'
import IrvineCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Irvine, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Irvine, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Irvine vending machines for sale, smart vending Irvine CA, haha smart coolers Irvine, vending machine business Irvine, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-irvine-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Irvine, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Irvine, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-irvine-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Irvine, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Irvine, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function IrvineCaliforniaPageWrapper() {
  return <IrvineCaliforniaPage />
}

