import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Fort Lauderdale, FL - Get Free Installation & Service",
  description: "Get professional vending machine services for your Fort Lauderdale, Florida business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Fort Lauderdale, vending machines Fort Lauderdale FL, vending operators Fort Lauderdale, break room vending Fort Lauderdale",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/fort-lauderdale-florida"
  },
  openGraph: {
    title: "Vending Machine Services in Fort Lauderdale, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Lauderdale, Florida business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/fort-lauderdale-florida",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Fort Lauderdale, FL - Get Free Installation & Service",
    description: "Get professional vending machine services for your Fort Lauderdale, Florida business."
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

export default function FortLauderdaleServicesPage() {
  return <PageClient />
}
