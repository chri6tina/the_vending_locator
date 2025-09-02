import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Glendale, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Glendale, Arizona. Find qualified businesses for vending machine placement in this major Phoenix suburb.",
  keywords: "vending machines Glendale Arizona, vending leads Glendale Arizona, vending locations Glendale Arizona, vending opportunities Glendale Arizona, Glendale vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/glendale-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Glendale, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Glendale, Arizona. Find qualified businesses for vending machine placement in this major Phoenix suburb.",
    url: "https://www.thevendinglocator.com/vending-leads/glendale-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Glendale, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Glendale, Arizona. Find qualified businesses for vending machine placement in this major Phoenix suburb."
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

export default function GlendaleArizonaPage() {
  return <PageClient />
}