import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Key Largo, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Key Largo, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Key Largo Florida, vending business bookkeeping Key Largo, tax services vending machines Key Largo FL, vending machine accounting Key Largo, tax preparation vending business Key Largo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/key-largo-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Key Largo, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Key Largo, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/key-largo-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Key Largo, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Key Largo, Florida. Get professional help with taxes, accounting, and financial management."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
    }
}

// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;


// Generate on-demand to reduce build memory usage
export default function CityPage() {
  return <PageClient />
}
