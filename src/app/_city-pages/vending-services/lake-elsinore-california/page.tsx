import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Elsinore, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Elsinore, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Elsinore, vending machines Lake Elsinore FL, vending operators Lake Elsinore, break room vending Lake Elsinore",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-elsinore-california"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Elsinore, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Elsinore, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-elsinore-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Elsinore, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Elsinore, California business."
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

export default function LakeElsinoreCaliforniaServicesPage() {
  return <PageClient />
}
