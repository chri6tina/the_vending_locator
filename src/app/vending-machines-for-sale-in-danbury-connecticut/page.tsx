import { Metadata } from 'next'
import DanburyConnecticutPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Danbury, CT | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Danbury, Connecticut. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Danbury vending machines for sale, smart vending Danbury CT, haha smart coolers Danbury, vending machine business Danbury, smart vending Connecticut',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-danbury-connecticut'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Danbury, Connecticut | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Danbury, Connecticut. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-danbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Danbury, Connecticut | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Danbury, Connecticut with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function DanburyConnecticutPageWrapper() {
  return <DanburyConnecticutPage />
}

