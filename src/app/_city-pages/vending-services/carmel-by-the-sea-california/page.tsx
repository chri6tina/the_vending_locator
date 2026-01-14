import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carmel-by-the-Sea, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carmel-by-the-Sea, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carmel-by-the-Sea, vending machines Carmel-by-the-Sea FL, vending operators Carmel-by-the-Sea, break room vending Carmel-by-the-Sea",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carmel-by-the-sea-california"
  },
  openGraph: {
    title: "Vending Machine Services in Carmel-by-the-Sea, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carmel-by-the-Sea, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carmel-by-the-sea-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carmel-by-the-Sea, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carmel-by-the-Sea, California business."
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

export default function CarmelbytheSeaCaliforniaServicesPage() {
  return <PageClient />
}
