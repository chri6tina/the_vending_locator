import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Starkville, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Starkville, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Starkville, vending machines Starkville FL, vending operators Starkville, break room vending Starkville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/starkville-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Starkville, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Starkville, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/starkville-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Starkville, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Starkville, Mississippi business."
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

export default function StarkvilleMississippiServicesPage() {
  return <PageClient />
}
