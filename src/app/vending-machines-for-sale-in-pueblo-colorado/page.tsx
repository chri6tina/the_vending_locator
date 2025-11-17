import { Metadata } from 'next'
import PuebloColoradoPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Pueblo, CO | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Pueblo, Colorado. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Pueblo vending machines for sale, smart vending Pueblo CO, haha smart coolers Pueblo, vending machine business Pueblo, smart vending Colorado',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-pueblo-colorado'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Pueblo, Colorado | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Pueblo, Colorado. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-pueblo-colorado',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Pueblo, Colorado | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Pueblo, Colorado with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function PuebloColoradoPageWrapper() {
  return <PuebloColoradoPage />
}

