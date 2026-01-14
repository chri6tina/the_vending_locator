import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Port Arthur, TX - Get Free Installation & Service",
  description: "Get professional vending machine services for your Port Arthur, Texas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Port Arthur, vending machines Port Arthur FL, vending operators Port Arthur, break room vending Port Arthur",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/port-arthur-texas"
  },
  openGraph: {
    title: "Vending Machine Services in Port Arthur, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port Arthur, Texas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/port-arthur-texas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Port Arthur, TX - Get Free Installation & Service",
    description: "Get professional vending machine services for your Port Arthur, Texas business."
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

export default function PortArthurTexasServicesPage() {
  return <PageClient />
}
