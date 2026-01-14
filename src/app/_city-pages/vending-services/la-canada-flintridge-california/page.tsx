import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in La Canada Flintridge, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your La Canada Flintridge, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services La Canada Flintridge, vending machines La Canada Flintridge FL, vending operators La Canada Flintridge, break room vending La Canada Flintridge",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/la-canada-flintridge-california"
  },
  openGraph: {
    title: "Vending Machine Services in La Canada Flintridge, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your La Canada Flintridge, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/la-canada-flintridge-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in La Canada Flintridge, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your La Canada Flintridge, California business."
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

export default function LaCanadaFlintridgeCaliforniaServicesPage() {
  return <PageClient />
}
