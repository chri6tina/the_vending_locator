import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Manhattan Beach, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Manhattan Beach, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Manhattan Beach California, vending business bookkeeping Manhattan Beach, tax services vending machines Manhattan Beach CALIFORNIA, vending machine accounting Manhattan Beach, tax preparation vending business Manhattan Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/manhattan-beach-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Manhattan Beach, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Manhattan Beach, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/manhattan-beach-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Manhattan Beach, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Manhattan Beach, California. Get professional help with taxes, accounting, and financial management."
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
