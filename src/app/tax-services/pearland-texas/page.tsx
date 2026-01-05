import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Pearland, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pearland, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Pearland Texas, vending business bookkeeping Pearland, tax services vending machines Pearland Texas, vending machine accounting Pearland, tax preparation vending business Pearland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/pearland-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pearland, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pearland, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/pearland-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Pearland, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Pearland, Texas. Get professional help with taxes, accounting, and financial management."
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
