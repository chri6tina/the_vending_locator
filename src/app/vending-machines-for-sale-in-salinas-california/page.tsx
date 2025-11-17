import { Metadata } from 'next'
import SalinasCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Salinas, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Salinas, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Salinas vending machines for sale, smart vending Salinas CA, haha smart coolers Salinas, vending machine business Salinas, AI vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-salinas-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Salinas, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Salinas, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-salinas-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Salinas, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Salinas, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SalinasCaliforniaPageWrapper() {
  return <SalinasCaliforniaPage />
}

