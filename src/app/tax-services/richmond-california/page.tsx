import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Richmond, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Richmond, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Richmond California, vending business bookkeeping Richmond, tax services vending machines Richmond CALIFORNIA, vending machine accounting Richmond, tax preparation vending business Richmond",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/richmond-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Richmond, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Richmond, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/richmond-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Richmond, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Richmond, California. Get professional help with taxes, accounting, and financial management."
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
