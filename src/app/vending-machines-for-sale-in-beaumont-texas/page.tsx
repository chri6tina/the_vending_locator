import { Metadata } from 'next'
import BeaumontPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-beaumont-texas'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Beaumont, Texas | AI Smart Coolers for Refineries & Campuses',
  description:
    'Deploy Haha AI smart coolers across Beaumont, Texas. Serve petrochemical plants, hospitals, and Lamar University with premium grab-and-go and 24/7 support.',
  keywords:
    'Beaumont vending machines for sale, smart vending Beaumont TX, haha smart coolers Beaumont, AI vending Southeast Texas, refinery vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Beaumont, Texas | AI Smart Coolers for Refineries & Campuses',
    description:
      'Bring industrial-grade Haha smart coolers to Beaumont refineries, hospitals, and campuses with operator-first support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Beaumont, Texas | AI Smart Coolers for Refineries & Campuses',
    description:
      'Modernise Beaumont vending with Haha AI coolers, Amazon purchase links, and 24/7 Telegram support from The Vending Locator.'
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

export default function BeaumontTexasVendingPage() {
  return <BeaumontPage />
}

