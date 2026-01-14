import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lauderdale-by-the-Sea, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lauderdale-by-the-Sea, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lauderdale-by-the-Sea, vending machines Lauderdale-by-the-Sea FL, vending operators Lauderdale-by-the-Sea, break room vending Lauderdale-by-the-Sea",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lauderdale-by-the-sea-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Lauderdale-by-the-Sea, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lauderdale-by-the-Sea, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lauderdale-by-the-sea-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lauderdale-by-the-Sea, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lauderdale-by-the-Sea, Florida business."
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

export default function LauderdalebytheSeaFloridaServicesPage() {
  return <PageClient />
}
