import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South Sioux City, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your South Sioux City, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services South Sioux City, vending machines South Sioux City FL, vending operators South Sioux City, break room vending South Sioux City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-sioux-city-nebraska"
  },
  openGraph: {
    title: "Vending Machine Services in South Sioux City, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Sioux City, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/south-sioux-city-nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South Sioux City, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Sioux City, Nebraska business."
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

export default function SouthSiouxCityNebraskaServicesPage() {
  return <PageClient />
}
