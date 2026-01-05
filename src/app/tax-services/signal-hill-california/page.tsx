import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Signal Hill, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Signal Hill, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Signal Hill California, vending business bookkeeping Signal Hill, tax services vending machines Signal Hill California, vending machine accounting Signal Hill, tax preparation vending business Signal Hill",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/signal-hill-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Signal Hill, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Signal Hill, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/signal-hill-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Signal Hill, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Signal Hill, California. Get professional help with taxes, accounting, and financial management."
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
