import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Leesville, LA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Leesville, Louisiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Leesville, vending machines Leesville FL, vending operators Leesville, break room vending Leesville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/leesville-louisiana"
  },
  openGraph: {
    title: "Vending Machine Services in Leesville, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Leesville, Louisiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/leesville-louisiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Leesville, LA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Leesville, Louisiana business."
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

export default function LeesvilleLouisianaServicesPage() {
  return <PageClient />
}
