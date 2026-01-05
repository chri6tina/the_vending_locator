import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in El Monte, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in El Monte, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes El Monte California, vending business bookkeeping El Monte, tax services vending machines El Monte CALIFORNIA, vending machine accounting El Monte, tax preparation vending business El Monte",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/el-monte-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in El Monte, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in El Monte, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/el-monte-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in El Monte, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in El Monte, California. Get professional help with taxes, accounting, and financial management."
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
