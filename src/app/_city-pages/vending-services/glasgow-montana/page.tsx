import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Glasgow, MT - Get Free Installation & Service",
  description: "Get professional vending machine services for your Glasgow, Montana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Glasgow, vending machines Glasgow FL, vending operators Glasgow, break room vending Glasgow",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/glasgow-montana"
  },
  openGraph: {
    title: "Vending Machine Services in Glasgow, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glasgow, Montana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/glasgow-montana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Glasgow, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glasgow, Montana business."
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

export default function GlasgowMontanaServicesPage() {
  return <PageClient />
}
