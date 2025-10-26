import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Los Angeles, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Los Angeles, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Los Angeles, vending machines Los Angeles CA, vending operators Los Angeles, break room vending Los Angeles",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/los-angeles-california"
  },
  openGraph: {
    title: "Vending Machine Services in Los Angeles, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Los Angeles, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/los-angeles-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Los Angeles, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Los Angeles, California business."
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

export default function LosAngelesCaliforniaServicesPage() {
  return <PageClient />
}
