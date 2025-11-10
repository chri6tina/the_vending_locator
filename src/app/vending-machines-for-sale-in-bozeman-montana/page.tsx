import { Metadata } from 'next'
import BozemanPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bozeman-montana'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bozeman, Montana | AI Smart Coolers for MSU & Big Sky',
  description:
    'Deploy Haha AI smart coolers across Bozeman, Montana. Serve Montana State University, Big Sky hospitality, and Gallatin Valley healthcare with premium vending and 24/7 support.',
  keywords:
    'Bozeman vending machines for sale, smart vending Bozeman MT, haha smart coolers Bozeman, AI vending Montana, Big Sky vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bozeman, Montana | AI Smart Coolers for MSU & Big Sky',
    description:
      'Bring AI-powered Haha smart coolers to Bozeman campuses, hospitality venues, and outdoor tourism hubs with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bozeman, Montana | AI Smart Coolers for MSU & Big Sky',
    description:
      'Modernise Bozeman vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function BozemanMontanaVendingPage() {
  return <BozemanPage />
}
