import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West New York, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your West New York, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West New York, vending machines West New York FL, vending operators West New York, break room vending West New York",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-new-york-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in West New York, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your West New York, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-new-york-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West New York, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your West New York, New Jersey business."
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

export default function WestNewYorkNewJerseyServicesPage() {
  return <PageClient />
}
