import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Hanover Park, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Hanover Park, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Hanover Park, vending machines Hanover Park FL, vending operators Hanover Park, break room vending Hanover Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/hanover-park-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Hanover Park, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hanover Park, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/hanover-park-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Hanover Park, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Hanover Park, Illinois business."
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

export default function HanoverParkIllinoisServicesPage() {
  return <PageClient />
}
