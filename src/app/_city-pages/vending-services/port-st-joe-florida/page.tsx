import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Port St. Joe, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Port St. Joe, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Port St. Joe, vending machines Port St. Joe FL, vending operators Port St. Joe, break room vending Port St. Joe",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/port-st-joe-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Port St. Joe, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port St. Joe, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/port-st-joe-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Port St. Joe, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port St. Joe, Florida business."
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

export default function PortStJoeFloridaServicesPage() {
  return <PageClient />
}
