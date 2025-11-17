import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Newport, Kentucky - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Newport, Kentucky. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Newport, vending leads Newport, vending locations Newport, vending opportunities Newport",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/newport-kentucky"
  },
  openGraph: {
    title: "Vending Machine Leads in Newport, Kentucky - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Newport, Kentucky. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/newport-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Newport, Kentucky - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Newport, Kentucky. Find qualified businesses for vending machine placement."
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
