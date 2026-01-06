import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Pomona, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pomona, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Pomona California, vending business bookkeeping Pomona, tax services vending machines Pomona CALIFORNIA, vending machine accounting Pomona, tax preparation vending business Pomona",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/pomona-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pomona, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pomona, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/pomona-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pomona, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pomona, California. Get professional help with taxes, accounting, and financial management."
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
