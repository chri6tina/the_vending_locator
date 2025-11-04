import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Daly City, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Daly City, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Daly City, vending machines Daly City CA, vending operators Daly City, break room vending Daly City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/daly-city-california"
  },
  openGraph: {
    title: "Vending Machine Services in Daly City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Daly City, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/daly-city-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Daly City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Daly City, California business."
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

export default function DalyCityCaliforniaServicesPage() {
  return <PageClient />
}
