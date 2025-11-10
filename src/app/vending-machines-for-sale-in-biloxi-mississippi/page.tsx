import { Metadata } from 'next'
import BiloxiPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-biloxi-mississippi'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Biloxi, Mississippi | Smart Coolers for Casinos & Military',
  description:
    'Install Haha AI smart coolers across Biloxi, Mississippi. Serve casinos, Keesler AFB, hospitals, and tourism hubs with premium vending and 24/7 support.',
  keywords:
    'Biloxi vending machines for sale, smart vending Biloxi MS, haha smart coolers Biloxi, AI vending Gulf Coast, casino vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Biloxi, Mississippi | Smart Coolers for Casinos & Military',
    description:
      'Bring humidity-ready Haha smart coolers to Biloxi casinos, military bases, and coastal attractions with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Biloxi, Mississippi | Smart Coolers for Casinos & Military',
    description:
      'Modernise Biloxi vending with Haha AI coolers, Amazon referrals, and 24/7 Telegram support from The Vending Locator.'
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

export default function BiloxiMississippiVendingPage() {
  return <BiloxiPage />
}

