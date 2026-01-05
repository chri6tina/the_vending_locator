import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Margate, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Margate, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Margate Florida, vending business bookkeeping Margate, tax services vending machines Margate Florida, vending machine accounting Margate, tax preparation vending business Margate",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/margate-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Margate, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Margate, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/margate-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Margate, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Margate, Florida. Get professional help with taxes, accounting, and financial management."
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
