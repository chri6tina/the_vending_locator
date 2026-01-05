import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Ventura, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Ventura, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Ventura California, vending business bookkeeping Ventura, tax services vending machines Ventura CALIFORNIA, vending machine accounting Ventura, tax preparation vending business Ventura",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/ventura-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Ventura, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Ventura, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/ventura-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Ventura, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Ventura, California. Get professional help with taxes, accounting, and financial management."
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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
