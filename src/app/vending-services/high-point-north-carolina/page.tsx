import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in High Point, NC - Get Free Installation & Service",
  description: "Get professional vending machine services for your High Point, North Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services High Point, vending machines High Point NC, vending operators High Point, break room vending High Point",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/high-point-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in High Point, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your High Point, North Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/high-point-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in High Point, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your High Point, North Carolina business."
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

export default function HighPointNorthCarolinaServicesPage() {
  return <PageClient />
}
