import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Lemon Grove, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Lemon Grove, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Lemon Grove, vending leads Lemon Grove, vending locations Lemon Grove, vending opportunities Lemon Grove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/lemon-grove-california"
  },
  openGraph: {
    title: "Vending Machine Leads in Lemon Grove, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Lemon Grove, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/lemon-grove-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Lemon Grove, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Lemon Grove, California. Find qualified businesses for vending machine placement."
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
