import { Metadata } from 'next'
import BloomingtonPage from './pageClient'

const canonicalUrl = 'https://www.thevendinglocator.com/vending-machines-for-sale-in-bloomington-illinois'

export const metadata: Metadata = {
  title: 'Vending Machines for Sale in Bloomington, Illinois | AI Smart Coolers for State Farm HQ',
  description:
    'Install Haha AI smart coolers across Bloomington, Illinois. Serve State Farm headquarters, Illinois State University, and OSF HealthCare with premium vending and 24/7 support.',
  keywords:
    'Bloomington vending machines for sale, smart vending Bloomington IL, haha smart coolers Bloomington, AI vending Illinois, State Farm vending machines',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title: 'Vending Machines for Sale in Bloomington, Illinois | AI Smart Coolers for State Farm HQ',
    description:
      'Deliver AI-powered Haha smart coolers to Bloomington corporate campuses, hospitals, and universities with expert placement guidance.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines for Sale in Bloomington, Illinois | AI Smart Coolers for State Farm HQ',
    description:
      'Modernise Bloomington vending with Haha AI coolers, Amazon availability, and 24/7 Telegram support from The Vending Locator.'
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

export default function BloomingtonIllinoisVendingPage() {
  return <BloomingtonPage />
}
