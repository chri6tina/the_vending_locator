import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Irving, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Irving, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Irving Texas, vending business bookkeeping Irving, tax services vending machines Irving Texas, vending machine accounting Irving, tax preparation vending business Irving",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/irving-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Irving, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Irving, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/irving-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Irving, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Irving, Texas. Get professional help with taxes, accounting, and financial management."
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
