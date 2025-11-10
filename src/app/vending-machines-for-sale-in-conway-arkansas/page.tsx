import { Metadata } from 'next'
import ConwayPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-conway-arkansas'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Conway, Arkansas | AI Smart Coolers for the City of Colleges',
  description:
    'Install Haha AI smart coolers across Conway, Arkansas. Serve UCA, Hendrix College, Baptist Health, and tech offices with premium vending and 24/7 support.',
  keywords:
    'Conway vending machines for sale, smart vending Conway AR, haha smart coolers Conway, AI vending Arkansas, City of Colleges vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Conway, Arkansas | AI Smart Coolers for the City of Colleges',
    description:
      'Bring AI-powered Haha smart coolers to Conway campuses, healthcare, and tech companies with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Conway, Arkansas | AI Smart Coolers for the City of Colleges',
    description:
      'Modernise Conway vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function ConwayArkansasVendingPage() {
  return <ConwayPage />
}
