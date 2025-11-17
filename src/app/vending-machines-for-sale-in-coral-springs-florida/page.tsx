import { Metadata } from 'next'
import CoralSpringsFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Coral Springs, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Coral Springs, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Coral Springs vending machines for sale, smart vending Coral Springs FL, haha smart coolers Coral Springs, vending machine business Coral Springs, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-coral-springs-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Coral Springs, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Coral Springs, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-coral-springs-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Coral Springs, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Coral Springs, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function CoralSpringsFloridaPageWrapper() {
  return <CoralSpringsFloridaPage />
}

