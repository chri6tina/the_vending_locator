import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Peoria, Arizona - The Vending Locator",
  description: "Get verified vending machine leads and locations in Peoria, Arizona. Find qualified businesses for vending machine placement in this growing Phoenix suburb.",
  keywords: "vending machines Peoria Arizona, vending leads Peoria Arizona, vending locations Peoria Arizona, vending opportunities Peoria Arizona, Peoria vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/peoria-arizona"
  },
  openGraph: {
    title: "Vending Machine Leads in Peoria, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Peoria, Arizona. Find qualified businesses for vending machine placement in this growing Phoenix suburb.",
    url: "https://www.thevendinglocator.com/vending-leads/peoria-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Peoria, Arizona - The Vending Locator",
    description: "Get verified vending machine leads and locations in Peoria, Arizona. Find qualified businesses for vending machine placement in this growing Phoenix suburb."
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

export default function PeoriaArizonaPage() {
  return <PageClient />
}
