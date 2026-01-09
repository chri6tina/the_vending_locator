import { Metadata } from 'next'
import OrlandoFloridaPage from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Orlando, FL | Smart Coolers with 24/7 Support',
  description:
    'Shop smart vending machines and smart coolers in Orlando, Florida. Get expert guidance, 24/7 operator support, and ready-to-ship Haha vending machines.',
  keywords:
    'Orlando vending machines for sale, smart vending Orlando FL, haha smart coolers Orlando, vending machine business Orlando, smart vending Florida',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-orlando-florida'
  },
  openGraph: {
    title: 'Vending Machines for Sale in Orlando, Florida | Smart Coolers with 24/7 Support',
    description:
      'Find the best smart vending machines for Orlando, Florida. Work with The Vending Locator for expert placement guidance and operator-first support.',
    url: 'https://www.thevendinglocator.com/vending-machines-for-sale-in-orlando-florida',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Orlando, Florida | Smart Coolers with 24/7 Support',
    description:
      'Shop Haha smart coolers for Orlando, Florida with The Vending Locator. We pair equipment with real placements and 24/7 operator support.'
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

export default function OrlandoFloridaPageWrapper() {
  return <OrlandoFloridaPage />
}

