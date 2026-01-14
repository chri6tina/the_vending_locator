import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Bardstown, KY - Get Free Installation & Service",
  description: "Get professional vending machine services for your Bardstown, Kentucky business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Bardstown, vending machines Bardstown FL, vending operators Bardstown, break room vending Bardstown",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/bardstown-kentucky"
  },
  openGraph: {
    title: "Vending Machine Services in Bardstown, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bardstown, Kentucky business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/bardstown-kentucky",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Bardstown, KY - Get Free Installation & Service",
    description: "Get professional vending machine services for your Bardstown, Kentucky business."
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

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BardstownKentuckyServicesPage() {
  return <PageClient />
}
