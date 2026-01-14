import { Metadata } from 'next'
import PageClient from './pageClient'

export const metadata: Metadata = {
  title: "Vending Machine Services in Rehoboth Beach, DE - Get Free Installation & Service",
  description: "Get professional vending machine services for your Rehoboth Beach, Delaware business. Free installation, stocking, and maintenance. Connect with local operators today.",
  keywords: "vending services Rehoboth Beach, vending machines Rehoboth Beach FL, vending operators Rehoboth Beach, break room vending Rehoboth Beach",
  alternates: {
    canonical: "https://www.thevendinglocator.com/vending-services/rehoboth-beach-delaware"
  },
  openGraph: {
    title: "Vending Machine Services in Rehoboth Beach, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rehoboth Beach, Delaware business. Free installation, stocking, and maintenance.",
    url: "https://www.thevendinglocator.com/vending-services/rehoboth-beach-delaware",
    siteName: "The Vending Locator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending Machine Services in Rehoboth Beach, DE - Get Free Installation & Service",
    description: "Get professional vending machine services for your Rehoboth Beach, Delaware business."
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

export default function RehobothBeachDelawareServicesPage() {
  return <PageClient />
}
