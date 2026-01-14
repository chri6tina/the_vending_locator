import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elk Grove Village, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elk Grove Village, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elk Grove Village, vending machines Elk Grove Village FL, vending operators Elk Grove Village, break room vending Elk Grove Village",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elk-grove-village-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Elk Grove Village, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elk Grove Village, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elk-grove-village-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elk Grove Village, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elk Grove Village, Illinois business."
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

export default function ElkGroveVillageIllinoisServicesPage() {
  return <PageClient />
}
