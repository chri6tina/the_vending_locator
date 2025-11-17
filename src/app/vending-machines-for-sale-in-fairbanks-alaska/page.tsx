import { Metadata } from 'next'
import FairbanksAlaskaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Fairbanks, AK | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Fairbanks, Alaska. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Fairbanks vending machines for sale, smart vending Fairbanks AK, haha smart coolers Fairbanks, vending machine business Fairbanks, AI vending Alaska',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-fairbanks-alaska'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Fairbanks, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Fairbanks, Alaska. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-fairbanks-alaska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Fairbanks, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Fairbanks, Alaska with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function FairbanksAlaskaPageWrapper() {
  return <FairbanksAlaskaPage />
}

