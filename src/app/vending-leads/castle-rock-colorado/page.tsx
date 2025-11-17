import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Castle Rock, Colorado - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout Castle Rock, Colorado. Find qualified businesses for vending machine placement.",
  keywords: "vending machines Castle Rock, vending leads Castle Rock, vending locations Castle Rock, vending opportunities Castle Rock",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/castle-rock-colorado"
  },
  openGraph: {
    title: "Vending Machine Leads in Castle Rock, Colorado - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Castle Rock, Colorado. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/castle-rock-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Castle Rock, Colorado - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout Castle Rock, Colorado. Find qualified businesses for vending machine placement."
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
