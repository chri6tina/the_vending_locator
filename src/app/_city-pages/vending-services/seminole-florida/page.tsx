import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Seminole, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Seminole, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Seminole, vending machines Seminole FL, vending operators Seminole, break room vending Seminole",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/seminole-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Seminole, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Seminole, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/seminole-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Seminole, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Seminole, Florida business."
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

export default function SeminoleFloridaServicesPage() {
  return <PageClient />
}
