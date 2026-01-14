import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Weed, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Weed, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Weed, vending machines Weed FL, vending operators Weed, break room vending Weed",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/weed-california"
  },
  openGraph: {
    title: "Vending Machine Services in Weed, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Weed, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/weed-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Weed, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Weed, California business."
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

export default function WeedCaliforniaServicesPage() {
  return <PageClient />
}
