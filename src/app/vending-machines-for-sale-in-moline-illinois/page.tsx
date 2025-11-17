import { Metadata } from 'next'
import MolinePage from './pageClient'

const canonicalUrl =
  'https://www.thevendinglocator.com/vending-machines-for-sale-in-moline-illinois'

export const metadata: Metadata = {
  title:
    'Vending Machines for Sale in Moline, Illinois | Smart Coolers for John Deere & Quad Cities International',
  description:
    'Deploy Haha AI smart vending machines across Moline, Illinois. Serve John Deere headquarters, Quad Cities International Airport, UnityPoint Health, and downtown riverfront venues with nonstop support.',
  keywords:
    'Moline vending machines for sale, smart vending Moline IL, haha smart coolers Quad Cities, John Deere vending, Quad Cities International Airport vending',
  alternates: {
    canonical: canonicalUrl
  },
  openGraph: {
    title:
      'Vending Machines for Sale in Moline, Illinois | Smart Coolers for John Deere & Quad Cities International',
    description:
      'Bring AI-powered Haha smart coolers to Moline corporate campuses, airports, healthcare systems, and colleges with 24/7 support.',
    url: canonicalUrl,
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vending Machines for Sale in Moline, Illinois | Smart Coolers for John Deere & Quad Cities International',
    description:
      'Modernise Moline vending with Haha AI smart coolers, Amazon availability, and 24/7 Telegram support serving the Quad Cities.',
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

export default function MolineIllinoisVendingPage() {
  return <MolinePage />
}

