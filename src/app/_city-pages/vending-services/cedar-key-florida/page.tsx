import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cedar Key, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cedar Key, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cedar Key, vending machines Cedar Key FL, vending operators Cedar Key, break room vending Cedar Key",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cedar-key-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Cedar Key, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cedar Key, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cedar-key-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cedar Key, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cedar Key, Florida business."
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

export default function CedarKeyFloridaServicesPage() {
  return <PageClient />
}
