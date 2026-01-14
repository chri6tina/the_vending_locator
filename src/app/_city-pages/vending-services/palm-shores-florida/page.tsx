import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Palm Shores, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Palm Shores, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Palm Shores, vending machines Palm Shores FL, vending operators Palm Shores, break room vending Palm Shores",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/palm-shores-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Palm Shores, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Palm Shores, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/palm-shores-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Palm Shores, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Palm Shores, Florida business."
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

export default function PalmShoresFloridaServicesPage() {
  return <PageClient />
}
