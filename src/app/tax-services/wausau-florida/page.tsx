import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Wausau, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Wausau, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Wausau Florida, vending business bookkeeping Wausau, tax services vending machines Wausau FL, vending machine accounting Wausau, tax preparation vending business Wausau",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/wausau-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Wausau, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Wausau, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/wausau-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Wausau, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Wausau, Florida. Get professional help with taxes, accounting, and financial management."
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
// Skip page data collection during build to prevent memory issues
export const dynamicParams = false;
export const fetchCache = 'force-no-store';


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
