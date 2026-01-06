import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Palo Alto, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palo Alto, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Palo Alto California, vending business bookkeeping Palo Alto, tax services vending machines Palo Alto CALIFORNIA, vending machine accounting Palo Alto, tax preparation vending business Palo Alto",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/palo-alto-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palo Alto, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palo Alto, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/palo-alto-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palo Alto, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palo Alto, California. Get professional help with taxes, accounting, and financial management."
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
