import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in St. Petersburg, Florida - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout St. Petersburg, Florida. Find qualified businesses for vending machine placement.",
  keywords: "vending machines St. Petersburg, vending leads St. Petersburg, vending locations St. Petersburg, vending opportunities St. Petersburg",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/st.-petersburg-florida"
  },
  openGraph: {
    title: "Vending Machine Leads in St. Petersburg, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout St. Petersburg, Florida. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/st.-petersburg-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in St. Petersburg, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout St. Petersburg, Florida. Find qualified businesses for vending machine placement."
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
