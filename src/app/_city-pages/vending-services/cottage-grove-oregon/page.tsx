import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Cottage Grove, OR - Get Free Installation & Service",
  description: "Get professional vending machine services for your Cottage Grove, Oregon business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Cottage Grove, vending machines Cottage Grove FL, vending operators Cottage Grove, break room vending Cottage Grove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/cottage-grove-oregon"
  },
  openGraph: {
    title: "Vending Machine Services in Cottage Grove, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cottage Grove, Oregon business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/cottage-grove-oregon",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Cottage Grove, OR - Get Free Installation & Service",
    description: "Get professional vending machine services for your Cottage Grove, Oregon business."
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

export default function CottageGroveOregonServicesPage() {
  return <PageClient />
}
