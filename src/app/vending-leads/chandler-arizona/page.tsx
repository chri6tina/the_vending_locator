import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Chandler, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Chandler, Arizona. Find qualified businesses for vending machine placement in this thriving technology hub.",
  keywords: "vending machines Chandler Arizona, vending leads Chandler Arizona, vending locations Chandler Arizona, vending opportunities Chandler Arizona, Chandler vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/chandler-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Chandler, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Chandler, Arizona. Find qualified businesses for vending machine placement in this thriving technology hub.",
    url: "https://www.thevendinglocator.com/vending-leads/chandler-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Chandler, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Chandler, Arizona. Find qualified businesses for vending machine placement in this thriving technology hub."
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

export default function ChandlerArizonaPage() {
  return <PageClient />
}