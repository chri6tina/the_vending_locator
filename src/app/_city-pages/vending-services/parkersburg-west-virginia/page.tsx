import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Parkersburg, WV - Get Free Installation & Service",
  description: "Get professional vending machine services for your Parkersburg, West Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Parkersburg, vending machines Parkersburg FL, vending operators Parkersburg, break room vending Parkersburg",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/parkersburg-west-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in Parkersburg, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Parkersburg, West Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/parkersburg-west-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Parkersburg, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your Parkersburg, West Virginia business."
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

export default function ParkersburgWestVirginiaServicesPage() {
  return <PageClient />
}
