import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Augusta, ME - Get Free Installation & Service",
  description: "Get professional vending machine services for your Augusta, Maine business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Augusta, vending machines Augusta ME, vending operators Augusta, break room vending Augusta",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/augusta-maine"
  },
  openGraph: {
    title: "Vending Machine Services in Augusta, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Augusta, Maine business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/augusta-maine",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Augusta, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Augusta, Maine business."
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

export default function AugustaMaineServicesPage() {
  return <PageClient />
}
