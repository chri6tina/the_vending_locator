import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in East Lansing, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your East Lansing, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services East Lansing, vending machines East Lansing FL, vending operators East Lansing, break room vending East Lansing",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/east-lansing-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in East Lansing, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Lansing, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/east-lansing-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in East Lansing, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your East Lansing, Michigan business."
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

export default function EastLansingMichiganServicesPage() {
  return <PageClient />
}
