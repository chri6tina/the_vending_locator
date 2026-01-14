import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Woburn, MA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Woburn, Massachusetts business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Woburn, vending machines Woburn FL, vending operators Woburn, break room vending Woburn",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/woburn-massachusetts"
  },
  openGraph: {
    title: "Vending Machine Services in Woburn, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woburn, Massachusetts business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/woburn-massachusetts",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Woburn, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Woburn, Massachusetts business."
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

export default function WoburnMassachusettsServicesPage() {
  return <PageClient />
}
