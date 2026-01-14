import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Clarke Shores, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Clarke Shores, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Clarke Shores, vending machines Lake Clarke Shores FL, vending operators Lake Clarke Shores, break room vending Lake Clarke Shores",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-clarke-shores-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Clarke Shores, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Clarke Shores, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-clarke-shores-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Clarke Shores, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Clarke Shores, Florida business."
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

export default function LakeClarkeShoresFloridaServicesPage() {
  return <PageClient />
}
