import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Oil City, PA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Oil City, Pennsylvania business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Oil City, vending machines Oil City FL, vending operators Oil City, break room vending Oil City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/oil-city-pennsylvania"
  },
  openGraph: {
    title: "Vending Machine Services in Oil City, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Oil City, Pennsylvania business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/oil-city-pennsylvania",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Oil City, PA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Oil City, Pennsylvania business."
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

export default function OilCityPennsylvaniaServicesPage() {
  return <PageClient />
}
