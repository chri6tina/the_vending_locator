import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Fountain Valley, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Fountain Valley, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Fountain Valley, vending leads Fountain Valley, vending locations Fountain Valley, vending opportunities Fountain Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/fountain-valley-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Fountain Valley, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Fountain Valley, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/fountain-valley-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Fountain Valley, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Fountain Valley, California. Find qualified businesses for vending machine placement."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return <PageClient />
}
