import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in La Habra, California - The Vending Locator",
  description: "Get verified vending machine leads and locations throughout La Habra, California. Find qualified businesses for vending machine placement.",
  keywords: "vending machines La Habra, vending leads La Habra, vending locations La Habra, vending opportunities La Habra",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/la-habra-california"
  },
  openGraph: {
    title: "Vending Machine Leads in La Habra, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout La Habra, California. Find qualified businesses for vending machine placement.",
    url: "https://www.thevendinglocator.com/vending-leads/la-habra-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in La Habra, California - The Vending Locator",
    description: "Get verified vending machine leads and locations throughout La Habra, California. Find qualified businesses for vending machine placement."
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
