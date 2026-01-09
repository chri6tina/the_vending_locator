import { Metadata } from 'next'
import SoldotnaAlaskaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Soldotna, AK | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Soldotna, Alaska. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Soldotna vending machines for sale, smart vending Soldotna AK, haha smart coolers Soldotna, vending machine business Soldotna, AI vending Alaska',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-soldotna-alaska'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Soldotna, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Soldotna, Alaska. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-soldotna-alaska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Soldotna, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Soldotna, Alaska with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SoldotnaAlaskaPageWrapper() {
  return <SoldotnaAlaskaPage />
}

