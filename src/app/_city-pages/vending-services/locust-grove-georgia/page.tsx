import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Locust Grove, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Locust Grove, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Locust Grove, vending machines Locust Grove FL, vending operators Locust Grove, break room vending Locust Grove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/locust-grove-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Locust Grove, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Locust Grove, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/locust-grove-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Locust Grove, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Locust Grove, Georgia business."
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

export default function LocustGroveGeorgiaServicesPage() {
  return <PageClient />
}
