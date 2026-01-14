import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Libertyville, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Libertyville, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Libertyville, vending machines Libertyville FL, vending operators Libertyville, break room vending Libertyville",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/libertyville-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Libertyville, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Libertyville, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/libertyville-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Libertyville, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Libertyville, Illinois business."
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

export default function LibertyvilleIllinoisServicesPage() {
  return <PageClient />
}
