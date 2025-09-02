import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Scottsdale, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Scottsdale, Arizona. Find qualified businesses for vending machine placement in this affluent Phoenix suburb.",
  keywords: "vending machines Scottsdale Arizona, vending leads Scottsdale Arizona, vending locations Scottsdale Arizona, vending opportunities Scottsdale Arizona, Scottsdale vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/scottsdale-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Scottsdale, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Scottsdale, Arizona. Find qualified businesses for vending machine placement in this affluent Phoenix suburb.",
    url: "https://www.thevendinglocator.com/vending-leads/scottsdale-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Scottsdale, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Scottsdale, Arizona. Find qualified businesses for vending machine placement in this affluent Phoenix suburb."
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

export default function ScottsdaleArizonaPage() {
  return <PageClient />
}