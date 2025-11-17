import { Metadata } from 'next'
import MissoulaPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-missoula-montana'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Missoula, Montana | Smart Coolers for UM & Providence St. Patrick',
  description:
    'Install Haha AI smart vending machines in Missoula, Montana. Serve the University of Montana, Providence St. Patrick Hospital, breweries, and outdoor hubs with Rocky Mountain-ready smart coolers.',
  keywords:
    'Missoula vending machines for sale, smart vending Missoula MT, haha smart coolers Montana, University of Montana vending, Providence St. Patrick vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Missoula, Montana | Smart Coolers for UM & Providence St. Patrick',
    description:
      'Deliver AI-powered Haha smart coolers to Missoula campuses, healthcare systems, breweries, and tourism venues with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Missoula, Montana | Smart Coolers for UM & Providence St. Patrick',
    description:
      'Modernise Missoula vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support for mountain climates.',
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

export default function MissoulaMontanaVendingPage() {
  return <MissoulaPage />
}

