import { Metadata } from 'next'
import NewBritainConnecticutPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in New Britain, CT | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in New Britain, Connecticut. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'New Britain vending machines for sale, smart vending New Britain CT, haha smart coolers New Britain, vending machine business New Britain, smart vending Connecticut',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-new-britain-connecticut'
  },
  openGraph: {
    title: 'Vending Machines for Sale in New Britain, Connecticut | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for New Britain, Connecticut. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-new-britain-connecticut',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in New Britain, Connecticut | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for New Britain, Connecticut with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function NewBritainConnecticutPageWrapper() {
  return <NewBritainConnecticutPage />
}

