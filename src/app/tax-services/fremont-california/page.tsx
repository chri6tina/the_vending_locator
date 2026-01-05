import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Fremont, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fremont, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Fremont California, vending business bookkeeping Fremont, tax services vending machines Fremont California, vending machine accounting Fremont, tax preparation vending business Fremont",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/fremont-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Fremont, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fremont, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/fremont-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Fremont, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Fremont, California. Get professional help with taxes, accounting, and financial management."
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
