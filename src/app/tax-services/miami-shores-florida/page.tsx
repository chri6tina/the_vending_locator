import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Miami Shores, Florida - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Miami Shores, Florida. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Miami Shores Florida, vending business bookkeeping Miami Shores, tax services vending machines Miami Shores FL, vending machine accounting Miami Shores, tax preparation vending business Miami Shores",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/miami-shores-florida"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Miami Shores, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Miami Shores, Florida. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/miami-shores-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Miami Shores, Florida - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Miami Shores, Florida. Get professional help with taxes, accounting, and financial management."
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
