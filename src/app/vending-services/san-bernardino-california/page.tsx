import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Bernardino, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Bernardino, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Bernardino, vending machines San Bernardino CA, vending operators San Bernardino, break room vending San Bernardino",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-bernardino-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Bernardino, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Bernardino, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-bernardino-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Bernardino, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Bernardino, California business."
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

export default function SanBernardinoCaliforniaServicesPage() {
  return <PageClient />
}
