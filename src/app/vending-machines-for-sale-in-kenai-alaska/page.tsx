import { Metadata } from 'next'
import KenaiAlaskaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Kenai, AK | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Kenai, Alaska. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Kenai vending machines for sale, smart vending Kenai AK, haha smart coolers Kenai, vending machine business Kenai, AI vending Alaska',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-kenai-alaska'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Kenai, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Kenai, Alaska. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-kenai-alaska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Kenai, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Kenai, Alaska with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function KenaiAlaskaPageWrapper() {
  return <KenaiAlaskaPage />
}

