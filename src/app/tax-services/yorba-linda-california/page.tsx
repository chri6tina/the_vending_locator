import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Yorba Linda, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Yorba Linda, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Yorba Linda California, vending business bookkeeping Yorba Linda, tax services vending machines Yorba Linda California, vending machine accounting Yorba Linda, tax preparation vending business Yorba Linda",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/yorba-linda-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Yorba Linda, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Yorba Linda, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/yorba-linda-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Yorba Linda, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Yorba Linda, California. Get professional help with taxes, accounting, and financial management."
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
