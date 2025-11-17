import { Metadata } from 'next'
import PalmHarborFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Palm Harbor, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Palm Harbor, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Palm Harbor vending machines for sale, smart vending Palm Harbor FL, haha smart coolers Palm Harbor, vending machine business Palm Harbor, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-harbor-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Palm Harbor, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Palm Harbor, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-harbor-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Palm Harbor, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Palm Harbor, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PalmHarborFloridaPageWrapper() {
  return <PalmHarborFloridaPage />
}

