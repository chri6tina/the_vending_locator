import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Grand Island, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Grand Island, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Grand Island, vending machines Grand Island NE, vending operators Grand Island, break room vending Grand Island",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/grand-island-nebraska"
  },
  openGraph: {
    title: "Vending Machine Services in Grand Island, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Grand Island, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/grand-island-nebraska",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Grand Island, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Grand Island, Nebraska business."
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

export default function BocaRatonNebraskaServicesPage() {
  return <PageClient />
}
