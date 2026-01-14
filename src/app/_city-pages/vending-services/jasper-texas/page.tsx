import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Jasper, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Jasper, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Jasper, vending machines Jasper FL, vending operators Jasper, break room vending Jasper",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/jasper-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Jasper, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jasper, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/jasper-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Jasper, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Jasper, Texas business."
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

export default function JasperTexasServicesPage() {
  return <PageClient />
}
