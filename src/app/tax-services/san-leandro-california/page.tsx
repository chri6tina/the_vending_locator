import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in San Leandro, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Leandro, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes San Leandro California, vending business bookkeeping San Leandro, tax services vending machines San Leandro California, vending machine accounting San Leandro, tax preparation vending business San Leandro",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/san-leandro-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Leandro, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Leandro, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/san-leandro-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Leandro, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Leandro, California. Get professional help with taxes, accounting, and financial management."
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
