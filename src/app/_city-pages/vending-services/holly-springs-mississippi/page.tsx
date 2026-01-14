import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Holly Springs, MS - Get Free Installation & Service",
  description: "Get professional vending machine services for your Holly Springs, Mississippi business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Holly Springs, vending machines Holly Springs FL, vending operators Holly Springs, break room vending Holly Springs",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/holly-springs-mississippi"
  },
  openGraph: {
    title: "Vending Machine Services in Holly Springs, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Holly Springs, Mississippi business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/holly-springs-mississippi",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Holly Springs, MS - Get Free Installation & Service",
    description: "Get professional vending machine services for your Holly Springs, Mississippi business."
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

export default function HollySpringsMississippiServicesPage() {
  return <PageClient />
}
