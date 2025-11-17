import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Commerce City, Colorado - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Commerce City, Colorado. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Commerce City, vending leads Commerce City, vending locations Commerce City, vending opportunities Commerce City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/commerce-city-colorado"
  },
  openGraph: {
    title: "Vending Machine Leads in Commerce City, Colorado - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Commerce City, Colorado. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/commerce-city-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Commerce City, Colorado - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Commerce City, Colorado. Find qualified businesses for vending machine placement."
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
