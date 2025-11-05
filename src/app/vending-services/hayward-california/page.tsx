import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hayward, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hayward, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hayward, vending machines Hayward CA, vending operators Hayward, break room vending Hayward",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hayward-california"
  },
  openGraph: {
    title: "Vending Machine Services in Hayward, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hayward, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hayward-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hayward, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hayward, California business."
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

export default function HaywardCaliforniaServicesPage() {
  return <PageClient />
}
