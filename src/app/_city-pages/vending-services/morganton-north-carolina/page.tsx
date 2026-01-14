import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Morganton, NC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Morganton, North Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Morganton, vending machines Morganton FL, vending operators Morganton, break room vending Morganton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/morganton-north-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Morganton, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morganton, North Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/morganton-north-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Morganton, NC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Morganton, North Carolina business."
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

export default function MorgantonNorthCarolinaServicesPage() {
  return <PageClient />
}
