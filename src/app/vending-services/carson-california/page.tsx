import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carson, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carson, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carson, vending machines Carson CA, vending operators Carson, break room vending Carson",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carson-california"
  },
  openGraph: {
    title: "Vending Machine Services in Carson, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carson, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carson-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carson, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carson, California business."
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

export default function CarsonCaliforniaServicesPage() {
  return <PageClient />
}
