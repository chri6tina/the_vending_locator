import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Gainesville, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Gainesville, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Gainesville Florida, vending business bookkeeping Gainesville, tax services vending machines Gainesville Florida, vending machine accounting Gainesville, tax preparation vending business Gainesville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/gainesville-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Gainesville, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Gainesville, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/gainesville-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Gainesville, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Gainesville, Florida. Get professional help with taxes, accounting, and financial management."
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
