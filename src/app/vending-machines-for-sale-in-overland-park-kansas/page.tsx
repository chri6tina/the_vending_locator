import { Metadata } from 'next'
import OverlandParkPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-overland-park-kansas'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Overland Park, Kansas | Smart Coolers for Healthcare & Corporate Campuses',
  description:
    'Deploy Haha AI smart vending machines across Overland Park, Kansas. Serve AdventHealth Shawnee Mission, College Boulevard corporate campuses, Overland Park Convention Center, and retail districts with nonstop support.',
  keywords:
    'Overland Park vending machines for sale, smart vending Overland Park KS, haha smart coolers Kansas City, AdventHealth vending, Overland Park Convention Center vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Overland Park, Kansas | Smart Coolers for Healthcare & Corporate Campuses',
    description:
      'Bring AI-powered Haha smart coolers to Overland Park healthcare systems, corporate hubs, and conference venues with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Overland Park, Kansas | Smart Coolers for Healthcare & Corporate Campuses',
    description:
      'Modernise Overland Park vending with Haha AI smart coolers, Amazon availability, and Telegram support across the Kansas City metro.',
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

export default function OverlandParkKansasVendingPage() {
  return <OverlandParkPage />
}

