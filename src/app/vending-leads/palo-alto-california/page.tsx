import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Palo Alto, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Palo Alto, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Palo Alto, vending leads Palo Alto, vending locations Palo Alto, vending opportunities Palo Alto",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/palo-alto-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Palo Alto, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Palo Alto, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/palo-alto-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Palo Alto, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Palo Alto, California. Find qualified businesses for vending machine placement."
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
