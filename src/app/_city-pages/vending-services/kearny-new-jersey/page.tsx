import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Kearny, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Kearny, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Kearny, vending machines Kearny FL, vending operators Kearny, break room vending Kearny",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/kearny-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in Kearny, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kearny, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/kearny-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Kearny, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Kearny, New Jersey business."
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

export default function KearnyNewJerseyServicesPage() {
  return <PageClient />
}
