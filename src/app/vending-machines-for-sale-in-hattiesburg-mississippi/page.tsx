import { Metadata } from 'next'
import HattiesburgPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-hattiesburg-mississippi'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Hattiesburg, Mississippi | Smart Coolers for USM & Forrest Health',
  description:
    'Install Haha AI smart vending machines across Hattiesburg, Mississippi. Serve the University of Southern Mississippi, Forrest Health, Camp Shelby, and Pine Belt employers with 24/7 supported smart coolers.',
  keywords:
    'Hattiesburg vending machines for sale, smart vending Hattiesburg MS, haha smart coolers Mississippi, Southern Miss vending, Forrest Health vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Hattiesburg, Mississippi | Smart Coolers for USM & Forrest Health',
    description:
      'Bring Haha AI smart coolers to Southern Miss, Forrest General, Camp Shelby, and downtown Hattiesburg with nonstop support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Hattiesburg, Mississippi | Smart Coolers for USM & Forrest Health',
    description:
      'Modernise Hattiesburg vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function HattiesburgMississippiVendingPage() {
  return <HattiesburgPage />
}

