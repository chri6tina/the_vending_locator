import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Companies Directory | Find Vendors by Location",
  description: "Find verified vending machine companies across the United States. Browse our directory of professional vendors by city and state. Connect with reliable operators for your business.",
  keywords: "vending machine companies, vending companies directory, find vending vendors, vending operators by location",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-companies"
  },
  openGraph: {
    title: "Vending Machine Companies Directory | Find Vendors by Location",
    description: "Find verified vending machine companies across the United States. Browse our directory of professional vendors.",
    url: "https://www.thevendinglocator.com/vending-companies",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Companies Directory",
    description: "Find verified vending machine companies across the United States."
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

export default function VendingCompaniesDirectoryPage() {
  return <PageClient />
}
