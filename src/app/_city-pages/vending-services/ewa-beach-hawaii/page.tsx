import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Ewa Beach, HI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Ewa Beach, Hawaii business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Ewa Beach, vending machines Ewa Beach FL, vending operators Ewa Beach, break room vending Ewa Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/ewa-beach-hawaii"
  },
  openGraph: {
    title: "Vending Machine Services in Ewa Beach, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ewa Beach, Hawaii business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/ewa-beach-hawaii",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Ewa Beach, HI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ewa Beach, Hawaii business."
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

export default function EwaBeachHawaiiServicesPage() {
  return <PageClient />
}
