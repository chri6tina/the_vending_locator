import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lehigh Acres, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lehigh Acres, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lehigh Acres, vending machines Lehigh Acres FL, vending operators Lehigh Acres, break room vending Lehigh Acres",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lehigh-acres-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Lehigh Acres, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lehigh Acres, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lehigh-acres-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lehigh Acres, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lehigh Acres, Florida business."
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

export default function LehighAcresFloridaServicesPage() {
  return <PageClient />
}
