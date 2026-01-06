import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Walnut Creek, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Walnut Creek, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Walnut Creek California, vending business bookkeeping Walnut Creek, tax services vending machines Walnut Creek CALIFORNIA, vending machine accounting Walnut Creek, tax preparation vending business Walnut Creek",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/walnut-creek-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Walnut Creek, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Walnut Creek, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/walnut-creek-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Walnut Creek, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Walnut Creek, California. Get professional help with taxes, accounting, and financial management."
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

export default function CityPage() {
  return <PageClient />
}
