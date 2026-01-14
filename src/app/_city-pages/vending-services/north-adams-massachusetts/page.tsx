import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Adams, MA - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Adams, Massachusetts business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Adams, vending machines North Adams FL, vending operators North Adams, break room vending North Adams",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-adams-massachusetts"
  },
  openGraph: {
    title: "Vending Machine Services in North Adams, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Adams, Massachusetts business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-adams-massachusetts",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Adams, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Adams, Massachusetts business."
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

export default function NorthAdamsMassachusettsServicesPage() {
  return <PageClient />
}
