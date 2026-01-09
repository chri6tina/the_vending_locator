import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in San Fernando, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout San Fernando, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines San Fernando, vending leads San Fernando, vending locations San Fernando, vending opportunities San Fernando",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/san-fernando-california"
  },
  openGraph: {
    title: "Vending Machine Leads in San Fernando, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout San Fernando, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/san-fernando-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in San Fernando, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout San Fernando, California. Find qualified businesses for vending machine placement."
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


// Generate on-demand to reduce build memory usage
export default function Page() {
  return <PageClient />
}
