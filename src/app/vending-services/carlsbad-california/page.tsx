import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carlsbad, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carlsbad, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carlsbad, vending machines Carlsbad CA, vending operators Carlsbad, break room vending Carlsbad",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carlsbad-california"
  },
  openGraph: {
    title: "Vending Machine Services in Carlsbad, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carlsbad, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carlsbad-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carlsbad, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carlsbad, California business."
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

export default function CarlsbadCaliforniaServicesPage() {
  return <PageClient />
}
