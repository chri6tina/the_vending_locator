import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Bedford, MA - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Bedford, Massachusetts business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Bedford, vending machines New Bedford MA, vending operators New Bedford, break room vending New Bedford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-bedford-massachusetts"
  },
  openGraph: {
    title: "Vending Machine Services in New Bedford, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Bedford, Massachusetts business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-bedford-massachusetts",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Bedford, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Bedford, Massachusetts business."
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

export default function BocaRatonMassachusettsServicesPage() {
  return <PageClient />
}
