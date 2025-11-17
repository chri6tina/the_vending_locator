import { Metadata } from 'next'
import GreeleyColoradoPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Greeley, CO | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Greeley, Colorado. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Greeley vending machines for sale, smart vending Greeley CO, haha smart coolers Greeley, vending machine business Greeley, smart vending Colorado',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-greeley-colorado'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Greeley, Colorado | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Greeley, Colorado. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-greeley-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Greeley, Colorado | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Greeley, Colorado with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function GreeleyColoradoPageWrapper() {
  return <GreeleyColoradoPage />
}

