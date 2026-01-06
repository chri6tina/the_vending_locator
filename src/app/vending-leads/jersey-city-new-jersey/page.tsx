import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Leads in Jersey City, New Jersey - The Vending Locator",
  description: "Get verified vending machine leads and locations in Jersey City, New Jersey. Find qualified businesses for vending machine placement in this major NYC suburb.",
  keywords: "vending machines Jersey City New Jersey, vending leads Jersey City New Jersey, vending locations Jersey City New Jersey, vending opportunities Jersey City New Jersey",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-leads/jersey-city-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Leads in Jersey City, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Jersey City, New Jersey. Find qualified businesses for vending machine placement in this major NYC suburb.",
    url: "https://www.thevendinglocator.com/vending-leads/jersey-city-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Leads in Jersey City, New Jersey - The Vending Locator",
    description: "Get verified vending machine leads and locations in Jersey City, New Jersey. Find qualified businesses for vending machine placement in this major NYC suburb."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': "large",
      'max-snippet': -1
    }
    }
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
