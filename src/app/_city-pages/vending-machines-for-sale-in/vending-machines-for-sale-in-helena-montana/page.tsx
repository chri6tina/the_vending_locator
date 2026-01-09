import { Metadata } from 'next'
import HelenaPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-helena-montana'

export const metadata: Metadata = {
  title:
    "Vending Machines for Sale in Helena, Montana | Smart Coolers for State Government & St. Peter's Health",
  description:
    "Deploy Haha AI smart vending machines across Helena, Montana. Serve state government agencies, St. Peter's Health, Carroll College, and tourism hubs with 24/7 supported smart coolers.",
  keywords:
    'Helena vending machines for sale, smart vending Helena MT, haha smart coolers Montana capital, state government vending Helena, St. Peter’s Health vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      "Vending Machines for Sale in Helena, Montana | Smart Coolers for State Government & St. Peter's Health",
    description:
      'Provide Haha AI smart coolers to the Montana State Capitol, St. Peter’s Health, Carroll College, and outdoor economy venues.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Vending Machines for Sale in Helena, Montana | Smart Coolers for State Government & St. Peter's Health",
    description:
      'Modernise Helena vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function HelenaMontanaVendingPage() {
  return <HelenaPage />
}

