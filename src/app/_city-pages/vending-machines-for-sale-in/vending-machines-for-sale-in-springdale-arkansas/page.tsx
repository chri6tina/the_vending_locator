import { Metadata } from 'next'
import SpringdaleArkansasPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Springdale, AR | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Springdale, Arkansas. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Springdale vending machines for sale, smart vending Springdale AR, haha smart coolers Springdale, vending machine business Springdale, AI vending Arkansas',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-springdale-arkansas'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Springdale, Arkansas | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Springdale, Arkansas. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-springdale-arkansas',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Springdale, Arkansas | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Springdale, Arkansas with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SpringdaleArkansasPageWrapper() {
  return <SpringdaleArkansasPage />
}

