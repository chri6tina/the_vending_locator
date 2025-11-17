import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Deerfield Beach, Florida - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Deerfield Beach, Florida. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Deerfield Beach, vending leads Deerfield Beach, vending locations Deerfield Beach, vending opportunities Deerfield Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/deerfield-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Leads in Deerfield Beach, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Deerfield Beach, Florida. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/deerfield-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Deerfield Beach, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Deerfield Beach, Florida. Find qualified businesses for vending machine placement."
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
