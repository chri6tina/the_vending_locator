import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Wheat Ridge, CO - Get Free Installation & Service",
  description: "Get professional vending machine services for your Wheat Ridge, Colorado business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Wheat Ridge, vending machines Wheat Ridge FL, vending operators Wheat Ridge, break room vending Wheat Ridge",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/wheat-ridge-colorado"
  },
  openGraph: {
    title: "Vending Machine Services in Wheat Ridge, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wheat Ridge, Colorado business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/wheat-ridge-colorado",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Wheat Ridge, CO - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wheat Ridge, Colorado business."
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

export default function WheatRidgeColoradoServicesPage() {
  return <PageClient />
}
