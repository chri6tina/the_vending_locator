import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in League City, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in League City, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes League City Texas, vending business bookkeeping League City, tax services vending machines League City TEXAS, vending machine accounting League City, tax preparation vending business League City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/league-city-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in League City, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in League City, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/league-city-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in League City, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in League City, Texas. Get professional help with taxes, accounting, and financial management."
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
