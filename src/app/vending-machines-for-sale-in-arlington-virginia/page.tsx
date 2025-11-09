import { Metadata } from 'next'
import ArlingtonPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-arlington-virginia'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Arlington, Virginia | AI Smart Coolers for National Landing',
  description:
    'Install Haha smart coolers across Arlington, Virginia. Serve Rosslyn, Ballston, Pentagon City, and Amazon HQ2 with AI-powered vending and 24/7 operator support.',
  keywords:
    'Arlington vending machines for sale, smart vending Arlington VA, haha smart coolers Arlington, AI vending National Landing, Amazon HQ2 vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Arlington, Virginia | AI Smart Coolers for National Landing',
    description:
      'Deliver premium smart vending to Arlington offices, federal campuses, and multifamily towers with Haha AI coolers and hands-on support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Arlington, Virginia | AI Smart Coolers for National Landing',
    description:
      'Modernise Arlington vending with Haha AI coolers, Amazon referrals, and 24/7 Telegram support from The Vending Locator.'
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

export default function ArlingtonVirginiaVendingPage() {
  return <ArlingtonPage />
}

