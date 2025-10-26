import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Montgomery, AL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Montgomery, Alabama business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Montgomery, vending machines Montgomery AL, vending operators Montgomery, break room vending Montgomery",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/montgomery-alabama"
  },
  openGraph: {
    title: "Vending Machine Services in Montgomery, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Montgomery, Alabama business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/montgomery-alabama",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Montgomery, AL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Montgomery, Alabama business."
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

export default function MontgomeryAlabamaServicesPage() {
  return <PageClient />
}
