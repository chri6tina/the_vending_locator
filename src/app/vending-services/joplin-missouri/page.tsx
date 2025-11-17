import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Joplin, MO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Joplin, Missouri business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Joplin, vending machines Joplin MO, vending operators Joplin, break room vending Joplin",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/joplin-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in Joplin, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Joplin, Missouri business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/joplin-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Joplin, MO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Joplin, Missouri business."
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

export default function BocaRatonMissouriServicesPage() {
  return <PageClient />
}
