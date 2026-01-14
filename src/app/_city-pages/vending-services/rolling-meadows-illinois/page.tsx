import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rolling Meadows, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rolling Meadows, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rolling Meadows, vending machines Rolling Meadows FL, vending operators Rolling Meadows, break room vending Rolling Meadows",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rolling-meadows-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Rolling Meadows, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rolling Meadows, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rolling-meadows-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rolling Meadows, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rolling Meadows, Illinois business."
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

export default function RollingMeadowsIllinoisServicesPage() {
  return <PageClient />
}
