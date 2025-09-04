import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in San Bernardino, California - The Vending Locator',
  description: 'Get verified vending machine leads and locations in San Bernardino, California. Find qualified businesses for vending machine placement.',
  keywords: 'vending machine leads San Bernardino, vending locations San Bernardino, vending opportunities San Bernardino',
  alternates: { canonical: 'https://www.thevendinglocator.com/vending-leads/san-bernardino-california' },
  openGraph: {
    title: 'Vending Machine Leads in San Bernardino, California - The Vending Locator',
    description: 'Get verified vending machine leads and locations in San Bernardino, California. Find qualified businesses for vending machine placement.',
    url: 'https://www.thevendinglocator.com/vending-leads/san-bernardino-california',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in San Bernardino, California - The Vending Locator',
    description: 'Get verified vending machine leads and locations in San Bernardino, California. Find qualified businesses for vending machine placement.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  }
}

export default function CityPage() {
  return <PageClient />
}


