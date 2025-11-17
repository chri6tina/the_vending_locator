import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Rohnert Park, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Rohnert Park, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Rohnert Park, vending leads Rohnert Park, vending locations Rohnert Park, vending opportunities Rohnert Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/rohnert-park-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Rohnert Park, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Rohnert Park, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/rohnert-park-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Rohnert Park, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Rohnert Park, California. Find qualified businesses for vending machine placement."
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
