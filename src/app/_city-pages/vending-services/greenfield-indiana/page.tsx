import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Greenfield, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Greenfield, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Greenfield, vending machines Greenfield FL, vending operators Greenfield, break room vending Greenfield",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/greenfield-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Greenfield, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Greenfield, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/greenfield-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Greenfield, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Greenfield, Indiana business."
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

export default function GreenfieldIndianaServicesPage() {
  return <PageClient />
}
