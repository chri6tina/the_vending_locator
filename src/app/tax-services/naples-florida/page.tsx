import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Naples, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Naples, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Naples Florida, vending business bookkeeping Naples, tax services vending machines Naples Florida, vending machine accounting Naples, tax preparation vending business Naples",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/naples-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Naples, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Naples, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/naples-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Naples, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Naples, Florida. Get professional help with taxes, accounting, and financial management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
