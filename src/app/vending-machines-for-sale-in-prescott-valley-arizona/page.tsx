import { Metadata } from 'next'
import PrescottValleyArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Prescott Valley, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Prescott Valley, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Prescott Valley vending machines for sale, smart vending Prescott Valley AZ, haha smart coolers Prescott Valley, vending machine business Prescott Valley, smart vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-prescott-valley-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Prescott Valley, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Prescott Valley, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-prescott-valley-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Prescott Valley, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Prescott Valley, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PrescottValleyArizonaPageWrapper() {
  return <PrescottValleyArizonaPage />
}

