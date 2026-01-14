import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Stevens, WA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Stevens, Washington business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Stevens, vending machines Lake Stevens FL, vending operators Lake Stevens, break room vending Lake Stevens",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-stevens-washington"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Stevens, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Stevens, Washington business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-stevens-washington",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Stevens, WA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Stevens, Washington business."
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

export default function LakeStevensWashingtonServicesPage() {
  return <PageClient />
}
