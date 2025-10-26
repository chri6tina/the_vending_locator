import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Glendale, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Glendale, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Glendale, vending machines Glendale CA, vending operators Glendale, break room vending Glendale",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/glendale-california"
  },
  openGraph: {
    title: "Vending Machine Services in Glendale, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glendale, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/glendale-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Glendale, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glendale, California business."
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

export default function GlendaleCaliforniaServicesPage() {
  return <PageClient />
}
