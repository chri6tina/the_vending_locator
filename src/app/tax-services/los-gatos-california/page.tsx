import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Los Gatos, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Los Gatos, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Los Gatos California, vending business bookkeeping Los Gatos, tax services vending machines Los Gatos CALIFORNIA, vending machine accounting Los Gatos, tax preparation vending business Los Gatos",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/los-gatos-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Los Gatos, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Los Gatos, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/los-gatos-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Los Gatos, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Los Gatos, California. Get professional help with taxes, accounting, and financial management."
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
