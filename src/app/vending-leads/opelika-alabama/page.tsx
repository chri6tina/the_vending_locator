import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Opelika, Alabama - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Opelika, Alabama. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Opelika, vending leads Opelika, vending locations Opelika, vending opportunities Opelika",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/opelika-alabama"
  },
  openGraph: {
    title: "Vending Machine Leads in Opelika, Alabama - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Opelika, Alabama. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/opelika-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Opelika, Alabama - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Opelika, Alabama. Find qualified businesses for vending machine placement."
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
