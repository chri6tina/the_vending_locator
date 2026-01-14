import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Spokane Valley, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Spokane Valley, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Spokane Valley, vending machines Spokane Valley FL, vending operators Spokane Valley, break room vending Spokane Valley",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/spokane-valley-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Spokane Valley, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Spokane Valley, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/spokane-valley-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Spokane Valley, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Spokane Valley, Washington business."
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

export default function SpokaneValleyWashingtonServicesPage() {
  return <PageClient />
}
