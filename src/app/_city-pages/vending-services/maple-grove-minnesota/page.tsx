import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Maple Grove, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Maple Grove, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Maple Grove, vending machines Maple Grove MN, vending operators Maple Grove, break room vending Maple Grove",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/maple-grove-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Maple Grove, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Maple Grove, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/maple-grove-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Maple Grove, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Maple Grove, Minnesota business."
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

export default function MapleGroveMinnesotaServicesPage() {
  return <PageClient />
}
