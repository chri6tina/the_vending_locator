import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Magnolia, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Magnolia, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Magnolia, vending machines Magnolia FL, vending operators Magnolia, break room vending Magnolia",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/magnolia-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in Magnolia, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Magnolia, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/magnolia-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Magnolia, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Magnolia, Arkansas business."
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

export default function MagnoliaArkansasServicesPage() {
  return <PageClient />
}
