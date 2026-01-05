import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Bradenton, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bradenton, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Bradenton Florida, vending business bookkeeping Bradenton, tax services vending machines Bradenton Florida, vending machine accounting Bradenton, tax preparation vending business Bradenton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/bradenton-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Bradenton, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bradenton, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/bradenton-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Bradenton, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bradenton, Florida. Get professional help with taxes, accounting, and financial management."
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
