import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Columbia City, IN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Columbia City, Indiana business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Columbia City, vending machines Columbia City FL, vending operators Columbia City, break room vending Columbia City",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/columbia-city-indiana"
  },
  openGraph: {
    title: "Vending Machine Services in Columbia City, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbia City, Indiana business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/columbia-city-indiana",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Columbia City, IN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Columbia City, Indiana business."
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

export default function ColumbiaCityIndianaServicesPage() {
  return <PageClient />
}
