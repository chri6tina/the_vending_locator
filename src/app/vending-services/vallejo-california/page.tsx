import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Vallejo, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Vallejo, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Vallejo, vending machines Vallejo CA, vending operators Vallejo, break room vending Vallejo",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/vallejo-california"
  },
  openGraph: {
    title: "Vending Machine Services in Vallejo, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vallejo, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/vallejo-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Vallejo, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vallejo, California business."
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

export default function VallejoCaliforniaServicesPage() {
  return <PageClient />
}
