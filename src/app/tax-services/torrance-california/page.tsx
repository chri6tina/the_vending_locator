import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Torrance, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Torrance, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Torrance California, vending business bookkeeping Torrance, tax services vending machines Torrance California, vending machine accounting Torrance, tax preparation vending business Torrance",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/torrance-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Torrance, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Torrance, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/torrance-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Torrance, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Torrance, California. Get professional help with taxes, accounting, and financial management."
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
