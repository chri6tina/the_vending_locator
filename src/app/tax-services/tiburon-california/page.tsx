import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Tiburon, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tiburon, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Tiburon California, vending business bookkeeping Tiburon, tax services vending machines Tiburon California, vending machine accounting Tiburon, tax preparation vending business Tiburon",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/tiburon-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Tiburon, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tiburon, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/tiburon-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Tiburon, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tiburon, California. Get professional help with taxes, accounting, and financial management."
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
