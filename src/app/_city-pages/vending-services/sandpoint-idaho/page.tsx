import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Sandpoint, ID - Get Free Installation & Service",
  description: "Get professional vending machine services for your Sandpoint, Idaho business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Sandpoint, vending machines Sandpoint FL, vending operators Sandpoint, break room vending Sandpoint",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/sandpoint-idaho"
  },
  openGraph: {
    title: "Vending Machine Services in Sandpoint, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sandpoint, Idaho business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/sandpoint-idaho",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Sandpoint, ID - Get Free Installation & Service",
    description: "Get professional vending machine services for your Sandpoint, Idaho business."
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

export default function SandpointIdahoServicesPage() {
  return <PageClient />
}
