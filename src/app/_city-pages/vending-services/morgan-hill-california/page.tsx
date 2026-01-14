import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Morgan Hill, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Morgan Hill, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Morgan Hill, vending machines Morgan Hill FL, vending operators Morgan Hill, break room vending Morgan Hill",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/morgan-hill-california"
  },
  openGraph: {
    title: "Vending Machine Services in Morgan Hill, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morgan Hill, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/morgan-hill-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Morgan Hill, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morgan Hill, California business."
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

export default function MorganHillCaliforniaServicesPage() {
  return <PageClient />
}
