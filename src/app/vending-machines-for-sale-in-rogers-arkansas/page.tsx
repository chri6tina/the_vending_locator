import { Metadata } from 'next'
import RogersPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-rogers-arkansas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Rogers, Arkansas | Smart Coolers for Walmart Suppliers & Mercy Hospital',
  description:
    'Install Haha AI smart vending machines across Rogers, Arkansas. Serve Walmart suppliers, Mercy Hospital Northwest Arkansas, Pinnacle Hills, and tourism venues with nonstop support.',
  keywords:
    'Rogers vending machines for sale, smart vending Rogers AR, haha smart coolers Northwest Arkansas, Walmart supplier vending, Mercy Hospital vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Rogers, Arkansas | Smart Coolers for Walmart Suppliers & Mercy Hospital',
    description:
      'Deliver AI-powered Haha smart coolers to Rogers corporate campuses, healthcare systems, and hospitality sites with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Rogers, Arkansas | Smart Coolers for Walmart Suppliers & Mercy Hospital',
    description:
      'Modernise Rogers vending with Haha AI smart coolers, Amazon availability, and Telegram support across Northwest Arkansas.',
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

export default function RogersArkansasVendingPage() {
  return <RogersPage />
}

