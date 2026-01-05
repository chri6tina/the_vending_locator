import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners throughout California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes California, vending business bookkeeping California, tax services vending machines California, vending machine accounting California, tax preparation vending business California",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners throughout California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners throughout California. Get professional help with taxes, accounting, and financial management."
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

export const revalidate = 3600;

export default function CaliforniaTaxServicesPage() {
  return <PageClient />
}

