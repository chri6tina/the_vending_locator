import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Selma, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Selma, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Selma California, vending business bookkeeping Selma, tax services vending machines Selma California, vending machine accounting Selma, tax preparation vending business Selma",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/selma-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Selma, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Selma, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/selma-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Selma, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Selma, California. Get professional help with taxes, accounting, and financial management."
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
