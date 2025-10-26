import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Auburn, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Auburn, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Auburn, vending machines Auburn AL, vending operators Auburn, break room vending Auburn",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/auburn-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Auburn, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Auburn, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/auburn-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Auburn, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Auburn, Alabama business."
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

export default function AuburnAlabamaServicesPage() {
  return <PageClient />
}
