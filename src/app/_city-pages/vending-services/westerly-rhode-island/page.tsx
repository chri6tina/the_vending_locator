import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Westerly, RI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Westerly, Rhode Island business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Westerly, vending machines Westerly FL, vending operators Westerly, break room vending Westerly",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/westerly-rhode-island"
  },
  openGraph: {
    title: "Vending Machine Services in Westerly, RI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Westerly, Rhode Island business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/westerly-rhode-island",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Westerly, RI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Westerly, Rhode Island business."
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

export default function WesterlyRhodeIslandServicesPage() {
  return <PageClient />
}
