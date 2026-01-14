import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mason City, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mason City, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mason City, vending machines Mason City FL, vending operators Mason City, break room vending Mason City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mason-city-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Mason City, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mason City, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mason-city-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mason City, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mason City, Iowa business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MasonCityIowaServicesPage() {
  return <PageClient />
}
