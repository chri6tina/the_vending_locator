import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Newark, New Jersey - The Vending Locator",
  description: "Get verified vending machine leads and locations in Newark, New Jersey. Find qualified businesses for vending machine placement in New Jersey's largest city.",
  keywords: "vending machines Newark New Jersey, vending leads Newark New Jersey, vending locations Newark New Jersey, vending opportunities Newark New Jersey",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/newark-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Leads in Newark, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Newark, New Jersey. Find qualified businesses for vending machine placement in New Jersey's largest city.",
    url: "https://www.thevendinglocator.com/vending-leads/newark-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Newark, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Newark, New Jersey. Find qualified businesses for vending machine placement in New Jersey's largest city."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
  }
}

export default function CityPage() {
  return <PageClient />
}
