import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Scott, ME - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Scott, Maine business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Scott, vending machines Fort Scott FL, vending operators Fort Scott, break room vending Fort Scott",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-scott-kansas"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Scott, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Scott, Maine business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-scott-kansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Scott, ME - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Scott, Maine business."
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

export default function FortScottMaineServicesPage() {
  return <PageClient />
}
