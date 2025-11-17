import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Lake Havasu City, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Lake Havasu City, Arizona. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Lake Havasu City, vending leads Lake Havasu City, vending locations Lake Havasu City, vending opportunities Lake Havasu City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/lake-havasu-city-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Lake Havasu City, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Lake Havasu City, Arizona. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/lake-havasu-city-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Lake Havasu City, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Lake Havasu City, Arizona. Find qualified businesses for vending machine placement."
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
