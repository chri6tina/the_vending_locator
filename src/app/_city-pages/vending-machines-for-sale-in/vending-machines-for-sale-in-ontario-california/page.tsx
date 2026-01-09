import { Metadata } from 'next'
import OntarioCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Ontario, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Ontario, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Ontario vending machines for sale, smart vending Ontario CA, haha smart coolers Ontario, vending machine business Ontario, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-ontario-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Ontario, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Ontario, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-ontario-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Ontario, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Ontario, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function OntarioCaliforniaPageWrapper() {
  return <OntarioCaliforniaPage />
}

