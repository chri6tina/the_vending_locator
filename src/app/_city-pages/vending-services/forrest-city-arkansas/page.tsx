import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Forrest City, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Forrest City, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Forrest City, vending machines Forrest City FL, vending operators Forrest City, break room vending Forrest City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/forrest-city-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Forrest City, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Forrest City, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/forrest-city-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Forrest City, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Forrest City, Arkansas business."
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

export default function ForrestCityArkansasServicesPage() {
  return <PageClient />
}
