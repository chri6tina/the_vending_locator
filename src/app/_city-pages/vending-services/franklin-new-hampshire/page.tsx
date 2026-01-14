import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Franklin, NH - Get Free Installation & Service",
  description: "Get professional vending machine services for your Franklin, New Hampshire business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Franklin, vending machines Franklin FL, vending operators Franklin, break room vending Franklin",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/franklin-new-hampshire"
  },
  openGraph: {
    title: "Vending Machine Services in Franklin, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Franklin, New Hampshire business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/franklin-new-hampshire",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Franklin, NH - Get Free Installation & Service",
    description: "Get professional vending machine services for your Franklin, New Hampshire business."
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

export default function FranklinNewHampshireServicesPage() {
  return <PageClient />
}
