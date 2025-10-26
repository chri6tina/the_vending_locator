import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sarasota, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sarasota, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sarasota, vending machines Sarasota FL, vending operators Sarasota, break room vending Sarasota",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sarasota-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Sarasota, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sarasota, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sarasota-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sarasota, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sarasota, Florida business."
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

export default function SarasotaServicesPage() {
  return <PageClient />
}
