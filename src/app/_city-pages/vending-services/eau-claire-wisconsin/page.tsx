import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Eau Claire, WI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Eau Claire, Wisconsin business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Eau Claire, vending machines Eau Claire WI, vending operators Eau Claire, break room vending Eau Claire",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/eau-claire-wisconsin"
  },
  openGraph: {
    title: "Vending Machine Services in Eau Claire, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eau Claire, Wisconsin business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/eau-claire-wisconsin",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Eau Claire, WI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Eau Claire, Wisconsin business."
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

export default function EauClaireWisconsinServicesPage() {
  return <PageClient />
}
