import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Moorhead, Minnesota - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Moorhead, Minnesota. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Moorhead, vending leads Moorhead, vending locations Moorhead, vending opportunities Moorhead",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/moorhead-minnesota"
  },
  openGraph: {
    title: "Vending Machine Leads in Moorhead, Minnesota - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Moorhead, Minnesota. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/moorhead-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Moorhead, Minnesota - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Moorhead, Minnesota. Find qualified businesses for vending machine placement."
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
