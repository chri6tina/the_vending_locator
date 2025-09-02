import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: 'Vending Machine Leads in Mesa, Arizona - The Vending Locator',
  description: 'Get verified vending machine leads and locations in Mesa, Arizona. Find qualified businesses for vending machine placement.',
  keywords: 'vending machines Mesa Arizona, vending leads Mesa Arizona, vending locations Mesa Arizona, vending opportunities Mesa Arizona, Mesa vending business',
  alternates: {
    canonical: 'https://www.thevendinglocator.com/vending-leads/mesa-arizona'
  },
  openGraph: {
    title: 'Vending Machine Leads in Mesa, Arizona - The Vending Locator',
    description: 'Get verified vending machine leads and locations in Mesa, Arizona. Find qualified businesses for vending machine placement.',
    url: 'https://www.thevendinglocator.com/vending-leads/mesa-arizona',
    siteName: 'The Vending Locator',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machine Leads in Mesa, Arizona - The Vending Locator',
    description: 'Get verified vending machine leads and locations in Mesa, Arizona. Find qualified businesses for vending machine placement.'
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

export default function CityPage() {
  return <PageClient />
}