import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Phenix City, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Phenix City, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Phenix City, vending machines Phenix City FL, vending operators Phenix City, break room vending Phenix City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/phenix-city-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Phenix City, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Phenix City, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/phenix-city-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Phenix City, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Phenix City, Alabama business."
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

export default function PhenixCityAlabamaServicesPage() {
  return <PageClient />
}
