import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Tax & Bookkeeping Services for Vending Machine Owners in Round Rock, Texas - The Vending Locator",
  description: "Expert tax preparation and bookkeeping services for vending machine business owners in Round Rock, Texas. Get professional help with taxes, accounting, and financial management.",
  keywords: "vending machine taxes Round Rock Texas, vending business bookkeeping Round Rock, tax services vending machines Round Rock Texas, vending machine accounting Round Rock, tax preparation vending business Round Rock",
  alternates: {
    canonical: "https://www.thevendinglocator.com/tax-services/round-rock-texas"
  },
  openGraph: {
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Round Rock, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Round Rock, Texas. Get professional help with taxes, accounting, and financial management.",
    url: "https://www.thevendinglocator.com/tax-services/round-rock-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Bookkeeping Services for Vending Machine Owners in Round Rock, Texas - The Vending Locator",
    description: "Expert tax preparation and bookkeeping services for vending machine business owners in Round Rock, Texas. Get professional help with taxes, accounting, and financial management."
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
