import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Williston, ND - Get Free Installation & Service",
  description: "Get professional vending machine services for your Williston, North Dakota business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Williston, vending machines Williston FL, vending operators Williston, break room vending Williston",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/williston"
  },
  openGraph: {
    title: "Vending Machine Services in Williston, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Williston, North Dakota business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/williston",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Williston, ND - Get Free Installation & Service",
    description: "Get professional vending machine services for your Williston, North Dakota business."
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

export default function WillistonNorthDakotaServicesPage() {
  return <PageClient />
}
