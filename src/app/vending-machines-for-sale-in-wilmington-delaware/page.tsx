import { Metadata } from 'next'
import WilmingtonDelawarePage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Wilmington, DE | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Wilmington, Delaware. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Wilmington vending machines for sale, smart vending Wilmington DE, haha smart coolers Wilmington, vending machine business Wilmington, smart vending Delaware',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-wilmington-delaware'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Wilmington, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Wilmington, Delaware. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-wilmington-delaware',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Wilmington, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Wilmington, Delaware with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function WilmingtonDelawarePageWrapper() {
  return <WilmingtonDelawarePage />
}

