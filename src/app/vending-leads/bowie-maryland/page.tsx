import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Bowie, Maryland - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Bowie, Maryland. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Bowie, vending leads Bowie, vending locations Bowie, vending opportunities Bowie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/bowie-maryland"
  },
  openGraph: {
    title: "Vending Machine Leads in Bowie, Maryland - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Bowie, Maryland. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/bowie-maryland",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Bowie, Maryland - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Bowie, Maryland. Find qualified businesses for vending machine placement."
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
