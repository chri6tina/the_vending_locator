import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Goshen, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Goshen, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Goshen, vending machines Goshen FL, vending operators Goshen, break room vending Goshen",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/goshen-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Goshen, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Goshen, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/goshen-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Goshen, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Goshen, Indiana business."
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

export default function GoshenIndianaServicesPage() {
  return <PageClient />
}
