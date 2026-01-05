import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in South Gate, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in South Gate, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes South Gate California, vending business bookkeeping South Gate, tax services vending machines South Gate California, vending machine accounting South Gate, tax preparation vending business South Gate",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/south-gate-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in South Gate, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in South Gate, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/south-gate-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in South Gate, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in South Gate, California. Get professional help with taxes, accounting, and financial management."
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
