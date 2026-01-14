import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Salamanca, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Salamanca, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Salamanca, vending machines Salamanca FL, vending operators Salamanca, break room vending Salamanca",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/salamanca-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Salamanca, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salamanca, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/salamanca-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Salamanca, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Salamanca, New York business."
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

export default function SalamancaNewYorkServicesPage() {
  return <PageClient />
}
