import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Yucca Valley, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Yucca Valley, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Yucca Valley, vending leads Yucca Valley, vending locations Yucca Valley, vending opportunities Yucca Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/yucca-valley-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Yucca Valley, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Yucca Valley, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/yucca-valley-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Yucca Valley, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Yucca Valley, California. Find qualified businesses for vending machine placement."
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
