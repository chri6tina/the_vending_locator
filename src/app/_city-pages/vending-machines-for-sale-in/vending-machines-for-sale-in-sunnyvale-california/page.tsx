import { Metadata } from 'next'
import SunnyvaleCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Sunnyvale, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Sunnyvale, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Sunnyvale vending machines for sale, smart vending Sunnyvale CA, haha smart coolers Sunnyvale, vending machine business Sunnyvale, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-sunnyvale-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Sunnyvale, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Sunnyvale, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-sunnyvale-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Sunnyvale, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Sunnyvale, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SunnyvaleCaliforniaPageWrapper() {
  return <SunnyvaleCaliforniaPage />
}

