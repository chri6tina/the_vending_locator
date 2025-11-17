import { Metadata } from 'next'
import RockfordPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-rockford-illinois'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Rockford, Illinois | Smart Coolers for Aerospace & Healthcare Campuses',
  description:
    'Deploy Haha AI smart vending machines across Rockford, Illinois. Serve aerospace manufacturers, Mercyhealth, OSF Saint Anthony, and education campuses with nonstop support.',
  keywords:
    'Rockford vending machines for sale, smart vending Rockford IL, haha smart coolers aerospace, Mercyhealth vending, Rock Valley College vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Rockford, Illinois | Smart Coolers for Aerospace & Healthcare Campuses',
    description:
      'Deliver AI-powered Haha smart coolers to Rockford manufacturing, healthcare, education, and downtown innovation sites with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Rockford, Illinois | Smart Coolers for Aerospace & Healthcare Campuses',
    description:
      'Modernise Rockford vending with Haha AI smart coolers, Amazon availability, and Telegram support across the I-90 corridor.',
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

export default function RockfordIllinoisVendingPage() {
  return <RockfordPage />
}

