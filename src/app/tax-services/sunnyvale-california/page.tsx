import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunnyvale, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunnyvale, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Sunnyvale California, vending business bookkeeping Sunnyvale, tax services vending machines Sunnyvale California, vending machine accounting Sunnyvale, tax preparation vending business Sunnyvale",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/sunnyvale-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunnyvale, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunnyvale, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/sunnyvale-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sunnyvale, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sunnyvale, California. Get professional help with taxes, accounting, and financial management."
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
