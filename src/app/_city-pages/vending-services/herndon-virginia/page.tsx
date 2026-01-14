import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Herndon, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Herndon, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Herndon, vending machines Herndon FL, vending operators Herndon, break room vending Herndon",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/herndon-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Herndon, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Herndon, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/herndon-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Herndon, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Herndon, Virginia business."
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

export default function HerndonVirginiaServicesPage() {
  return <PageClient />
}
