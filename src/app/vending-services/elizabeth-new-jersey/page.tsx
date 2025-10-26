import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elizabeth, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elizabeth, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elizabeth, vending machines Elizabeth NJ, vending operators Elizabeth, break room vending Elizabeth",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elizabeth-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in Elizabeth, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elizabeth, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elizabeth-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elizabeth, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elizabeth, New Jersey business."
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

export default function ElizabethNewJerseyServicesPage() {
  return <PageClient />
}
