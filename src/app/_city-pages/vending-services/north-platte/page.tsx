import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Platte, NE - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Platte, Nebraska business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Platte, vending machines North Platte FL, vending operators North Platte, break room vending North Platte",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-platte"
  },
  openGraph: {
    title: "Vending Machine Services in North Platte, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Platte, Nebraska business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-platte",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Platte, NE - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Platte, Nebraska business."
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

export default function NorthPlatteNebraskaServicesPage() {
  return <PageClient />
}
