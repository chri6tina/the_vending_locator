import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Hot Leads Marketplace - Premium Vending Machine Opportunities",
  description: "Browse and purchase verified vending machine leads. Premium locations with decision-maker contacts ready for immediate placement.",
  keywords: "vending machine leads, hot leads, vending opportunities, premium locations, verified contacts",
  alternates: {
    canonical: "https://www.thevendinglocator.com/marketplace"
  },
  openGraph: {
    title: "Hot Leads Marketplace - Premium Vending Machine Opportunities",
    description: "Browse and purchase verified vending machine leads. Premium locations with decision-maker contacts ready for immediate placement.",
    url: "https://www.thevendinglocator.com/marketplace",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Leads Marketplace - Premium Vending Machine Opportunities",
    description: "Browse and purchase verified vending machine leads. Premium locations with decision-maker contacts ready for immediate placement."
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
