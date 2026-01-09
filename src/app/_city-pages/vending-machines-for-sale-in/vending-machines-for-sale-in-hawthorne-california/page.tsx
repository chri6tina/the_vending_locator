import { Metadata } from 'next'
import HawthorneCaliforniaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Hawthorne, CA | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Hawthorne, California. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Hawthorne vending machines for sale, smart vending Hawthorne CA, haha smart coolers Hawthorne, vending machine business Hawthorne, smart vending California',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-hawthorne-california'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Hawthorne, California | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Hawthorne, California. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-hawthorne-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Hawthorne, California | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Hawthorne, California with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function HawthorneCaliforniaPageWrapper() {
  return <HawthorneCaliforniaPage />
}

