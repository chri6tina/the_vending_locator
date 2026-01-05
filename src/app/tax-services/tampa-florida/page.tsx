import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Tampa, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tampa, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Tampa Florida, vending business bookkeeping Tampa, tax services vending machines Tampa Florida, vending machine accounting Tampa, tax preparation vending business Tampa",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/tampa-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Tampa, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tampa, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/tampa-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Tampa, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Tampa, Florida. Get professional help with taxes, accounting, and financial management."
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
