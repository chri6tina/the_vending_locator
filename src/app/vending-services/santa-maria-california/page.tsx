import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Maria, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Maria, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Maria, vending machines Santa Maria CA, vending operators Santa Maria, break room vending Santa Maria",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-maria-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Maria, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Maria, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-maria-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Maria, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Maria, California business."
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

export default function SantaMariaCaliforniaServicesPage() {
  return <PageClient />
}
