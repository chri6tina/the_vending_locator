import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Kansas City, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Kansas City, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Kansas City, vending machines North Kansas City FL, vending operators North Kansas City, break room vending North Kansas City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-kansas-city-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in North Kansas City, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Kansas City, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-kansas-city-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Kansas City, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Kansas City, Missouri business."
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

export default function NorthKansasCityMissouriServicesPage() {
  return <PageClient />
}
