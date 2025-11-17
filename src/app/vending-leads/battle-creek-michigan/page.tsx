import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Battle Creek, Michigan - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Battle Creek, Michigan. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Battle Creek, vending leads Battle Creek, vending locations Battle Creek, vending opportunities Battle Creek",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/battle-creek-michigan"
  },
  openGraph: {
    title: "Vending Machine Leads in Battle Creek, Michigan - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Battle Creek, Michigan. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/battle-creek-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Battle Creek, Michigan - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Battle Creek, Michigan. Find qualified businesses for vending machine placement."
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
