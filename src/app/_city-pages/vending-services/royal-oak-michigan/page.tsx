import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Royal Oak, MI - Get Free Installation & Service",
  description: "Get professional vending machine services for your Royal Oak, Michigan business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Royal Oak, vending machines Royal Oak FL, vending operators Royal Oak, break room vending Royal Oak",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/royal-oak-michigan"
  },
  openGraph: {
    title: "Vending Machine Services in Royal Oak, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Royal Oak, Michigan business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/royal-oak-michigan",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Royal Oak, MI - Get Free Installation & Service",
    description: "Get professional vending machine services for your Royal Oak, Michigan business."
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

export default function RoyalOakMichiganServicesPage() {
  return <PageClient />
}
