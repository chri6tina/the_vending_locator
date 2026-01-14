import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Havasu City, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Havasu City, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Havasu City, vending machines Lake Havasu City FL, vending operators Lake Havasu City, break room vending Lake Havasu City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-havasu-city-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Havasu City, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Havasu City, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-havasu-city-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Havasu City, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Havasu City, Arizona business."
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

export default function LakeHavasuCityArizonaServicesPage() {
  return <PageClient />
}
