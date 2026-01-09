import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kentwood, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kentwood, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kentwood, vending machines Kentwood MI, vending operators Kentwood, break room vending Kentwood",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kentwood-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Kentwood, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kentwood, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kentwood-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kentwood, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kentwood, Michigan business."
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

export default function KentwoodMichiganServicesPage() {
  return <PageClient />
}
