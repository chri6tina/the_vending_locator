import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners - Find Professional Help",
  description: "Expert tax preparation and bookkeeping services designed specifically for vending machine business owners. Get help with your taxes, accounting, and financial management.",
  keywords: "vending machine taxes, vending business bookkeeping, tax services vending machines, vending machine accounting, tax preparation vending business",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners - Find Professional Help",
    description: "Expert tax preparation and bookkeeping services designed specifically for vending machine business owners. Get help with your taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners - Find Professional Help",
    description: "Expert tax preparation and bookkeeping services designed specifically for vending machine business owners. Get help with your taxes, accounting, and financial management."
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



// Generate on-demand to reduce build memory usage
export default function Page() {
  return <PageClient />
}


