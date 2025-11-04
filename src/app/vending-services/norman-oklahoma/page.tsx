import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Norman, OK - Get Free Installation & Service",
  description: "Get professional vending machine services for your Norman, Oklahoma business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Norman, vending machines Norman OK, vending operators Norman, break room vending Norman",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/norman-oklahoma"
  },
  openGraph: {
    title: "Vending Machine Services in Norman, OK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Norman, Oklahoma business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/norman-oklahoma",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Norman, OK - Get Free Installation & Service",
    description: "Get professional vending machine services for your Norman, Oklahoma business."
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

export default function NormanOklahomaServicesPage() {
  return <PageClient />
}
