import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Azusa, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Azusa, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Azusa California, vending business bookkeeping Azusa, tax services vending machines Azusa California, vending machine accounting Azusa, tax preparation vending business Azusa",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/azusa-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Azusa, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Azusa, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/azusa-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Azusa, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Azusa, California. Get professional help with taxes, accounting, and financial management."
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
