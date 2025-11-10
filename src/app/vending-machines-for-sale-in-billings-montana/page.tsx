import { Metadata } from 'next'
import BillingsPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-billings-montana'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Billings, Montana | AI Smart Coolers for the Trailhead',
  description:
    'Equip Billings, Montana with Haha AI smart coolers. Serve hospitals, refineries, campuses, and tourism hubs with contactless vending and 24/7 support.',
  keywords:
    'Billings vending machines for sale, smart vending Billings MT, haha smart coolers Billings, AI vending Montana, hospital vending Billings',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Billings, Montana | AI Smart Coolers for the Trailhead',
    description:
      'Deploy AI-powered Haha smart coolers across Billings healthcare, energy, education, and tourism venues with expert guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Billings, Montana | AI Smart Coolers for the Trailhead',
    description:
      'Modernise Billings vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function BillingsMontanaVendingPage() {
  return <BillingsPage />
}

