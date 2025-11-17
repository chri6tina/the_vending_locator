import { Metadata } from 'next'
import PortlandMainePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-portland-maine'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Portland, Maine | Smart Coolers for MaineHealth & Waterfront Hospitality',
  description:
    'Install Haha AI smart vending machines across Portland, Maine. Serve Maine Medical Center, waterfront hospitality, universities, and tech startups with nonstop support.',
  keywords:
    'Portland Maine vending machines for sale, smart vending Portland ME, haha smart coolers Maine, Maine Medical Center vending, Casco Bay vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Portland, Maine | Smart Coolers for MaineHealth & Waterfront Hospitality',
    description:
      'Deliver AI-powered Haha smart coolers to Portland healthcare, tourism, and corporate campuses with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Portland, Maine | Smart Coolers for MaineHealth & Waterfront Hospitality',
    description:
      'Modernise Portland vending with Haha AI smart coolers, Amazon availability, and Telegram support across Casco Bay.',
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

export default function PortlandMaineVendingPage() {
  return <PortlandMainePage />
}

