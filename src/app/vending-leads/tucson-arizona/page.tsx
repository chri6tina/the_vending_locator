import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Tucson, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Tucson, Arizona. Find qualified businesses for vending machine placement in Arizona's second largest city.",
  keywords: "vending machines Tucson Arizona, vending leads Tucson Arizona, vending locations Tucson Arizona, vending opportunities Tucson Arizona, Tucson vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/tucson-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Tucson, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Tucson, Arizona. Find qualified businesses for vending machine placement in Arizona's second largest city.",
    url: "https://www.thevendinglocator.com/vending-leads/tucson-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Tucson, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Tucson, Arizona. Find qualified businesses for vending machine placement in Arizona's second largest city."
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

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TucsonArizonaPage() {
  return <PageClient />
}