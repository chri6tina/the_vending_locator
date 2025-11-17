import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Port St. Lucie, Florida - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Port St. Lucie, Florida. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Port St. Lucie, vending leads Port St. Lucie, vending locations Port St. Lucie, vending opportunities Port St. Lucie",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/port-st.-lucie-florida"
  },
  openGraph: {
    title: "Vending Machine Leads in Port St. Lucie, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Port St. Lucie, Florida. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/port-st.-lucie-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Port St. Lucie, Florida - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Port St. Lucie, Florida. Find qualified businesses for vending machine placement."
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
