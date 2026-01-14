import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Strongsville, OH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Strongsville, Ohio business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Strongsville, vending machines Strongsville FL, vending operators Strongsville, break room vending Strongsville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/strongsville-ohio"
  },
  openGraph: {
    title: "Vending Machine Services in Strongsville, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Strongsville, Ohio business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/strongsville-ohio",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Strongsville, OH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Strongsville, Ohio business."
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

export default function StrongsvilleOhioServicesPage() {
  return <PageClient />
}
