import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Del Rio, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Del Rio, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Del Rio, vending machines Del Rio FL, vending operators Del Rio, break room vending Del Rio",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/del-rio-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Del Rio, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Del Rio, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/del-rio-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Del Rio, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Del Rio, Texas business."
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

export default function DelRioTexasServicesPage() {
  return <PageClient />
}
