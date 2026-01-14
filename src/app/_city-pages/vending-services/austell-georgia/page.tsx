import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Austell, GA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Austell, Georgia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Austell, vending machines Austell FL, vending operators Austell, break room vending Austell",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/austell-georgia"
  },
  openGraph: {
    title: "Vending Machine Services in Austell, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Austell, Georgia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/austell-georgia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Austell, GA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Austell, Georgia business."
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

export default function AustellGeorgiaServicesPage() {
  return <PageClient />
}
