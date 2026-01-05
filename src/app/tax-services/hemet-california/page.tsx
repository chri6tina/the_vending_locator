import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Hemet, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Hemet, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Hemet California, vending business bookkeeping Hemet, tax services vending machines Hemet California, vending machine accounting Hemet, tax preparation vending business Hemet",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/hemet-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Hemet, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Hemet, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/hemet-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Hemet, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Hemet, California. Get professional help with taxes, accounting, and financial management."
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
