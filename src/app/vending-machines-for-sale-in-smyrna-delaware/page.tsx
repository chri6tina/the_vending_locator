import { Metadata } from 'next'
import SmyrnaDelawarePage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Smyrna, DE | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Smyrna, Delaware. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Smyrna vending machines for sale, smart vending Smyrna DE, haha smart coolers Smyrna, vending machine business Smyrna, smart vending Delaware',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-smyrna-delaware'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Smyrna, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Smyrna, Delaware. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-smyrna-delaware',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Smyrna, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Smyrna, Delaware with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function SmyrnaDelawarePageWrapper() {
  return <SmyrnaDelawarePage />
}

