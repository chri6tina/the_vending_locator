import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Bay, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Bay, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Palm Bay Florida, vending business bookkeeping Palm Bay, tax services vending machines Palm Bay Florida, vending machine accounting Palm Bay, tax preparation vending business Palm Bay",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/palm-bay-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Bay, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Bay, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/palm-bay-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Bay, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Bay, Florida. Get professional help with taxes, accounting, and financial management."
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
