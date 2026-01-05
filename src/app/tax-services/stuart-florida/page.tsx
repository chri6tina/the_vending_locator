import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Stuart, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Stuart, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Stuart Florida, vending business bookkeeping Stuart, tax services vending machines Stuart Florida, vending machine accounting Stuart, tax preparation vending business Stuart",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/stuart-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Stuart, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Stuart, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/stuart-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Stuart, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Stuart, Florida. Get professional help with taxes, accounting, and financial management."
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
