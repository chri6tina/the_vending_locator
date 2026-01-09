import { Metadata } from 'next'
import BuckeyeArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Buckeye, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Buckeye, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Buckeye vending machines for sale, smart vending Buckeye AZ, haha smart coolers Buckeye, vending machine business Buckeye, AI vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-buckeye-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Buckeye, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Buckeye, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-buckeye-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Buckeye, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Buckeye, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function BuckeyeArizonaPageWrapper() {
  return <BuckeyeArizonaPage />
}

