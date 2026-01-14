import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bay City, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bay City, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bay City, vending machines Bay City FL, vending operators Bay City, break room vending Bay City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bay-city-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Bay City, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bay City, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bay-city-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bay City, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bay City, Michigan business."
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

export default function BayCityMichiganServicesPage() {
  return <PageClient />
}
