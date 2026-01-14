import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Tomball, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Tomball, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Tomball, vending machines Tomball FL, vending operators Tomball, break room vending Tomball",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/tomball-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Tomball, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tomball, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/tomball-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Tomball, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Tomball, Texas business."
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

export default function TomballTexasServicesPage() {
  return <PageClient />
}
