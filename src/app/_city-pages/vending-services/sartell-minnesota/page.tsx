import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sartell, MN - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sartell, Minnesota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sartell, vending machines Sartell FL, vending operators Sartell, break room vending Sartell",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sartell-minnesota"
  },
  openGraph: {
    title: "Vending Machine Services in Sartell, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sartell, Minnesota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sartell-minnesota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sartell, MN - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sartell, Minnesota business."
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

export default function SartellMinnesotaServicesPage() {
  return <PageClient />
}
