import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Fountain Valley, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fountain Valley, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Fountain Valley California, vending business bookkeeping Fountain Valley, tax services vending machines Fountain Valley CALIFORNIA, vending machine accounting Fountain Valley, tax preparation vending business Fountain Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/fountain-valley-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Fountain Valley, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fountain Valley, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/fountain-valley-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Fountain Valley, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fountain Valley, California. Get professional help with taxes, accounting, and financial management."
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
