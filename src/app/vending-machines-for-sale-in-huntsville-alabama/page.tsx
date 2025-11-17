import { Metadata } from 'next'
import HuntsvilleAlabamaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Huntsville, AL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Huntsville, Alabama. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Huntsville vending machines for sale, smart vending Huntsville AL, haha smart coolers Huntsville, vending machine business Huntsville, AI vending Alabama',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-huntsville-alabama'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Huntsville, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Huntsville, Alabama. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-huntsville-alabama',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Huntsville, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Huntsville, Alabama with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function HuntsvilleAlabamaPageWrapper() {
  return <HuntsvilleAlabamaPage />
}

