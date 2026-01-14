import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bettendorf, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bettendorf, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bettendorf, vending machines Bettendorf FL, vending operators Bettendorf, break room vending Bettendorf",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bettendorf-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Bettendorf, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bettendorf, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bettendorf-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bettendorf, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bettendorf, Iowa business."
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

export default function BettendorfIowaServicesPage() {
  return <PageClient />
}
