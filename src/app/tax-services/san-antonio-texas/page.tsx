import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in San Antonio, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Antonio, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes San Antonio Texas, vending business bookkeeping San Antonio, tax services vending machines San Antonio Texas, vending machine accounting San Antonio, tax preparation vending business San Antonio",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/san-antonio-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Antonio, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Antonio, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/san-antonio-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Antonio, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Antonio, Texas. Get professional help with taxes, accounting, and financial management."
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
