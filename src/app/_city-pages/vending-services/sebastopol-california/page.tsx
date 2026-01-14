import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sebastopol, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sebastopol, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sebastopol, vending machines Sebastopol FL, vending operators Sebastopol, break room vending Sebastopol",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sebastopol-california"
  },
  openGraph: {
    title: "Vending Machine Services in Sebastopol, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sebastopol, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sebastopol-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sebastopol, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sebastopol, California business."
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

export default function SebastopolCaliforniaServicesPage() {
  return <PageClient />
}
