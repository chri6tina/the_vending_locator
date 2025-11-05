import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Lynchburg, VA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Lynchburg, Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Lynchburg, vending machines Lynchburg VA, vending operators Lynchburg, break room vending Lynchburg",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/lynchburg-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Lynchburg, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lynchburg, Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/lynchburg-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Lynchburg, VA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Lynchburg, Virginia business."
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

export default function LynchburgVirginiaServicesPage() {
  return <PageClient />
}
