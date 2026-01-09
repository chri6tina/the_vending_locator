import { Metadata } from 'next'
import ElsmereDelawarePage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Elsmere, DE | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Elsmere, Delaware. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Elsmere vending machines for sale, smart vending Elsmere DE, haha smart coolers Elsmere, vending machine business Elsmere, smart vending Delaware',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-elsmere-delaware'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Elsmere, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Elsmere, Delaware. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-elsmere-delaware',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Elsmere, Delaware | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Elsmere, Delaware with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function ElsmereDelawarePageWrapper() {
  return <ElsmereDelawarePage />
}

