import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in North Miami, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in North Miami, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes North Miami Florida, vending business bookkeeping North Miami, tax services vending machines North Miami FLORIDA, vending machine accounting North Miami, tax preparation vending business North Miami",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/north-miami-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in North Miami, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in North Miami, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/north-miami-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in North Miami, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in North Miami, Florida. Get professional help with taxes, accounting, and financial management."
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
