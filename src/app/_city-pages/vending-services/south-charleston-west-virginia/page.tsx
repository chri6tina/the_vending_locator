import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in South Charleston, WV - Get Free Installation & Service",
  description: "Get professional vending machine services for your South Charleston, West Virginia business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services South Charleston, vending machines South Charleston FL, vending operators South Charleston, break room vending South Charleston",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/south-charleston-west-virginia"
  },
  openGraph: {
    title: "Vending Machine Services in South Charleston, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Charleston, West Virginia business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/south-charleston-west-virginia",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in South Charleston, WV - Get Free Installation & Service",
    description: "Get professional vending machine services for your South Charleston, West Virginia business."
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

export default function SouthCharlestonWestVirginiaServicesPage() {
  return <PageClient />
}
