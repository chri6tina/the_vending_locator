import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in College Station, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in College Station, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes College Station Texas, vending business bookkeeping College Station, tax services vending machines College Station Texas, vending machine accounting College Station, tax preparation vending business College Station",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/college-station-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in College Station, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in College Station, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/college-station-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in College Station, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in College Station, Texas. Get professional help with taxes, accounting, and financial management."
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
