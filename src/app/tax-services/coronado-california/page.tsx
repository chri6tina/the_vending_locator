import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Coronado, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coronado, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Coronado California, vending business bookkeeping Coronado, tax services vending machines Coronado California, vending machine accounting Coronado, tax preparation vending business Coronado",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/coronado-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Coronado, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coronado, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/coronado-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Coronado, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coronado, California. Get professional help with taxes, accounting, and financial management."
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
