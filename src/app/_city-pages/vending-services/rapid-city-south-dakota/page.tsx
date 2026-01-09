import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rapid City, SD - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rapid City, South Dakota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rapid City, vending machines Rapid City SD, vending operators Rapid City, break room vending Rapid City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rapid-city-south-dakota"
  },
  openGraph: {
    title: "Vending Machine Services in Rapid City, SD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rapid City, South Dakota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rapid-city-south-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rapid City, SD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rapid City, South Dakota business."
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

export default function RapidCitySouthDakotaServicesPage() {
  return <PageClient />
}
