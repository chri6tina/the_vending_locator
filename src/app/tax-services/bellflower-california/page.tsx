import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Bellflower, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bellflower, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Bellflower California, vending business bookkeeping Bellflower, tax services vending machines Bellflower California, vending machine accounting Bellflower, tax preparation vending business Bellflower",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/bellflower-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Bellflower, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bellflower, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/bellflower-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Bellflower, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Bellflower, California. Get professional help with taxes, accounting, and financial management."
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
