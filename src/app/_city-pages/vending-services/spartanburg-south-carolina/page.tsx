import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Spartanburg, SC - Get Free Installation & Service",
  description: "Get professional vending machine services for your Spartanburg, South Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Spartanburg, vending machines Spartanburg SC, vending operators Spartanburg, break room vending Spartanburg",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/spartanburg-south-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in Spartanburg, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Spartanburg, South Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/spartanburg-south-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Spartanburg, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your Spartanburg, South Carolina business."
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

export default function SpartanburgSouthCarolinaServicesPage() {
  return <PageClient />
}
