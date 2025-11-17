import { Metadata } from 'next'
import PineBluffPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-pine-bluff-arkansas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Pine Bluff, Arkansas | Smart Coolers for Jefferson Regional & Saracen Casino',
  description:
    'Deploy Haha AI smart vending machines across Pine Bluff, Arkansas. Serve Jefferson Regional, Saracen Casino Resort, UAPB, and Pine Bluff Arsenal with nonstop support.',
  keywords:
    'Pine Bluff vending machines for sale, smart vending Pine Bluff AR, haha smart coolers Arkansas Delta, Jefferson Regional vending, Saracen Casino vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Pine Bluff, Arkansas | Smart Coolers for Jefferson Regional & Saracen Casino',
    description:
      'Bring AI-powered Haha smart coolers to Pine Bluff healthcare, gaming, education, and industrial deployments with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Pine Bluff, Arkansas | Smart Coolers for Jefferson Regional & Saracen Casino',
    description:
      'Modernise Pine Bluff vending with Haha AI smart coolers, Amazon availability, and Telegram support across the Arkansas Delta.',
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

export default function PineBluffArkansasVendingPage() {
  return <PineBluffPage />
}

