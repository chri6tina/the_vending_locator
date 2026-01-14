import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Apple Valley, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Apple Valley, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Apple Valley, vending machines Apple Valley FL, vending operators Apple Valley, break room vending Apple Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/apple-valley-california"
  },
  openGraph: {
    title: "Vending Machine Services in Apple Valley, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Apple Valley, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/apple-valley-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Apple Valley, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Apple Valley, California business."
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

export default function AppleValleyCaliforniaServicesPage() {
  return <PageClient />
}
