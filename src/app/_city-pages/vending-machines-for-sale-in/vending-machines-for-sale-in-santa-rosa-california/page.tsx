import { Metadata } from 'next'
import SantaRosaCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Santa Rosa, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Santa Rosa, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Santa Rosa vending machines for sale, smart vending Santa Rosa CA, haha smart coolers Santa Rosa, vending machine business Santa Rosa, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-santa-rosa-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Santa Rosa, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Santa Rosa, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-santa-rosa-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Santa Rosa, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Santa Rosa, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SantaRosaCaliforniaPageWrapper() {
  return <SantaRosaCaliforniaPage />
}

