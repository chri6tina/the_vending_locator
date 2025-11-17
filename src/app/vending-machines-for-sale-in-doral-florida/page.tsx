import { Metadata } from 'next'
import DoralFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Doral, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Doral, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Doral vending machines for sale, smart vending Doral FL, haha smart coolers Doral, vending machine business Doral, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-doral-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Doral, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Doral, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-doral-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Doral, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Doral, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function DoralFloridaPageWrapper() {
  return <DoralFloridaPage />
}

