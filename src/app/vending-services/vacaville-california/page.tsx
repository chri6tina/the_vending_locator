import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Vacaville, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Vacaville, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Vacaville, vending machines Vacaville CA, vending operators Vacaville, break room vending Vacaville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/vacaville-california"
  },
  openGraph: {
    title: "Vending Machine Services in Vacaville, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vacaville, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/vacaville-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Vacaville, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vacaville, California business."
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

export default function VacavilleCaliforniaServicesPage() {
  return <PageClient />
}
