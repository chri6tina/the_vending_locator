import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Redmond, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Redmond, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Redmond, vending machines Redmond FL, vending operators Redmond, break room vending Redmond",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/redmond-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Redmond, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Redmond, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/redmond-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Redmond, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Redmond, Washington business."
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

export default function RedmondWashingtonServicesPage() {
  return <PageClient />
}
