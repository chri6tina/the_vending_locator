import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Diamond Bar, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Diamond Bar, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Diamond Bar California, vending business bookkeeping Diamond Bar, tax services vending machines Diamond Bar CALIFORNIA, vending machine accounting Diamond Bar, tax preparation vending business Diamond Bar",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/diamond-bar-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Diamond Bar, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Diamond Bar, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/diamond-bar-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Diamond Bar, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Diamond Bar, California. Get professional help with taxes, accounting, and financial management."
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
