import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rancho Cordova, CA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rancho Cordova, California business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rancho Cordova, vending machines Rancho Cordova FL, vending operators Rancho Cordova, break room vending Rancho Cordova",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rancho-cordova-california"
  },
  openGraph: {
    title: "Vending Machine Services in Rancho Cordova, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rancho Cordova, California business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rancho-cordova-california",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rancho Cordova, CA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rancho Cordova, California business."
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

export default function RanchoCordovaCaliforniaServicesPage() {
  return <PageClient />
}
