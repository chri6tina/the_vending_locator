import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in La Quinta, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in La Quinta, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes La Quinta California, vending business bookkeeping La Quinta, tax services vending machines La Quinta California, vending machine accounting La Quinta, tax preparation vending business La Quinta",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/la-quinta-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in La Quinta, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in La Quinta, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/la-quinta-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in La Quinta, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in La Quinta, California. Get professional help with taxes, accounting, and financial management."
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
