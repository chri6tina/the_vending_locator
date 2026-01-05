import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Rancho Cucamonga, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Rancho Cucamonga, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Rancho Cucamonga California, vending business bookkeeping Rancho Cucamonga, tax services vending machines Rancho Cucamonga California, vending machine accounting Rancho Cucamonga, tax preparation vending business Rancho Cucamonga",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/rancho-cucamonga-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Rancho Cucamonga, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Rancho Cucamonga, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/rancho-cucamonga-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Rancho Cucamonga, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Rancho Cucamonga, California. Get professional help with taxes, accounting, and financial management."
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
