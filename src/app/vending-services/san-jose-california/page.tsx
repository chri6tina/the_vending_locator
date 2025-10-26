import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Jose, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Jose, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Jose, vending machines San Jose CA, vending operators San Jose, break room vending San Jose",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-jose-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Jose, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Jose, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-jose-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Jose, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Jose, California business."
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

export default function SanJoseCaliforniaServicesPage() {
  return <PageClient />
}
