import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rancho Palos Verdes, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rancho Palos Verdes, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rancho Palos Verdes, vending machines Rancho Palos Verdes FL, vending operators Rancho Palos Verdes, break room vending Rancho Palos Verdes",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rancho-palos-verdes-california"
  },
  openGraph: {
    title: "Vending Machine Services in Rancho Palos Verdes, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rancho Palos Verdes, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rancho-palos-verdes-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rancho Palos Verdes, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rancho Palos Verdes, California business."
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

export default function RanchoPalosVerdesCaliforniaServicesPage() {
  return <PageClient />
}
