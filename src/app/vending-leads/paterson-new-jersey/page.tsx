import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Paterson, New Jersey - The Vending Locator",
  description: "Get verified vending machine leads and locations in Paterson, New Jersey. Find qualified businesses for vending machine placement in this major industrial center.",
  keywords: "vending machines Paterson New Jersey, vending leads Paterson New Jersey, vending locations Paterson New Jersey, vending opportunities Paterson New Jersey",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/paterson-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Leads in Paterson, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Paterson, New Jersey. Find qualified businesses for vending machine placement in this major industrial center.",
    url: "https://www.thevendinglocator.com/vending-leads/paterson-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Paterson, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Paterson, New Jersey. Find qualified businesses for vending machine placement in this major industrial center."
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
