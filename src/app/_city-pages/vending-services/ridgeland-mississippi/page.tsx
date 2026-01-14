import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Ridgeland, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Ridgeland, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Ridgeland, vending machines Ridgeland FL, vending operators Ridgeland, break room vending Ridgeland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/ridgeland-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Ridgeland, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ridgeland, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/ridgeland-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Ridgeland, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ridgeland, Mississippi business."
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

export default function RidgelandMississippiServicesPage() {
  return <PageClient />
}
