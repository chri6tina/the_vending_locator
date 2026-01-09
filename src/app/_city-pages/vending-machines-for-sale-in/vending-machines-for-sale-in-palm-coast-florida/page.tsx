import { Metadata } from 'next'
import PalmCoastFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Palm Coast, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Palm Coast, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Palm Coast vending machines for sale, smart vending Palm Coast FL, haha smart coolers Palm Coast, vending machine business Palm Coast, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-coast-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Palm Coast, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Palm Coast, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-coast-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Palm Coast, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Palm Coast, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PalmCoastFloridaPageWrapper() {
  return <PalmCoastFloridaPage />
}

