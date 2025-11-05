import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Gresham, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Gresham, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Gresham, vending machines Gresham OR, vending operators Gresham, break room vending Gresham",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/gresham-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in Gresham, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gresham, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/gresham-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Gresham, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Gresham, Oregon business."
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

export default function GreshamOregonServicesPage() {
  return <PageClient />
}
