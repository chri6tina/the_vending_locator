import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Vernon Hills, IL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Vernon Hills, Illinois business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Vernon Hills, vending machines Vernon Hills FL, vending operators Vernon Hills, break room vending Vernon Hills",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/vernon-hills-illinois"
  },
  openGraph: {
    title: "Vending Machine Services in Vernon Hills, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vernon Hills, Illinois business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/vernon-hills-illinois",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Vernon Hills, IL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Vernon Hills, Illinois business."
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

export default function VernonHillsIllinoisServicesPage() {
  return <PageClient />
}
