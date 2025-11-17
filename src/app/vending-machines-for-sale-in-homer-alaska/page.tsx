import { Metadata } from 'next'
import HomerPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-homer-alaska'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Homer, Alaska | Smart Coolers for Harbor Tourism & Coastal Healthcare',
  description:
    'Install Haha AI smart vending machines in Homer, Alaska. Serve harbor tourism, charter fleets, South Peninsula Hospital, and coastal lodges with remote-ready smart coolers.',
  keywords:
    'Homer vending machines for sale, smart vending Homer AK, haha smart coolers Alaska, harbor vending Homer, South Peninsula Hospital vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Homer, Alaska | Smart Coolers for Harbor Tourism & Coastal Healthcare',
    description:
      'Bring AI-powered Haha smart coolers to the Homer Spit, tourism lodges, and healthcare campuses with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Homer, Alaska | Smart Coolers for Harbor Tourism & Coastal Healthcare',
    description:
      'Modernise Homer vending with Haha AI smart coolers, Amazon availability, and remote Telegram support.',
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

export default function HomerAlaskaVendingPage() {
  return <HomerPage />
}

