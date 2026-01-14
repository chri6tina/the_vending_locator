import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Marco Island, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Marco Island, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Marco Island, vending machines Marco Island FL, vending operators Marco Island, break room vending Marco Island",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/marco-island-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Marco Island, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Marco Island, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/marco-island-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Marco Island, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Marco Island, Florida business."
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

export default function MarcoIslandFloridaServicesPage() {
  return <PageClient />
}
