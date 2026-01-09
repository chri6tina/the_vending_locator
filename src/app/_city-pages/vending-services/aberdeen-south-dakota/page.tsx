import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Aberdeen, SD - Get Free Installation & Service",
  description: "Give your Aberdeen, South Dakota workplace reliable vending machines with free installation, stocking, and maintenance. Connect with vetted local operators today.",
  keywords: "vending services Aberdeen, vending machines Aberdeen SD, vending operators Aberdeen, break room vending Aberdeen",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/aberdeen-south-dakota"
  },
  openGraph: {
    title: "Vending Machine Services in Aberdeen, SD - Get Free Installation & Service",
    description: "Get professional vending machine services for your Aberdeen, South Dakota business. Installation, stocking, and service included.",
    url: "https://www.thevendinglocator.com/vending-services/aberdeen-south-dakota",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Aberdeen, SD - Get Free Installation & Service",
    description: "Connect with trusted vending operators in Aberdeen, South Dakota for free installation and ongoing service."
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

export default function AberdeenSouthDakotaServicesPage() {
  return <PageClient />
}


