import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Shalimar, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Shalimar, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Shalimar Florida, vending business bookkeeping Shalimar, tax services vending machines Shalimar FL, vending machine accounting Shalimar, tax preparation vending business Shalimar",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/shalimar-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Shalimar, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Shalimar, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/shalimar-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Shalimar, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Shalimar, Florida. Get professional help with taxes, accounting, and financial management."
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
