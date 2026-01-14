import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in West Orange, NJ - Get Free Installation & Service",
  description: "Get professional vending machine services for your West Orange, New Jersey business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services West Orange, vending machines West Orange FL, vending operators West Orange, break room vending West Orange",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/west-orange-new-jersey"
  },
  openGraph: {
    title: "Vending Machine Services in West Orange, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Orange, New Jersey business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/west-orange-new-jersey",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in West Orange, NJ - Get Free Installation & Service",
    description: "Get professional vending machine services for your West Orange, New Jersey business."
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

export default function WestOrangeNewJerseyServicesPage() {
  return <PageClient />
}
