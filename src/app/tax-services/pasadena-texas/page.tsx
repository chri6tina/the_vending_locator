import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Pasadena, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pasadena, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Pasadena Texas, vending business bookkeeping Pasadena, tax services vending machines Pasadena TEXAS, vending machine accounting Pasadena, tax preparation vending business Pasadena",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/pasadena-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pasadena, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pasadena, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/pasadena-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pasadena, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pasadena, Texas. Get professional help with taxes, accounting, and financial management."
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
