import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Rosa, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Rosa, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Rosa, vending machines Santa Rosa CA, vending operators Santa Rosa, break room vending Santa Rosa",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-rosa-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Rosa, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Rosa, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-rosa-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Rosa, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Rosa, California business."
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

export default function SantaRosaCaliforniaServicesPage() {
  return <PageClient />
}
