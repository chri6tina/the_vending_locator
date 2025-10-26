import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Pompano Beach, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Pompano Beach, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Pompano Beach, vending machines Pompano Beach FL, vending operators Pompano Beach, break room vending Pompano Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/pompano-beach-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Pompano Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pompano Beach, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/pompano-beach-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Pompano Beach, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Pompano Beach, Florida business."
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

export default function PompanoBeachServicesPage() {
  return <PageClient />
}
