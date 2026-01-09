import { Metadata } from 'next'
import AlexandriaPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-alexandria-virginia'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Alexandria, Virginia | AI Smart Coolers & 24/7 Support',
  description:
    'Deploy Haha smart coolers across Old Town, Eisenhower Valley, and National Landing. Get expert placement strategy, Amazon-ready hardware, and 24/7 Telegram support in Alexandria, Virginia.',
  keywords:
    'Alexandria vending machines for sale, smart vending Alexandria VA, haha smart coolers Alexandria, AI vending Northern Virginia, micro market Alexandria',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Alexandria, Virginia | AI Smart Coolers & 24/7 Support',
    description:
      'Serve commuters and waterfront visitors with Haha AI smart coolers in Alexandria, Virginia. Tap our placement expertise and around-the-clock operator support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Alexandria, Virginia | AI Smart Coolers & 24/7 Support',
    description:
      'Modernise Alexandria vending with Haha AI coolers, Amazon referral links, and 24/7 Telegram support from The Vending Locator.'
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

export default function AlexandriaVirginiaVendingPage() {
  return <AlexandriaPage />
}

