import { Metadata } from 'next'
import MontgomeryAlabamaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Montgomery, AL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Montgomery, Alabama. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Montgomery vending machines for sale, smart vending Montgomery AL, haha smart coolers Montgomery, vending machine business Montgomery, AI vending Alabama',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-montgomery-alabama'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Montgomery, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Montgomery, Alabama. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-montgomery-alabama',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Montgomery, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Montgomery, Alabama with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function MontgomeryAlabamaPageWrapper() {
  return <MontgomeryAlabamaPage />
}

