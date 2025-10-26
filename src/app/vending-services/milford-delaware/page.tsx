import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Milford, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Milford, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Milford, vending machines Milford DE, vending operators Milford, break room vending Milford",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/milford-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Milford, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Milford, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/milford-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Milford, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Milford, Delaware business."
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

export default function MilfordDelawareServicesPage() {
  return <PageClient />
}
