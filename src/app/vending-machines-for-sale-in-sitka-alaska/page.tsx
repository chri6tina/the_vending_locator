import { Metadata } from 'next'
import SitkaAlaskaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Sitka, AK | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Sitka, Alaska. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Sitka vending machines for sale, smart vending Sitka AK, haha smart coolers Sitka, vending machine business Sitka, AI vending Alaska',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-sitka-alaska'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Sitka, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Sitka, Alaska. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-sitka-alaska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Sitka, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Sitka, Alaska with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SitkaAlaskaPageWrapper() {
  return <SitkaAlaskaPage />
}

