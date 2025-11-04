import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Clarita, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Clarita, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Clarita, vending machines Santa Clarita CA, vending operators Santa Clarita, break room vending Santa Clarita",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-clarita-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Clarita, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Clarita, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-clarita-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Clarita, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Clarita, California business."
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

export default function SantaClaritaCaliforniaServicesPage() {
  return <PageClient />
}
