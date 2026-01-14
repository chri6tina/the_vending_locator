import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Littleton, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Littleton, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Littleton, vending machines Littleton FL, vending operators Littleton, break room vending Littleton",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/littleton-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Littleton, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Littleton, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/littleton-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Littleton, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Littleton, Colorado business."
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

export default function LittletonColoradoServicesPage() {
  return <PageClient />
}
