import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in New Haven, CT - Get Free Installation & Service",
  description: "Get professional vending machine services for your New Haven, Connecticut business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services New Haven, vending machines New Haven CT, vending operators New Haven, break room vending New Haven",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/new-haven-connecticut"
  },
  openGraph: {
    title: "Vending Machine Services in New Haven, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Haven, Connecticut business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/new-haven-connecticut",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in New Haven, CT - Get Free Installation & Service",
    description: "Get professional vending machine services for your New Haven, Connecticut business."
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

export default function NewHavenConnecticutServicesPage() {
  return <PageClient />
}
