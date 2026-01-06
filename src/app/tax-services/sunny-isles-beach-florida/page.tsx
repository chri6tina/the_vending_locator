import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunny Isles Beach, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunny Isles Beach, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Sunny Isles Beach Florida, vending business bookkeeping Sunny Isles Beach, tax services vending machines Sunny Isles Beach FL, vending machine accounting Sunny Isles Beach, tax preparation vending business Sunny Isles Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/sunny-isles-beach-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunny Isles Beach, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunny Isles Beach, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/sunny-isles-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunny Isles Beach, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunny Isles Beach, Florida. Get professional help with taxes, accounting, and financial management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
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
