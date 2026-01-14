import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rohnert Park, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rohnert Park, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rohnert Park, vending machines Rohnert Park FL, vending operators Rohnert Park, break room vending Rohnert Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rohnert-park-california"
  },
  openGraph: {
    title: "Vending Machine Services in Rohnert Park, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rohnert Park, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rohnert-park-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rohnert Park, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rohnert Park, California business."
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

export default function RohnertParkCaliforniaServicesPage() {
  return <PageClient />
}
