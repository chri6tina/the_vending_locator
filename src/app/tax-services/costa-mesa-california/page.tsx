import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Costa Mesa, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Costa Mesa, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Costa Mesa California, vending business bookkeeping Costa Mesa, tax services vending machines Costa Mesa CALIFORNIA, vending machine accounting Costa Mesa, tax preparation vending business Costa Mesa",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/costa-mesa-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Costa Mesa, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Costa Mesa, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/costa-mesa-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Costa Mesa, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Costa Mesa, California. Get professional help with taxes, accounting, and financial management."
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
