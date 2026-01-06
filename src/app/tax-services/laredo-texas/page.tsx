import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Laredo, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Laredo, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Laredo Texas, vending business bookkeeping Laredo, tax services vending machines Laredo TEXAS, vending machine accounting Laredo, tax preparation vending business Laredo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/laredo-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Laredo, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Laredo, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/laredo-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Laredo, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Laredo, Texas. Get professional help with taxes, accounting, and financial management."
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

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CityPage() {
  return <PageClient />
}
