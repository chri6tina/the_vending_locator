import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Oak Harbor, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Oak Harbor, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Oak Harbor, vending machines Oak Harbor FL, vending operators Oak Harbor, break room vending Oak Harbor",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/oak-harbor-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Oak Harbor, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Oak Harbor, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/oak-harbor-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Oak Harbor, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Oak Harbor, Washington business."
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

export default function OakHarborWashingtonServicesPage() {
  return <PageClient />
}
