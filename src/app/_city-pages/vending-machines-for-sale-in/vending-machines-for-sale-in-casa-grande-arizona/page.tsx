import { Metadata } from 'next'
import CasaGrandeArizonaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Casa Grande, AZ | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Casa Grande, Arizona. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Casa Grande vending machines for sale, smart vending Casa Grande AZ, haha smart coolers Casa Grande, vending machine business Casa Grande, AI vending Arizona',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-casa-grande-arizona'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Casa Grande, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Casa Grande, Arizona. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-casa-grande-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Casa Grande, Arizona | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Casa Grande, Arizona with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function CasaGrandeArizonaPageWrapper() {
  return <CasaGrandeArizonaPage />
}

