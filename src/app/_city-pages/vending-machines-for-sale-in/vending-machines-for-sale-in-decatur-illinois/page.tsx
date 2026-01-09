import { Metadata } from 'next'
import DecaturPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-decatur-illinois'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Decatur, Illinois | AI Smart Coolers for Agriprocessing HQs',
  description:
    'Install Haha AI smart coolers across Decatur, Illinois. Serve ADM, Tate & Lyle, Millikin University, and regional hospitals with premium vending and 24/7 support.',
  keywords:
    'Decatur vending machines for sale, smart vending Decatur IL, haha smart coolers Decatur, AI vending Illinois, ADM vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Decatur, Illinois | AI Smart Coolers for Agriprocessing HQs',
    description:
      'Bring AI-powered Haha smart coolers to Decatur agriprocessing plants, campuses, and healthcare facilities with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Decatur, Illinois | AI Smart Coolers for Agriprocessing HQs',
    description:
      'Modernise Decatur vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function DecaturIllinoisVendingPage() {
  return <DecaturPage />
}
