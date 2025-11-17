import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in White Plains, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your White Plains, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services White Plains, vending machines White Plains NY, vending operators White Plains, break room vending White Plains",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/white-plains-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in White Plains, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your White Plains, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/white-plains-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in White Plains, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your White Plains, New York business."
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

export default function WhitePlainsNewYorkServicesPage() {
  return <PageClient />
}
