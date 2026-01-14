import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Morro Bay, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Morro Bay, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Morro Bay, vending machines Morro Bay FL, vending operators Morro Bay, break room vending Morro Bay",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/morro-bay-california"
  },
  openGraph: {
    title: "Vending Machine Services in Morro Bay, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morro Bay, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/morro-bay-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Morro Bay, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morro Bay, California business."
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

export default function MorroBayCaliforniaServicesPage() {
  return <PageClient />
}
