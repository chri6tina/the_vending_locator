import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bear, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bear, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bear, vending machines Bear DE, vending operators Bear, break room vending Bear",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bear-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Bear, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bear, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bear-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bear, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bear, Delaware business."
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

export default function BearDelawareServicesPage() {
  return <PageClient />
}
