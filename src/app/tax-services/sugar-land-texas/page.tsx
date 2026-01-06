import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Sugar Land, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sugar Land, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Sugar Land Texas, vending business bookkeeping Sugar Land, tax services vending machines Sugar Land TEXAS, vending machine accounting Sugar Land, tax preparation vending business Sugar Land",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/sugar-land-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sugar Land, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sugar Land, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/sugar-land-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Sugar Land, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Sugar Land, Texas. Get professional help with taxes, accounting, and financial management."
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
