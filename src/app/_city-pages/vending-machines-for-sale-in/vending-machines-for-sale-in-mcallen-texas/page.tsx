import { Metadata } from 'next'
import McAllenPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-mcallen-texas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in McAllen, Texas | Smart Coolers for Rio Grande Valley Healthcare & Retail',
  description:
    'Install Haha AI smart vending machines throughout McAllen, Texas. Serve DHR Health, South Texas Health System, La Plaza Mall, UTRGV, and border logistics hubs with bilingual 24/7 support.',
  keywords:
    'McAllen vending machines for sale, smart vending McAllen TX, haha smart coolers Rio Grande Valley, DHR Health vending, La Plaza Mall vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in McAllen, Texas | Smart Coolers for Rio Grande Valley Healthcare & Retail',
    description:
      'Deliver AI-powered Haha smart coolers to Rio Grande Valley hospitals, retail corridors, and logistics hubs with nonstop bilingual support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in McAllen, Texas | Smart Coolers for Rio Grande Valley Healthcare & Retail',
    description:
      'Modernise McAllen vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function McAllenTexasVendingPage() {
  return <McAllenPage />
}

