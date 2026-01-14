import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Haven, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Haven, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Haven, vending machines North Haven FL, vending operators North Haven, break room vending North Haven",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-haven-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in North Haven, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Haven, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-haven-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Haven, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Haven, Connecticut business."
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

export default function NorthHavenConnecticutServicesPage() {
  return <PageClient />
}
