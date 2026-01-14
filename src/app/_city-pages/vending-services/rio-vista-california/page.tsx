import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rio Vista, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rio Vista, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rio Vista, vending machines Rio Vista FL, vending operators Rio Vista, break room vending Rio Vista",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rio-vista-california"
  },
  openGraph: {
    title: "Vending Machine Services in Rio Vista, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rio Vista, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rio-vista-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rio Vista, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rio Vista, California business."
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

export default function RioVistaCaliforniaServicesPage() {
  return <PageClient />
}
