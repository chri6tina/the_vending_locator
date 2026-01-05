import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in San Pablo, California - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Pablo, California. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes San Pablo California, vending business bookkeeping San Pablo, tax services vending machines San Pablo California, vending machine accounting San Pablo, tax preparation vending business San Pablo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/san-pablo-california"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Pablo, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Pablo, California. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/san-pablo-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in San Pablo, California - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in San Pablo, California. Get professional help with taxes, accounting, and financial management."
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
