import { Metadata } from 'next'
import OcalaFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Ocala, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Ocala, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Ocala vending machines for sale, smart vending Ocala FL, haha smart coolers Ocala, vending machine business Ocala, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-ocala-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Ocala, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Ocala, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-ocala-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Ocala, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Ocala, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function OcalaFloridaPageWrapper() {
  return <OcalaFloridaPage />
}

