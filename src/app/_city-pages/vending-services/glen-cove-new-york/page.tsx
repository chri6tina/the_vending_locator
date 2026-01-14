import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Glen Cove, NY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Glen Cove, New York business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Glen Cove, vending machines Glen Cove FL, vending operators Glen Cove, break room vending Glen Cove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/glen-cove-new-york"
  },
  openGraph: {
    title: "Vending Machine Services in Glen Cove, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Cove, New York business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/glen-cove-new-york",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Glen Cove, NY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Glen Cove, New York business."
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

export default function GlenCoveNewYorkServicesPage() {
  return <PageClient />
}
