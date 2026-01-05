import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Desert, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Desert, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Palm Desert California, vending business bookkeeping Palm Desert, tax services vending machines Palm Desert CALIFORNIA, vending machine accounting Palm Desert, tax preparation vending business Palm Desert",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/palm-desert-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Desert, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Desert, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/palm-desert-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Palm Desert, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Palm Desert, California. Get professional help with taxes, accounting, and financial management."
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
