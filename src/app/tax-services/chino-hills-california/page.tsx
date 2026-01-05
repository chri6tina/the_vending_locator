import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Chino Hills, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Chino Hills, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Chino Hills California, vending business bookkeeping Chino Hills, tax services vending machines Chino Hills California, vending machine accounting Chino Hills, tax preparation vending business Chino Hills",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/chino-hills-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Chino Hills, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Chino Hills, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/chino-hills-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Chino Hills, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Chino Hills, California. Get professional help with taxes, accounting, and financial management."
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
