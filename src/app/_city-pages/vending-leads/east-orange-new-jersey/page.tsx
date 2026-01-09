import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in East Orange, New Jersey - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout East Orange, New Jersey. Find qualified businesses for vending machine placement.",
  keywords: "vending machines East Orange, vending leads East Orange, vending locations East Orange, vending opportunities East Orange",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/east-orange-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Leads in East Orange, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout East Orange, New Jersey. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/east-orange-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in East Orange, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout East Orange, New Jersey. Find qualified businesses for vending machine placement."
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
