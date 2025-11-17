import { Metadata } from 'next'
import JuneauAlaskaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Juneau, AK | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Juneau, Alaska. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Juneau vending machines for sale, smart vending Juneau AK, haha smart coolers Juneau, vending machine business Juneau, AI vending Alaska',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-juneau-alaska'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Juneau, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Juneau, Alaska. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-juneau-alaska',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Juneau, Alaska | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Juneau, Alaska with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function JuneauAlaskaPageWrapper() {
  return <JuneauAlaskaPage />
}

