import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South El Monte, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your South El Monte, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services South El Monte, vending machines South El Monte FL, vending operators South El Monte, break room vending South El Monte",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-el-monte-california"
  },
  openGraph: {
    title: "Vending Machine Services in South El Monte, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your South El Monte, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/south-el-monte-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South El Monte, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your South El Monte, California business."
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

export default function SouthElMonteCaliforniaServicesPage() {
  return <PageClient />
}
