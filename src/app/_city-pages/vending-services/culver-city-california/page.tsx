import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Culver City, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Culver City, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Culver City, vending machines Culver City FL, vending operators Culver City, break room vending Culver City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/culver-city-california"
  },
  openGraph: {
    title: "Vending Machine Services in Culver City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Culver City, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/culver-city-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Culver City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Culver City, California business."
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

export default function CulverCityCaliforniaServicesPage() {
  return <PageClient />
}
