import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in St. Charles, MT - Get Free Installation & Service",
  description: "Get professional vending machine services for your St. Charles, Montana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services St. Charles, vending machines St. Charles FL, vending operators St. Charles, break room vending St. Charles",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/st-charles-missouri"
  },
  openGraph: {
    title: "Vending Machine Services in St. Charles, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Charles, Montana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/st-charles-missouri",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in St. Charles, MT - Get Free Installation & Service",
    description: "Get professional vending machine services for your St. Charles, Montana business."
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

export default function StCharlesMontanaServicesPage() {
  return <PageClient />
}
