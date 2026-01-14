import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Vineland, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Vineland, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Vineland, vending machines Vineland FL, vending operators Vineland, break room vending Vineland",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/vineland-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in Vineland, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vineland, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/vineland-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Vineland, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vineland, New Jersey business."
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

export default function VinelandNewJerseyServicesPage() {
  return <PageClient />
}
