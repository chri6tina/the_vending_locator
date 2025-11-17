import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Crystal Lake, Illinois - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Crystal Lake, Illinois. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Crystal Lake, vending leads Crystal Lake, vending locations Crystal Lake, vending opportunities Crystal Lake",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/crystal-lake-illinois"
  },
  openGraph: {
    title: "Vending Machine Leads in Crystal Lake, Illinois - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Crystal Lake, Illinois. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/crystal-lake-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Crystal Lake, Illinois - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Crystal Lake, Illinois. Find qualified businesses for vending machine placement."
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
