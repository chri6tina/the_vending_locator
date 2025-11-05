import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Gilbert, Arizona - The Vending Locator',
  description: 'Get verified vending machine leads and locations in Gilbert, Arizona. Find qualified businesses for vending machine placement.',
  keywords: 'vending machines Gilbert Arizona, vending leads Gilbert Arizona, vending locations Gilbert Arizona, vending opportunities Gilbert Arizona, Gilbert vending business',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/gilbert-arizona'
  },
  openGraph: {
    title: 'Vending Machine Leads in Gilbert, Arizona - The Vending Locator',
    description: 'Get verified vending machine leads and locations in Gilbert, Arizona. Find qualified businesses for vending machine placement.',
    url: 'https://www.thevendinglocator.com/vending-leads/gilbert-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Gilbert, Arizona - The Vending Locator',
    description: 'Get verified vending machine leads and locations in Gilbert, Arizona. Find qualified businesses for vending machine placement.'
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CityPage() {
  return <PageClient />
}