import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Coral Springs, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coral Springs, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Coral Springs Florida, vending business bookkeeping Coral Springs, tax services vending machines Coral Springs Florida, vending machine accounting Coral Springs, tax preparation vending business Coral Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/coral-springs-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Coral Springs, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coral Springs, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/coral-springs-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Coral Springs, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Coral Springs, Florida. Get professional help with taxes, accounting, and financial management."
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
