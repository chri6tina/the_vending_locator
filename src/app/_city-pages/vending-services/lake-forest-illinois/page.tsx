import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Forest, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Forest, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Forest, vending machines Lake Forest FL, vending operators Lake Forest, break room vending Lake Forest",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-forest-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Forest, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Forest, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-forest-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Forest, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Forest, Illinois business."
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

export default function LakeForestIllinoisServicesPage() {
  return <PageClient />
}
