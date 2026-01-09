import { Metadata } from 'next'
import BocaRatonFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Boca Raton, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Boca Raton, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Boca Raton vending machines for sale, smart vending Boca Raton FL, haha smart coolers Boca Raton, vending machine business Boca Raton, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-boca-raton-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Boca Raton, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Boca Raton, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-boca-raton-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Boca Raton, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Boca Raton, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function BocaRatonFloridaPageWrapper() {
  return <BocaRatonFloridaPage />
}

