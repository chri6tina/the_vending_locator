import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in North Little Rock, AR - Get Free Installation & Service",
  description: "Get professional vending machine services for your North Little Rock, Arkansas business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services North Little Rock, vending machines North Little Rock AR, vending operators North Little Rock, break room vending North Little Rock",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/north-little-rock-arkansas"
  },
  openGraph: {
    title: "Vending Machine Services in North Little Rock, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Little Rock, Arkansas business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/north-little-rock-arkansas",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in North Little Rock, AR - Get Free Installation & Service",
    description: "Get professional vending machine services for your North Little Rock, Arkansas business."
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

export default function NorthLittleRockArkansasServicesPage() {
  return <PageClient />
}
