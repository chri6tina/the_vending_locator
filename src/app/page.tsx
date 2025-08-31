import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "The Vending Locator - Find Vending Machine Leads & Locations",
  description: "Discover verified vending machine leads and locations. Expert guidance for vending machine operators and entrepreneurs.",
  keywords: "vending machines, vending business, vending leads, vending locations, vending opportunities",
  alternates: {
    canonical: "https://www.thevendinglocator.com"
  },
  openGraph: {
    title: "The Vending Locator - Find Vending Machine Leads & Locations",
    description: "Discover verified vending machine leads and locations. Expert guidance for vending machine operators and entrepreneurs.",
    url: "https://www.thevendinglocator.com",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vending Locator - Find Vending Machine Leads & Locations",
    description: "Discover verified vending machine leads and locations. Expert guidance for vending machine operators and entrepreneurs."
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

export default function Page() {
  return <PageClient />
}