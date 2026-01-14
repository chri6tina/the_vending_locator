import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Garden City, KS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Garden City, Kansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Garden City, vending machines Garden City FL, vending operators Garden City, break room vending Garden City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/garden-city-kansas"
  },
  openGraph: {
    title: "Vending Machine Services in Garden City, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Garden City, Kansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/garden-city-kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Garden City, KS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Garden City, Kansas business."
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

export default function GardenCityKansasServicesPage() {
  return <PageClient />
}
