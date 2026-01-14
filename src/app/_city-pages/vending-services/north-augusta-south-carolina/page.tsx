import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Augusta, SC - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Augusta, South Carolina business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Augusta, vending machines North Augusta FL, vending operators North Augusta, break room vending North Augusta",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-augusta-south-carolina"
  },
  openGraph: {
    title: "Vending Machine Services in North Augusta, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Augusta, South Carolina business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-augusta-south-carolina",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Augusta, SC - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Augusta, South Carolina business."
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

export default function NorthAugustaSouthCarolinaServicesPage() {
  return <PageClient />
}
