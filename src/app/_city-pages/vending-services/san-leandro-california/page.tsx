import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in San Leandro, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your San Leandro, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services San Leandro, vending machines San Leandro FL, vending operators San Leandro, break room vending San Leandro",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/san-leandro-california"
  },
  openGraph: {
    title: "Vending Machine Services in San Leandro, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Leandro, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/san-leandro-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in San Leandro, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your San Leandro, California business."
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

export default function SanLeandroCaliforniaServicesPage() {
  return <PageClient />
}
