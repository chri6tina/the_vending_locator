import { Metadata } from 'next'
import AuburnAlabamaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Auburn, AL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and AI-powered coolers in Auburn, Alabama. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Auburn vending machines for sale, smart vending Auburn AL, haha smart coolers Auburn, vending machine business Auburn, AI vending Alabama',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-auburn-alabama'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Auburn, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Auburn, Alabama. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-auburn-alabama',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Auburn, Alabama | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Auburn, Alabama with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function AuburnAlabamaPageWrapper() {
  return <AuburnAlabamaPage />
}

