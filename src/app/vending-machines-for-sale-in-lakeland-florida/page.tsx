import { Metadata } from 'next'
import LakelandFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Lakeland, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Lakeland, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Lakeland vending machines for sale, smart vending Lakeland FL, haha smart coolers Lakeland, vending machine business Lakeland, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-lakeland-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Lakeland, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Lakeland, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-lakeland-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Lakeland, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Lakeland, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function LakelandFloridaPageWrapper() {
  return <LakelandFloridaPage />
}

