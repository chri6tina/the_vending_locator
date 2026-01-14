import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Santa Monica, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Santa Monica, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Santa Monica, vending machines Santa Monica FL, vending operators Santa Monica, break room vending Santa Monica",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/santa-monica-california"
  },
  openGraph: {
    title: "Vending Machine Services in Santa Monica, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Monica, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/santa-monica-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Santa Monica, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Santa Monica, California business."
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

export default function SantaMonicaCaliforniaServicesPage() {
  return <PageClient />
}
