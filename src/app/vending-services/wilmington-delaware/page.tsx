import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Wilmington, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Wilmington, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Wilmington, vending machines Wilmington DE, vending operators Wilmington, break room vending Wilmington",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/wilmington-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Wilmington, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wilmington, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/wilmington-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Wilmington, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Wilmington, Delaware business."
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

export default function WilmingtonDelawareServicesPage() {
  return <PageClient />
}
