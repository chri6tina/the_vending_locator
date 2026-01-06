import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Woodland, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Woodland, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Woodland California, vending business bookkeeping Woodland, tax services vending machines Woodland CALIFORNIA, vending machine accounting Woodland, tax preparation vending business Woodland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/woodland-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Woodland, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Woodland, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/woodland-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Woodland, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Woodland, California. Get professional help with taxes, accounting, and financial management."
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
// Skip page data collection during build to prevent memory issues
export const dynamicParams = false;
export const fetchCache = 'force-no-store';

export default function CityPage() {
  return <PageClient />
}
