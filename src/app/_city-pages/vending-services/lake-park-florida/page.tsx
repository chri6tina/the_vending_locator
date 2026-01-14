import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lake Park, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lake Park, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lake Park, vending machines Lake Park FL, vending operators Lake Park, break room vending Lake Park",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lake-park-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Lake Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Park, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lake-park-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lake Park, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lake Park, Florida business."
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

export default function LakeParkFloridaServicesPage() {
  return <PageClient />
}
