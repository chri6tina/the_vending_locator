import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Maitland, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Maitland, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Maitland, vending machines Maitland FL, vending operators Maitland, break room vending Maitland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/maitland-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Maitland, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Maitland, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/maitland-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Maitland, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Maitland, Florida business."
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

export default function MaitlandFloridaServicesPage() {
  return <PageClient />
}
