import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Mobile, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Mobile, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Mobile, vending machines Mobile AL, vending operators Mobile, break room vending Mobile",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/mobile-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Mobile, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mobile, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/mobile-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Mobile, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Mobile, Alabama business."
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

export default function MobileAlabamaServicesPage() {
  return <PageClient />
}
