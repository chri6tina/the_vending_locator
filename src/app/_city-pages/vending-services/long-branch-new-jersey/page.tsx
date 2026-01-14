import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Long Branch, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Long Branch, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Long Branch, vending machines Long Branch FL, vending operators Long Branch, break room vending Long Branch",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/long-branch-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in Long Branch, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Long Branch, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/long-branch-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Long Branch, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Long Branch, New Jersey business."
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

export default function LongBranchNewJerseyServicesPage() {
  return <PageClient />
}
