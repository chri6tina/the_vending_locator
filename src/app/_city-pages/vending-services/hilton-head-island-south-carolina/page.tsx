import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hilton Head Island, SC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hilton Head Island, South Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hilton Head Island, vending machines Hilton Head Island SC, vending operators Hilton Head Island, break room vending Hilton Head Island",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hilton-head-island-south-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Hilton Head Island, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hilton Head Island, South Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hilton-head-island-south-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hilton Head Island, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hilton Head Island, South Carolina business."
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

export default function HiltonHeadIslandSouthCarolinaServicesPage() {
  return <PageClient />
}
