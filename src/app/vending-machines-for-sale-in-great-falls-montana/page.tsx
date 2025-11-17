import { Metadata } from 'next'
import GreatFallsPage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-great-falls-montana'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Great Falls, Montana | AI Smart Coolers for Malmstrom AFB & Benefis Health',
  description:
    'Deploy Haha AI smart vending machines across Great Falls, Montana. Serve Malmstrom Air Force Base, Benefis Health System, Montana ExpoPark, and downtown offices with 24/7 supported smart coolers.',
  keywords:
    'Great Falls vending machines for sale, smart vending Great Falls MT, haha smart coolers Montana, Malmstrom AFB vending, Benefis Health vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Great Falls, Montana | AI Smart Coolers for Malmstrom AFB & Benefis Health',
    description:
      'Deliver AI-powered Haha smart coolers to Malmstrom AFB, Benefis Health, Carroll College, and tourism hubs across Great Falls, MT.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Great Falls, Montana | AI Smart Coolers for Malmstrom AFB & Benefis Health',
    description:
      'Modernise Great Falls vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support.',
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

export default function GreatFallsMontanaVendingPage() {
  return <GreatFallsPage />
}

