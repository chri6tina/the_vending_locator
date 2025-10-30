import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New York City, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your New York City, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New York City, vending machines New York City NY, vending operators New York City, break room vending New York City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-york-city-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in New York City, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your New York City, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-york-city-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New York City, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your New York City, New York business."
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

export default function NewYorkCityNewYorkServicesPage() {
  return <PageClient />
}
