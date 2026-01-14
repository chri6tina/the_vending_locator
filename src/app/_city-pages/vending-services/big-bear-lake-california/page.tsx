import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Big Bear Lake, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Big Bear Lake, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Big Bear Lake, vending machines Big Bear Lake FL, vending operators Big Bear Lake, break room vending Big Bear Lake",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/big-bear-lake-california"
  },
  openGraph: {
    title: "Vending Machine Services in Big Bear Lake, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Big Bear Lake, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/big-bear-lake-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Big Bear Lake, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Big Bear Lake, California business."
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

export default function BigBearLakeCaliforniaServicesPage() {
  return <PageClient />
}
