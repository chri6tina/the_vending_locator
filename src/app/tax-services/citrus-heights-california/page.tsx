import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Citrus Heights, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Citrus Heights, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Citrus Heights California, vending business bookkeeping Citrus Heights, tax services vending machines Citrus Heights California, vending machine accounting Citrus Heights, tax preparation vending business Citrus Heights",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/citrus-heights-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Citrus Heights, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Citrus Heights, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/citrus-heights-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Citrus Heights, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Citrus Heights, California. Get professional help with taxes, accounting, and financial management."
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
