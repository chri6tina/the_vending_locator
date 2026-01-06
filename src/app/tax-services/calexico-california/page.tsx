import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Calexico, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Calexico, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Calexico California, vending business bookkeeping Calexico, tax services vending machines Calexico CALIFORNIA, vending machine accounting Calexico, tax preparation vending business Calexico",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/calexico-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Calexico, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Calexico, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/calexico-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Calexico, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Calexico, California. Get professional help with taxes, accounting, and financial management."
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
