import { Metadata } from 'next'
import PalmBayPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-palm-bay-florida'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Palm Bay, Florida | Smart Coolers for Space Coast Manufacturing & Healthcare',
  description:
    'Install Haha AI smart vending machines across Palm Bay, Florida. Serve Space Coast manufacturers, Palm Bay Hospital, Eastern Florida State College, and master-planned communities with bilingual 24/7 support.',
  keywords:
    'Palm Bay vending machines for sale, smart vending Palm Bay FL, haha smart coolers Space Coast, Palm Bay Hospital vending, Space Coast vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Palm Bay, Florida | Smart Coolers for Space Coast Manufacturing & Healthcare',
    description:
      'Deliver AI-powered Haha smart coolers to Palm Bay aerospace corridors, healthcare campuses, and community amenities with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Palm Bay, Florida | Smart Coolers for Space Coast Manufacturing & Healthcare',
    description:
      'Modernise Palm Bay vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support for the Space Coast.',
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

export default function PalmBayFloridaVendingPage() {
  return <PalmBayPage />
}

