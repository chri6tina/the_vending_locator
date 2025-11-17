import { Metadata } from 'next'
import TucsonArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Tucson, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Tucson, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Tucson vending machines for sale, smart vending Tucson AZ, haha smart coolers Tucson, vending machine business Tucson, AI vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-tucson-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Tucson, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Tucson, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-tucson-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Tucson, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Tucson, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function TucsonArizonaPageWrapper() {
  return <TucsonArizonaPage />
}

