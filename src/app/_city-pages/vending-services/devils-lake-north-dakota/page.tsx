import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Devils Lake, ND - Get Free Installation & Service",
  description: "Get professional vending machine services for your Devils Lake, North Dakota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Devils Lake, vending machines Devils Lake FL, vending operators Devils Lake, break room vending Devils Lake",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/devils-lake-north-dakota"
  },
  openGraph: {
    title: "Vending Machine Services in Devils Lake, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Devils Lake, North Dakota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/devils-lake-north-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Devils Lake, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Devils Lake, North Dakota business."
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

export default function DevilsLakeNorthDakotaServicesPage() {
  return <PageClient />
}
