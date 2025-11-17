import { Metadata } from 'next'
import NewarkDelawarePage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Newark, DE | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Newark, Delaware. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Newark vending machines for sale, smart vending Newark DE, haha smart coolers Newark, vending machine business Newark, smart vending Delaware',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-newark-delaware'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Newark, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Newark, Delaware. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-newark-delaware',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Newark, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Newark, Delaware with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function NewarkDelawarePageWrapper() {
  return <NewarkDelawarePage />
}

