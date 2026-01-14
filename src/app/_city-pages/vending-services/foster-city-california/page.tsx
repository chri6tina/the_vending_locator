import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Foster City, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Foster City, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Foster City, vending machines Foster City FL, vending operators Foster City, break room vending Foster City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/foster-city-california"
  },
  openGraph: {
    title: "Vending Machine Services in Foster City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Foster City, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/foster-city-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Foster City, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Foster City, California business."
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

export default function FosterCityCaliforniaServicesPage() {
  return <PageClient />
}
