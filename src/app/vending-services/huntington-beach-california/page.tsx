import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Huntington Beach, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Huntington Beach, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Huntington Beach, vending machines Huntington Beach CA, vending operators Huntington Beach, break room vending Huntington Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/huntington-beach-california"
  },
  openGraph: {
    title: "Vending Machine Services in Huntington Beach, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Huntington Beach, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/huntington-beach-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Huntington Beach, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Huntington Beach, California business."
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

export default function HuntingtonBeachCaliforniaServicesPage() {
  return <PageClient />
}
