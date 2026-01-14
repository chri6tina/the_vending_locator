import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Arlington, MA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Arlington, Massachusetts business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Arlington, vending machines Arlington FL, vending operators Arlington, break room vending Arlington",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/arlington-massachusetts"
  },
  openGraph: {
    title: "Vending Machine Services in Arlington, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Arlington, Massachusetts business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/arlington-massachusetts",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Arlington, MA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Arlington, Massachusetts business."
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

export default function ArlingtonMassachusettsServicesPage() {
  return <PageClient />
}
