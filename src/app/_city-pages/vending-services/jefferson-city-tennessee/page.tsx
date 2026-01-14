import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Jefferson City, TN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Jefferson City, Tennessee business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Jefferson City, vending machines Jefferson City FL, vending operators Jefferson City, break room vending Jefferson City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/jefferson-city-tennessee"
  },
  openGraph: {
    title: "Vending Machine Services in Jefferson City, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jefferson City, Tennessee business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/jefferson-city-tennessee",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Jefferson City, TN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jefferson City, Tennessee business."
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

export default function JeffersonCityTennesseeServicesPage() {
  return <PageClient />
}
