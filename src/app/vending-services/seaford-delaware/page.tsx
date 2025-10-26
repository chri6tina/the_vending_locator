import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Seaford, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Seaford, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Seaford, vending machines Seaford DE, vending operators Seaford, break room vending Seaford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/seaford-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Seaford, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Seaford, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/seaford-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Seaford, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Seaford, Delaware business."
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

export default function SeafordDelawareServicesPage() {
  return <PageClient />
}
