import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Ames, IA - Get Free Installation & Service",
  description: "Get professional vending machine services for your Ames, Iowa business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Ames, vending machines Ames IA, vending operators Ames, break room vending Ames",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/ames-iowa"
  },
  openGraph: {
    title: "Vending Machine Services in Ames, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ames, Iowa business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/ames-iowa",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Ames, IA - Get Free Installation & Service",
    description: "Get professional vending machine services for your Ames, Iowa business."
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

export default function AmesIowaServicesPage() {
  return <PageClient />
}
