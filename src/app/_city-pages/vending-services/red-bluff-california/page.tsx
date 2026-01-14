import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Red Bluff, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Red Bluff, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Red Bluff, vending machines Red Bluff FL, vending operators Red Bluff, break room vending Red Bluff",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/red-bluff-california"
  },
  openGraph: {
    title: "Vending Machine Services in Red Bluff, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Red Bluff, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/red-bluff-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Red Bluff, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Red Bluff, California business."
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

export default function RedBluffCaliforniaServicesPage() {
  return <PageClient />
}
