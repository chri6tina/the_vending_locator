import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Carson City, NV - Get Free Installation & Service",
  description: "Get professional vending machine services for your Carson City, Nevada business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Carson City, vending machines Carson City NV, vending operators Carson City, break room vending Carson City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/carson-city-nevada"
  },
  openGraph: {
    title: "Vending Machine Services in Carson City, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carson City, Nevada business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/carson-city-nevada",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Carson City, NV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Carson City, Nevada business."
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

export default function CarsonCityNevadaServicesPage() {
  return <PageClient />
}
