import { Metadata } from 'next'
import KilleenPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-killeen-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Killeen, Texas | Smart Coolers for Fort Cavazos & Central Texas Healthcare',
  description:
    'Install Haha AI smart vending machines across Killeen, Texas. Serve Fort Cavazos (Fort Hood), Baylor Scott & White, Central Texas College, and regional logistics hubs with secure, 24/7 supported smart coolers.',
  keywords:
    'Killeen vending machines for sale, smart vending Killeen TX, Fort Cavazos vending machines, haha smart coolers Central Texas, Baylor Scott & White vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Killeen, Texas | Smart Coolers for Fort Cavazos & Central Texas Healthcare',
    description:
      'Deliver AI-powered Haha smart coolers to Fort Cavazos, hospitals, and campuses across Killeen with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Killeen, Texas | Smart Coolers for Fort Cavazos & Central Texas Healthcare',
    description:
      'Modernise Killeen vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function KilleenTexasVendingPage() {
  return <KilleenPage />
}

