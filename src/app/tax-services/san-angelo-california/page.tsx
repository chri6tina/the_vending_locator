import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in San Angelo, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Angelo, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes San Angelo California, vending business bookkeeping San Angelo, tax services vending machines San Angelo California, vending machine accounting San Angelo, tax preparation vending business San Angelo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/san-angelo-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Angelo, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Angelo, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/san-angelo-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Angelo, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Angelo, California. Get professional help with taxes, accounting, and financial management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1
    }
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
