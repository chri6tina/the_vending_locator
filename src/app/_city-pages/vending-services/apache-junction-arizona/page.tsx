import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Apache Junction, AZ - Get Free Installation & Service",
  description: "Get professional vending machine services for your Apache Junction, Arizona business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Apache Junction, vending machines Apache Junction FL, vending operators Apache Junction, break room vending Apache Junction",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/apache-junction-arizona"
  },
  openGraph: {
    title: "Vending Machine Services in Apache Junction, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Apache Junction, Arizona business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/apache-junction-arizona",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Apache Junction, AZ - Get Free Installation & Service",
    description: "Get professional vending machine services for your Apache Junction, Arizona business."
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

export default function ApacheJunctionArizonaServicesPage() {
  return <PageClient />
}
