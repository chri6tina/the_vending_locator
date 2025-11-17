import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Tempe, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Tempe, Arizona. Find qualified businesses for vending machine placement in this vibrant Phoenix suburb.",
  keywords: "vending machines Tempe Arizona, vending leads Tempe Arizona, vending locations Tempe Arizona, vending opportunities Tempe Arizona, Tempe vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/tempe-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Tempe, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Tempe, Arizona. Find qualified businesses for vending machine placement in this vibrant Phoenix suburb.",
    url: "https://www.thevendinglocator.com/vending-leads/tempe-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Tempe, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Tempe, Arizona. Find qualified businesses for vending machine placement in this vibrant Phoenix suburb."
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

export default function TempeArizonaPage() {
  return <PageClient />
}
