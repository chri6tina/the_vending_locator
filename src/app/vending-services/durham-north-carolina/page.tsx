import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Durham, NC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Durham, North Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Durham, vending machines Durham NC, vending operators Durham, break room vending Durham",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/durham-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Durham, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Durham, North Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/durham-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Durham, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Durham, North Carolina business."
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

export default function DurhamNorthCarolinaServicesPage() {
  return <PageClient />
}
