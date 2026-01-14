import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Muscatine, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Muscatine, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Muscatine, vending machines Muscatine FL, vending operators Muscatine, break room vending Muscatine",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/muscatine-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Muscatine, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Muscatine, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/muscatine-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Muscatine, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Muscatine, Iowa business."
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

export default function MuscatineIowaServicesPage() {
  return <PageClient />
}
