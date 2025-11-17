import { Metadata } from 'next'
import LosAngelesCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Los Angeles, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Los Angeles, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Los Angeles vending machines for sale, smart vending Los Angeles CA, haha smart coolers Los Angeles, vending machine business Los Angeles, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-los-angeles-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Los Angeles, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Los Angeles, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-los-angeles-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Los Angeles, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Los Angeles, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function LosAngelesCaliforniaPageWrapper() {
  return <LosAngelesCaliforniaPage />
}

