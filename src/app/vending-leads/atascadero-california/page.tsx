import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Atascadero, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Atascadero, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Atascadero, vending leads Atascadero, vending locations Atascadero, vending opportunities Atascadero",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/atascadero-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Atascadero, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Atascadero, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/atascadero-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Atascadero, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Atascadero, California. Find qualified businesses for vending machine placement."
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
