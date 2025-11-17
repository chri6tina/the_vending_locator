import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in St. Albans, Vermont - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout St. Albans, Vermont. Find qualified businesses for vending machine placement.",
  keywords: "vending machines St. Albans, vending leads St. Albans, vending locations St. Albans, vending opportunities St. Albans",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/st.-albans-vermont"
  },
  openGraph: {
    title: "Vending Machine Leads in St. Albans, Vermont - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout St. Albans, Vermont. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/st.-albans-vermont",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in St. Albans, Vermont - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout St. Albans, Vermont. Find qualified businesses for vending machine placement."
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
