import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hollister, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hollister, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hollister, vending machines Hollister FL, vending operators Hollister, break room vending Hollister",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hollister-california"
  },
  openGraph: {
    title: "Vending Machine Services in Hollister, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hollister, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hollister-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hollister, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hollister, California business."
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

export default function HollisterCaliforniaServicesPage() {
  return <PageClient />
}
