import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in San Fernando, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Fernando, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes San Fernando California, vending business bookkeeping San Fernando, tax services vending machines San Fernando CALIFORNIA, vending machine accounting San Fernando, tax preparation vending business San Fernando",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/san-fernando-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Fernando, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Fernando, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/san-fernando-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Fernando, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Fernando, California. Get professional help with taxes, accounting, and financial management."
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
