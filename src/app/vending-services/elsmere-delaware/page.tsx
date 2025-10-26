import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Elsmere, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Elsmere, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Elsmere, vending machines Elsmere DE, vending operators Elsmere, break room vending Elsmere",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/elsmere-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Elsmere, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elsmere, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/elsmere-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Elsmere, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Elsmere, Delaware business."
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

export default function ElsmereDelawareServicesPage() {
  return <PageClient />
}
