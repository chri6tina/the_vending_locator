import { Metadata } from 'next'
import PeoriaArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Peoria, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Peoria, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Peoria vending machines for sale, smart vending Peoria AZ, haha smart coolers Peoria, vending machine business Peoria, AI vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-peoria-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Peoria, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Peoria, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-peoria-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Peoria, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Peoria, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PeoriaArizonaPageWrapper() {
  return <PeoriaArizonaPage />
}

